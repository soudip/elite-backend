const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const requestServiceController = require('webservice/frontend/request_service.controller');


/**
 * @api {get} /frontend/request-service/list Request Service list
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ef095882878440912566b16",
            "title": "Air Conditioning and Heating",
            "parent_id": "5ef096312878440912566b1c",
            "description": "Air Conditioning and Heating",
            "status": "Active",
            "isDeleted": false,
            "group_id": null,
            "createdAt": "2020-06-22T11:27:04.061Z",
            "__v": 0,
            "parent_service": {
                "_id": "5ef096312878440912566b1c",
                "title": "Heating",
                "parent_id": null,
                "description": "Heating",
                "status": "Active",
                "isDeleted": false,
                "group_id": null,
                "createdAt": "2020-06-22T11:29:53.207Z",
                "__v": 0
            }
        },
        {
            "_id": "5ef095a82878440912566b17",
            "title": "HVAC System",
            "parent_id": "5ef095a82878440912566b17",
            "description": "HVAC System",
            "group_id": null,
            "status": "Active",
            "isDeleted": false,
            "createdAt": "2020-06-22T11:27:36.567Z",
            "__v": 0,
            "parent_service": {
                "_id": "5ef095a82878440912566b17",
                "title": "HVAC System",
                "parent_id": "5ef095a82878440912566b17",
                "description": "HVAC System",
                "group_id": null,
                "status": "Active",
                "isDeleted": false,
                "createdAt": "2020-06-22T11:27:36.567Z",
                "__v": 0
            }
        }
    ],
    "message": "Request service fetched Successfully"
}
*/
namedRouter.get("frontend.request.service.list", '/request-service/list',requestServiceController.list);

