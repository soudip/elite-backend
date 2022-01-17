const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const statusController = require('webservice/admin/status.controller');

namedRouter.all('/status*', auth.authenticateAPI);
/**
 * @api {get} /admin/status/list Status list
 * @apiVersion 1.0.0
 * @apiGroup Status
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ed771bf32430a0889a0f1f6",
            "title": "test",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T09:47:43.640Z",
            "__v": 0
        },
        {
            "_id": "5ed7721102ce5008b65a2841",
            "title": "test1",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T09:49:05.067Z",
            "__v": 0
        }
    ],
    "message": "Status fetched Successfully"
}
*/

namedRouter.get("admin.status.list", '/status/list',statusController.list);


/**
 * @api {get} /admin/status/:id Status details
 * @apiVersion 1.0.0
 * @apiGroup Status
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed771bf32430a0889a0f1f6",
        "title": "test",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-03T09:47:43.640Z",
        "__v": 0
    },
    "message": "Status fetched Successfully"
}
*/

namedRouter.get("admin.status.details", '/status/:id',statusController.details)

/**
 * @api {post} /admin/status/add Status Add
 * @apiVersion 1.0.0
 * @apiGroup Status
 * @apiParam {string} title
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ed771bf32430a0889a0f1f6",
        "createdAt": "2020-06-03T09:47:43.640Z",
        "__v": 0
    },
    "message": "Status Created successfully"
}
*/
namedRouter.post("admin.status.add", '/status/add', request_param.any(),statusController.add)



/**
 * @api {post} /admin/status/update Status Edit
 * @apiVersion 1.0.0
 * @apiGroup Status
 * @apiParam {string} status_id Id
 * @apiParam {string} title
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test4",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ed771bf32430a0889a0f1f6",
        "createdAt": "2020-06-03T09:47:43.640Z",
        "__v": 0
    },
    "message": "Status Updated Successfully"
}
*/
namedRouter.put("admin.status.update", '/status/update', request_param.any(),statusController.update)



/**
 * @api {post} /admin/status/delete Status Delete
 * @apiVersion 1.0.0
 * @apiGroup Status
 * @apiParam {string} status_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test2",
        "status": "Active",
        "isDeleted": true,
        "_id": "5ed77c0cc7d64cd82be081c7",
        "createdAt": "2020-06-03T09:49:05.067Z",
        "__v": 0
    },
    "message": "Status Deleted Successfully"
}
*/

namedRouter.post("admin.status.delete", '/status/delete', request_param.any(),statusController.delete)


module.exports = router;