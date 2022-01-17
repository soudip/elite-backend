/***********************************************/
/*********** Inclusion of all modules **********/
/***********************************************/
const {join,resolve} = require('path');
const http = require('http');
const {promisify} = require('util');
const {stat,readdir} = require('fs');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const engine = require('ejs-locals');
const flash = require('connect-flash');
const routeLabel = require('route-label');
const nodemailer = require('nodemailer');
const aws = require('aws-sdk');
const app = express();
const namedRouter = routeLabel(app);

// Import module in global scope
require('app-module-path').addPath(__dirname + '/app/modules');
_ = require("underscore");
require('dotenv').config();

// custom modules will goes here
config = require(resolve(join(__dirname, 'app/config', 'index')));
auth = require(resolve(join(__dirname, 'app/middlewares', 'auth')))();
utils = require(resolve(join(__dirname, 'app/helpers', 'utils')));
mailer = require(resolve(join(__dirname, 'app/helpers', 'mailer')));


// express locals instance
app.locals.moment = require('moment');

/*****************************************************/
/********* Functions + variable declaration *********/
/***************************************************/

const isProd = config.isProd;
global.generateUrl = generateUrl = (route_name, route_param = {}) => namedRouter.urlFor(route_name, route_param);
const getPort = config.getPort;
const getBackendApiFolderName = config.getBackendApiFolderName;
const getFrontendApiFolderName = config.getFrontendApiFolderName;
global.BASE_URL = `http://${process.env.HOST}:${getPort}`;
global.UPLOAD_URL = `${global.BASE_URL}/uploads`;
global.__basedir = __dirname;
global.__UploadBasedir = __dirname+'/public/uploads';

async function isDirectory(f) {
    return (await promisify(stat)(f)).isDirectory();
}
async function _readdir(filePath) {
    const files = await Promise.all((await promisify(readdir)(filePath)).map(async f => {
        const fullPath = join(filePath, f);
        return (await isDirectory(fullPath)) ? _readdir(fullPath) : fullPath;
    }))

    return _.flatten(files);
}

async function readDirectory(path) {
        readdir(path, function (err, items) {
    });
}

/***************  Mail Configuration ***************/
transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    }
});
/***************  AWS Configuration ***************/
aws.config.update(config.aws);
s3 = new aws.S3();
/******************** Middleware registrations *******************/
app.use(cors());
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({limit: "50mb",extended: true,parameterLimit: 50000})); // get information from html forms
app.use(bodyParser.json({limit: "50mb"}));
app.use(flash());
app.use(session({secret: 'delivery@&beverage@#',resave: true,saveUninitialized: true}));
app.use(express.static('./public'));

app.set('views', [join(__dirname, './app/views'), join(__dirname, './app/modules')]);
app.engine('ejs', engine);
app.set('view engine', 'ejs'); // set up ejs for templating

app.use((req, res, next) => {
    // backbutton prevent
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    // Inclide main view path
    res.locals.messages = req.flash();
    auth = require(resolve(join(__dirname, 'app/middlewares', "auth")))(req, res, next);
    app.use(auth.initialize());
    // This is for admin end
    if (req.session.token && req.session.token != null) {
        req.headers['token'] = req.session.token;
    }
    // This is for webservice end
    if (req.headers['x-access-token'] != null) {
        req.headers['token'] = req.headers['x-access-token'];
    }
    next();
});


/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
    const port = getPort;
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(0);
            break;
        default:
            throw error;
    }
}

(async () => {
    try {
        await require(resolve(join(__dirname, 'app/config', 'database')))();
        /******************* Routes (ADMIN API) ************/
        const apiAdminFiles = await _readdir(`./app/routes/${getBackendApiFolderName}`);
        apiAdminFiles.forEach(file => {
        if (!file && file[0] == '.') return;
            namedRouter.use('', `/${getBackendApiFolderName}`, require(join(__dirname, file)));
        });

         /******************* Routes (FRONTEND API) ************/
         const apiFrontFiles = await _readdir(`./app/routes/${getFrontendApiFolderName}`);
         apiFrontFiles.forEach(file => {
         if (!file && file[0] == '.') return;
             namedRouter.use('', `/${getFrontendApiFolderName}`, require(join(__dirname, file)));
         });

        /*********************************************/

        namedRouter.buildRouteTable();
        if (!isProd && process.env.SHOW_NAMED_ROUTES === 'true') {
            routeList = namedRouter.getRouteTable();
        }
       // console.log('Route table:', namedRouter.getRouteTable());
        /******************* Service Launch *****************/
        const server = http.createServer(app);
        server.listen(getPort);
        server.on('error', onError);
        console.log(`Elite-Erp is running on ${(global.BASE_URL && global.BASE_URL !== '') ? global.BASE_URL : `http://${process.env.HOST}:${getPort}`}`);
    } catch (error) {
        console.error(error);
    }
})();

module.exports = app;