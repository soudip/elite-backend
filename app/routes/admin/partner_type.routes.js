const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const partnerTypeController = require('webservice/admin/partner_type.controller');

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
            cb(null, 'partner_type/'+file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'))
        }
    })
})

const request_param = multer();

namedRouter.all('/partner-type*', auth.authenticateAPI);
/**
 * @api {get} /admin/partner-type/list Partner Type list
 * @apiVersion 1.0.0
 * @apiGroup Partner Type
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f186a9927355013142e3b14",
            "title": "Certified Service Provider",
            "description": "Certified Service Provider",
            "image": "image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-07-22T16:34:33.003Z",
            "__v": 0
        }
    ],
    "message": "Partner type fetched Successfully"
}
*/

namedRouter.get("admin.partner.type.list", '/partner-type/list',partnerTypeController.list);


/**
 * @api {get} /admin/partner-type/:id Partner Type details
 * @apiVersion 1.0.0
 * @apiGroup Partner Type
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f186a9927355013142e3b14",
        "title": "Certified Service Provider",
        "description": "Certified Service Provider",
        "image": "image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-22T16:34:33.003Z",
        "__v": 0
    },
    "message": "Partner type fetched Successfully"
}
*/

namedRouter.get("admin.partner.type.details", '/partner-type/:id',partnerTypeController.details)

/**
 * @api {post} /admin/partner-type/add Partner Type Add
 * @apiVersion 1.0.0
 * @apiGroup Partner Type
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiParam {string} image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f186a9927355013142e3b14",
        "title": "Certified Service Provider",
        "description": "Certified Service Provider",
        "image": "image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-22T16:34:33.003Z",
        "__v": 0
    },
    "message": "Partner type created Successfully"
}
*/
namedRouter.post("admin.partner.type.add", '/partner-type/add', uploadFile.any(),partnerTypeController.add)

/**
 * @api {put} /admin/partner-type/update Partner Type Edit
 * @apiVersion 1.0.0
 * @apiGroup Partner Type
 * @apiParam {string} partner_type_id Id
 * @apiParam {string} title
 * @apiParam {string} description
 * @apiParam {string} image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f186a9927355013142e3b14",
        "title": "Certified Service Provider",
        "description": "Certified Service Provider",
        "image": "image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-22T16:34:33.003Z",
        "__v": 0
    },
    "message": "Partner type Updated Successfully"
}
*/
namedRouter.put("admin.partner.type.update", '/partner-type/update', uploadFile.any(),partnerTypeController.update)

/**
 * @api {post} /admin/partner-type/delete Partner Type Delete
 * @apiVersion 1.0.0
 * @apiGroup Partner Type
 * @apiParam {string} partner_type_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f186a9927355013142e3b14",
        "title": "Certified Service Provider",
        "description": "Certified Service Provider",
        "image": "image_1595435661021_image_1592320336514_download-4k-2016-jungle-book-movie-wallpapers.jpg",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-22T16:34:33.003Z",
        "__v": 0
    },
    "message": "Partner type Deleted Successfully"
}
*/

namedRouter.post("admin.partner.type.delete", '/partner-type/delete', request_param.any(),partnerTypeController.delete)


module.exports = router;