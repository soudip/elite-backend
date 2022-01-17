const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const partnerController = require('webservice/frontend/partner.controller');

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

/**
 * @api {post} /frontend/partner/add Partner Add
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
namedRouter.post("forntend.partner.add", '/partner/add', uploadFile.any(),partnerController.add)


module.exports = router;