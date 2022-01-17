const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planApplianceItemController = require('webservice/admin/plan_appliance_item.controller');

namedRouter.all('/plan-appliance-item*', auth.authenticateAPI);

/**
 * @api {get} /admin/plan-appliance-item/list Plan Appliance list
 * @apiVersion 1.0.0
 * @apiGroup Plan Appliance Items
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f240ae16382e747e9530081",
            "title": "Plan Item",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-07-31T12:13:21.373Z",
            "__v": 0
        }
    ],
    "message": "Plan Appliance Item fetched Successfully"
}
*/

namedRouter.get("admin.planApplianceItem.list", '/plan-appliance-item/list',planApplianceItemController.list);


/**
 * @api {get} /admin/plan-appliance-item/:id Plan Appliance Item details
 * @apiVersion 1.0.0
 * @apiGroup Plan Appliance Items
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f240ae16382e747e9530081",
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-31T12:13:21.373Z",
        "__v": 0
    },
    "message": "Plan Appliance Item fetched Successfully"
}
*/

namedRouter.get("admin.planApplianceItem.details", '/plan-appliance-item/:id',planApplianceItemController.details)

/**
 * @api {post} /admin/plan-appliance-item/add Plan Appliance Items Add
 * @apiVersion 1.0.0
 * @apiGroup Plan Appliance Items
 * @apiParam {string} title Item Name
 * @apiParam {array} covered_list What is covered
 * @apiParam {array} not_covered_list What is covered
 * @apiParam {string} highlight Coverage highlight
 * @apiParam {string} note Important Note
 * @apiParam {float} coverage_limit Coverage limit

 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f240ae16382e747e9530081",
        "createdAt": "2020-07-31T12:13:21.373Z",
        "__v": 0
    },
    "message": "Plan Appliance Item Created successfully"
}
*/
namedRouter.post("admin.planApplianceItem.add", '/plan-appliance-item/add', request_param.any(),planApplianceItemController.add)



/**
 * @api {put} /admin/plan-appliance-item/update Plan Appliance Items Update
 * @apiVersion 1.0.0
 * @apiGroup Plan Appliance Items
 * @apiParam {string} plan_appliance_item_id Id
 * @apiParam {string} title Item Name
 * @apiParam {float} price Item Price
 * @apiParam {array} covered_list What is covered
 * @apiParam {array} not_covered_list What is covered
 * @apiParam {string} highlight Coverage highlight
 * @apiParam {string} note Important Note
 * @apiParam {float} coverage_limit Coverage limit
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f240ae16382e747e9530081",
        "createdAt": "2020-07-31T12:13:21.373Z",
        "__v": 0
    },
    "message": "Plan Appliance Item Updated Successfully"
}
*/
namedRouter.put("admin.planApplianceItem.update", '/plan-appliance-item/update', request_param.any(),planApplianceItemController.update)



/**
 * @api {post} /admin/plan-appliance-item/delete Plan Appliance Item Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan Appliance Items
 * @apiParam {string} plan_appliance_item_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": true,
        "_id": "5f240ae16382e747e9530081",
        "createdAt": "2020-07-31T12:13:21.373Z",
        "__v": 0
    },
    "message": "Plan Appliance Item Deleted Successfully"
}
*/

namedRouter.post("admin.planApplianceItem.delete", '/plan-appliance-item/delete', request_param.any(),planApplianceItemController.delete)


module.exports = router;