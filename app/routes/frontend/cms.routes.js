const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const cmsController = require('webservice/frontend/cms.controller');


/**
 * @api {get} /frontend/cms/:slug CMS by slug
 * @apiVersion 1.0.0
 * @apiGroup CMS
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ebab757c7d64cd82b515bec",
        "title": "Cookie Policy",
        "slug": "cookie-policy",
        "content": "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n",
        "page_group": "Cookie Policy",
        "isDeleted": false,
        "status": "Active",
        "updatedAt": "2020-05-12T15:23:48.154Z"
    },
    "message": "CMS fetched Successfully"
}
*/
namedRouter.get("forntend.cms.details", '/cms/:slug',cmsController.getContent);


module.exports = router;