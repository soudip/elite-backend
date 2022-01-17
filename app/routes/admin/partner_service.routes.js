const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const PartnerServiceController = require('webservice/admin/partner_service.controller');

namedRouter.all('/partner-service*', auth.authenticateAPI);
/**
 * @api {get} /admin/partner-service/list Partner Service list
 * @apiVersion 1.0.0
 * @apiGroup Partner Service
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "Test one",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
        },
        {
            "_id": "5ed783f654f8b50e2170bb1a",
            "title": "Test two",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:05:26.558Z",
            "__v": 0
        }
    ],
    "message": "Service fetched Successfully"
}
*/

namedRouter.get("admin.partner.service.list", '/partner-service/list',PartnerServiceController.list);


/**
 * @api {get} /admin/partner-service/:id Partner Service details
 * @apiVersion 1.0.0
 * @apiGroup Partner Service
 * @apiSuccessExample {json} Success
 * {
    "data": {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "Test one",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
    },
    "message": "Service fetched Successfully"
}
*/

namedRouter.get("admin.partner.service.details", '/partner-service/:id',PartnerServiceController.details)

/**
 * @api {post} /admin/partner-service/add Partner Service Add
 * @apiVersion 1.0.0
 * @apiGroup Partner Service
 * @apiParam {string} title
 * @apiSuccessExample {json} Success
 * {
    "data": {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "Test one",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
    },
    "message": "Service Created successfully"
}
*/
namedRouter.post("admin.partner.service.add", '/partner-service/add', request_param.any(),PartnerServiceController.add)



/**
 * @api {put} /admin/partner-service/update Partner Service Edit
 * @apiVersion 1.0.0
 * @apiGroup Partner Service
 * @apiParam {string} service_id Id
 * @apiParam {string} title
 * @apiSuccessExample {json} Success
 * {
    "data": {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "Test one",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
    },
    "message": "Service Updated Successfully"
}
*/
namedRouter.put("admin.partner.service.update", '/partner-service/update', request_param.any(),PartnerServiceController.update)



/**
 * @api {post} /admin/partner-service/delete Partner Service Delete
 * @apiVersion 1.0.0
 * @apiGroup Partner Service
 * @apiParam {string} service_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "Test one",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
    },
    "message": "Service Deleted Successfully"
}
*/

namedRouter.post("admin.partner.service.delete", '/partner-service/delete', request_param.any(),PartnerServiceController.delete)


module.exports = router;