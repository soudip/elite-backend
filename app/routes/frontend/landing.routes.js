const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const landingController = require('webservice/frontend/landing.controller');


/**
 * @api {get} /frontend/landing Landing Page
 * @apiVersion 1.0.0
 * @apiGroup Landing
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "peace_of_mind": [
            {
                "_id": "5eeccd45fb667313fdecbe49",
                "title": "test here",
                "description": "test decsription",
                "image": "image_1592577346723_download.jpeg",
                "status": "Active",
                "isDeleted": false,
                "createdAt": "2020-06-19T14:35:49.355Z",
                "__v": 0
            }
        ],
        "home_education_center": [
            {
                "_id": "5ee8ec34262953138ff16613",
                "title": "Test",
                "description": "Test description",
                "image": "image_1592323123104_download.jpeg",
                "status": "Active",
                "isDeleted": false,
                "createdAt": "2020-06-16T15:58:44.707Z",
                "__v": 0
            },
            {
                "_id": "5ee8ec6c262953138ff16614",
                "title": "Test1",
                "description": "Test description1",
                "image": "image_1592323341869_wallpaper.wiki-4k-Wallpapers-Screen-Download-PIC-WPE0013365.jpg",
                "status": "Active",
                "isDeleted": false,
                "createdAt": "2020-06-16T15:59:40.223Z",
                "__v": 0
            }
        ]
    },
    "message": "Landing content fetched Successfully"
}
*/
namedRouter.get("forntend.landing.page", '/landing',landingController.getContent);


module.exports = router;