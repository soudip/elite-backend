const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const cmsController = require('webservice/admin/cms.controller');

namedRouter.all('/cms*', auth.authenticateAPI);
/**
 * @api {get} /admin/cms/list CMS list
 * @apiVersion 1.0.0
 * @apiGroup CMS
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ea98b6ac7d64cd82b03ae1a",
            "title": "Terms And Conditions",
            "slug": "terms-and-conditions",
            "content": "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
            "page_group": "Terms And Conditions",
            "isDeleted": false,
            "status": "Active",
            "updatedAt": "2020-04-29T10:53:26.074Z"
        },
        {
            "_id": "5ea98c2bc7d64cd82b03b278",
            "title": "Privacy Policy",
            "slug": "privacy-policy",
            "content": "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
            "page_group": "Privacy Policy",
            "isDeleted": false,
            "status": "Active",
            "updatedAt": "2020-04-29T15:23:48.154Z"
        },
        {
            "_id": "5ebab757c7d64cd82b515bec",
            "title": "Cookie Policy",
            "slug": "cookie-policy",
            "content": "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
            "page_group": "Cookie Policy",
            "isDeleted": false,
            "status": "Active",
            "updatedAt": "2020-05-12T15:23:48.154Z"
        },
        {
            "_id": "5eec82de2efe3a09d93307d8",
            "title": "test",
            "slug": "abcd",
            "content": "ddff",
            "page_group": "front",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-19T09:18:22.566Z",
            "__v": 0
        }
    ],
    "message": "CMS fetched Successfully"
}
*/

namedRouter.get("admin.cms.list", '/cms/list',cmsController.list);


/**
 * @api {get}  /admin/cms/:id CMS details
 * @apiVersion 1.0.0
 * @apiGroup CMS
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5eec82de2efe3a09d93307d8",
        "title": "test",
        "slug": "abcd",
        "content": "ddff",
        "page_group": "front",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-19T09:18:22.566Z",
        "__v": 0
    },
    "message": "CMS fetched Successfully"
}
*/

namedRouter.get("admin.cms.details", '/cms/:id',cmsController.details)


/**
 * @api {post} /admin/cms/add CMS Add
 * @apiVersion 1.0.0
 * @apiGroup CMS
 * @apiParam {string} title
 * @apiParam {string} content
 * @apiParam {string} slug
 * @apiParam {string} page_group
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test",
        "slug": "abcd",
        "content": "ddff",
        "page_group": "front",
        "status": "Active",
        "isDeleted": false,
        "_id": "5eec82de2efe3a09d93307d8",
        "createdAt": "2020-06-19T09:18:22.566Z",
        "__v": 0
    },
    "message": "CMS Created successfully"
}
*/
namedRouter.post("admin.cms.add", '/cms/add', request_param.any(),cmsController.add)



/**
 * @api {put} /admin/cms/update CMS Edit
 * @apiVersion 1.0.0
 * @apiGroup CMS
 * @apiParam {string} cms_id Id
 * @apiParam {string} title
 * @apiParam {string} content
 * @apiParam {string} slug
 * @apiParam {string} page_group
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test1",
        "slug": "abcd",
        "content": "ddff",
        "page_group": "front",
        "status": "Active",
        "isDeleted": false,
        "_id": "5eec82de2efe3a09d93307d8",
        "createdAt": "2020-06-19T09:18:22.566Z",
        "__v": 0
    },
    "message": "CMS Updated Successfully"
}
*/
namedRouter.put("admin.cms.update", '/cms/update', request_param.any(),cmsController.update)



/**
 * @api {post} /admin/cms/delete CMS Delete
 * @apiVersion 1.0.0
 * @apiGroup CMS
 * @apiParam {string} cms_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test1",
        "slug": "abcd",
        "content": "ddff",
        "page_group": "front",
        "status": "Active",
        "isDeleted": true,
        "_id": "5eec82de2efe3a09d93307d8",
        "createdAt": "2020-06-19T09:18:22.566Z",
        "__v": 0
    },
    "message": "CMS Deleted Successfully"
}
*/

namedRouter.post("admin.cms.delete", '/cms/delete', request_param.any(),cmsController.delete)


module.exports = router;