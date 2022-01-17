const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const optionalItemController = require('webservice/admin/optional_item_category.controller');

namedRouter.all('/optional-item-category*', auth.authenticateAPI);
/**
 * @api {get} /admin/optional-item-category/list Optional Item Category List
 * @apiVersion 1.0.0
 * @apiGroup Optional Item Category
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "615181137f8199142326a367",
            "title": "APPLIANCES",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:30:11.946Z",
            "__v": 0
        },
        {
            "_id": "6151812a7f8199142326a36c",
            "title": "SYSTEMS",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:30:34.185Z",
            "__v": 0
        },
        {
            "_id": "615181357f8199142326a371",
            "title": "EXTERIOR",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:30:45.835Z",
            "__v": 0
        },
        {
            "_id": "615181427f8199142326a376",
            "title": "PLUMBING AND PUMPS",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:30:58.372Z",
            "__v": 0
        },
        {
            "_id": "615181507f8199142326a37b",
            "title": "POOL AND SPA",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:31:12.854Z",
            "__v": 0
        },
        {
            "_id": "6151815a7f8199142326a380",
            "title": "OPTIONAL ITEMS",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:31:22.387Z",
            "__v": 0
        },
        {
            "_id": "615181657f8199142326a385",
            "title": "HOME ELECTRONICS",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:31:33.075Z",
            "__v": 0
        },
        {
            "_id": "6151816e7f8199142326a38a",
            "title": "HOME SECURITY",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:31:42.297Z",
            "__v": 0
        },
        {
            "_id": "615181777f8199142326a38f",
            "title": "GUEST UNIT",
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2021-09-27T08:31:51.754Z",
            "__v": 0
        }
    ],
    "message": "Optional item category fetched Successfully"
}
*/

namedRouter.get("admin.optional.item.category.list", '/optional-item-category/list',optionalItemController.list);


/**
 * @api {get} /admin/optional-item-category/:id Optional Item Category details
 * @apiVersion 1.0.0
 * @apiGroup Optional Item Category
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "6151812a7f8199142326a36c",
            "title": "SYSTEMS",
            "plan_covered_items_data": [
                {
                    "_id": "5fd875e10e8144b9d57a41a7",
                    "title": "CLOTHES WASHER",
                    "image": "1608038562106_Clothes_Washes.png",
                    "description": "A washing machine (laundry machine, clothes washer, or washer) is a home\r\nappliance used to wash laundry.",
                    "average_cost_repair": 225,
                    "average_cost_replacement": 750,
                    "coverage_highlight": [
                        ""
                    ],
                    "covered_subtitle": "",
                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, thermostats, motors, pumps, timers, wiring, belts, relays and switches,\r\nhoses, burners and heating elements, pulleys, igniters, fuses, lint screens and gas\r\nvalve",
                    "covered_additional_information": "",
                    "covered_system_types": [
                        ""
                    ],
                    "not_covered_subtitle": "",
                    "not_covered_list": "soap dispenser | panels | filters | cabinetry",
                    "not_covered_additional_information": "",
                    "not_covered_system_types": [
                        ""
                    ],
                    "freon_coverage": "",
                    "coverage_limit": "$2,000 per Term ",
                    "standard_price": 59,
                    "custom_price": 69,
                    "item_removal_price": 20,
                    "percentage_fee": "10",
                    "note": "",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-12-15T08:37:53.831Z",
                    "__v": 0,
                    "maximum_allowed_decrease": "500",
                    "maximum_allowed_increase": "3000",
                    "maximum_coverage_decrease_fee": "2",
                    "maximum_coverage_increase_fee": "4",
                    "type": "appliance",
                    "maxQuantity": 0
                },
                {
                    "_id": "5fd8715d0e8144b9d57a41a6",
                    "title": "REFRIGERATOR INCLUDING ICE MAKER & WATER DISPENSER",
                    "image": "1608035088548_REFRIGERATOR_INCLUDING_ICE_MAKER_&_WATER_DISPENSER.png",
                    "description": "A refrigerator is an appliance for keeping things cold. Its main goal is to store food\r\nand beverages in a cold temperature.",
                    "average_cost_repair": 275,
                    "average_cost_replacement": 2000,
                    "coverage_highlight": [
                        ""
                    ],
                    "covered_subtitle": "",
                    "covered_list": "All components and parts needed to perform its full functionality, including\r\nintegrated freezer, ice maker, ice dispenser, water dispenser, control board,\r\ncompressor, condensers, evaporators, fan motors, timers, thermostats, wiring,\r\nracks, shelves, door seals, door alarms and consequential food spoilage",
                    "covered_additional_information": "",
                    "covered_system_types": [
                        ""
                    ],
                    "not_covered_subtitle": "",
                    "not_covered_list": "touch panel | filter | water lines | freon | leaks | Free standing freezer | multi media\r\ncenters | wine chillers | panels | cabinetry",
                    "not_covered_additional_information": "",
                    "not_covered_system_types": [
                        ""
                    ],
                    "freon_coverage": "",
                    "coverage_limit": "$3,000 per Term",
                    "standard_price": 69,
                    "custom_price": 79,
                    "item_removal_price": 25,
                    "percentage_fee": "10",
                    "note": "",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-12-15T08:18:37.009Z",
                    "__v": 0,
                    "maximum_allowed_decrease": "1000",
                    "maximum_allowed_increase": "12000",
                    "maximum_coverage_decrease_fee": "2",
                    "maximum_coverage_increase_fee": "4",
                    "type": "appliance",
                    "maxQuantity": 3
                }
            ]
        }
    ],
    "message": "Optional item category fetched Successfully"
}
*/

