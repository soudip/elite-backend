const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const homeOwnerController = require('webservice/admin/home_owner.controller');

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
            cb(null, 'home_owner_hub/'+file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'))
        }
    })
})

const request_param = multer();

namedRouter.all('/homeowner-hub*', auth.authenticateAPI);
/**
 * @api {get} /admin/homeowner-hub/list Homeowner Hub list
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ee87abd9522430a55cdc82a",
            "title": "eee",
            "description": "rryyyy",
            "image": "1592294077775_download.jpeg",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-16T07:54:37.824Z",
            "__v": 0
        }
    ],
    "message": "Homeowner hub fetched Successfully"
}
*/

namedRouter.get("admin.homeowner.hub.list", '/homeowner-hub/list',homeOwnerController.list);


/**
 * @api {get} /admin/homeowner-hub/:id Homeowner Hub details
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ee87abd9522430a55cdc82a",
        "title": "eee",
        "description": "rryyyy",
        "image": "1592294077775_download.jpeg",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-16T07:54:37.824Z",
        "__v": 0
    },
    "message": "Homeowner hub fetched Successfully"
}
*/

namedRouter.get("admin.homeowner.hub.details", '/homeowner-hub/:id',homeOwnerController.details)

/**
 * @api {post} /admin/homeowner-hub/add Homeowner Hub Add
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiParam {string} image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "eee",
        "description": "rryyyy",
        "image": "1592294077775_download.jpeg",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ee87abd9522430a55cdc82a",
        "createdAt": "2020-06-16T07:54:37.824Z",
        "__v": 0
    },
    "message": "Homeowner hub Created successfully"
}
*/
namedRouter.post("admin.homeowner.hub.add", '/homeowner-hub/add', uploadFile.any(),homeOwnerController.add)

/**
 * @api {put} /admin/homeowner-hub/update Homeowner Hub Edit
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub
 * @apiParam {string} home_owner_id Id
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiParam {string} image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Test",
        "description": "Test description",
        "image": "1592294319619_download-4k-2016-jungle-book-movie-wallpapers.jpg",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ee87abd9522430a55cdc82a",
        "createdAt": "2020-06-16T07:54:37.824Z",
        "__v": 0
    },
    "message": "Homeowner hub Updated Successfully"
}
*/
namedRouter.put("admin.homeowner.hub.update", '/homeowner-hub/update', uploadFile.any(),homeOwnerController.update)

/**
 * @api {post} /admin/homeowner-hub/delete Homeowner Hub Delete
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub
 * @apiParam {string} home_owner_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Test",
        "description": "Test description",
        "image": "1592294319619_download-4k-2016-jungle-book-movie-wallpapers.jpg",
        "status": "Active",
        "isDeleted": true,
        "_id": "5ee87abd9522430a55cdc82a",
        "createdAt": "2020-06-16T07:54:37.824Z",
        "__v": 0
    },
    "message": "Homeowner hub Deleted Successfully"
}
*/

namedRouter.post("admin.homeowner.hub.delete", '/homeowner-hub/delete', request_param.any(),homeOwnerController.delete)


/**
 * @api {post} /admin/homeowner-hub/multiple-delete Homeowner Hub multiple delete
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub
 * @apiParam {Array} home_owner_id Id [5f186a9927355013142e3b14,5f186a9927355013142e3b13]
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Test",
        "description": "Test description",
        "image": "1592294319619_download-4k-2016-jungle-book-movie-wallpapers.jpg",
        "status": "Active",
        "isDeleted": true,
        "_id": "5ee87abd9522430a55cdc82a",
        "createdAt": "2020-06-16T07:54:37.824Z",
        "__v": 0
    },
    "message": "Homeowner hub Deleted Successfully"
}
*/
namedRouter.post("admin.homeowner.hub.multiple.delete", '/homeowner-hub/multiple-delete', request_param.any(),homeOwnerController.multipleDelete)

module.exports = router;