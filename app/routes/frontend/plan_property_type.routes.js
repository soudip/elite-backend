const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planPropertyTypeController = require('webservice/frontend/plan_property_type.controller');

/**
 * @api {get} /frontend/plan-property-type/list Plan Property Type list
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Type
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f23f300e58e393af84da430",
            "title": "Duplex",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-07-31T10:31:28.148Z",
            "__v": 0
        }
    ],
    "message": "Plan Property Type fetched Successfully"
}
*/

namedRouter.get("frontend.planProperty.type.list", '/plan-property-type/list',planPropertyTypeController.list);


/**
 * @api {get} /frontend/plan-property-type/:id Plan Property Type details
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Type
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f23f300e58e393af84da430",
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan Property Type fetched Successfully"
}
*/

namedRouter.get("frontend.planProperty.type.details", '/plan-property-type/:id',planPropertyTypeController.details)

module.exports = router;