const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planCoveredItemController = require('webservice/admin/plan_covered_item.controller');

const Storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./public/uploads/plan_covered_item");
	},
	filename: (req, file, callback) => {
		callback(null, Date.now() + "_" + file.originalname.replace(/\s/g, '_'));
	}
});

const uploadFile = multer({
	storage: Storage
});

namedRouter.all('/plan-covered-item*', auth.authenticateAPI);

/**
 * @api {get} /admin/plan-covered-item/list Plan Covered list
 * @apiVersion 1.0.0
 * @apiGroup Plan Covered Items
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
    "message": "Plan Covered Item fetched Successfully"
}
*/

namedRouter.get("admin.planCoveredItem.list", '/plan-covered-item/list',planCoveredItemController.list);


/**
 * @api {get} /admin/plan-covered-item/:id Plan Covered Item details
 * @apiVersion 1.0.0
 * @apiGroup Plan Covered Items
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
    "message": "Plan Covered Item fetched Successfully"
}
*/

namedRouter.get("admin.planCoveredItem.details", '/plan-covered-item/:id',planCoveredItemController.details)

/**
 * @api {post} /admin/plan-covered-item/add Plan Covered Items Add
 * @apiVersion 1.0.0
 * @apiGroup Plan Covered Items
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
    "message": "Plan Covered Item Created successfully"
}
*/
namedRouter.post("admin.planCoveredItem.add", '/plan-covered-item/add', uploadFile.any(),planCoveredItemController.add)



/**
 * @api {put} /admin/plan-covered-item/update Plan Covered Items Update
 * @apiVersion 1.0.0
 * @apiGroup Plan Covered Items
 * @apiParam {string} plan_covered_item_id Id
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
    "message": "Plan Covered Item Updated Successfully"
}
*/
namedRouter.put("admin.planCoveredItem.update", '/plan-covered-item/update', uploadFile.any(),planCoveredItemController.update)

/**
 * @api {post} /admin/plan-covered-item/bulk-status-change Plan Covered Item Bulk Status Change
 * @apiVersion 1.0.0
 * @apiGroup Plan Covered Items
 * @apiParam {string} plan_covered_item_id ["5ed783c7a3ffce0e11723ba5","5ed783c7a3ffce0e11723ba5"]
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
    "message": "Plan Covered Item status Updated Successfully"
}
*/
namedRouter.post("admin.planCoveredItem.bulk.status.update", '/plan-covered-item/bulk-status-change', request_param.any(),planCoveredItemController.bulkStatusupdate)

/**
 * @api {post} /admin/plan-covered-item/delete Plan Covered Item Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan Covered Items
 * @apiParam {string} plan_covered_item_id Id
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
    "message": "Plan Covered Item Deleted Successfully"
}
*/

namedRouter.post("admin.planCoveredItem.delete", '/plan-covered-item/delete', request_param.any(),planCoveredItemController.delete)


module.exports = router;