const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planCategoryController = require('webservice/admin/plan_category.controller');

namedRouter.all('/plan-category*', auth.authenticateAPI);
/**
 * @api {get} /admin/plan-category/list Category list
 * @apiVersion 1.0.0
 * @apiGroup Plan Category
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f23f300e58e393af84da430",
            "title": "Duplex",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-07-31T10:31:28.148Z",
            "__v": 0
        }
    ],
    "message": "Plan category fetched Successfully"
}
*/

namedRouter.get("admin.plan.category.list", '/plan-category/list',planCategoryController.list);


/**
 * @api {get} /admin/plan-category/:id Category details
 * @apiVersion 1.0.0
 * @apiGroup Plan Category
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f23f300e58e393af84da430",
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan category fetched Successfully"
}
*/

namedRouter.get("admin.plan.category.details", '/plan-category/:id',planCategoryController.details)

/**
 * @api {post} /admin/plan-category/add Category Add
 * @apiVersion 1.0.0
 * @apiGroup Plan Category
 * @apiParam {string} name Name
 * @apiParam {string} description Description
 * @apiParam {string} maximum_category_coverage Maximum Category Coverage
 * @apiParam {string} maximum_category_coverage_increase Maximum Category Coverage Increase
 * @apiParam {string} maximum_category_coverage_decrase Maximum Category Coverage Decrease

 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f23f300e58e393af84da430",
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan category Created successfully"
}
*/
namedRouter.post("admin.plan.category.add", '/plan-category/add', request_param.any(),planCategoryController.add)



/**
 * @api {put} /admin/plan-category/update Category Update
 * @apiVersion 1.0.0
 * @apiGroup Plan Category
 * @apiParam {string} plan_category_id Id
 * @apiParam {string} name Name
 * @apiParam {string} description Description
 * @apiParam {string} maximum_category_coverage Maximum Category Coverage
 * @apiParam {string} maximum_category_coverage_increase Maximum Category Coverage Increase
 * @apiParam {string} maximum_category_coverage_decrase Maximum Category Coverage Decrease
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "_id": "5f23f300e58e393af84da430",
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan category Updated Successfully"
}
*/
namedRouter.put("admin.plan.category.update", '/plan-category/update', request_param.any(),planCategoryController.update)


/**
 * @api {get} /admin/plan-category/optional Plan Category optional
 * @apiVersion 1.0.0
 * @apiGroup Plan Category
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f23f300e58e393af84da430",
        "title": "Duplex",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-07-31T10:31:28.148Z",
        "__v": 0
    },
    "message": "Plan category fetched Successfully"
}
*/

namedRouter.get("admin.plan.category.optional", '/plan-category/optional',planCategoryController.optional)


/**
 * @api {post} /admin/plan-category/delete Category Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan Category
 * @apiParam {string} plan_category_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Duplex",
        "status": "Active",
        "isDeleted": true,
        "_id": "5f23efe73fc11c398948156e",
        "createdAt": "2020-07-31T10:18:15.895Z",
        "__v": 0
    },
    "message": "Plan category Deleted Successfully"
}
*/

namedRouter.post("admin.plan.category.delete", '/plan-category/delete', request_param.any(),planCategoryController.delete)


module.exports = router;