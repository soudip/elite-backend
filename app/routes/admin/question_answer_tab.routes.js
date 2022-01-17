const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const question_answer_tabController = require('webservice/admin/question_answer_tab.controller');



const request_param = multer();

//namedRouter.all('/question_answer_tab*', auth.authenticateAPI);

/**
 * @api {post} /admin//question_answer_tab/list question_answer_tab list
 * @apiVersion 1.0.0
 * @apiGroup Question Answer
 * @apiParam {string} plan_id
 * @apiParam {string} type
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f3bb100943028220a8fd801",
            "name": "Home1",
            "plan_id": "5f2a8290511b0708685afbe6",
            "isDeleted": false,
            "type": "plan"
        }
    ],
    "message": "Data fetched Successfully"
}
*/

namedRouter.post("admin.question_answer_tab.list", '/question_answer_tab/list',request_param.any(),question_answer_tabController.list);




/**
 * @api {post} /admin/question_answer_tab/add Tab Add
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {string} name
 * @apiParam {string} plan_id
 * @apiParam {string} type ['plan','home']
 * @apiSuccessExample {json} Success
 * {
        "data": {
            "name": "Home",
            "plan_id": "5f2a8290511b0708685afbe6",
            "type": "plan",
            "isDeleted": false,
            "status": "Active",
            "_id": "5f3bb100943028220a8fd801",
            "createdAt": "2020-08-18T10:44:16.511Z",
            "updatedAt": "2020-08-18T10:44:16.511Z"
        },
        "message": "Question Answer Tab Created successfully"
    }
*/
namedRouter.post("admin.question_answer_tab.add", '/question_answer_tab/add', request_param.any(),question_answer_tabController.add)

/**
 * @api {put} /admin/question_answer_tab/update Tab Edit
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {string} plan_id Plan Id
 * @apiParam {string} tab_id tab _id
 * @apiParam {string} name
 * @apiParam {string} type
 * @apiSuccessExample {json} Success
 *  {
        "data": {
            "name": "Home1",
            "plan_id": "5f2a8290511b0708685afbe6",
            "type": "plan",
            "isDeleted": false,
            "status": "Active",
            "_id": "5f3bb100943028220a8fd801",
            "createdAt": "2020-08-18T10:44:16.511Z",
            "updatedAt": "2020-08-18T11:15:31.408Z"
        },
        "message": "Tab Updated Successfully"
    }
*/
namedRouter.put("admin.question_answer_tab.update", '/question_answer_tab/update', request_param.any(),question_answer_tabController.update)

/**
 * @api {post} /admin/question_answer_tab/delete Plan Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {string} tab_id Id Tab _id
 * @apiSuccessExample {json} Success
 * {
        "data": {
            "name": "Home1",
            "plan_id": "5f2a8290511b0708685afbe6",
            "type": "plan",
            "isDeleted": true,
            "status": "Active",
            "_id": "5f3bb100943028220a8fd801",
            "createdAt": "2020-08-18T10:44:16.511Z",
            "updatedAt": "2020-08-18T11:25:19.635Z"
        },
        "message": "Tab Deleted Successfully"
    }
*/

namedRouter.post("admin.question_answer_tab.delete", '/question_answer_tab/delete', request_param.any(),question_answer_tabController.delete)

module.exports = router;