const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const multerS3 = require('multer-s3');
const planController = require('webservice/admin/plan.controller');

/* Image uplaod in aws */
const uploadFile = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: config.aws.bucket,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, 'plan/'+file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'))
        }
    })
})

const request_param = multer();

namedRouter.all('/plan*', auth.authenticateAPI);
/**
 * @api {post} /admin/plan/list Plan list
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5f2a8290511b0708685afbe6",
            "title": "test plan",
            "image": "plan_image_1596621452717_download.jpeg",
            "covered_items": [
                [
                    {
                        "_id": "5f27e8920502ae264b47ffd6",
                        "title": "duplex",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-08-03T10:36:02.433Z",
                        "__v": 0
                    }
                ],
                [
                    {
                        "_id": "5f240ae16382e747e9530081",
                        "title": "Item1",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-07-31T12:13:21.373Z",
                        "__v": 0
                    }
                ]
            ],
            "additional_items": [
                [
                    {
                        "_id": "5f28145f0502ae264b47ffdf",
                        "title": "Tax2",
                        "price": 75,
                        "status": "Active",
                        "isDeleted": true,
                        "createdAt": "2020-08-03T13:42:55.514Z",
                        "__v": 0
                    }
                ],
                [
                    {
                        "_id": "5f242773ada59456dc50233f",
                        "title": "Tax",
                        "price": 43,
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-07-31T14:15:15.874Z",
                        "__v": 0
                    }
                ]
            ],
            "plan_pricing": [
                {
                    "price": "100",
                    "covering_unit": 3,
                    "_id": "5f2a8290511b0708685afbe7",
                    "property_type_id": [
                        {
                            "_id": "5f23f300e58e393af84da430",
                            "title": "Duplex",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-07-31T10:31:28.148Z",
                            "__v": 0
                        }
                    ]
                },
                {
                    "price": "150",
                    "covering_unit": 4,
                    "_id": "5f2a8290511b0708685afbe8",
                    "property_type_id": [
                        {
                            "_id": "5f27e93a0502ae264b47ffda",
                            "title": "fsdf",
                            "status": "Active",
                            "isDeleted": true,
                            "createdAt": "2020-08-03T10:38:50.593Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "service_fee": [
            {
                "price": "75",
                "decrease_prcie": "0",
                "_id": "5f2ad5d4ca3fc30d57a5fba6"
            },
            {
                "price": "100",
                "decrease_prcie": "30",
                "_id": "5f2ad5d4ca3fc30d57a5fba7"
            },
            {
                "price": "125",
                "decrease_prcie": "50",
                "_id": "5f2ad5d4ca3fc30d57a5fba8"
            }
        ]
        }
    ],
    "message": "Plan fetched Successfully"
}
*/

namedRouter.post("admin.plan.list", '/plan/list',request_param.any(),planController.list);


/**
 * @api {get} /admin/plan/:id Plan details
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f2a8290511b0708685afbe6",
        "title": "test plan",
        "image": "plan_image_1596621452717_download.jpeg",
        "covered_items": [
            [
                {
                    "_id": "5f27e8920502ae264b47ffd6",
                    "title": "duplex",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-08-03T10:36:02.433Z",
                    "__v": 0
                }
            ],
            [
                {
                    "_id": "5f240ae16382e747e9530081",
                    "title": "Item1",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-07-31T12:13:21.373Z",
                    "__v": 0
                }
            ]
        ],
        "additional_items": [
            [
                {
                    "_id": "5f28145f0502ae264b47ffdf",
                    "title": "Tax2",
                    "price": 75,
                    "status": "Active",
                    "isDeleted": true,
                    "createdAt": "2020-08-03T13:42:55.514Z",
                    "__v": 0
                }
            ],
            [
                {
                    "_id": "5f242773ada59456dc50233f",
                    "title": "Tax",
                    "price": 43,
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-07-31T14:15:15.874Z",
                    "__v": 0
                }
            ]
        ],
        "plan_pricing": [
            {
                "price": "150",
                "covering_unit": 4,
                "_id": "5f2a8290511b0708685afbe8",
                "property_type_id": [
                    {
                        "_id": "5f27e93a0502ae264b47ffda",
                        "title": "fsdf",
                        "status": "Active",
                        "isDeleted": true,
                        "createdAt": "2020-08-03T10:38:50.593Z",
                        "__v": 0
                    }
                ]
            },
            {
                "price": "100",
                "covering_unit": 3,
                "_id": "5f2a8290511b0708685afbe7",
                "property_type_id": [
                    {
                        "_id": "5f23f300e58e393af84da430",
                        "title": "Duplex",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-07-31T10:31:28.148Z",
                        "__v": 0
                    }
                ]
            }
        ],
        "service_fee": [
            {
                "price": "75",
                "decrease_prcie": "0",
                "_id": "5f2ad5d4ca3fc30d57a5fba6"
            },
            {
                "price": "100",
                "decrease_prcie": "30",
                "_id": "5f2ad5d4ca3fc30d57a5fba7"
            },
            {
                "price": "125",
                "decrease_prcie": "50",
                "_id": "5f2ad5d4ca3fc30d57a5fba8"
            }
        ]
    },
    "message": "Plan fetched Successfully"
}
*/