namedRouter.get("admin.optional.item.category.details", '/optional-item-category/:id',optionalItemController.details)

/**
 * @api {post} /admin/optional-item-category/add Optional Item Category Add
 * @apiVersion 1.0.0
 * @apiGroup Optional Item Category
 * @apiParam {string} title
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "GUEST UNIT",
        "status": "Active",
        "isDeleted": false,
        "_id": "615181777f8199142326a38f",
        "createdAt": "2021-09-27T08:31:51.754Z",
        "__v": 0
    },
    "message": "Optional item category Created successfully"
}
*/
namedRouter.post("admin.optional.item.category.add", '/optional-item-category/add', request_param.any(),optionalItemController.add)



/**
 * @api {put} /admin/optional-item-category/update Optional Item Category Edit
 * @apiVersion 1.0.0
 * @apiGroup Optional Item Category
 * @apiParam {string} title
 * @apiParam {string} optional_item_category_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "APPLIANCES1",
        "status": "Active",
        "isDeleted": false,
        "_id": "615181137f8199142326a367",
        "createdAt": "2021-09-27T08:30:11.946Z",
        "__v": 0
    },
    "message": "Optional item category Updated Successfully"
}
*/
namedRouter.put("admin.optional.item.category.update", '/optional-item-category/update', request_param.any(),optionalItemController.update)



/**
 * @api {post} /admin/optional-item-category/delete Optional Item Category Delete
 * @apiVersion 1.0.0
 * @apiGroup Optional Item Category
 * @apiParam {string} optional_item_category_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "APPLIANCES",
        "status": "Active",
        "isDeleted": true,
        "_id": "615181137f8199142326a367",
        "createdAt": "2021-09-27T08:30:11.946Z",
        "__v": 0
    },
    "message": "Optional item category Deleted Successfully"
}
*/

namedRouter.post("admin.optional.item.category.delete", '/optional-item-category/delete', request_param.any(),optionalItemController.delete)

/**
 * @api {put} /admin/optional-item-category/assign Item Assign
 * @apiVersion 1.0.0
 * @apiGroup Optional Item Category
 * @apiParam {array} covered_item_id ['5fdb312b0e8144b9d57a41b0','5fdb312b0e8144b9d57a41b0','5fdb312b0e8144b9d57a41b0']
 * @apiParam {string} optional_item_category_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test category",
        "covered_item_id": [
            "5fdb312b0e8144b9d57a41b0",
            "5fdb312b0e8144b9d57a41b0",
            "5fdb312b0e8144b9d57a41b0"
        ],
        "status": "Active",
        "isDeleted": false,
        "_id": "6151a994ec071222f411e8e4",
        "createdAt": "2021-09-27T11:23:00.835Z",
        "__v": 0
    },
    "message": "Item has assigned Successfully"
}
*/
namedRouter.put("admin.optional.item.category.assign", '/optional-item-category/assign', request_param.any(),optionalItemController.assignItem)


module.exports = router;