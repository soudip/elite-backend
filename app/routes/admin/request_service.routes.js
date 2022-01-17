const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const requestServiceController = require('webservice/admin/request_service.controller');

namedRouter.all('/request-service*', auth.authenticateAPI);
/**
 * @api {get} /admin/request-service/list Request Service list
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiSuccessExample {json} Success
 * {
    "data": [
       {
            "_id": "5ef095882878440912566b16",
            "title": "Air Conditioning and Heating",
            "parent_id": null,
            "description": "Air Conditioning and Heating",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:27:04.061Z",
            "__v": 0
        },
        {
            "_id": "5ef095a82878440912566b17",
            "title": "HVAC System",
            "parent_id": "5ef095882878440912566b16",
            "description": "HVAC System",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:27:36.567Z",
            "__v": 0
        }
    ],
    "message": "Request service fetched Successfully"
}
*/

namedRouter.get("admin.request.service.list", '/request-service/list',requestServiceController.list);


/**
 * @api {get} /admin/request-service/parent-list Request Service parent list
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ef095882878440912566b16",
            "title": "Air Conditioning and Heating",
            "parent_id": null,
            "description": "Air Conditioning and Heating",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:27:04.061Z",
            "__v": 0
        },
        {
            "_id": "5ef096312878440912566b1c",
            "title": "Heating",
            "parent_id": null,
            "description": "Heating",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:29:53.207Z",
            "__v": 0
        },
        {
            "_id": "5ef098102878440912566b27",
            "title": "Appliances",
            "parent_id": null,
            "description": "Appliances",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:37:52.131Z",
            "__v": 0
        },
        {
            "_id": "5ef09a082878440912566b35",
            "title": "ELECTRICAL",
            "parent_id": null,
            "description": "ELECTRICAL",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:46:16.373Z",
            "__v": 0
        },
        {
            "_id": "5ef09aa62878440912566b3d",
            "title": "PLUMBING",
            "parent_id": null,
            "description": "PLUMBING",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:48:54.627Z",
            "__v": 0
        },
        {
            "_id": "5ef09bd52878440912566b4c",
            "title": "PLUMBING FIXTURES",
            "parent_id": null,
            "description": "PLUMBING FIXTURES",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:53:57.928Z",
            "__v": 0
        },
        {
            "_id": "5ef09c322878440912566b51",
            "title": "POOL",
            "parent_id": null,
            "description": "POOL",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:55:30.627Z",
            "__v": 0
        },
        {
            "_id": "5ef09cc12878440912566b58",
            "title": "SPA",
            "parent_id": null,
            "description": "SPA",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:57:53.205Z",
            "__v": 0
        },
        {
            "_id": "5ef09d502878440912566b5f",
            "title": "SEWEGE LINES",
            "parent_id": null,
            "description": "SEWEGE LINES",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T12:00:16.451Z",
            "__v": 0
        }
    ],
    "message": "Request service parent fetched Successfully"
}
*/

namedRouter.get("admin.request.service.parent.list", '/request-service/parent-list',requestServiceController.allParentService);


/**
 * @api {get} /admin/request-service/:id Request Service details
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ef09d7c2878440912566b60",
        "title": "Sewage Lines",
        "parent_id": "5ef09d502878440912566b5f",
        "description": "Sewage Lines",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-22T12:01:00.900Z",
        "__v": 0
    },
    "message": "Request service fetched Successfully"
}
*/

namedRouter.get("admin.request.service.details", '/request-service/:id',requestServiceController.details)

/**
 * @api {post} /admin/request-service/add Request Service Add
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiParam {string} title
 * @apiParam {string} parent_id Parent Id
 * @apiParam {string} description
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Sewage Lines",
        "parent_id": "5ef09d502878440912566b5f",
        "description": "Sewage Lines",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ef09d7c2878440912566b60",
        "createdAt": "2020-06-22T12:01:00.900Z",
        "__v": 0
    },
    "message": "Request service Created successfully"
}
*/
namedRouter.post("admin.request.service.add", '/request-service/add', request_param.any(),requestServiceController.add)



/**
 * @api {put} /admin/request-service/update Request Service Edit
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiParam {string} request_service_id Id
 * @apiParam {string} title
 * @apiParam {string} parent_id Parent Id
 * @apiParam {string} description
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Sewage Lines1",
        "parent_id": "5ef09d502878440912566b5f",
        "description": "Sewage Lines",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ef09d7c2878440912566b60",
        "createdAt": "2020-06-22T12:01:00.900Z",
        "__v": 0
    },
    "message": "Request service Updated Successfully"
}
*/
namedRouter.put("admin.request.service.update", '/request-service/update', request_param.any(),requestServiceController.update)


/**
 * @api {post} /admin/request-service/status-change Request Service Status Change
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiParam {string} request_service_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Sewage Lines1",
        "parent_id": "5ef09d502878440912566b5f",
        "description": "Sewage Lines",
        "status": "Inactive",
        "isDeleted": false,
        "_id": "5ef09d7c2878440912566b60",
        "createdAt": "2020-06-22T12:01:00.900Z",
        "__v": 0
    },
    "message": "Request service status has changed successfully"
}
*/

namedRouter.post("admin.request.service.status.change", '/request-service/status-change', request_param.any(),requestServiceController.statusChange)



/**
 * @api {post} /admin/request-service/delete Request Service Delete
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiParam {string} request_service_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Sewage Lines1",
        "parent_id": "5ef09d502878440912566b5f",
        "description": "Sewage Lines",
        "status": "Inactive",
        "isDeleted": true,
        "_id": "5ef09d7c2878440912566b60",
        "createdAt": "2020-06-22T12:01:00.900Z",
        "__v": 0
    },
    "message": "Request service Deleted Successfully"
}
*/

namedRouter.post("admin.request.service.delete", '/request-service/delete', request_param.any(),requestServiceController.delete)


module.exports = router;