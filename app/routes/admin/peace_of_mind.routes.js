const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const peaceMindController = require('webservice/admin/peace_mind.controller');

/* Image uplaod in aws */
const uploadFile = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: config.aws.bucket,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, 'peace_of_mind/'+file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'))
        }
    })
})

const request_param = multer();

namedRouter.all('/peace-of-mind*', auth.authenticateAPI);
/**
 * @api {get} /admin/peace-of-mind/list Peace Of Mind list
 * @apiVersion 1.0.0
 * @apiGroup Peace Of Mind
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5eeccd45fb667313fdecbe49",
            "title": "test",
            "description": "test decsription",
            "image": "image_1592577346723_download.jpeg",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-19T14:35:49.355Z",
            "__v": 0
        }
    ],
    "message": "Peace of mind fetched Successfully"
}
*/

namedRouter.get("admin.peace.mind.list", '/peace-of-mind/list',peaceMindController.list);


/**
 * @api {get} /admin/peace-of-mind/:id Peace Of Mind details
 * @apiVersion 1.0.0
 * @apiGroup Peace Of Mind
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5eeccd45fb667313fdecbe49",
        "title": "test",
        "description": "test decsription",
        "image": "image_1592577346723_download.jpeg",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-19T14:35:49.355Z",
        "__v": 0
    },
    "message": "Peace of mind fetched Successfully"
}
*/

namedRouter.get("admin.peace.mind.details", '/peace-of-mind/:id',peaceMindController.details)

/**
 * @api {post} /admin/peace-of-mind/add Peace Of Mind Add
 * @apiVersion 1.0.0
 * @apiGroup Peace Of Mind
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiParam {string} image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test",
        "description": "test decsription",
        "image": "image_1592577346723_download.jpeg",
        "status": "Active",
        "isDeleted": false,
        "_id": "5eeccd45fb667313fdecbe49",
        "createdAt": "2020-06-19T14:35:49.355Z",
        "__v": 0
    },
    "message": "Peace of mind Created successfully"
}
*/
namedRouter.post("admin.peace.mind.add", '/peace-of-mind/add', uploadFile.any(),peaceMindController.add)

/**
 * @api {put} /admin/peace-of-mind/update Peace Of Mind Edit
 * @apiVersion 1.0.0
 * @apiGroup Peace Of Mind
 * @apiParam {string} peace_mind_id Id
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiParam {string} image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test here",
        "description": "test decsription",
        "image": "image_1592577346723_download.jpeg",
        "status": "Active",
        "isDeleted": false,
        "_id": "5eeccd45fb667313fdecbe49",
        "createdAt": "2020-06-19T14:35:49.355Z",
        "__v": 0
    },
    "message": "Peace of mind Updated Successfully"
}
*/
namedRouter.put("admin.peace.mind.update", '/peace-of-mind/update', uploadFile.any(),peaceMindController.update)

/**
 * @api {post} /admin/peace-of-mind/delete Peace Of Mind Delete
 * @apiVersion 1.0.0
 * @apiGroup Peace Of Mind
 * @apiParam {string} peace_mind_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test here",
        "description": "test decsription",
        "image": "image_1592577346723_download.jpeg",
        "status": "Active",
        "isDeleted": true,
        "_id": "5eeccd45fb667313fdecbe49",
        "createdAt": "2020-06-19T14:35:49.355Z",
        "__v": 0
    },
    "message": "Peace of mind Deleted Successfully"
}
*/

namedRouter.post("admin.peace.mind.delete", '/peace-of-mind/delete', request_param.any(),peaceMindController.delete)


module.exports = router;