namedRouter.get("admin.plan.details", '/plan/:id',planController.details)

/**
 * @api {post} /admin/plan/add Plan Add
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {string} title
 * @apiParam {string} image
 * @apiParam {string} maximum_aggregated_coverage
 * @apiParam {Object} service_fee {price_0:10.00,price_70:100.00,price_100:30.00,price_130:60.00}
 * @apiParam {Array} category_covered_item[{category_id:"5ee87abd9522430a55cdc82a",covered_item_id["5ee87abd9522430a55cdc82c","5ee87abd9522430a55cdc82d"]}]
 * @apiParam {Array} property_pricing[{property_type_id:"5f23f300e58e393af84da430",info:[{property_size_id:"5ee87abd9522430a55cdc82a",covered_item_id["5ee87abd9522430a55cdc82c","5ee87abd9522430a55cdc82d"],cost_per_plan:12.20,quantity:2,description:"test here"}]}]
 * @apiParam {string} item_removal
 * @apiParam {Array} optional_item[{covered_item_id:"5ee87abd9522430a55cdc82c",quantity:2}]
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test plan 12",
        "image": "plan_image_1596623349656_download.jpeg",
        "covered_item_id": [
            "5f240ae16382e747e9530081",
            "5f27e8920502ae264b47ffd6"
        ],
        "additional_item_id": [
            "5f242773ada59456dc50233f",
            "5f28145f0502ae264b47ffdf"
        ],
        "isDeleted": false,
        "status": "Active",
        "_id": "5f2a89f8d651de0a5ebdeaea",
        "plan_pricing": [
            {
                "price": "100",
                "covering_unit": 3,
                "_id": "5f2a89f8d651de0a5ebdeaeb",
                "property_type_id": "5f23f300e58e393af84da430"
            },
            {
                "price": "150",
                "covering_unit": 4,
                "_id": "5f2a89f8d651de0a5ebdeaec",
                "property_type_id": "5f27e93a0502ae264b47ffda"
            }
        ],
        "service_fee": [
            {
                "price": "75",
                "decrease_prcie": "0",
                "_id": "5f2ad5d4ca3fc30d57a5fba6"
            },
            {
                "price": "100",
                "decrease_prcie": "30",
                "_id": "5f2ad5d4ca3fc30d57a5fba7"
            },
            {
                "price": "125",
                "decrease_prcie": "50",
                "_id": "5f2ad5d4ca3fc30d57a5fba8"
            }
        ],
        "createdAt": "2020-08-05T10:29:12.201Z",
        "updatedAt": "2020-08-05T10:29:12.201Z"
    },
    "message": "Plan Created successfully"
}
*/
namedRouter.post("admin.plan.add", '/plan/add', uploadFile.any(),planController.add)