/**
 * @api {get} /frontend/request-service/grouplist Request Service group list
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ef095882878440912566b16",
            "title": "Air Conditioning and Heating",
            "createdAt": "2020-06-22T11:27:04.061Z",
            "services": [
                {
                    "_id": "5ef095a82878440912566b17",
                    "title": "HVAC System",
                    "parent_id": "5ef095882878440912566b16",
                    "description": "HVAC System",
                    "group_id": null,
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-22T11:27:36.567Z",
                    "__v": 0
                },
                {
                    "_id": "5ef095c72878440912566b18",
                    "title": "Air Conditioning",
                    "parent_id": "5ef095882878440912566b16",
                    "description": "Air Conditioning",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-22T11:28:07.711Z",
                    "group_id": "5ef095c72878440912566b18"
                },
                {
                    "_id": "5ef095e32878440912566b19",
                    "title": "Evap (Swamp) Cooler",
                    "parent_id": "5ef095882878440912566b16",
                    "description": "Evap (Swamp) Cooler",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-22T11:28:35.346Z",
                    "group_id": "5ef095c72878440912566b18"
                },
                {
                    "_id": "5ef095fe2878440912566b1a",
                    "title": "Mini Split System",
                    "parent_id": "5ef095882878440912566b16",
                    "description": "Mini Split System",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-22T11:29:02.195Z",
                    "__v": 0
                },
                {
                    "_id": "5ef0960e2878440912566b1b",
                    "title": "Wall Unit",
                    "parent_id": "5ef095882878440912566b16",
                    "description": "Wall Unit",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-22T11:29:18.626Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5ef096312878440912566b1c",
            "title": "Heating",
            "createdAt": "2020-06-22T11:29:53.207Z",
            "services": [
                {
                    "_id": "5ef097202878440912566b1d",
                    "title": "Heating",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Heating",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:33:52.922Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097382878440912566b1e",
                    "title": "Furnace (Electric)",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Furnace (Electric)",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:34:16.434Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097542878440912566b1f",
                    "title": "Furnace (Gas)",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Furnace (Gas)",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:34:44.960Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097692878440912566b20",
                    "title": "Furnace (Oil)",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Furnace (Oil)",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:35:05.631Z",
                    "__v": 0
                },
                {
                    "_id": "5ef0977e2878440912566b21",
                    "title": "Heat Pump",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Heat Pump",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:35:26.314Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097952878440912566b22",
                    "title": "Mini Split System",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Mini Split System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:35:49.070Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097a82878440912566b23",
                    "title": "Steam Heat (Boiler)",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Steam Heat (Boiler)",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:36:08.595Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097c12878440912566b24",
                    "title": "Floor Furnace",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Floor Furnace",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:36:33.419Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097db2878440912566b25",
                    "title": "Wall Furnace",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "Wall Furnace",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:36:59.378Z",
                    "__v": 0
                },
                {
                    "_id": "5ef097f02878440912566b26",
                    "title": "DUCTWORK",
                    "parent_id": "5ef096312878440912566b1c",
                    "description": "DUCTWORK",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:37:20.260Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5ef098102878440912566b27",
            "title": "Appliances",
            "createdAt": "2020-06-22T11:37:52.131Z",
            "services": [
                {
                    "_id": "5ef098552878440912566b28",
                    "title": "BUILT-IN MICROWAVE",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "BUILT-IN MICROWAVE",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:39:01.708Z",
                    "__v": 0
                },
                {
                    "_id": "5ef0986e2878440912566b29",
                    "title": "CLOTHES WASHER",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "CLOTHES WASHER",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:39:26.538Z",
                    "__v": 0
                },
                {
                    "_id": "5ef098802878440912566b2a",
                    "title": "CLOTHES DRYER",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "CLOTHES DRYER",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:39:44.166Z",
                    "__v": 0
                },
                {
                    "_id": "5ef098972878440912566b2b",
                    "title": "COOKTOP",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "COOKTOP",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:40:07.896Z",
                    "__v": 0
                },
                {
                    "_id": "5ef098ab2878440912566b2c",
                    "title": "DISHWASHER",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "DISHWASHER",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:40:27.201Z",
                    "__v": 0
                },
                {
                    "_id": "5ef098be2878440912566b2d",
                    "title": "FREE STANDING ICE MAKER",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "FREE STANDING ICE MAKER",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:40:46.958Z",
                    "__v": 0
                },
                {
                    "_id": "5ef099122878440912566b2e",
                    "title": "ICE MAKER (IN REFRIGERATOR)",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "ICE MAKER (IN REFRIGERATOR)",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:42:10.514Z",
                    "__v": 0
                },
                {
                    "_id": "5ef099752878440912566b2f",
                    "title": "OVEN/STOVE",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "OVEN/STOVE",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:43:49.240Z",
                    "__v": 0
                },
                {
                    "_id": "5ef099842878440912566b30",
                    "title": "RANGE HOOD",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "RANGE HOOD",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:44:04.867Z",
                    "__v": 0
                },
                {
                    "_id": "5ef099962878440912566b31",
                    "title": "REFRIGERATOR",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "REFRIGERATOR",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:44:22.490Z",
                    "__v": 0
                },
                {
                    "_id": "5ef099a52878440912566b32",
                    "title": "STAND ALONE FREEZER",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "STAND ALONE FREEZER",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:44:37.861Z",
                    "__v": 0
                },
                {
                    "_id": "5ef099b72878440912566b33",
                    "title": "TRASH COMPACTOR",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "TRASH COMPACTOR",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:44:55.717Z",
                    "__v": 0
                },
                {
                    "_id": "5ef099cc2878440912566b34",
                    "title": "WATER DISPENSER (IN REFRIGERATOR)",
                    "parent_id": "5ef098102878440912566b27",
                    "description": "WATER DISPENSER (IN REFRIGERATOR)",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:45:16.457Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5ef09a082878440912566b35",
            "title": "ELECTRICAL",
            "createdAt": "2020-06-22T11:46:16.373Z",
            "services": [
                {
                    "_id": "5ef09a1e2878440912566b36",
                    "title": "Bath/Attic Exhaust Fan",
                    "parent_id": "5ef09a082878440912566b35",
                    "description": "Bath/Attic Exhaust Fan",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:46:38.790Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09a322878440912566b37",
                    "title": "CEILING FANS",
                    "parent_id": "5ef09a082878440912566b35",
                    "description": "CEILING FANS",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:46:58.212Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09a462878440912566b38",
                    "title": "CENTRAL VACUUM",
                    "parent_id": "5ef09a082878440912566b35",
                    "description": "CENTRAL VACUUM",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:47:18.473Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09a5c2878440912566b39",
                    "title": "DOOR BELL",
                    "parent_id": "5ef09a082878440912566b35",
                    "description": "DOOR BELL",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:47:40.836Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09a722878440912566b3a",
                    "title": "ELECTRIC",
                    "parent_id": "5ef09a082878440912566b35",
                    "description": "ELECTRIC",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:48:02.132Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09a802878440912566b3b",
                    "title": "GARAGE DOOR OPENER",
                    "parent_id": "5ef09a082878440912566b35",
                    "description": "GARAGE DOOR OPENER",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:48:16.443Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09a922878440912566b3c",
                    "title": "SMOKE DETECTOR",
                    "parent_id": "5ef09a082878440912566b35",
                    "description": "SMOKE DETECTOR",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:48:34.531Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5ef09aa62878440912566b3d",
            "title": "PLUMBING",
            "createdAt": "2020-06-22T11:48:54.627Z",
            "services": [
                {
                    "_id": "5ef09acd2878440912566b3e",
                    "title": "BATH/HOT TUB",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "BATH/HOT TUB",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:49:33.100Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09adc2878440912566b3f",
                    "title": "GARBAGE DISPOSAL",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "GARBAGE DISPOSAL",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:49:48.686Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09aeb2878440912566b40",
                    "title": "GRINDER PUMP",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "GRINDER PUMP",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:50:03.368Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09afa2878440912566b41",
                    "title": "LAWN SPRINKLER SYSTEM",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "LAWN SPRINKLER SYSTEM",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:50:18.297Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09b0b2878440912566b42",
                    "title": "Pipe Leaks",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "Pipe Leaks",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:50:35.894Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09b432878440912566b43",
                    "title": "SEPTIC SYSTEM PUMPING",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "SEPTIC SYSTEM PUMPING",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:51:31.117Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09b552878440912566b44",
                    "title": "SEPTIC TANK",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "SEPTIC TANK",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:51:49.724Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09b692878440912566b45",
                    "title": "Sewage Ejector Pump",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "Sewage Ejector Pump",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:52:09.302Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09b782878440912566b46",
                    "title": "STOPPAGES",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "STOPPAGES",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:52:24.390Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09b842878440912566b47",
                    "title": "SUMP PUMP",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "SUMP PUMP",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:52:36.546Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09b922878440912566b48",
                    "title": "Toilet",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "Toilet",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:52:50.259Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09ba12878440912566b49",
                    "title": "WATER FILTRATION SYSTEM",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "WATER FILTRATION SYSTEM",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:53:05.415Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09bb22878440912566b4a",
                    "title": "WATER HEATER",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "WATER HEATER",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:53:22.128Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09bc22878440912566b4b",
                    "title": "WELL PUMP",
                    "parent_id": "5ef09aa62878440912566b3d",
                    "description": "WELL PUMP",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:53:38.696Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5ef09bd52878440912566b4c",
            "title": "PLUMBING FIXTURES",
            "createdAt": "2020-06-22T11:53:57.928Z",
            "services": [
                {
                    "_id": "5ef09beb2878440912566b4d",
                    "title": "Bathroom Faucet",
                    "parent_id": "5ef09bd52878440912566b4c",
                    "description": "Bathroom Faucet",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:54:19.930Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09bfe2878440912566b4e",
                    "title": "Kitchen Faucet",
                    "parent_id": "5ef09bd52878440912566b4c",
                    "description": "Kitchen Faucet",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:54:38.183Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09c0d2878440912566b4f",
                    "title": "SHOWER HEAD",
                    "parent_id": "5ef09bd52878440912566b4c",
                    "description": "SHOWER HEAD",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:54:53.030Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09c1e2878440912566b50",
                    "title": "SHOWER HANDLE",
                    "parent_id": "5ef09bd52878440912566b4c",
                    "description": "SHOWER HANDLE",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:55:10.944Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5ef09c322878440912566b51",
            "title": "POOL",
            "createdAt": "2020-06-22T11:55:30.627Z",
            "services": [
                {
                    "_id": "5ef09c5a2878440912566b52",
                    "title": "Booster Pump",
                    "parent_id": "5ef09c322878440912566b51",
                    "description": "Booster Pump",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:56:10.859Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09c6a2878440912566b53",
                    "title": "Computer Control Board",
                    "parent_id": "5ef09c322878440912566b51",
                    "description": "Computer Control Board",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:56:26.878Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09c7d2878440912566b54",
                    "title": "Filteration System",
                    "parent_id": "5ef09c322878440912566b51",
                    "description": "Filteration System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:56:45.693Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09c912878440912566b55",
                    "title": "Heating System",
                    "parent_id": "5ef09c322878440912566b51",
                    "description": "Heating System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:57:05.195Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09ca02878440912566b56",
                    "title": "Plumbing System",
                    "parent_id": "5ef09c322878440912566b51",
                    "description": "Plumbing System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:57:20.017Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09caf2878440912566b57",
                    "title": "Pumping System",
                    "parent_id": "5ef09c322878440912566b51",
                    "description": "Pumping System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:57:35.803Z",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "5ef09cc12878440912566b58",
            "title": "SPA",
            "createdAt": "2020-06-22T11:57:53.205Z",
            "services": [
                {
                    "_id": "5ef09cd72878440912566b59",
                    "title": "Booster Pump",
                    "parent_id": "5ef09cc12878440912566b58",
                    "description": "Booster Pump",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:58:15.476Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09cf12878440912566b5a",
                    "title": "Computer Control Board",
                    "parent_id": "5ef09cc12878440912566b58",
                    "description": "Computer Control Board",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:58:41.165Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09d042878440912566b5b",
                    "title": "Filteration System",
                    "parent_id": "5ef09cc12878440912566b58",
                    "description": "Filteration System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:59:00.197Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09d142878440912566b5c",
                    "title": "Heating System",
                    "parent_id": "5ef09cc12878440912566b58",
                    "description": "Heating System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:59:16.062Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09d2b2878440912566b5d",
                    "title": "Plumbing System",
                    "parent_id": "5ef09cc12878440912566b58",
                    "description": "Plumbing System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:59:39.345Z",
                    "__v": 0
                },
                {
                    "_id": "5ef09d3b2878440912566b5e",
                    "title": "Pumping System",
                    "parent_id": "5ef09cc12878440912566b58",
                    "description": "Pumping System",
                    "status": "Active",
                    "isDeleted": false,
                    "group_id": null,
                    "createdAt": "2020-06-22T11:59:55.031Z",
                    "__v": 0
                }
            ]
        }
    ],
    "message": "Request service fetched Successfully"
}
*/

