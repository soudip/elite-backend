const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const propertyTypeController = require('webservice/admin/property_type.controller');

namedRouter.all('/property-type*', auth.authenticateAPI);
/**
 * @api {get} /admin/property-type/list Property Type list
 * @apiVersion 1.0.0
 * @apiGroup Property Type
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "Apartment",
            "description": "test apartment",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
        },
        {
            "_id": "5ed783f654f8b50e2170bb1a",
            "title": "Apartment1",
            "description": "test apartment1",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:05:26.558Z",
            "__v": 0
        }
    ],
    "message": "Property Type fetched Successfully"
}
*/

namedRouter.get("admin.property.type.list", '/property-type/list',propertyTypeController.list);


/**
 * @api {get} /admin/property-type/:id Property Type details
 * @apiVersion 1.0.0
 * @apiGroup Property Type
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed783c7a3ffce0e11723ba5",
        "title": "Apartment",
        "description": "test apartment",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "Property Type fetched Successfully"
}
*/

namedRouter.get("admin.property.type.details", '/property-type/:id',propertyTypeController.details)

/**
 * @api {post} /admin/property-type/add Property Type Add
 * @apiVersion 1.0.0
 * @apiGroup Property Type
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Apartment",
        "description": "test apartment",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ed783c7a3ffce0e11723ba5",
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "Property Type Created successfully"
}
*/
namedRouter.post("admin.property.type.add", '/property-type/add', request_param.any(),propertyTypeController.add)



/**
 * @api {put} /admin/property-type/update Property Type Edit
 * @apiVersion 1.0.0
 * @apiGroup Property Type
 * @apiParam {string} property_type_id Id
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Apartment01",
        "description": "test apartment1",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ed783c7a3ffce0e11723ba5",
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "Property Type Updated Successfully"
}
*/
namedRouter.put("admin.property.type.update", '/property-type/update', request_param.any(),propertyTypeController.update)



/**
 * @api {post} /admin/property-type/delete Property Type Delete
 * @apiVersion 1.0.0
 * @apiGroup Property Type
 * @apiParam {string} property_type_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
       "title": "Apartment01",
        "description": "test apartment1",
        "status": "Active",
        "isDeleted": true,
        "_id": "5ed783c7a3ffce0e11723ba5",
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "Property Type Deleted Successfully"
}
*/

namedRouter.post("admin.property.type.delete", '/property-type/delete', request_param.any(),propertyTypeController.delete)


module.exports = router;