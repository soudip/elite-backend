const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const homeOwnerArticleController = require('webservice/admin/home_owner_article.controller');

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

            let now = Date.now().toString() // '1492341545873'
            // pad with extra random digit
            now += now + Math.floor(Math.random() * 10)
            

            cb(null, 'home_owner_hub/article/'+now.slice(0, 14) + "_" + file.originalname.replace(/\s/g, '_'))
        }
    })
})

const request_param = multer();

namedRouter.all('/homeowner-hub-article*', auth.authenticateAPI);

/**
 * @api {get} /admin/homeowner-hub-article/list-all Homeowner Hub article list all
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub article
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

namedRouter.get("admin.homeowner.hub.article.list.all", '/homeowner-hub-article/list-all',homeOwnerArticleController.listAll);


/**
 * @api {get} /admin/homeowner-hub-article/list/:homeownerId Homeowner Hub article list
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub article
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

namedRouter.get("admin.homeowner.hub.article.list", '/homeowner-hub-article/list/:homeownerId',homeOwnerArticleController.list);

/**
 * @api {post} /admin/homeowner-hub-article/add Homeowner Hub article Add
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub article
 * @apiParam {ID} home_owner_id Homeowner hub ID
 * @apiParam {string} title Title
 * @apiParam {string} image_one Image One
 * @apiParam {string} image_two Image Two
 * @apiParam {string} description_one Article content one
 * @apiParam {string} description_two Article content two
 * @apiParam {string} content[{title:'test',image_one:'1.jpg',image_two:'2.jpg',description_one:'fjfjf',description_two:'fff',description_three:'ddpd',identity:'section_one'}] Content for four section
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
namedRouter.post("admin.homeowner.hub.article.add", '/homeowner-hub-article/add', uploadFile.any(),homeOwnerArticleController.add)

/**
 * @api {get} /admin/homeowner-hub-article/:id Homeowner Hub article details
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub article
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

namedRouter.get("admin.homeowner.hub.article.details", '/homeowner-hub-article/:id',homeOwnerArticleController.details)

/**
 * @api {put} /admin/homeowner-hub-article/update Homeowner Hub article edit
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub article
 * @apiParam {string} article_id Id
 * @apiParam {string} title Title
 * @apiParam {string} image_one Image One
 * @apiParam {string} image_two Image Two
 * @apiParam {string} description_one Article content one
 * @apiParam {string} description_two Article content two
 * @apiParam {string} content[{title:'test',image_one:'1.jpg',image_two:'2.jpg',description_one:'fjfjf',description_two:'fff',description_three:'ddpd',identity:'section_one'}] Content for four section
 * @apiParam {string} totalVisit visit count
 * @apiParam {string} meta_title Meta Title
 * @apiParam {string} meta_description Meta Description
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
namedRouter.put("admin.homeowner.hub.article.update", '/homeowner-hub-article/update', uploadFile.any(),homeOwnerArticleController.update)



/**
 * @api {post} /admin/homeowner-hub-article/delete Homeowner Hub article delete
 * @apiVersion 1.0.0
 * @apiGroup Homeowner Hub article
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

namedRouter.post("admin.homeowner.hub.article.delete", '/homeowner-hub-article/delete', request_param.any(),homeOwnerArticleController.delete)


module.exports = router;