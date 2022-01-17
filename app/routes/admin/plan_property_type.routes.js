const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planPropertyTypeController = require('webservice/admin/plan_property_type.controller');

namedRouter.all('/plan-property-type*', auth.authenticateAPI);
/**
 * @api {get} /admin/plan-property-type/list Property Type list
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

namedRouter.get("admin.planProperty.type.list", '/plan-property-type/list',planPropertyTypeController.list);


/**
 * @api {get} /admin/plan-property-type/:id Plan Property Type details
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

namedRouter.get("admin.planProperty.type.details", '/plan-property-type/:id',planPropertyTypeController.details)

/**
 * @api {post} /admin/plan-property-type/add Property Type Add
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Type
 * @apiParam {string} title

 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f23f300e58e393af84da430",
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan Property Type Created successfully"
}
*/
namedRouter.post("admin.planProperty.type.add", '/plan-property-type/add', request_param.any(),planPropertyTypeController.add)



/**
 * @api {put} /admin/plan-property-type/update Property Type Update
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Type
 * @apiParam {string} plan_property_type_id Id
 * @apiParam {string} title
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f23f300e58e393af84da430",
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan Property Type Updated Successfully"
}
*/
namedRouter.put("admin.planProperty.type.update", '/plan-property-type/update', request_param.any(),planPropertyTypeController.update)



/**
 * @api {post} /admin/plan-property-type/delete Plan Property Type Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan Property Type
 * @apiParam {string} plan_property_type_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": true,
        "_id": "5f23efe73fc11c398948156e",
        "createdAt": "2020-07-31T10:18:15.895Z",
        "__v": 0
    },
    "message": "Plan Property Type Deleted Successfully"
}
*/

namedRouter.post("admin.planProperty.type.delete", '/plan-property-type/delete', request_param.any(),planPropertyTypeController.delete)


module.exports = router;