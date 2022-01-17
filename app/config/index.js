const nodemailer = require('nodemailer');
const path = require('path');
const isProd = process.env.NODE_ENV === 'prod';

module.exports = {
    jwtSecret: "MyS3cr3tK3Y",
    jwtSession: {
        session: false
    },
    PAGINATION_PERPAGE: 10,
    isProd,
    getPort: process.env.PORT || 1415,
    getBackendApiFolderName: process.env.ADMIN_API_FOLDER_NAME || 'admin',
    getFrontendApiFolderName: process.env.FRONTEND_API_FOLDER_NAME || 'frontend',
    nonSecurePaths: ['/vehicleOwner/reset-password', '/vehicleOwner/login', '/vehicleOwner/store', '/vehicleOwner/verify', '/vehicleOwner/resendOtp'],
    transporter: nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    }),
    STRIPE_SK: process.env.STRIPE_SK,
    ORDER_RECEIVE_MAIL: 'test@yopmail.com, ron@yopmail.com',
    TWILIO_FROM_NUMBER : '+15169167066',
    aws: {
        accessKeyId: 'AKIA6BPIHR3LGLKSKKBO',
        secretAccessKey: '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',
        region: "eu-west-2",
        bucket: "ellite"
    },

}