namedRouter.get("frontend.request.service.grouplist", '/request-service/grouplist',requestServiceController.groupList);

/**
 * @api {get} /frontend/request-service/:id Request Service details
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5ef09d7c2878440912566b60",
        "title": "Sewage Lines",
        "parent_id": "5ef09d502878440912566b5f",
        "description": "Sewage Lines",
        "status": "Active",
        "isDeleted": false,
        "createdAt": "2020-06-22T12:01:00.900Z",
        "__v": 0
    },
    "message": "Request service fetched Successfully"
}
*/

namedRouter.get("frontend.request.service.details", '/request-service/:id',requestServiceController.details)


/**
 * @api {post} /frontend/request-service/issue Request Service issues
 * @apiVersion 1.0.0
 * @apiGroup Request Service
 * @apiParam {Array} service_id Service Id List
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "5ef095c72878440912566b18",
            "title": "Air Conditioning",
            "service_issues": [
                {
                    "_id": "5ef2133fca613810dd14bcae",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Circuit Breaker and Fuses tripping",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:35:43.282Z",
                    "__v": 0
                },
                {
                    "_id": "5ef2134dca613810dd14bcaf",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Compressor is making noise",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:35:57.252Z",
                    "__v": 0
                },
                {
                    "_id": "5ef2135aca613810dd14bcb0",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Compressor is not working",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:36:10.122Z",
                    "__v": 0
                },
                {
                    "_id": "5ef21364ca613810dd14bcb1",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Fan is making noise",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:36:20.720Z",
                    "__v": 0
                },
                {
                    "_id": "5ef21373ca613810dd14bcb2",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Fan is not working",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:36:35.086Z",
                    "__v": 0
                },
                {
                    "_id": "5ef2137eca613810dd14bcb3",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Leaking freon",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:36:46.634Z",
                    "__v": 0
                },
                {
                    "_id": "5ef21389ca613810dd14bcb4",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Leaking Water",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:36:57.472Z",
                    "__v": 0
                },
                {
                    "_id": "5ef21394ca613810dd14bcb5",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Need maintenance",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:37:08.579Z",
                    "__v": 0
                },
                {
                    "_id": "5ef213a1ca613810dd14bcb6",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Not turning on",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:37:21.485Z",
                    "__v": 0
                },
                {
                    "_id": "5ef213adca613810dd14bcb7",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Not Cooling / not blowing cold air",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:37:33.705Z",
                    "__v": 0
                },
                {
                    "_id": "5ef213b8ca613810dd14bcb8",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Not reaching the temperature",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:37:44.961Z",
                    "__v": 0
                },
                {
                    "_id": "5ef213c5ca613810dd14bcb9",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Not responding to thermostat",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:37:57.154Z",
                    "__v": 0
                },
                {
                    "_id": "5ef213cfca613810dd14bcba",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Running Constantly / will not turn off",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:38:07.549Z",
                    "__v": 0
                },
                {
                    "_id": "5ef213d8ca613810dd14bcbb",
                    "service_id": "5ef095c72878440912566b18",
                    "content": "Other",
                    "status": "Active",
                    "isDeleted": false,
                    "createdAt": "2020-06-23T14:38:16.615Z",
                    "__v": 0
                }
            ]
        }
    ],
    "message": "Request service fetched Successfully"
}
*/

namedRouter.post("frontend.request.service.issue", '/request-service/issue',request_param.any(),requestServiceController.getIssue)


module.exports = router;