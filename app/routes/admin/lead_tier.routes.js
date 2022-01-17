const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const leadTierController = require('webservice/admin/lead_tier.controller');

namedRouter.all('/lead-tier*', auth.authenticateAPI);
/**
 * @api {get} /admin/lead-tier/list Lead Tier list
 * @apiVersion 1.0.0
 * @apiGroup Lead Tier
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ef35edbfc403c0b282a9230",
            "title": "Tier One",
            "description": "Tier One",
            "perHourCapacity": 2,
            "perDayCapacity": 10,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-24T14:10:35.738Z",
            "__v": 0
        },
        {
            "_id": "5ef35f0100cc850b40dafe37",
            "title": "Tier Two",
            "description": "Tier Two",
            "perHourCapacity": 3,
            "perDayCapacity": 11,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-24T14:11:13.613Z",
            "__v": 0
        }
    ],
    "message": "Lead tier fetched Successfully"
}
*/

namedRouter.get("admin.lead.tier.list", '/lead-tier/list',leadTierController.list);


/**
 * @api {get} /admin/lead-tier/:id Lead Tier details
 * @apiVersion 1.0.0
 * @apiGroup Lead Tier
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ef35edbfc403c0b282a9230",
        "title": "Tier One",
        "description": "Tier One",
        "perHourCapacity": 3,
        "perDayCapacity": 11,
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-24T14:10:35.738Z",
        "__v": 0
    },
    "message": "Lead tier fetched Successfully"
}
*/

namedRouter.get("admin.lead.tier.details", '/lead-tier/:id',leadTierController.details)

/**
 * @api {post} /admin/lead-tier/add Lead Tier Add
 * @apiVersion 1.0.0
 * @apiGroup Lead Tier
 * @apiParam {string} title Title
 * @apiParam {string} description Description
 * @apiParam {int} perHourCapacity Per hour lead taken capacity
 * @apiParam {int} perDayCapacity Per day lead taken capacity
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Tier One",
        "description": "Tier One",
        "perHourCapacity": 2,
        "perDayCapacity": 10,
        "status": "Active",
        "isDeleted": false,
        "_id": "5ef35edbfc403c0b282a9230",
        "createdAt": "2020-06-24T14:10:35.738Z",
        "__v": 0
    },
    "message": "Lead tier Created successfully"
}
*/
namedRouter.post("admin.lead.tier.add", '/lead-tier/add', request_param.any(),leadTierController.add)



/**
 * @api {put} /admin/lead-tier/update Lead Tier Edit
 * @apiVersion 1.0.0
 * @apiGroup Lead Tier
 * @apiParam {string} lead_tier_id Id
 * @apiParam {string} title Title
 * @apiParam {string} description Description
 * @apiParam {int} perHourCapacity Per hour lead taken capacity
 * @apiParam {int} perDayCapacity Per day lead taken capacity
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Tier One",
        "description": "Tier One",
        "perHourCapacity": 3,
        "perDayCapacity": 11,
        "status": "Active",
        "isDeleted": false,
        "_id": "5ef35edbfc403c0b282a9230",
        "createdAt": "2020-06-24T14:10:35.738Z",
        "__v": 0
    },
    "message": "Lead tier Updated Successfully"
}
*/
namedRouter.put("admin.lead.tier.update", '/lead-tier/update', request_param.any(),leadTierController.update)



/**
 * @api {post} /admin/lead-tier/delete Lead Tier Delete
 * @apiVersion 1.0.0
 * @apiGroup Lead Tier
 * @apiParam {string} lead_tier_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "Tier One",
        "description": "Tier One",
        "perHourCapacity": 3,
        "perDayCapacity": 11,
        "status": "Active",
        "isDeleted": true,
        "_id": "5ef35edbfc403c0b282a9230",
        "createdAt": "2020-06-24T14:10:35.738Z",
        "__v": 0
    },
    "message": "Lead tier Deleted Successfully"
}
*/

namedRouter.post("admin.lead.tier.delete", '/lead-tier/delete', request_param.any(),leadTierController.delete)


module.exports = router;