const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const permissionController = require('webservice/admin/permission.controller');

namedRouter.all('/permission*', auth.authenticateAPI);

/**
 * @api {post} /admin/permission/create Permissions Create
 * @apiVersion 1.0.0
 * @apiGroup Permissions
 * @apiHeader x-access-token Users Access Token
 * @apiParam {string} permission_group Group
 * @apiParam {string} displayName Display Name
 * @apiParam {string} operation Link or Path
 * @apiParam {string} description Description
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "permission_group": "Lead",
        "operation": [
            "lead.add"
        ],
        "displayName": "Lead Add",
        "description": "Lead add permission",
        "status": "Active",
        "is_deleted": "no",
        "_id": "5ed7bd0c67374c1246b4802c",
        "__v": 0
    },
    "message": "Permissions created Successfully"
}
*/
namedRouter.post("admin.permission.create", '/permission/create', request_param.any(),permissionController.createPermissions);

/**
 * @api {get} /admin/permission/role/:id Role Permissions list
 * @apiVersion 1.0.0
 * @apiGroup Permissions
 * @apiHeader x-access-token Users Access Token
 * @apiParam id Role Id
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "Lead",
            "permission_list": [
                {
                    "_id": "5ed7c16dd5d10f12b04c77e8",
                    "permission_group": "Lead",
                    "operation": [
                        "lead.edit"
                    ],
                    "displayName": "Lead Edit",
                    "description": "Lead Edit permission",
                    "hasAccess": false
                },
                {
                    "_id": "5ed7c1a11ba5f212b6888adb",
                    "permission_group": "Lead",
                    "operation": [
                        "lead.add"
                    ],
                    "displayName": "Lead Add",
                    "description": "Lead Add permission",
                    "hasAccess": false
                }
            ]
        }
    ],
    "message": "Permissions fetched Successfully"
}
*/

namedRouter.get("admin.permission.role.list", '/permission/role/:id', permissionController.getRolePermissionList);


/**
 * @api {post} /admin/permission/role/update Role Permissions Update
 * @apiVersion 1.0.0
 * @apiGroup Permissions
 * @apiHeader x-access-token Users Access Token
 * @apiParam role Role Id
 * @apiParam permissionall Array of permission id
 * @apiSuccessExample {json} Success
 * {
  "status": 200,
  "data": {
    "_id" : ObjectId("5dd6660f78ba8f8e52593994"),
    "role" : ObjectId("5cc0427b9c4c3ac9c47b2579"),
    "permissionall" : [ 
        ObjectId("5dd64acd78ba8f8e52575fcd")
    ]
},
  "message": "Permissions updated Successfully"
}
*/
namedRouter.post("admin.permission.role.update", '/permission/role/update', request_param.any(),permissionController.updateRolePermission);

/**
 * @api {get} /admin/permission/user/:id User Permissions list
 * @apiVersion 1.0.0
 * @apiGroup Permissions
 * @apiHeader x-access-token Users Access Token
 * @apiParam id User Id
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "Lead",
            "permission_list": [
                {
                    "_id": "5ed7c16dd5d10f12b04c77e8",
                    "permission_group": "Lead",
                    "operation": [
                        "lead.edit"
                    ],
                    "displayName": "Lead Edit",
                    "description": "Lead Edit permission",
                    "hasAccess": false
                },
                {
                    "_id": "5ed7c1a11ba5f212b6888adb",
                    "permission_group": "Lead",
                    "operation": [
                        "lead.add"
                    ],
                    "displayName": "Lead Add",
                    "description": "Lead Add permission",
                    "hasAccess": false
                }
            ]
        }
    ],
    "message": "Permissions fetched Successfully"
}
*/

namedRouter.get("admin.permission.user.list", '/permission/user/:id', permissionController.getUserPermissionList);

/**
 * @api {post} /admin/permission/user/update User Permissions Update
 * @apiVersion 1.0.0
 * @apiGroup Permissions
 * @apiHeader x-access-token Users Access Token
 * @apiParam userId User Id
 * @apiParam permissionall Array of permission id
 * @apiSuccessExample {json} Success
 * {
  "status": 200,
  "data": {
    "_id" : ObjectId("5dd6660f78ba8f8e52593994"),
    "userId" : ObjectId("5cc0427b9c4c3ac9c47b2579"),
    "permissionall" : [ 
        ObjectId("5dd64acd78ba8f8e52575fcd")
    ]
},
  "message": "Permissions updated Successfully"
}
*/
namedRouter.post("admin.permission.user.update", '/permission/user/update', request_param.any(),permissionController.updateUserPermission);

module.exports = router;