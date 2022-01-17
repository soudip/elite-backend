const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const stateController = require('webservice/frontend/state.controller');

/**
 * @api {get} /frontend/state/list State list
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "AB",
            "type": "cover",
            "orderNumber": 1,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
        },
        {
            "_id": "5ed783f654f8b50e2170bb1a",
            "title": "CD",
            "type": "processing",
            "orderNumber": 2,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:05:26.558Z",
            "__v": 0
        }
    ],
    "message": "State fetched Successfully"
}
*/

namedRouter.get("frontend.state.list", '/state/list',stateController.list);


/**
 * @api {get} /frontend/state/:id State details
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed783c7a3ffce0e11723ba5",
        "title": "AB",
        "type": "cover",
        "orderNumber": 1,
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "State fetched Successfully"
}
*/

namedRouter.get("frontend.state.details", '/state/:id',stateController.details)

/**
 * @api {get} /frontend/state/article/:id State article details
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f2191a2e55bb9194713cc9b",
            "section": "Section One",
            "title": "State09",
            "banner_image": "banner_image_1596040051101_104672789_3195331357223749_2125580534023549552_n.jpg",
            "image_one": "",
            "image_two": "",
            "content_one": "",
            "content_two": "",
            "content_three": "",
            "status": "Active",
            "isDeleted": false,
            "state_id": "5f2191a1e55bb9194713cc9a",
            "createdAt": "2020-07-29T15:11:30.070Z",
            "__v": 0
        },
        {
            "_id": "5f2191a2e55bb9194713cc9c",
            "section": "Section Two",
            "title": "",
            "banner_image": "",
            "image_one": "",
            "image_two": "",
            "content_one": "",
            "content_two": "",
            "content_three": "",
            "status": "Active",
            "isDeleted": false,
            "state_id": "5f2191a1e55bb9194713cc9a",
            "createdAt": "2020-07-29T15:11:30.070Z",
            "__v": 0
        },
        {
            "_id": "5f2191a2e55bb9194713cc9d",
            "section": "Section Three",
            "title": "",
            "banner_image": "",
            "image_one": "",
            "image_two": "",
            "content_one": "",
            "content_two": "",
            "content_three": "",
            "status": "Active",
            "isDeleted": false,
            "state_id": "5f2191a1e55bb9194713cc9a",
            "createdAt": "2020-07-29T15:11:30.070Z",
            "__v": 0
        },
        {
            "_id": "5f2191a2e55bb9194713cc9e",
            "section": "Section Four",
            "title": "",
            "banner_image": "",
            "image_one": "",
            "image_two": "",
            "content_one": "",
            "content_two": "",
            "content_three": "",
            "status": "Active",
            "isDeleted": false,
            "state_id": "5f2191a1e55bb9194713cc9a",
            "createdAt": "2020-07-29T15:11:30.070Z",
            "__v": 0
        },
        {
            "_id": "5f2191a2e55bb9194713cc9f",
            "section": "Section Five",
            "title": "",
            "banner_image": "",
            "image_one": "",
            "image_two": "",
            "content_one": "",
            "content_two": "",
            "content_three": "",
            "status": "Active",
            "isDeleted": false,
            "state_id": "5f2191a1e55bb9194713cc9a",
            "createdAt": "2020-07-29T15:11:30.070Z",
            "__v": 0
        },
        {
            "_id": "5f2191a2e55bb9194713cca0",
            "section": "Section Six",
            "title": "",
            "banner_image": "",
            "image_one": "",
            "image_two": "",
            "content_one": "",
            "content_two": "",
            "content_three": "",
            "status": "Active",
            "isDeleted": false,
            "state_id": "5f2191a1e55bb9194713cc9a",
            "createdAt": "2020-07-29T15:11:30.070Z",
            "__v": 0
        }
    ],
    "state": {
        "_id": "5f2191a1e55bb9194713cc9a",
        "title": "State09",
        "abbreviation": "EF"
    },
    "message": "State article fetched Successfully"
}
*/

namedRouter.get("frontend.state.article.details", '/state/article/:id',stateController.article)

/**
 * @api {get} /frontend/state-image-list State Image list
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "AB",
            "type": "cover",
            "orderNumber": 1,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
        },
        {
            "_id": "5ed783f654f8b50e2170bb1a",
            "title": "CD",
            "type": "processing",
            "orderNumber": 2,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:05:26.558Z",
            "__v": 0
        }
    ],
    "message": "State fetched Successfully"
}
*/

namedRouter.get("frontend.state.image.list", '/state-image-list',stateController.articleImage);

module.exports = router;