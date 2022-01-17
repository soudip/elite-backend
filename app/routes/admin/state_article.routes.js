const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const stateArticleController = require('webservice/admin/state_article.controller');

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
            cb(null, 'state_article/'+file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'))
        }
    })
})

const request_param = multer();

namedRouter.all('/state-article*', auth.authenticateAPI);
/**
 * @api {get} /admin/state-article/section/list/:stateId State article section list
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f215894de74170eca386a76",
            "section": "Section Two"
        }
    ],
    "state": {
        "_id": "5f214f8e76f1b0d911dadc9f",
        "title": "abc"
    },
    "message": "State article section fetched Successfully"
}
*/

namedRouter.get("admin.state.article.section.list", '/state-article/section/list/:stateId',stateArticleController.list);

/**
 * @api {post} /admin/state-article/add State article Add
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiParam {ID} state_id State Id
 * @apiParam {string} title Title
 * @apiParam {string} banner_image Banner image for Sectiion One
 * @apiParam {string} image_one Image One
 * @apiParam {string} image_two Image Two
 * @apiParam {string} content_one Content One
 * @apiParam {string} content_two Content Two
 * @apiParam {string} content_three Content Three
 * @apiParam {string} meta_title Meta Title
 * @apiParam {string} meta_description Meta Description
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "state_id": "5f214f8e76f1b0d911dadc9f",
        "section": "Section Two",
        "identity": "section_two",
        "title": "test here",
        "banner_image": "ddd",
        "image_one": "",
        "image_two": "",
        "content_one": "fddddff",
        "content_two": "",
        "content_three": "",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f215894de74170eca386a76",
        "createdAt": "2020-07-29T11:08:04.806Z",
        "__v": 0
    },
    "message": "State article Created successfully"
}
*/
namedRouter.post("admin.state.article.add", '/state-article/add', uploadFile.any(),stateArticleController.add)

/**
 * @api {get} /admin/state-article/:id State article details
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f215894de74170eca386a76",
        "state_id": "5f214f8e76f1b0d911dadc9f",
        "section": "Section Two",
        "identity": "section_two",
        "title": "tetetdddd",
        "banner_image": "ddd",
        "image_one": "",
        "image_two": "",
        "content_one": "fddddff",
        "content_two": "",
        "content_three": "",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-29T11:08:04.806Z",
        "__v": 0,
        "state": {
            "_id": "5f214f8e76f1b0d911dadc9f",
            "title": "abc",
            "type": "processing",
            "orderNumber": 0,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-07-29T10:29:34.018Z",
            "__v": 0
        }
    },
    "message": "State article fetched Successfully"
 }
*/

namedRouter.get("admin.state.article.details", '/state-article/:id',stateArticleController.details)

/**
 * @api {put} /admin/state-article/update State article edit
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiParam {string} article_id Id
 * @apiParam {string} state_id State Id
 * @apiParam {string} section_one {section1_image1:'1.jpg',title_one:'titlteone',content_one:'test'} Section One
 * @apiParam {string} section_two {section2_image1:'1.jpg',section1_image2:'2.jpg',title_one:'titlteone',title_two:'titltetwo',content_one:'test',content_two:'test'} Section Two
 * @apiParam {string} section_three {section3_image1:'1.jpg',title_one:'titlteone',content_one:'test',content_two:'test',content_three:'test'} Section Three
 * @apiParam {string} section_four {content_one:'test',content_two:'test',content_three:'test',content_four:'test',content_five:'test',content_six:'test'} Section Four
 * @apiParam {string} section_five {section5_image1:'1.jpg',title_one:'titlteone',content_one:'test',content_two:'test',content_three:'test'} Section Five
 * @apiParam {string} section_six {section6_image1:'1.jpg',title_one:'titlteone',content_one:'test',content_two:'test',content_three:'test'} Section Six
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "state_id": "5f214f8e76f1b0d911dadc9f",
        "section": "Section Two",
        "identity": "section_two",
        "title": "tetetdddd",
        "banner_image": "ddd",
        "image_one": "",
        "image_two": "",
        "content_one": "fddddff",
        "content_two": "",
        "content_three": "",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f215894de74170eca386a76",
        "createdAt": "2020-07-29T11:08:04.806Z",
        "__v": 0
    },
    "message": "State article Updated Successfully"
}
*/
namedRouter.put("admin.state.article.update", '/state-article/update', uploadFile.any(),stateArticleController.update)



