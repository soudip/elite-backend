const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const roleController = require('webservice/admin/role.controller');


/**
 * @api {get} /admin/role/list Role List
 * @apiVersion 1.0.0
 * @apiGroup Role
 * @apiSuccessExample {json} Success
 * {
  "status": 200,
  "data": [
    {
      "_id": "5c87651bdc38e258156b0bf3",
      "role": "admin",
      "desc": "<p>This is the Admin role here.</p>\r\n",
      "roleDisplayName": "Admin"
    },
    {
      "_id": "5cc0427b9c4c3ac9c47b2579",
      "role": "user",
      "desc": "<p>This is the user role here.</p>\r\n",
      "roleDisplayName": "user"
    }
  ],
  "message": "Roles fetched Successfully"
}
*/
namedRouter.get("admin.role.list", '/role/list',roleController.list);

module.exports = router;