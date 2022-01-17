const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const serviceIssueController = require('webservice/admin/service_issue.controller');

namedRouter.all('/service-issue*', auth.authenticateAPI);
/**
 * @api {get} /admin/service-issue/list/:serviceId Service issue list
 * @apiVersion 1.0.0
 * @apiGroup Service Issue
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ef095c72878440912566b18",
            "title": "Air Conditioning",
            "service_issues": [
                {
                    "_id": "5ef0daef22b99a1232cefd52",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Test",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-22T16:23:11.992Z",
                    "__v": 0
                },
                {
                    "_id": "5ef0db621ab27e0a6da3ee43",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Test two",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-22T16:23:11.992Z",
                    "__v": 0
                }
            ]
        }
    ],
    "message": "Request service issue fetched Successfully"
}
*/

namedRouter.get("admin.service.issue.list", '/service-issue/list/:serviceId',serviceIssueController.list);


/**
 * @api {get} /admin/service-issue/:id Service issue details
 * @apiVersion 1.0.0
 * @apiGroup Service Issue
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ef0daef22b99a1232cefd52",
        "service_id": "5ef095c72878440912566b18",
        "content": "Test",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-22T16:23:11.992Z",
        "__v": 0
    },
    "message": "Request service issue fetched Successfully"
}
*/

namedRouter.get("admin.service.issue.details", '/service-issue/:id',serviceIssueController.details)

/**
 * @api {post} /admin/service-issue/add Service issue Add
 * @apiVersion 1.0.0
 * @apiGroup Service Issue
 * @apiParam {string} content
 * @apiParam {string} service_id Service Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "service_id": "5ef095c72878440912566b18",
        "content": "Test",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ef0daef22b99a1232cefd52",
        "createdAt": "2020-06-22T16:23:11.992Z",
        "__v": 0
    },
    "message": "Request service issue created successfully"
}
*/
namedRouter.post("admin.service.issue.add", '/service-issue/add', request_param.any(),serviceIssueController.add)



/**
 * @api {put} /admin/service-issue/update Service issue Edit
 * @apiVersion 1.0.0
 * @apiGroup Service Issue
 * @apiParam {string} issue_id Service Issue Id
 * @apiParam {string} content
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "service_id": "5ef095c72878440912566b18",
        "content": "Test1234",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ef0daef22b99a1232cefd52",
        "createdAt": "2020-06-22T16:23:11.992Z",
        "__v": 0
    },
    "message": "Request service issue has updated successfully"
}
*/
namedRouter.put("admin.service.issue.update", '/service-issue/update', request_param.any(),serviceIssueController.update)


/**
 * @api {post} /admin/service-issue/status-change Service issue Status Change
 * @apiVersion 1.0.0
 * @apiGroup Service Issue
 * @apiParam {string} issue_id Service Issue Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "service_id": "5ef095c72878440912566b18",
        "content": "Test1234",
        "status": "Inactive",
        "isDeleted": false,
        "_id": "5ef0daef22b99a1232cefd52",
        "createdAt": "2020-06-22T16:23:11.992Z",
        "__v": 0
    },
    "message": "Request service issue status has changed successfully"
}
*/

namedRouter.post("admin.service.issue.status.change", '/service-issue/status-change', request_param.any(),serviceIssueController.statusChange)



/**
 * @api {post} /admin/service-issue/delete Service issue Delete
 * @apiVersion 1.0.0
 * @apiGroup Service Issue
 * @apiParam {string} issue_id Service Issue Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "service_id": "5ef095c72878440912566b18",
        "content": "Test1234",
        "status": "Inactive",
        "isDeleted": true,
        "_id": "5ef0daef22b99a1232cefd52",
        "createdAt": "2020-06-22T16:23:11.992Z",
        "__v": 0
    },
    "message": "Request service issue Deleted Successfully"
}
*/

namedRouter.post("admin.service.issue.delete", '/service-issue/delete', request_param.any(),serviceIssueController.delete)


module.exports = router;