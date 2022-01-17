const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planAdditionalItemController = require('webservice/admin/plan_additional_item.controller');

namedRouter.all('/plan-additional-item*', auth.authenticateAPI);

/**
 * @api {get} /admin/plan-additional-item/list Plan Additional list
 * @apiVersion 1.0.0
 * @apiGroup Plan Additional Items
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f242773ada59456dc50233f",
            "title": "Tax",
            "price": 43.5,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-07-31T14:15:15.874Z",
            "__v": 0
        }
    ],
    "message": "Plan Additional Item fetched Successfully"
}
*/

namedRouter.get("admin.planAdditionalItem.list", '/plan-additional-item/list',planAdditionalItemController.list);


/**
 * @api {get} /admin/plan-additional-item/:id Plan Additional Item details
 * @apiVersion 1.0.0
 * @apiGroup Plan Additional Items
 * @apiParam {string} id plan Additional Item Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f242773ada59456dc50233f",
        "title": "Duplex",
        "price": 42,
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-31T14:15:15.874Z",
        "__v": 0
    },
    "message": "Plan Additional Item fetched Successfully"
}
*/

namedRouter.get("admin.planAdditionalItem.details", '/plan-additional-item/:id',planAdditionalItemController.details)

/**
 * @api {post} /admin/plan-additional-item/add Plan Additional Items Add
 * @apiVersion 1.0.0
 * @apiGroup Plan Additional Items
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
        "price": 42,
        "status": "Active",
        "isDeleted": false,
        "_id": "5f242773ada59456dc50233f",
        "createdAt": "2020-07-31T14:15:15.874Z",
        "__v": 0
    },
    "message": "Plan Additional Item Created successfully"
}
*/
namedRouter.post("admin.planAdditionalItem.add", '/plan-additional-item/add', request_param.any(),planAdditionalItemController.add)



/**
 * @api {put} /admin/plan-additional-item/update Plan Covered Items Update
 * @apiVersion 1.0.0
 * @apiGroup Plan Additional Items
 * @apiParam {string} plan_additional_item_id Id
 * @apiGroup Plan Additional Items
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
        "title": "Tax",
        "price": 43.5,
        "status": "Active",
        "isDeleted": true,
        "_id": "5f242773ada59456dc50233f",
        "createdAt": "2020-07-31T14:15:15.874Z",
        "__v": 0
    },
    "message": "Plan Additional Item Updated Successfully"
}
*/
namedRouter.put("admin.planAdditionalItem.update", '/plan-additional-item/update', request_param.any(),planAdditionalItemController.update)



/**
 * @api {post} /admin/plan-additional-item/delete Plan Covered Item Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan Additional Items
 * @apiParam {string} plan_additional_item_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "price": 42,
        "status": "Active",
        "isDeleted": true,
        "_id": "5f242773ada59456dc50233f",
        "createdAt": "2020-07-31T14:15:15.874Z",
        "__v": 0
    },
    "message": "Plan Additional Item Deleted Successfully"
}
*/

namedRouter.post("admin.planAdditionalItem.delete", '/plan-additional-item/delete', request_param.any(),planAdditionalItemController.delete)


module.exports = router;