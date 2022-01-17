const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const partnerController = require('webservice/admin/partner.controller');

/* Image uplaod in aws */
const uploadFile = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        bucket: config.aws.bucket,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            if (file.fieldname === 'contractor_license_document') {
                cb(null, 'contractor_license_document/'+file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'))
            }
            if (file.fieldname === 'insurance_policy_document') {
                cb(null, 'insurance_policy_document/'+file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'))
            }
        }
    })
})

const request_param = multer();

namedRouter.all('/partner*', auth.authenticateAPI);
/**
 * @api {get} /admin/partner/list Partner list
 * @apiVersion 1.0.0
 * @apiGroup Partner
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

namedRouter.post("admin.partner.list", '/partner/list',request_param.any(),partnerController.list);


/**
 * @api {get} /admin/partner/:id Partner details
 * @apiVersion 1.0.0
 * @apiGroup Partner
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

namedRouter.get("admin.partner.details", '/partner/:id',partnerController.details)

/**
 * @api {post} /admin/partner/add Partner Add
 * @apiVersion 1.0.0
 * @apiGroup Partner
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
namedRouter.post("admin.partner.add", '/partner/add', uploadFile.any(),partnerController.add)

/**
 * @api {put} /admin/partner/update Partner Edit
 * @apiVersion 1.0.0
 * @apiGroup Partner
 * @apiParam {string} partner_id Id
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
namedRouter.put("admin.partner.update", '/partner/update', uploadFile.any(),partnerController.update)


/**
 * @api {post} /admin/partner/status-change Partner Status Change
 * @apiVersion 1.0.0
 * @apiGroup Partner
 * @apiParam {string} partner_id Id
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
    "message": "Partner has approved successfully"
}
*/

namedRouter.post("admin.partner.status.change", '/partner/status-change', request_param.any(),partnerController.statusChange)


/**
 * @api {post} /admin/partner/multiple-status-change Partner Multiple Status Change
 * @apiVersion 1.0.0
 * @apiGroup Partner
 * @apiParam {Array} partner Id [{id:5f186a9927355013142e3b14,status:Pending}]
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
    "message": "Partner has approved successfully"
}
*/
namedRouter.post("admin.partner.multiple.status.change", '/partner/multiple-status-change', request_param.any(),partnerController.multipleStatusChange)

/**
 * @api {post} /admin/partner/delete Partner Delete
 * @apiVersion 1.0.0
 * @apiGroup Partner
 * @apiParam {string} partner_id Id
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

namedRouter.post("admin.partner.delete", '/partner/delete', request_param.any(),partnerController.delete)


module.exports = router;