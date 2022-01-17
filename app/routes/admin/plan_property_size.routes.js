const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planPropertySizeController = require('webservice/admin/plan_property_size.controller');

namedRouter.all('/plan-property-size*', auth.authenticateAPI);
/**
 * @api {get} /admin/plan-property-size/list Property Size list
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

namedRouter.get("admin.planProperty.size.list", '/plan-property-size/list',planPropertySizeController.list);


/**
 * @api {get} /admin/plan-property-size/:id Plan Property Size details
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

namedRouter.get("admin.planProperty.size.details", '/plan-property-size/:id',planPropertySizeController.details)

/**
 * @api {post} /admin/plan-property-size/add Property Size Add
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Size
 * @apiParam {string} title

 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Up to 2,500 Square Feet",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f23f300e58e393af84da430",
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan Property Size Created successfully"
}
*/
namedRouter.post("admin.planProperty.size.add", '/plan-property-size/add', request_param.any(),planPropertySizeController.add)



/**
 * @api {put} /admin/plan-property-size/update Property Size Update
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Size
 * @apiParam {string} plan_property_size_id Id
 * @apiParam {string} title
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Up to 2,500 Square Feet",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f23f300e58e393af84da430",
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan Property Size Updated Successfully"
}
*/
namedRouter.put("admin.planProperty.size.update", '/plan-property-size/update', request_param.any(),planPropertySizeController.update)



/**
 * @api {post} /admin/plan-property-size/delete Plan Property Size Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Size
 * @apiParam {string} plan_property_size_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Up to 2,500 Square Feet",
        "status": "Active",
        "isDeleted": true,
        "_id": "5f23efe73fc11c398948156e",
        "createdAt": "2020-07-31T10:18:15.895Z",
        "__v": 0
    },
    "message": "Plan Property Size Deleted Successfully"
}
*/

namedRouter.post("admin.planProperty.size.delete", '/plan-property-size/delete', request_param.any(),planPropertySizeController.delete)


module.exports = router;