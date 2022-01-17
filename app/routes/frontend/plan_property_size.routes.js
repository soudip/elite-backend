const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planPropertySizeController = require('webservice/frontend/plan_property_size.controller');

/**
 * @api {get} /frontend/plan-property-size/list Property Size list
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Size
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f23f300e58e393af84da430",
            "title": "Up to 2,500 Square Feet",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-07-31T10:31:28.148Z",
            "__v": 0
        }
    ],
    "message": "Plan Property Size fetched Successfully"
}
*/

namedRouter.get("frontend.planProperty.size.list", '/plan-property-size/list',planPropertySizeController.list);


/**
 * @api {get} /frontend/plan-property-size/:id Plan Property Size details
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Size
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f23f300e58e393af84da430",
        "title": "Up to 2,500 Square Feet",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan Property Size fetched Successfully"
}
*/

namedRouter.get("frontend.planProperty.size.details", '/plan-property-size/:id',planPropertySizeController.details)

module.exports = router;