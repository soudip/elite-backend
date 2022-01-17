const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const stateController = require('webservice/admin/state.controller');

namedRouter.all('/state*', auth.authenticateAPI);
/**
 * @api {get} /admin/state/list State list
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ed783c7a3ffce0e11723ba5",
            "title": "State One",
            "abbreviation":"AB",
            "type": "cover",
            "orderNumber": 1,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-03T11:04:39.393Z",
            "__v": 0
        },
        {
            "_id": "5ed783f654f8b50e2170bb1a",
            "title": "State Two",
            "abbreviation":"CD",
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

namedRouter.get("admin.state.list", '/state/list',stateController.list);


/**
 * @api {get} /admin/state/:id State details
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed783c7a3ffce0e11723ba5",
        "title": "State One",
        "abbreviation":"AB",
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

namedRouter.get("admin.state.details", '/state/:id',stateController.details)

/**
 * @api {post} /admin/state/add State Add
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiParam {string} title
 * @apiParam {string} abbreviation
 * @apiParam {string} type ["cover", "processing","not_covered"]
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed783c7a3ffce0e11723ba5",
        "title": "State One",
        "abbreviation":"AB",
        "type": "cover",
        "orderNumber": 1,
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "State Created successfully"
}
*/
namedRouter.post("admin.state.add", '/state/add', request_param.any(),stateController.add)



/**
 * @api {put} /admin/state/update State Edit
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiParam {string} state_id Id
 * @apiParam {string} title
 * @apiParam {string} abbreviation
 * @apiParam {string} type ["cover", "processing","not_covered"]
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed783c7a3ffce0e11723ba5",
        "title": "State One",
        "abbreviation":"AB",
        "type": "cover",
        "orderNumber": 1,
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "State Updated Successfully"
}
*/
namedRouter.put("admin.state.update", '/state/update', request_param.any(),stateController.update)



/**
 * @api {post} /admin/state/delete State Delete
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiParam {string} state_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed783c7a3ffce0e11723ba5",
        "title": "State One",
        "abbreviation":"AB",
        "type": "cover",
        "orderNumber": 1,
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "State Deleted Successfully"
}
*/

namedRouter.post("admin.state.delete", '/state/delete', request_param.any(),stateController.delete)


/**
 * @api {post} /admin/state/bulk-status-change State Bulk Status Change
 * @apiVersion 1.0.0
 * @apiGroup State
 * @apiParam {string} state_id ["5ed783c7a3ffce0e11723ba5","5ed783c7a3ffce0e11723ba5"]
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ed783c7a3ffce0e11723ba5",
        "title": "State One",
        "abbreviation":"AB",
        "type": "cover",
        "orderNumber": 1,
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-03T11:04:39.393Z",
        "__v": 0
    },
    "message": "State Updated Successfully"
}
*/
namedRouter.post("admin.state.bulk.status.update", '/state/bulk-status-change', request_param.any(),stateController.bulkStatusupdate)


module.exports = router;