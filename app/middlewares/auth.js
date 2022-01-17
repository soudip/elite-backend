const passport = require("passport");
const passportJWT = require("passport-jwt");
const users = require('user/models/user.model');
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromHeader('token')
};

module.exports = () => {
    const strategy = new Strategy(params, (payload, done) => {
        users.findById(payload.id).populate({
            'path': 'role',
            'select': 'role title'
        }).exec((err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        
        // This is for webservice jwt token check //
        authenticateAPI: (req, res, next) => {
            // check for nonsecure path like login //
            const nonSecurePaths = config.nonSecurePaths;
            if (_.contains(nonSecurePaths, req.path)) return next();
            // check for nonsecure path like login //
            passport.authenticate("jwt", config.jwtSession, (err, user) => {
                if (err) {
                    res.send({
                        status: 500,
                        auth: false,
                        message: 'Failed to authenticate token.'
                    });
                }
                if (!user) {
                    res.send({
                        status: 500,
                        auth: false,
                        message: "There was a problem finding the user."
                    });
                }
                if (user) {
                    req.user = user;
                    return next();
                }
            })(req, res, next);
        },
        
    };
};