/**
 * @api {post} /admin/state-article/delete State article delete
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiParam {string} article_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "state_id": "5f214f8e76f1b0d911dadc9f",
        "section": "Section Two",
        "identity": "section_two",
        "title": "tetetdddd",
        "banner_image": "ddd",
        "image_one": "",
        "image_two": "",
        "content_one": "fddddff",
        "content_two": "",
        "content_three": "",
        "status": "Active",
        "isDeleted": true,
        "_id": "5f215894de74170eca386a76",
        "createdAt": "2020-07-29T11:08:04.806Z",
        "__v": 0
    },
    "message": "State article Deleted Successfully"
}
*/

namedRouter.post("admin.state.article.delete", '/state-article/delete', request_param.any(),stateArticleController.delete)



/**
 * @api {get} /admin/state-article/image/list State article image list
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f215894de74170eca386a76",
            "section": "Section Two"
        }
    ],
    "state": {
        "_id": "5f214f8e76f1b0d911dadc9f",
        "title": "abc"
    },
    "message": "State article section fetched Successfully"
}
*/

namedRouter.get("admin.state.article.image.list", '/state-article/image/list',stateArticleController.imageList);

/**
 * @api {post} /admin/state-article/image-add State article image Add
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiParam {string} elite_appliances_image Elite appliances image
 * @apiParam {string} elite_systems_image Elite systems image
 * @apiParam {string} elite_complete_image Elite complete image
 * @apiParam {string} elite_electronics_image Elite electronics image
 * @apiParam {string} elite_sewer_image Elite sewer image
 * @apiParam {string} customize_own_image Customize your own image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "state_id": "5f214f8e76f1b0d911dadc9f",
        "section": "Section Two",
        "identity": "section_two",
        "title": "test here",
        "banner_image": "ddd",
        "image_one": "",
        "image_two": "",
        "content_one": "fddddff",
        "content_two": "",
        "content_three": "",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f215894de74170eca386a76",
        "createdAt": "2020-07-29T11:08:04.806Z",
        "__v": 0
    },
    "message": "State article Created successfully"
}
*/
namedRouter.post("admin.state.article.image.add", '/state-article/image-add', uploadFile.any(),stateArticleController.imageAdd)

/**
 * @api {put} /admin/state-article/image-update State article image edit
 * @apiVersion 1.0.0
 * @apiGroup State article
 * @apiParam {string} image_id Id
 * @apiParam {string} elite_appliances_image Elite appliances image
 * @apiParam {string} elite_systems_image Elite systems image
 * @apiParam {string} elite_complete_image Elite complete image
 * @apiParam {string} elite_electronics_image Elite electronics image
 * @apiParam {string} elite_sewer_image Elite sewer image
 * @apiParam {string} customize_own_image Customize your own image
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "state_id": "5f214f8e76f1b0d911dadc9f",
        "section": "Section Two",
        "identity": "section_two",
        "title": "tetetdddd",
        "banner_image": "ddd",
        "image_one": "",
        "image_two": "",
        "content_one": "fddddff",
        "content_two": "",
        "content_three": "",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f215894de74170eca386a76",
        "createdAt": "2020-07-29T11:08:04.806Z",
        "__v": 0
    },
    "message": "State article Updated Successfully"
}
*/
namedRouter.put("admin.state.article.image.update", '/state-article/image-update', uploadFile.any(),stateArticleController.imageUpdate)

module.exports = router;