/**
 * @api {put} /admin/plan/update Plan Edit
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {string} plan_id Id
 * @apiParam {string} title
 * @apiParam {string} image
 * @apiParam {Array} plan_pricing[{property_type_id:"5ee87abd9522430a55cdc82a",price:100.00,covering_unit:4},{property_type_id:"5ee87abd9522430a55cdc82a",price:100.00,covering_unit:4}]
 * @apiParam {Array} covered_item_id["5ee87abd9522430a55cdc82a","5ee87abd9522430a55cdc82b"]
 * @apiParam {Array} additional_item_id["5ee87abd9522430a55cdc82c","5ee87abd9522430a55cdc82d"]
 * @apiParam {Array} service_fee[{price:75.00,decrease_prcie:0.00},{price:100.00,decrease_prcie:30.00},{price:125.00,decrease_prcie:50.00}]
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test plan 456",
        "image": "plan_image_1596623349656_download.jpeg",
        "covered_item_id": [
            "5f240ae16382e747e9530081",
            "5f27e8920502ae264b47ffd6"
        ],
        "additional_item_id": [
            "5f242773ada59456dc50233f",
            "5f28145f0502ae264b47ffdf"
        ],
        "isDeleted": false,
        "status": "Active",
        "_id": "5f2a89f8d651de0a5ebdeaea",
        "plan_pricing": [
            {
                "price": "100",
                "covering_unit": 3,
                "_id": "5f2a8beada6ee90aaf4f92ab",
                "property_type_id": "5f23f300e58e393af84da430"
            },
            {
                "price": "150",
                "covering_unit": 4,
                "_id": "5f2a8beada6ee90aaf4f92ac",
                "property_type_id": "5f27e93a0502ae264b47ffda"
            }
        ],
        "service_fee": [
            {
                "price": "75",
                "decrease_prcie": "0",
                "_id": "5f2ad5d4ca3fc30d57a5fba6"
            },
            {
                "price": "100",
                "decrease_prcie": "30",
                "_id": "5f2ad5d4ca3fc30d57a5fba7"
            },
            {
                "price": "125",
                "decrease_prcie": "50",
                "_id": "5f2ad5d4ca3fc30d57a5fba8"
            }
        ],
        "createdAt": "2020-08-05T10:29:12.201Z",
        "updatedAt": "2020-08-05T10:37:30.933Z"
    },
    "message": "Plan Updated Successfully"
}
*/
namedRouter.put("admin.plan.update", '/plan/update', uploadFile.any(),planController.update)

/**
 * @api {post} /admin/plan/delete Plan Delete
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {string} plan_id Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "title": "test plan 457",
        "image": "plan_image_1596623349656_download.jpeg",
        "covered_item_id": [
            "5f240ae16382e747e9530081",
            "5f27e8920502ae264b47ffd6"
        ],
        "additional_item_id": [
            "5f242773ada59456dc50233f",
            "5f28145f0502ae264b47ffdf"
        ],
        "isDeleted": true,
        "status": "Active",
        "_id": "5f2a89f8d651de0a5ebdeaea",
        "plan_pricing": [
            {
                "price": "100",
                "covering_unit": 3,
                "_id": "5f2a8beada6ee90aaf4f92ab",
                "property_type_id": "5f23f300e58e393af84da430"
            },
            {
                "price": "150",
                "covering_unit": 4,
                "_id": "5f2a8beada6ee90aaf4f92ac",
                "property_type_id": "5f27e93a0502ae264b47ffda"
            }
        ],
        "service_fee": [
            {
                "price": "75",
                "decrease_prcie": "0",
                "_id": "5f2ad5d4ca3fc30d57a5fba6"
            },
            {
                "price": "100",
                "decrease_prcie": "30",
                "_id": "5f2ad5d4ca3fc30d57a5fba7"
            },
            {
                "price": "125",
                "decrease_prcie": "50",
                "_id": "5f2ad5d4ca3fc30d57a5fba8"
            }
        ],
        "createdAt": "2020-08-05T10:29:12.201Z",
        "updatedAt": "2020-08-05T11:14:14.665Z"
    },
    "message": "Plan Deleted Successfully"
}
*/

namedRouter.post("admin.plan.delete", '/plan/delete', request_param.any(),planController.delete)

module.exports = router;