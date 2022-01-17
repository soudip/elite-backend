const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const question_answerController = require('webservice/admin/question_answer.controller');



const request_param = multer();

//namedRouter.all('/question_answer*', auth.authenticateAPI);
/**
 * @api {post} /admin//question_answer/list question_answer list with tab
 * @apiVersion 1.0.0
 * @apiGroup Question Answer
 * @apiParam {string} question_answer_tab_id
 * @apiParam {string} type
 * @apiSuccessExample {json} Success
 *  {
     "data": [
            {
                "_id": "5f3be6c0ad1f2e3a94eda4a9",
                "question": "Home1",
                "answer": "THis is tset answer",
                "isDeleted": false
            }
        ],
        "message": "Data fetched Successfully"
    }
*/

namedRouter.post("admin.question_answer.list", '/question_answer/list',request_param.any(),question_answerController.list);




/**
 * @api {post} /admin/question_answer/add Question Answer Add
 * @apiVersion 1.0.0
 * @apiGroup Question Answer
 * @apiParam {string} question
 * @apiParam {string} answer
 * @apiParam {string} question_answer_tab_id

 * @apiSuccessExample {json} Success
 * {
        "data": {
            "question": "Home1",
            "answer": "THis is tset answer",
            "question_answer_tab_id": "5f3bb100943028220a8fd801",
            "isDeleted": false,
            "status": "Active",
            "_id": "5f3be6c0ad1f2e3a94eda4a9",
            "createdAt": "2020-08-18T14:33:36.933Z",
            "updatedAt": "2020-08-18T14:33:36.933Z"
        },
        "message": "Question Answer Created successfully"
    }
*/
namedRouter.post("admin.question_answer.add", '/question_answer/add', request_param.any(),question_answerController.add)

/**
 * @api {put} /admin/question_answer/update Question Answer Edit
 * @apiVersion 1.0.0
 * @apiGroup Question Answer
 * @apiParam {string} question
 * @apiParam {string} answer
 * @apiParam {string} question_answer_tab_id
 * @apiParam {string} id Question Answer _id
 * @apiSuccessExample {json} Success
 *  {
        "data": {
            "question": "Home2",
            "answer": "THis is tset answer",
            "question_answer_tab_id": "5f3bb100943028220a8fd801",
            "isDeleted": false,
            "status": "Active",
            "_id": "5f3be6c0ad1f2e3a94eda4a9",
            "createdAt": "2020-08-18T14:33:36.933Z",
            "updatedAt": "2020-08-18T15:31:47.432Z"
        },
        "message": "Quesetion Answer Updated Successfully"
    }
*/
namedRouter.put("admin.question_answer.update", '/question_answer/update', request_param.any(),question_answerController.update)

/**
 * @api {post} /admin/question_answer/delete Plan Delete
 * @apiVersion 1.0.0
 * @apiGroup Question Answer
 * @apiParam {string} id Question Answer _id
 * @apiSuccessExample {json} Success
 * {
        "data": {
            "question": "Home2",
            "answer": "THis is tset answer",
            "question_answer_tab_id": "5f3bb100943028220a8fd801",
            "isDeleted": true,
            "status": "Active",
            "_id": "5f3be6c0ad1f2e3a94eda4a9",
            "createdAt": "2020-08-18T14:33:36.933Z",
            "updatedAt": "2020-08-18T15:38:37.924Z"
        },
        "message": "Deleted Successfully"
    }
*/

namedRouter.post("admin.question_answer.delete", '/question_answer/delete', request_param.any(),question_answerController.delete)

module.exports = router;