const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const userController = require('webservice/admin/user.controller');

const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        if (file.fieldname === 'profile_pic') {
            callback(null, "./public/uploads/user/")
        }
        else {
            callback(null, "./public/uploads");
        }
    },
    filename: (req, file, callback) => {
        // callback(null, Date.now() + "_" + file.originalname.replace(/\s/g, '_'));
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'));
    }
});
const uploadFile = multer({
    storage: Storage
});
const request_param = multer();


/**
 * @api {post} /admin/user/signin User SignIn
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiParam {string} email Email
 * @apiParam {string} password Password
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "first_name": "Super",
        "last_name": "Admin",
        "phone": "1234567",
        "address": "",
        "email": "admin@admin.com",
        "password": "$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.",
        "profile_image": "",
        "isDeleted": false,
        "isActive": true,
        "_id": "5ea30a50c7d64cd82be64a97",
        "full_name": "Super Admin",
        "role": {
            "desc": "Administrator of the application.",
            "_id": "5ea309dbc7d64cd82be647d3",
            "roleDisplayName": "Administrator",
            "role": "admin",
            "id": "5ea309dbc7d64cd82be647d3"
        },
        "deviceToken": "",
        "deviceType": "",
        "updatedAt": "2020-06-02T10:05:24.600Z"
    },
    "isLoggedIn": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYTMwYTUwYzdkNjRjZDgyYmU2NGE5NyIsImlhdCI6MTU5MTA5MjQ4NSwiZXhwIjoxNTkzNjg0NDg1fQ.7aTlI-mROtRN_J0XY6RbDFrBPQref3hCDct7L9FMaLs",
    "message": "Login successful."
}
*/
namedRouter.post("admin.user.signin", '/user/signin', request_param.any(),userController.signin);


/**
 * @api {post} /admin/user/forgotpassword Forgot Password
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiParam email User's account Email
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "first_name": "Super",
        "last_name": "Admin",
        "phone": "1234567",
        "address": "",
        "email": "admin@admin.com",
        "password": "$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.",
        "profile_image": "",
        "isDeleted": false,
        "isActive": true,
        "_id": "5ea30a50c7d64cd82be64a97",
        "full_name": "Super Admin",
        "role": "5ea309dbc7d64cd82be647d3",
        "deviceToken": "",
        "deviceType": "",
        "updatedAt": "2020-06-02T10:05:24.600Z"
    },
    "message": "A link to reset your password sent to your registered email"
}
*/
namedRouter.post("admin.admin.forgotpassword", '/user/forgotpassword', request_param.any(),userController.forgotPassword);


namedRouter.all('/user*', auth.authenticateAPI);

/**
 * @api {get} /admin/user/logout User Logout
 * @apiGroup User
 * @apiHeader x-access-token User's Access Token
 * @apiSuccessExample {json} Success
 *{
    "status": 200,
    "data": [],
    "isLoggedIn": false,
    "message": "Logout successfully"
}
*/
namedRouter.get("admin.user.logout", '/user/logout',userController.logout);



namedRouter.all('/user*', auth.authenticateAPI);

/**
 * @api {GET} /admin/user/getprofile User's Profile
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiHeader x-access-token User's Access token
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "first_name": "Super",
        "last_name": "Admin",
        "phone": "1234567",
        "address": "",
        "email": "admin@admin.com",
        "password": "$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.",
        "profile_image": "",
        "isDeleted": false,
        "isActive": true,
        "_id": "5ea30a50c7d64cd82be64a97",
        "full_name": "Super Admin",
        "role": "5ea309dbc7d64cd82be647d3",
        "updatedAt": "2020-06-02T10:05:24.600Z"
    },
    "message": "Profile Info fetched Successfully"
}
*/

namedRouter.get("admin.user.profile", '/user/profile',userController.getProfile);


/**
 * @api {post} /admin/user/profile/update User profile update
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiHeader x-access-token User's Access Token
 * @apiParam first_name First name
 * @apiParam last_name Last name
 * @apiParam email Email
 * @apiparam phone Phone Number
 * @apiparam address Address
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "first_name": "Johana",
        "last_name": "Black",
        "full_name": "Johana Black",
        "phone": "7894561236",
        "email": "johan@yopmail.com",
        "password": "$2a$08$POxN7JXDFAT7bkxkhaoQDebUT4iMPV3kcPRqxr9.Vh2lQ9vEpqj..",
        "profile_pic": "profile_pic_1586250554891_img3.jpg",
        "deviceToken": "123456789",
        "deviceType": "android",
        "verification_code": null,
        "social_id": "",
        "register_type": "normal",
        "isVerified": false,
        "isDeleted": false,
        "email_notification": true,
        "push_notification": true,
        "isActive": true,
        "_id": "5e871514d982311378cf3c6c",
        "role": "5e81bf47c7d64cd82b5348f1",
        "createdAt": "2020-04-03T10:51:00.684Z",
        "updatedAt": "2020-04-07T09:09:14.970Z"
    },
    "message": "User details updated successfully"
}
*/

namedRouter.post("admin.user.profileUpdate", '/user/profile/update', uploadFile.any(),userController.updateProfile);


/**
 * @api {post} /admin/user/changepassword Change User Password
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiHeader x-access-token User's Access Token
 * @apiParam old_password User's Current password
 * @apiparam new_password New password
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "first_name": "Super",
        "last_name": "Admin",
        "phone": "1234567",
        "address": "",
        "email": "admin@admin.com",
        "password": "$2a$08$kC4EndF7ghRHxaMgrnk8HuNF0ezhUBnu5XmV9gmfcCym6suyV/lf.",
        "profile_image": "",
        "isDeleted": false,
        "isActive": true,
        "_id": "5ea30a50c7d64cd82be64a97",
        "full_name": "Super Admin",
        "role": "5ea309dbc7d64cd82be647d3",
        "updatedAt": "2020-06-02T10:05:24.600Z"
    },
    "message": "Password Changed Successfully"
}
*/
namedRouter.post("admin.user.changePassword", '/user/changePassword', request_param.any(),userController.changePassword);

// Export the express.Router() instance
module.exports = router;