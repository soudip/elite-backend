const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const planController = require('webservice/frontend/plan.controller');

/**
 * @api {post} /frontend/plan/list Plan list
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {id} property_type_id Property Type Id
 * @apiParam {id} property_size_id Property Size Id
 * @apiSuccessExample {json} Success
 * {
    "data": [
        {
            "_id": "601a5a5fe4ee4555d43c863d",
            "title": "Elite plan",
            "image": "",
            "maximum_aggregated_coverage": "23",
            "item_removal": "",
            "service_fee": {
                "price_0": "2.00",
                "price_70": "2.00",
                "price_100": "33.00",
                "price_130": "4.00"
            },
            "category_covered_item": [
                {
                    "covered_item_id": [
                        "5fd87ddb0e8144b9d57a41a8",
                        "5fd884730e8144b9d57a41a9",
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab"
                    ],
                    "_id": "601a5a5fe4ee4555d43c863e",
                    "category_id": "5fe08c49eec7d6a7a8d2cd1f",
                    "category": [
                        {
                            "_id": "5fe08c49eec7d6a7a8d2cd1f",
                            "name": "Covered Appliances ",
                            "description": "",
                            "maximum_category_coverage": 8000,
                            "maximum_category_coverage_increase": "12000",
                            "maximum_category_coverage_decrase": "1000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:51:37.381Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "12",
                            "automated_category_increase": "21"
                        }
                    ],
                    "covered_items": [
                        {
                            "_id": "5fd87ddb0e8144b9d57a41a8",
                            "title": "CLOTHES DRYER",
                            "image": "1608044775686_Clothes_Dryer.png",
                            "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:11:55.520Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd884730e8144b9d57a41a9",
                            "title": "RANGE/OVEN/COOKTOP",
                            "image": "1608045016623_Range_Oven_Cooktop.png",
                            "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1200,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "N/A",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "",
                            "standard_price": 79,
                            "custom_price": 89,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:40:03.919Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "10000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "covered_item_id": [
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab"
                    ],
                    "_id": "601a5a5fe4ee4555d43c863f",
                    "category_id": "5fe08c64eec7d6a7a8d2cd20",
                    "category": [
                        {
                            "_id": "5fe08c64eec7d6a7a8d2cd20",
                            "name": "Covered Systems",
                            "description": "",
                            "maximum_category_coverage": 10000,
                            "maximum_category_coverage_increase": "10000",
                            "maximum_category_coverage_decrase": "2000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:52:04.491Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "",
                            "automated_category_increase": ""
                        }
                    ],
                    "covered_items": [
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                }
            ],
            "property_pricing": [
                {
                    "_id": "601a5a5fe4ee4555d43c8640",
                    "property_type_id": "5fe45f9d707ef30db84c1bd3",
                    "info": {
                        "property_size_id": "5fe1fc00707ef30db84c1bcf",
                        "cost_per_plan": "21.00",
                        "description": "",
                        "automated_category_maximum_coverage_increase": "0.00",
                        "automated_aggregated_coverage_increase": "0.00",
                        "total_allowed_combined_coverage_decrease": "",
                        "_id": "601a5a5fe4ee4555d43c8646",
                        "covered_item_list": [
                            {
                                "quantity": 1,
                                "price": "59.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a5a5fe4ee4555d43c8647",
                                "covered_item_id": {
                                    "title": "CLOTHES DRYER",
                                    "image": "1608044775686_Clothes_Dryer.png",
                                    "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 59,
                                    "custom_price": 69,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd87ddb0e8144b9d57a41a8",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:11:55.520Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "79.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a5a5fe4ee4555d43c8648",
                                "covered_item_id": {
                                    "title": "RANGE/OVEN/COOKTOP",
                                    "image": "1608045016623_Range_Oven_Cooktop.png",
                                    "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                                    "average_cost_repair": 250,
                                    "average_cost_replacement": 1200,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "N/A",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "N/A",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "",
                                    "standard_price": 79,
                                    "custom_price": 89,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "10000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd884730e8144b9d57a41a9",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:40:03.919Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "69.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a5a5fe4ee4555d43c8649",
                                "covered_item_id": {
                                    "title": "DISHWASHER",
                                    "image": "1608045156547_Dish_Washer.png",
                                    "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                                    "average_cost_repair": 175,
                                    "average_cost_replacement": 1000,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 69,
                                    "custom_price": 79,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd887150e8144b9d57a41aa",
                                    "percentage_fee": "30",
                                    "createdAt": "2020-12-15T09:51:17.121Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "49.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a5a5fe4ee4555d43c864a",
                                "covered_item_id": {
                                    "title": "BUILT-IN MICROWAVE OVEN",
                                    "image": "1608045198422_Built_In_Microwave.png",
                                    "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                                    "average_cost_repair": 125,
                                    "average_cost_replacement": 400,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$1,000 per Term",
                                    "standard_price": 49,
                                    "custom_price": 59,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "4000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd89ac60e8144b9d57a41ab",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:15:18.132Z",
                                    "__v": 0
                                }
                            }
                        ]
                    },
                    "property_type": [
                        {
                            "_id": "5fe45f9d707ef30db84c1bd3",
                            "title": "Single Family",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-24T09:30:05.876Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "state_data": [
                {
                    "additional_cost": "2.00",
                    "salex_tax": "2",
                    "surcharge": "2",
                    "_id": "601a5a5fe4ee4555d43c8662",
                    "state_id": "5f3147e9a7137c4e385ebf88",
                    "state": [
                        {
                            "_id": "5f3147e9a7137c4e385ebf88",
                            "title": "Alabama",
                            "abbreviation": "Al",
                            "type": "not_covered",
                            "orderNumber": 0,
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-08-10T13:13:13.652Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "available_checkout": "yes",
            "optional_item_id": "60194fa24c812056d5536432",
            "optional_item": [
                {
                    "quantity": 59,
                    "_id": "601a5a5fe4ee4555d43c8661",
                    "covered_item_id": "5fd875e10e8144b9d57a41a7",
                    "covered_item": [
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
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "quantity": 69,
                    "_id": "601a5a5fe4ee4555d43c8660",
                    "covered_item_id": "5fd8715d0e8144b9d57a41a6",
                    "covered_item": [
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
                            "maximum_coverage_increase_fee": "7",
                            "type": "appliance"
                        }
                    ]
                }
            ],
            "plan_type": "normal"
        },
        {
            "_id": "60128127ec1a91e6ffaf0964",
            "title": "sadasd",
            "image": "",
            "maximum_aggregated_coverage": "23",
            "item_removal": "21",
            "service_fee": {
                "price_0": 3,
                "price_70": 213,
                "price_100": 123,
                "price_130": 213
            },
            "category_covered_item": [
                {
                    "covered_item_id": [
                        "5fd89ac60e8144b9d57a41ab"
                    ],
                    "_id": "601a9d6f0f175a35854828d0",
                    "category_id": "5fe08c64eec7d6a7a8d2cd20",
                    "category": [
                        {
                            "_id": "5fe08c64eec7d6a7a8d2cd20",
                            "name": "Covered Systems",
                            "description": "",
                            "maximum_category_coverage": 10000,
                            "maximum_category_coverage_increase": "10000",
                            "maximum_category_coverage_decrase": "2000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:52:04.491Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "",
                            "automated_category_increase": ""
                        }
                    ],
                    "covered_items": [
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "covered_item_id": [
                        "5fd87ddb0e8144b9d57a41a8",
                        "5fd884730e8144b9d57a41a9",
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab"
                    ],
                    "_id": "601a9d6f0f175a35854828d1",
                    "category_id": "5fe08c49eec7d6a7a8d2cd1f",
                    "category": [
                        {
                            "_id": "5fe08c49eec7d6a7a8d2cd1f",
                            "name": "Covered Appliances ",
                            "description": "",
                            "maximum_category_coverage": 8000,
                            "maximum_category_coverage_increase": "12000",
                            "maximum_category_coverage_decrase": "1000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:51:37.381Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "12",
                            "automated_category_increase": "21"
                        }
                    ],
                    "covered_items": [
                        {
                            "_id": "5fd87ddb0e8144b9d57a41a8",
                            "title": "CLOTHES DRYER",
                            "image": "1608044775686_Clothes_Dryer.png",
                            "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:11:55.520Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd884730e8144b9d57a41a9",
                            "title": "RANGE/OVEN/COOKTOP",
                            "image": "1608045016623_Range_Oven_Cooktop.png",
                            "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1200,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "N/A",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "",
                            "standard_price": 79,
                            "custom_price": 89,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:40:03.919Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "10000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                }
            ],
            "property_pricing": [
                {
                    "_id": "601a9d6f0f175a35854828d2",
                    "property_type_id": "5fe45f9d707ef30db84c1bd3",
                    "info": {
                        "property_size_id": "5fe1fc00707ef30db84c1bcf",
                        "cost_per_plan": 0,
                        "description": "",
                        "automated_category_maximum_coverage_increase": "0.00",
                        "automated_aggregated_coverage_increase": "0.00",
                        "total_allowed_combined_coverage_decrease": "",
                        "_id": "601a9d6f0f175a35854828d8",
                        "covered_item_list": [
                            {
                                "quantity": 1,
                                "price": "59.00",
                                "category_increase": "23.00",
                                "category_decrease": "2.00",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a9d6f0f175a35854828d9",
                                "covered_item_id": {
                                    "title": "BUILT-IN MICROWAVE OVEN",
                                    "image": "1608045198422_Built_In_Microwave.png",
                                    "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                                    "average_cost_repair": 125,
                                    "average_cost_replacement": 400,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$1,000 per Term",
                                    "standard_price": 49,
                                    "custom_price": 59,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "4000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd89ac60e8144b9d57a41ab",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:15:18.132Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "79.00",
                                "category_increase": "90.00",
                                "category_decrease": "45.00",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a9d6f0f175a35854828da",
                                "covered_item_id": {
                                    "title": "CLOTHES DRYER",
                                    "image": "1608044775686_Clothes_Dryer.png",
                                    "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 59,
                                    "custom_price": 69,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd87ddb0e8144b9d57a41a8",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:11:55.520Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "69.00",
                                "category_increase": "34.00",
                                "category_decrease": "8.00",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a9d6f0f175a35854828db",
                                "covered_item_id": {
                                    "title": "RANGE/OVEN/COOKTOP",
                                    "image": "1608045016623_Range_Oven_Cooktop.png",
                                    "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                                    "average_cost_repair": 250,
                                    "average_cost_replacement": 1200,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "N/A",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "N/A",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "",
                                    "standard_price": 79,
                                    "custom_price": 89,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "10000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd884730e8144b9d57a41a9",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:40:03.919Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "49.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "601a9d6f0f175a35854828dc",
                                "covered_item_id": {
                                    "title": "DISHWASHER",
                                    "image": "1608045156547_Dish_Washer.png",
                                    "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                                    "average_cost_repair": 175,
                                    "average_cost_replacement": 1000,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 69,
                                    "custom_price": 79,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd887150e8144b9d57a41aa",
                                    "percentage_fee": "30",
                                    "createdAt": "2020-12-15T09:51:17.121Z",
                                    "__v": 0
                                }
                            }
                        ]
                    },
                    "property_type": [
                        {
                            "_id": "5fe45f9d707ef30db84c1bd3",
                            "title": "Single Family",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-24T09:30:05.876Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "state_data": [
                {
                    "state": []
                }
            ],
            "available_checkout": "no",
            "optional_item_id": "60194fa24c812056d5536432",
            "optional_item": [
                {
                    "quantity": 79,
                    "_id": "601a9d6f0f175a35854828f5",
                    "covered_item_id": "5fd884730e8144b9d57a41a9",
                    "covered_item": [
                        {
                            "_id": "5fd884730e8144b9d57a41a9",
                            "title": "RANGE/OVEN/COOKTOP",
                            "image": "1608045016623_Range_Oven_Cooktop.png",
                            "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1200,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "N/A",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "",
                            "standard_price": 79,
                            "custom_price": 89,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:40:03.919Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "10000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        }
                    ]
                },
                {
                    "quantity": 69,
                    "_id": "601a9d6f0f175a35854828f2",
                    "covered_item_id": "5fd8715d0e8144b9d57a41a6",
                    "covered_item": [
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
                            "maximum_coverage_increase_fee": "7",
                            "type": "appliance"
                        }
                    ]
                },
                {
                    "quantity": 59,
                    "_id": "601a9d6f0f175a35854828f3",
                    "covered_item_id": "5fd875e10e8144b9d57a41a7",
                    "covered_item": [
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
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "quantity": 59,
                    "_id": "601a9d6f0f175a35854828f4",
                    "covered_item_id": "5fd87ddb0e8144b9d57a41a8",
                    "covered_item": [
                        {
                            "_id": "5fd87ddb0e8144b9d57a41a8",
                            "title": "CLOTHES DRYER",
                            "image": "1608044775686_Clothes_Dryer.png",
                            "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:11:55.520Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        }
                    ]
                }
            ],
            "plan_type": "normal"
        },
        {
            "_id": "601274d0ec1a91e6ffaf07d0",
            "title": "fsdf",
            "image": "",
            "maximum_aggregated_coverage": "3",
            "item_removal": "32",
            "service_fee": {
                "price_0": 123,
                "price_70": 23,
                "price_100": 23,
                "price_130": 23
            },
            "category_covered_item": [
                {
                    "covered_item_id": [
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab"
                    ],
                    "_id": "6012763fec1a91e6ffaf07f4",
                    "category_id": "5fe08c64eec7d6a7a8d2cd20",
                    "category": [
                        {
                            "_id": "5fe08c64eec7d6a7a8d2cd20",
                            "name": "Covered Systems",
                            "description": "",
                            "maximum_category_coverage": 10000,
                            "maximum_category_coverage_increase": "10000",
                            "maximum_category_coverage_decrase": "2000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:52:04.491Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "",
                            "automated_category_increase": ""
                        }
                    ],
                    "covered_items": [
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "covered_item_id": [
                        "5fd87ddb0e8144b9d57a41a8",
                        "5fd884730e8144b9d57a41a9",
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab"
                    ],
                    "_id": "6012763fec1a91e6ffaf07f3",
                    "category_id": "5fe08c49eec7d6a7a8d2cd1f",
                    "category": [
                        {
                            "_id": "5fe08c49eec7d6a7a8d2cd1f",
                            "name": "Covered Appliances ",
                            "description": "",
                            "maximum_category_coverage": 8000,
                            "maximum_category_coverage_increase": "12000",
                            "maximum_category_coverage_decrase": "1000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:51:37.381Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "12",
                            "automated_category_increase": "21"
                        }
                    ],
                    "covered_items": [
                        {
                            "_id": "5fd87ddb0e8144b9d57a41a8",
                            "title": "CLOTHES DRYER",
                            "image": "1608044775686_Clothes_Dryer.png",
                            "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:11:55.520Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd884730e8144b9d57a41a9",
                            "title": "RANGE/OVEN/COOKTOP",
                            "image": "1608045016623_Range_Oven_Cooktop.png",
                            "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1200,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "N/A",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "",
                            "standard_price": 79,
                            "custom_price": 89,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:40:03.919Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "10000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                }
            ],
            "property_pricing": [
                {
                    "_id": "6012763fec1a91e6ffaf07f5",
                    "property_type_id": "5fe45f9d707ef30db84c1bd3",
                    "info": {
                        "property_size_id": "5fe1fc00707ef30db84c1bcf",
                        "cost_per_plan": "0.00",
                        "description": "",
                        "automated_category_maximum_coverage_increase": "0.00",
                        "automated_aggregated_coverage_increase": "0.00",
                        "total_allowed_combined_coverage_decrease": "",
                        "_id": "6012763fec1a91e6ffaf07fb",
                        "covered_item_list": [
                            {
                                "quantity": 1,
                                "price": "59.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6012763fec1a91e6ffaf07fc",
                                "covered_item_id": {
                                    "title": "CLOTHES DRYER",
                                    "image": "1608044775686_Clothes_Dryer.png",
                                    "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 59,
                                    "custom_price": 69,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd87ddb0e8144b9d57a41a8",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:11:55.520Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "79.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6012763fec1a91e6ffaf07fd",
                                "covered_item_id": {
                                    "title": "RANGE/OVEN/COOKTOP",
                                    "image": "1608045016623_Range_Oven_Cooktop.png",
                                    "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                                    "average_cost_repair": 250,
                                    "average_cost_replacement": 1200,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "N/A",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "N/A",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "",
                                    "standard_price": 79,
                                    "custom_price": 89,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "10000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd884730e8144b9d57a41a9",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:40:03.919Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "69.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6012763fec1a91e6ffaf07fe",
                                "covered_item_id": {
                                    "title": "DISHWASHER",
                                    "image": "1608045156547_Dish_Washer.png",
                                    "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                                    "average_cost_repair": 175,
                                    "average_cost_replacement": 1000,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 69,
                                    "custom_price": 79,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd887150e8144b9d57a41aa",
                                    "percentage_fee": "30",
                                    "createdAt": "2020-12-15T09:51:17.121Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "49.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6012763fec1a91e6ffaf07ff",
                                "covered_item_id": {
                                    "title": "BUILT-IN MICROWAVE OVEN",
                                    "image": "1608045198422_Built_In_Microwave.png",
                                    "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                                    "average_cost_repair": 125,
                                    "average_cost_replacement": 400,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$1,000 per Term",
                                    "standard_price": 49,
                                    "custom_price": 59,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "4000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd89ac60e8144b9d57a41ab",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:15:18.132Z",
                                    "__v": 0
                                }
                            }
                        ]
                    },
                    "property_type": [
                        {
                            "_id": "5fe45f9d707ef30db84c1bd3",
                            "title": "Single Family",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-24T09:30:05.876Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "state_data": [
                {
                    "state": []
                }
            ],
            "available_checkout": null,
            "optional_item_id": null,
            "optional_item": [
                {
                    "covered_item": []
                }
            ],
            "plan_type": "normal"
        },
        {
            "_id": "6011bc250f6c21711ae27e2c",
            "title": "Elite Appliances",
            "image": "",
            "maximum_aggregated_coverage": "10000",
            "item_removal": "21",
            "service_fee": {
                "price_0": 150,
                "price_70": 0,
                "price_100": -30,
                "price_130": 0
            },
            "category_covered_item": [
                {
                    "covered_item_id": [
                        "5fd8715d0e8144b9d57a41a6",
                        "5fd875e10e8144b9d57a41a7",
                        "5fd87ddb0e8144b9d57a41a8",
                        "5fd884730e8144b9d57a41a9",
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab"
                    ],
                    "_id": "6017ed04ba57b4e53a3471e2",
                    "category_id": "5fe08c64eec7d6a7a8d2cd20",
                    "category": [
                        {
                            "_id": "5fe08c64eec7d6a7a8d2cd20",
                            "name": "Covered Systems",
                            "description": "",
                            "maximum_category_coverage": 10000,
                            "maximum_category_coverage_increase": "10000",
                            "maximum_category_coverage_decrase": "2000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:52:04.491Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "",
                            "automated_category_increase": ""
                        }
                    ],
                    "covered_items": [
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
                            "maximum_coverage_increase_fee": "7",
                            "type": "appliance"
                        },
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
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fd87ddb0e8144b9d57a41a8",
                            "title": "CLOTHES DRYER",
                            "image": "1608044775686_Clothes_Dryer.png",
                            "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:11:55.520Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd884730e8144b9d57a41a9",
                            "title": "RANGE/OVEN/COOKTOP",
                            "image": "1608045016623_Range_Oven_Cooktop.png",
                            "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1200,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "N/A",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "",
                            "standard_price": 79,
                            "custom_price": 89,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:40:03.919Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "10000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "covered_item_id": [
                        "5fd8715d0e8144b9d57a41a6",
                        "5fd875e10e8144b9d57a41a7",
                        "5fd87ddb0e8144b9d57a41a8",
                        "5fd884730e8144b9d57a41a9",
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab",
                        "5fd8a2970e8144b9d57a41ac",
                        "5fd8a3520e8144b9d57a41ad"
                    ],
                    "_id": "6017ed04ba57b4e53a3471e1",
                    "category_id": "5fe08c49eec7d6a7a8d2cd1f",
                    "category": [
                        {
                            "_id": "5fe08c49eec7d6a7a8d2cd1f",
                            "name": "Covered Appliances ",
                            "description": "",
                            "maximum_category_coverage": 8000,
                            "maximum_category_coverage_increase": "12000",
                            "maximum_category_coverage_decrase": "1000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:51:37.381Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "12",
                            "automated_category_increase": "21"
                        }
                    ],
                    "covered_items": [
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
                            "maximum_coverage_increase_fee": "7",
                            "type": "appliance"
                        },
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
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fd87ddb0e8144b9d57a41a8",
                            "title": "CLOTHES DRYER",
                            "image": "1608044775686_Clothes_Dryer.png",
                            "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:11:55.520Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd884730e8144b9d57a41a9",
                            "title": "RANGE/OVEN/COOKTOP",
                            "image": "1608045016623_Range_Oven_Cooktop.png",
                            "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1200,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "N/A",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "",
                            "standard_price": 79,
                            "custom_price": 89,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:40:03.919Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "10000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fd8a2970e8144b9d57a41ac",
                            "title": "TRASH COMPACTOR",
                            "image": "1608045316063_Trash_Compactor.png",
                            "description": "The kitchen trash compactor is a home appliance that crushes and bundles\r\ngarbage for easy disposal.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 300,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, switches, relays, tracks and wiring",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "racks | panels | cabinetry | removable buckets | door seals | knob | handles |\r\npedals | automatic deodorizers",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$700 per Term",
                            "standard_price": 39,
                            "custom_price": 49,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:48:39.686Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "1300",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fd8a3520e8144b9d57a41ad",
                            "title": "GARBAGE DISPOSAL",
                            "image": "1608045361875_Garbage_disposal.png",
                            "description": "Garbage disposal is mounted to the underside of a sink and is designed to collect \r\nsolid food waste in a grinding chamber.",
                            "average_cost_repair": 100,
                            "average_cost_replacement": 150,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, blades, wiring, casing and switches",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$500 per Term",
                            "standard_price": 39,
                            "custom_price": 49,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:51:46.218Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "1500",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                }
            ],
            "property_pricing": [
                {
                    "_id": "6017ed04ba57b4e53a3471e3",
                    "property_type_id": "5fe45f9d707ef30db84c1bd3",
                    "info": {
                        "property_size_id": "5fe1fc00707ef30db84c1bcf",
                        "cost_per_plan": "0.00",
                        "description": "",
                        "automated_category_maximum_coverage_increase": "0.00",
                        "automated_aggregated_coverage_increase": "0.00",
                        "total_allowed_combined_coverage_decrease": "",
                        "_id": "6017ed04ba57b4e53a3471ed",
                        "covered_item_list": [
                            {
                                "quantity": 1,
                                "price": "69.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471ee",
                                "covered_item_id": {
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
                                    "maximum_coverage_increase_fee": "7",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "1000",
                                    "maximum_allowed_increase": "12000",
                                    "note": "",
                                    "type": "appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd8715d0e8144b9d57a41a6",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T08:18:37.009Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "59.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471ef",
                                "covered_item_id": {
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
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd875e10e8144b9d57a41a7",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T08:37:53.831Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "59.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471f0",
                                "covered_item_id": {
                                    "title": "CLOTHES DRYER",
                                    "image": "1608044775686_Clothes_Dryer.png",
                                    "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 59,
                                    "custom_price": 69,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd87ddb0e8144b9d57a41a8",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:11:55.520Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "79.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471f1",
                                "covered_item_id": {
                                    "title": "RANGE/OVEN/COOKTOP",
                                    "image": "1608045016623_Range_Oven_Cooktop.png",
                                    "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                                    "average_cost_repair": 250,
                                    "average_cost_replacement": 1200,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "N/A",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "N/A",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "",
                                    "standard_price": 79,
                                    "custom_price": 89,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "10000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd884730e8144b9d57a41a9",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:40:03.919Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "69.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471f2",
                                "covered_item_id": {
                                    "title": "DISHWASHER",
                                    "image": "1608045156547_Dish_Washer.png",
                                    "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                                    "average_cost_repair": 175,
                                    "average_cost_replacement": 1000,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 69,
                                    "custom_price": 79,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd887150e8144b9d57a41aa",
                                    "percentage_fee": "30",
                                    "createdAt": "2020-12-15T09:51:17.121Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "49.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471f3",
                                "covered_item_id": {
                                    "title": "BUILT-IN MICROWAVE OVEN",
                                    "image": "1608045198422_Built_In_Microwave.png",
                                    "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                                    "average_cost_repair": 125,
                                    "average_cost_replacement": 400,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$1,000 per Term",
                                    "standard_price": 49,
                                    "custom_price": 59,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "4000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd89ac60e8144b9d57a41ab",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:15:18.132Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "39.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471f4",
                                "covered_item_id": {
                                    "title": "TRASH COMPACTOR",
                                    "image": "1608045316063_Trash_Compactor.png",
                                    "description": "The kitchen trash compactor is a home appliance that crushes and bundles\r\ngarbage for easy disposal.",
                                    "average_cost_repair": 125,
                                    "average_cost_replacement": 300,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, switches, relays, tracks and wiring",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "racks | panels | cabinetry | removable buckets | door seals | knob | handles |\r\npedals | automatic deodorizers",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$700 per Term",
                                    "standard_price": 39,
                                    "custom_price": 49,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "1300",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd8a2970e8144b9d57a41ac",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:48:39.686Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "39.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "",
                                "discount_three": "",
                                "discount_four": "",
                                "discount_more": "",
                                "_id": "6017ed04ba57b4e53a3471f5",
                                "covered_item_id": {
                                    "title": "GARBAGE DISPOSAL",
                                    "image": "1608045361875_Garbage_disposal.png",
                                    "description": "Garbage disposal is mounted to the underside of a sink and is designed to collect \r\nsolid food waste in a grinding chamber.",
                                    "average_cost_repair": 100,
                                    "average_cost_replacement": 150,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, blades, wiring, casing and switches",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "N/A",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$500 per Term",
                                    "standard_price": 39,
                                    "custom_price": 49,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "1500",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd8a3520e8144b9d57a41ad",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:51:46.218Z",
                                    "__v": 0
                                }
                            }
                        ]
                    },
                    "property_type": [
                        {
                            "_id": "5fe45f9d707ef30db84c1bd3",
                            "title": "Single Family",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-24T09:30:05.876Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "state_data": [
                {
                    "state": []
                }
            ],
            "available_checkout": null,
            "optional_item_id": null,
            "optional_item": [
                {
                    "covered_item": []
                }
            ],
            "plan_type": "normal"
        },
        {
            "_id": "6006a53d026424da73f61513",
            "title": "Customize Your Own",
            "image": "",
            "maximum_aggregated_coverage": "23",
            "item_removal": "0",
            "service_fee": {
                "price_0": 175,
                "price_70": 0,
                "price_100": -30,
                "price_130": -60
            },
            "category_covered_item": [
                {
                    "covered_item_id": [
                        "5fd8715d0e8144b9d57a41a6",
                        "5fd875e10e8144b9d57a41a7",
                        "5fd87ddb0e8144b9d57a41a8",
                        "5fd884730e8144b9d57a41a9",
                        "5fd887150e8144b9d57a41aa",
                        "5fd89ac60e8144b9d57a41ab",
                        "5fd8a2970e8144b9d57a41ac",
                        "5fd8a3520e8144b9d57a41ad"
                    ],
                    "_id": "60127badec1a91e6ffaf0815",
                    "category_id": "5fe08c64eec7d6a7a8d2cd20",
                    "category": [
                        {
                            "_id": "5fe08c64eec7d6a7a8d2cd20",
                            "name": "Covered Systems",
                            "description": "",
                            "maximum_category_coverage": 10000,
                            "maximum_category_coverage_increase": "10000",
                            "maximum_category_coverage_decrase": "2000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:52:04.491Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "",
                            "automated_category_increase": ""
                        }
                    ],
                    "covered_items": [
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
                            "maximum_coverage_increase_fee": "7",
                            "type": "appliance"
                        },
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
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fd87ddb0e8144b9d57a41a8",
                            "title": "CLOTHES DRYER",
                            "image": "1608044775686_Clothes_Dryer.png",
                            "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:11:55.520Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd884730e8144b9d57a41a9",
                            "title": "RANGE/OVEN/COOKTOP",
                            "image": "1608045016623_Range_Oven_Cooktop.png",
                            "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1200,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "N/A",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "",
                            "standard_price": 79,
                            "custom_price": 89,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:40:03.919Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "10000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "6"
                        },
                        {
                            "_id": "5fd887150e8144b9d57a41aa",
                            "title": "DISHWASHER",
                            "image": "1608045156547_Dish_Washer.png",
                            "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term",
                            "standard_price": 69,
                            "custom_price": 79,
                            "item_removal_price": 20,
                            "percentage_fee": "30",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T09:51:17.121Z",
                            "__v": 0,
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5",
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000"
                        },
                        {
                            "_id": "5fd89ac60e8144b9d57a41ab",
                            "title": "BUILT-IN MICROWAVE OVEN",
                            "image": "1608045198422_Built_In_Microwave.png",
                            "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 400,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term",
                            "standard_price": 49,
                            "custom_price": 59,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:15:18.132Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "4000",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fd8a2970e8144b9d57a41ac",
                            "title": "TRASH COMPACTOR",
                            "image": "1608045316063_Trash_Compactor.png",
                            "description": "The kitchen trash compactor is a home appliance that crushes and bundles\r\ngarbage for easy disposal.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 300,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, switches, relays, tracks and wiring",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "racks | panels | cabinetry | removable buckets | door seals | knob | handles |\r\npedals | automatic deodorizers",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$700 per Term",
                            "standard_price": 39,
                            "custom_price": 49,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:48:39.686Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "1300",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fd8a3520e8144b9d57a41ad",
                            "title": "GARBAGE DISPOSAL",
                            "image": "1608045361875_Garbage_disposal.png",
                            "description": "Garbage disposal is mounted to the underside of a sink and is designed to collect \r\nsolid food waste in a grinding chamber.",
                            "average_cost_repair": 100,
                            "average_cost_replacement": 150,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, blades, wiring, casing and switches",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$500 per Term",
                            "standard_price": 39,
                            "custom_price": 49,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T11:51:46.218Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "1500",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "covered_item_id": [
                        "5fd8bf3e0e8144b9d57a41ae",
                        "5fdb26750e8144b9d57a41af",
                        "5fdb312b0e8144b9d57a41b0",
                        "5fdb7b1e0e8144b9d57a41b1",
                        "5fdb834d0e8144b9d57a41b2",
                        "5fdc68baed66698d0ab5d44d",
                        "5fdc6d38ed66698d0ab5d44e"
                    ],
                    "_id": "60127badec1a91e6ffaf0816",
                    "category_id": "5fe08c49eec7d6a7a8d2cd1f",
                    "category": [
                        {
                            "_id": "5fe08c49eec7d6a7a8d2cd1f",
                            "name": "Covered Appliances ",
                            "description": "",
                            "maximum_category_coverage": 8000,
                            "maximum_category_coverage_increase": "12000",
                            "maximum_category_coverage_decrase": "1000",
                            "type": "normal",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-21T11:51:37.381Z",
                            "__v": 0,
                            "percentage_fee": "12",
                            "category_coverage_decrease_fee": "",
                            "category_coverage_increase_fee": "12",
                            "automated_category_decrease": "12",
                            "automated_category_increase": "21"
                        }
                    ],
                    "covered_items": [
                        {
                            "_id": "5fd8bf3e0e8144b9d57a41ae",
                            "title": "AIR CONDITIONING INCLUDING DUCTWORK",
                            "image": "1608040254667_Air_conditioning_including_ductwork.png",
                            "description": "A system for controlling the humidity, ventilation, and temperature of the interior\r\nof an occupied space to improve the comfort of occupants, typically to maintain a\r\ncool atmosphere in warm conditions.",
                            "average_cost_repair": 275,
                            "average_cost_replacement": 3500,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including main\r\ncontrol board, thermostats, compressors, motors, condensers, casings, pumps,\r\ntransformers, capacitors, contactors, pressure switches, coils, belts, pulleys, drain\r\nlines, thermistor, humidifiers, elements, exchangers, zone controllers, fuses,\r\nelectronic circuits, rectifiers, rust and corrosion, defrost elements and freon*",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                "Electric central air conditioning unit",
                                "heat pump",
                                "duct systems",
                                "wall air conditioners",
                                "mini splits",
                                "geothermal",
                                "radiant units",
                                "solar units",
                                "packaged units",
                                "HVAC System(if applicable)"
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "leaks of any kind | outside or underground piping for geothermal and/or water\r\nunits | maintenance | filters | mismatched systems | improperly sized\r\nunits | noise | support equipment",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                "Portable units",
                                "gas units",
                                "water towers",
                                "Chillers",
                                "lithium units",
                                "window units"
                            ],
                            "freon_coverage": "EHW will pay up to $25 per pound for refrigerant limited to 10 pounds per Breakdown, and EHW's liability hereunder is limited to paying in the aggregate up to $500 per Term for refrigerant for all Breakdowns which could be covered under this Section, unless additional coverage is purchased and noted herein.",
                            "coverage_limit": "$5,000 per Term. If the Air Conditioning system is part of an HVAC system, the Maximum Coverage under this category of system is $8,000 per Term.",
                            "standard_price": 199,
                            "custom_price": 249,
                            "item_removal_price": 50,
                            "percentage_fee": "10",
                            "note": "AIR CONDITIONING, HEATING and HVAC SYSTEM* NOTES:\r\nIf the Residence: (a) does not have an HVAC system serve as its primary heating\r\nand cooling system, we provide the standard coverage you separately selected,\r\npaid the additional charge for, and which appears on the Account Summary for (i)\r\nthe Residence's primary gas, oil or electric heating unit and ductwork, or (ii) the\r\nResidence's primary air conditioning unit and ductwork, or (iii) both (i) and (ii); or\r\n(b) does have an HVAC system, we provide standard coverage for the HVAC\r\nsystem, provided, however, that we provide no coverage for any other air\r\nconditioning or heating equipment or ductwork that heats or cools any part of a\r\nfloor within the Residence, unless you separately selected such additional\r\ncoverage, paid the additional charge for such coverage, and such coverage\r\nappears on the Account Summary.\r\nCoverage is available on HVAC system or Heating and Air Conditioning units\r\nhaving a capacity of up to five (5) tons. EHW will pay up to $1,500 per Term for\r\naccess, diagnosis and repair or replacement of any geothermal and/or water\r\nsource heat pumps, glycol, hot water, or steam circulating system. Where covered\r\nrepairs require access to Air Conditioning and Heating ductwork, EHW will provide\r\naccess to ductwork only through unobstructed walls, ceilings or floors, and will\r\nreturn access openings to a rough finish.\r\nIf the Air Conditioning and Heating ductwork is accessible only through a concrete\r\nfloor, wall or ceiling, EHW will pay a total of up to $1,000 per Term to access,\r\ndiagnose, repair or replace such ductwork, including returning access openings to\r\na rough finish. During the Term, EHW will pay for access, diagnosis, and\r\nreplacement related to necessary or required Heating and Air Conditioning system\r\nefficiency and other upgrades except: (1) costs associated with plenums and\r\nrefrigerant line sets, and (2) any other Heating and Air Conditioning-specific\r\nlimitations and exclusions in your Agreement.\r\n*When the word “primary” is used in respect to the air conditioning and heating\r\nsystem for a heated and/or cooled floor of the Residence, “primary” means: (a) the\r\nHVAC system, if it heats and cools any part of that floor, or (b) the main source of\r\ncooling and/or heating for a floor, if there is no HVAC system that heats or cools\r\nany part of that floor.",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-15T13:50:54.749Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "2000",
                            "maximum_allowed_increase": "5000",
                            "maximum_coverage_decrease_fee": "1",
                            "maximum_coverage_increase_fee": "4"
                        },
                        {
                            "_id": "5fdb26750e8144b9d57a41af",
                            "title": "HEATING INCLUDING DUCTWORK",
                            "image": "1608197749002_Heating_including_ductwork.png",
                            "description": "A system for controlling the humidity, ventilation, and temperature of the interior\r\nof an occupied space to improve the comfort of occupants, typically to maintain a\r\nwarm atmosphere in cold conditions.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 3000,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including main\r\ncontrol board, thermostats, compressors, motors, condensers, pumps,\r\ntransformers, capacitors, contactors, pressure switches, coils, belts, pulleys,\r\nrelays, drain lines, thermistor, humidifiers, elements, exchangers, zone controllers,\r\nfuses, electronic circuits, rectifiers, rust and corrosion, defrost elements and\r\nfreon",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                "Forced air systems",
                                "electric baseboards",
                                "hot water units",
                                "steam circulating units",
                                "wall mounted heaters",
                                "heat pumps",
                                "floor furnaces",
                                "mini splits",
                                "geothermal",
                                "radiant units",
                                "solar units",
                                "packaged units",
                                "HVAC System (if applicable)"
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "leaks of any kind | fuel storage tanks | outside or underground piping for geothermal and/or water units | maintenance | filters | mismatched systems | improperly sized units |noise | support equipment",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                "Portable units",
                                "chimneys",
                                "fireplaces",
                                "wood, grain or pallet heating units",
                                "window units",
                                "air cleaners"
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$5,000 per Term. If the Heating system is part of an HVAC system, the Maximum Coverage under this category of system is $8,000 per Term. ",
                            "standard_price": 199,
                            "custom_price": 249,
                            "item_removal_price": 50,
                            "percentage_fee": "10",
                            "note": "AIR CONDITIONING, HEATING and HVAC SYSTEM* NOTES:\r\nIf the Residence: (a) does not have an HVAC system serve as its primary heating\r\nand cooling system, we provide the standard coverage you separately selected,\r\npaid the additional charge for, and which appears on the Account Summary for (i)\r\nthe Residence's primary gas, oil or electric heating unit and ductwork, or (ii) the\r\nResidence's primary air conditioning unit and ductwork, or (iii) both (i) and (ii)\r\nor\r\n(b) does have an HVAC system, we provide standard coverage for the HVAC \r\nsystem, provided, however, that we provide no coverage for any other air \r\nconditioning or heating equipment or ductwork that heats or cools any part of a\r\nfloor within the Residence, unless you separately selected such additional\r\ncoverage, paid the additional charge for such coverage, and such coverage\r\nappears on the Account Summary.\r\nCoverage is available on HVAC system or Heating and Air Conditioning units\r\nhaving a capacity of up to five (5) tons. EHW will pay up to $1,500 per Term for\r\naccess, diagnosis and repair or replacement of any geothermal and/or water\r\nsource heat pumps, glycol, hot water, or steam circulating system. Where covered\r\nrepairs require access to Air Conditioning and Heating ductwork, EHW will provide\r\naccess to ductwork only through unobstructed walls, ceilings or floors, and will\r\nreturn access openings to a rough finish.\r\nIf the Air Conditioning and Heating ductwork is accessible only through a concrete\r\nfloor, wall or ceiling, EHW will pay a total of up to $1,000 per Term to access,\r\ndiagnose, repair or replace such ductwork, including returning access openings to\r\na rough finish. During the Term, EHW will pay for access, diagnosis, and\r\nreplacement related to necessary or required Heating and Air Conditioning system\r\nefficiency and other upgrades except: (1) costs associated with plenums and\r\nrefrigerant line sets, and (2) any other Heating and Air Conditioning-specific\r\nlimitations and exclusions in your Agreement.\r\n*When the word “primary” is used in respect to the air conditioning and heating\r\nsystem for a heated and/or cooled floor of the Residence, “primary” means: (a) the\r\nHVAC system, if it heats and cools any part of that floor, or (b) the main source of\r\ncooling and/or heating for a floor, if there is no HVAC system that heats or cools\r\nany part of that floor.",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-17T09:35:49.018Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "2000",
                            "maximum_allowed_increase": "5000",
                            "maximum_coverage_decrease_fee": "1",
                            "maximum_coverage_increase_fee": "4"
                        },
                        {
                            "_id": "5fdb312b0e8144b9d57a41b0",
                            "title": "ELECTRICAL SYSTEM",
                            "image": "1608200491446_Electrical_System.png",
                            "description": "An electric system consists of all of the elements needed to distribute electrical\r\npower, including overhead and underground lines, poles, transformers, and other\r\nequipment.",
                            "average_cost_repair": 150,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [
                                ""
                            ],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including wiring,\r\nmain panels, sub-panels, switches, breakers, receptacles, junction boxes, ground\r\nfault interrupters, attic and exhaust fans, outlets, and built-in bathroom exhaust\r\nfans",
                            "covered_additional_information": "",
                            "covered_system_types": [
                                ""
                            ],
                            "not_covered_subtitle": "",
                            "not_covered_list": "circuit overload | intercom systems | meter boxes | face plates | DC components |\r\nfixtures | loss and/or damage arising out of power failure, power surge, flood and/\r\nor fire",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [
                                ""
                            ],
                            "freon_coverage": "",
                            "coverage_limit": "$3,000 per Term.",
                            "standard_price": 99,
                            "custom_price": 129,
                            "item_removal_price": 35,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-17T10:21:31.476Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "1000",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5"
                        },
                        {
                            "_id": "5fdb7b1e0e8144b9d57a41b1",
                            "title": "PLUMBING SYSTEM",
                            "image": "1608219422853_Plumbing.png",
                            "description": "Plumbing is a system that conveys fluids for a wide range of applications.\r\nPlumbing uses pipes, valves, tanks, plumbing fixtures, and other apparatuses to\r\nconvey fluids.",
                            "average_cost_repair": 300,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "Interior plumbing lines including leaks/breaks of any kind, water lines, waste lines,\r\nvent lines, valves, pressure regulators, expansion tanks, toilets and related\r\nmechanisms, toilet wax ring seals, tubs, diverters, angle stops, risers, gate valves,\r\nhose bibs, basket strainers, expansion tanks, built-in bathtub whirlpool motor/\r\npump/air switch assemblies",
                            "covered_additional_information": "Where covered repairs require access to plumbing, EHW will provide access to\r\nplumbing only through unobstructed walls, ceilings or floors, and will return\r\naccess openings to a rough finish. If the plumbing is accessible only through a\r\nconcrete floor, wall or ceiling, EHW will pay up to $1,000 per Term for access,\r\ndiagnosis, repair, or replacement of such plumbing, including returning access\r\nopenings to a rough finish. Customer is responsible for payment of any costs in\r\nexcess of $1,000.",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "showers | bathtubs | sinks | toilet seats and leads | jets | saunas or steam rooms |\r\nstorage tanks | holding tanks | grouting | caulking | water filtration system* | septic\r\ntanks* | sump pumps* | well pumps* | ejector pumps* | Access through roof vents.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$3,000 per Term",
                            "standard_price": 99,
                            "custom_price": 129,
                            "item_removal_price": 40,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-17T15:37:02.974Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "1000",
                            "maximum_allowed_increase": "7000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        },
                        {
                            "_id": "5fdb834d0e8144b9d57a41b2",
                            "title": "PLUMBING STOPPAGE",
                            "image": "1608221517459_Plumbing_stopages.png",
                            "description": "A blockage is a blockage in the plumbing system, whether it is a clog in a toilet, a\r\nclog in a sink, a clog in a bathtub, a clog in a kitchen sink or a block in any other\r\ndrain.",
                            "average_cost_repair": 150,
                            "average_cost_replacement": 1000,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "Plumbing stoppages including stoppages of any kind, water lines, waste lines, vent\r\nlines, clearing of toilet/shower/bathtub and sink stoppages, clearing of mainline\r\ndrain and sewer stoppages through an accessible cleanout up to 100 feet from\r\naccess point, Clearing of lateral drain line stoppages up to 100 feet from access\r\npoint including accessible cleanout, p-trap, drain or overflow access points.",
                            "covered_additional_information": "Where covered repairs require access to plumbing, EHW will provide access to\r\nplumbing only through unobstructed walls, ceilings or floors, and will return\r\naccess openings to a rough finish. If the plumbing is accessible only through a\r\nconcrete floor, wall or ceiling, EHW will pay up to $1,000 per Term for access,\r\ndiagnosis, repair, or replacement of such plumbing, including returning access\r\nopenings to a rough finish. Customer is responsible for payment of any costs in\r\nexcess of $1,000.",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "Interior and/or exterior Stoppages caused by collapsed, damaged or broken drain,\r\nvent or sewer lines outside the Residence's main foundation | Lines broken,\r\ninfiltrated or stopped by roots or foreign objects, even if within the Residence's\r\nmain foundation | Costs to locate or access cleanouts not found or inaccessible, or\r\nto install cleanouts | Access through roof vents.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term.",
                            "standard_price": 99,
                            "custom_price": 129,
                            "item_removal_price": 25,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-17T16:11:57.532Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        },
                        {
                            "_id": "5fdc68baed66698d0ab5d44d",
                            "title": "WATER HEATER",
                            "image": "1608280250203_Water_Heater.png",
                            "description": "Water heater is a system with heat transfer process that uses an energy source to\r\nheat water above its initial temperature.",
                            "average_cost_repair": 245,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\ntankless water heaters, circulating pumps, control board, thermostats, heating\r\nelements, gas valves, pressure switches, vent pipes, vent lines, racks, straps,\r\nblankets, hot water dispensers, thermal expansion tanks, flues, thermocouple,\r\nignition module and Igniter",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "solar components | noise | lime buildup | magnesium rod failure",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$3,000 per Term.",
                            "standard_price": 149,
                            "custom_price": 179,
                            "item_removal_price": 40,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T08:30:50.241Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "1000",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "3"
                        },
                        {
                            "_id": "5fdc6d38ed66698d0ab5d44e",
                            "title": "GARAGE DOOR OPENER",
                            "image": "1608281400611_Garage_door_opener.png",
                            "description": "A garage door opener is a motorized device that opens and closes garage doors\r\ncontrolled by switches on the garage wall.",
                            "average_cost_repair": 225,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, relays, switches, chains, belts, gears, pulley, capacitors, drive\r\ntrains, track assembly, hinges, springs, push arm, door hardware, axle bolts, and\r\nkeypad",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "garage door",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term.",
                            "standard_price": 129,
                            "custom_price": 149,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T08:50:00.699Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                }
            ],
            "property_pricing": [
                {
                    "_id": "60127badec1a91e6ffaf0817",
                    "property_type_id": "5fe45f9d707ef30db84c1bd3",
                    "info": {
                        "property_size_id": "5fe1fc00707ef30db84c1bcf",
                        "cost_per_plan": 0,
                        "description": "undefined",
                        "automated_category_maximum_coverage_increase": "0.00",
                        "automated_aggregated_coverage_increase": "0.00",
                        "total_allowed_combined_coverage_decrease": "",
                        "_id": "60127badec1a91e6ffaf0828",
                        "covered_item_list": [
                            {
                                "quantity": 1,
                                "price": "69.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0829",
                                "covered_item_id": {
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
                                    "maximum_coverage_increase_fee": "7",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "1000",
                                    "maximum_allowed_increase": "12000",
                                    "note": "",
                                    "type": "appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd8715d0e8144b9d57a41a6",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T08:18:37.009Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "59.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf082a",
                                "covered_item_id": {
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
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd875e10e8144b9d57a41a7",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T08:37:53.831Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "59.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf082b",
                                "covered_item_id": {
                                    "title": "CLOTHES DRYER",
                                    "image": "1608044775686_Clothes_Dryer.png",
                                    "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 59,
                                    "custom_price": 69,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd87ddb0e8144b9d57a41a8",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:11:55.520Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "79.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf082c",
                                "covered_item_id": {
                                    "title": "RANGE/OVEN/COOKTOP",
                                    "image": "1608045016623_Range_Oven_Cooktop.png",
                                    "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                                    "average_cost_repair": 250,
                                    "average_cost_replacement": 1200,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "N/A",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "N/A",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "",
                                    "standard_price": 79,
                                    "custom_price": 89,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "6",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "10000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd884730e8144b9d57a41a9",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T09:40:03.919Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "69.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf082d",
                                "covered_item_id": {
                                    "title": "DISHWASHER",
                                    "image": "1608045156547_Dish_Washer.png",
                                    "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                                    "average_cost_repair": 175,
                                    "average_cost_replacement": 1000,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$2,000 per Term",
                                    "standard_price": 69,
                                    "custom_price": 79,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd887150e8144b9d57a41aa",
                                    "percentage_fee": "30",
                                    "createdAt": "2020-12-15T09:51:17.121Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "49.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf082e",
                                "covered_item_id": {
                                    "title": "BUILT-IN MICROWAVE OVEN",
                                    "image": "1608045198422_Built_In_Microwave.png",
                                    "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                                    "average_cost_repair": 125,
                                    "average_cost_replacement": 400,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$1,000 per Term",
                                    "standard_price": 49,
                                    "custom_price": 59,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "4000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd89ac60e8144b9d57a41ab",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:15:18.132Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "39.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf082f",
                                "covered_item_id": {
                                    "title": "TRASH COMPACTOR",
                                    "image": "1608045316063_Trash_Compactor.png",
                                    "description": "The kitchen trash compactor is a home appliance that crushes and bundles\r\ngarbage for easy disposal.",
                                    "average_cost_repair": 125,
                                    "average_cost_replacement": 300,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, switches, relays, tracks and wiring",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "racks | panels | cabinetry | removable buckets | door seals | knob | handles |\r\npedals | automatic deodorizers",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$700 per Term",
                                    "standard_price": 39,
                                    "custom_price": 49,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "1300",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd8a2970e8144b9d57a41ac",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:48:39.686Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "39.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0830",
                                "covered_item_id": {
                                    "title": "GARBAGE DISPOSAL",
                                    "image": "1608045361875_Garbage_disposal.png",
                                    "description": "Garbage disposal is mounted to the underside of a sink and is designed to collect \r\nsolid food waste in a grinding chamber.",
                                    "average_cost_repair": 100,
                                    "average_cost_replacement": 150,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, blades, wiring, casing and switches",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "N/A",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$500 per Term",
                                    "standard_price": 39,
                                    "custom_price": 49,
                                    "item_removal_price": 10,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "0",
                                    "maximum_allowed_decrease": "0",
                                    "maximum_allowed_increase": "1500",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd8a3520e8144b9d57a41ad",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T11:51:46.218Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "199.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0831",
                                "covered_item_id": {
                                    "title": "AIR CONDITIONING INCLUDING DUCTWORK",
                                    "image": "1608040254667_Air_conditioning_including_ductwork.png",
                                    "description": "A system for controlling the humidity, ventilation, and temperature of the interior\r\nof an occupied space to improve the comfort of occupants, typically to maintain a\r\ncool atmosphere in warm conditions.",
                                    "average_cost_repair": 275,
                                    "average_cost_replacement": 3500,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including main\r\ncontrol board, thermostats, compressors, motors, condensers, casings, pumps,\r\ntransformers, capacitors, contactors, pressure switches, coils, belts, pulleys, drain\r\nlines, thermistor, humidifiers, elements, exchangers, zone controllers, fuses,\r\nelectronic circuits, rectifiers, rust and corrosion, defrost elements and freon*",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        "Electric central air conditioning unit",
                                        "heat pump",
                                        "duct systems",
                                        "wall air conditioners",
                                        "mini splits",
                                        "geothermal",
                                        "radiant units",
                                        "solar units",
                                        "packaged units",
                                        "HVAC System(if applicable)"
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "leaks of any kind | outside or underground piping for geothermal and/or water\r\nunits | maintenance | filters | mismatched systems | improperly sized\r\nunits | noise | support equipment",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        "Portable units",
                                        "gas units",
                                        "water towers",
                                        "Chillers",
                                        "lithium units",
                                        "window units"
                                    ],
                                    "freon_coverage": "EHW will pay up to $25 per pound for refrigerant limited to 10 pounds per Breakdown, and EHW's liability hereunder is limited to paying in the aggregate up to $500 per Term for refrigerant for all Breakdowns which could be covered under this Section, unless additional coverage is purchased and noted herein.",
                                    "coverage_limit": "$5,000 per Term. If the Air Conditioning system is part of an HVAC system, the Maximum Coverage under this category of system is $8,000 per Term.",
                                    "standard_price": 199,
                                    "custom_price": 249,
                                    "item_removal_price": 50,
                                    "maximum_coverage_increase_fee": "4",
                                    "maximum_coverage_decrease_fee": "1",
                                    "maximum_allowed_decrease": "2000",
                                    "maximum_allowed_increase": "5000",
                                    "note": "AIR CONDITIONING, HEATING and HVAC SYSTEM* NOTES:\r\nIf the Residence: (a) does not have an HVAC system serve as its primary heating\r\nand cooling system, we provide the standard coverage you separately selected,\r\npaid the additional charge for, and which appears on the Account Summary for (i)\r\nthe Residence's primary gas, oil or electric heating unit and ductwork, or (ii) the\r\nResidence's primary air conditioning unit and ductwork, or (iii) both (i) and (ii); or\r\n(b) does have an HVAC system, we provide standard coverage for the HVAC\r\nsystem, provided, however, that we provide no coverage for any other air\r\nconditioning or heating equipment or ductwork that heats or cools any part of a\r\nfloor within the Residence, unless you separately selected such additional\r\ncoverage, paid the additional charge for such coverage, and such coverage\r\nappears on the Account Summary.\r\nCoverage is available on HVAC system or Heating and Air Conditioning units\r\nhaving a capacity of up to five (5) tons. EHW will pay up to $1,500 per Term for\r\naccess, diagnosis and repair or replacement of any geothermal and/or water\r\nsource heat pumps, glycol, hot water, or steam circulating system. Where covered\r\nrepairs require access to Air Conditioning and Heating ductwork, EHW will provide\r\naccess to ductwork only through unobstructed walls, ceilings or floors, and will\r\nreturn access openings to a rough finish.\r\nIf the Air Conditioning and Heating ductwork is accessible only through a concrete\r\nfloor, wall or ceiling, EHW will pay a total of up to $1,000 per Term to access,\r\ndiagnose, repair or replace such ductwork, including returning access openings to\r\na rough finish. During the Term, EHW will pay for access, diagnosis, and\r\nreplacement related to necessary or required Heating and Air Conditioning system\r\nefficiency and other upgrades except: (1) costs associated with plenums and\r\nrefrigerant line sets, and (2) any other Heating and Air Conditioning-specific\r\nlimitations and exclusions in your Agreement.\r\n*When the word “primary” is used in respect to the air conditioning and heating\r\nsystem for a heated and/or cooled floor of the Residence, “primary” means: (a) the\r\nHVAC system, if it heats and cools any part of that floor, or (b) the main source of\r\ncooling and/or heating for a floor, if there is no HVAC system that heats or cools\r\nany part of that floor.",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fd8bf3e0e8144b9d57a41ae",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-15T13:50:54.749Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "199.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0832",
                                "covered_item_id": {
                                    "title": "HEATING INCLUDING DUCTWORK",
                                    "image": "1608197749002_Heating_including_ductwork.png",
                                    "description": "A system for controlling the humidity, ventilation, and temperature of the interior\r\nof an occupied space to improve the comfort of occupants, typically to maintain a\r\nwarm atmosphere in cold conditions.",
                                    "average_cost_repair": 250,
                                    "average_cost_replacement": 3000,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including main\r\ncontrol board, thermostats, compressors, motors, condensers, pumps,\r\ntransformers, capacitors, contactors, pressure switches, coils, belts, pulleys,\r\nrelays, drain lines, thermistor, humidifiers, elements, exchangers, zone controllers,\r\nfuses, electronic circuits, rectifiers, rust and corrosion, defrost elements and\r\nfreon",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        "Forced air systems",
                                        "electric baseboards",
                                        "hot water units",
                                        "steam circulating units",
                                        "wall mounted heaters",
                                        "heat pumps",
                                        "floor furnaces",
                                        "mini splits",
                                        "geothermal",
                                        "radiant units",
                                        "solar units",
                                        "packaged units",
                                        "HVAC System (if applicable)"
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "leaks of any kind | fuel storage tanks | outside or underground piping for geothermal and/or water units | maintenance | filters | mismatched systems | improperly sized units |noise | support equipment",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        "Portable units",
                                        "chimneys",
                                        "fireplaces",
                                        "wood, grain or pallet heating units",
                                        "window units",
                                        "air cleaners"
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$5,000 per Term. If the Heating system is part of an HVAC system, the Maximum Coverage under this category of system is $8,000 per Term. ",
                                    "standard_price": 199,
                                    "custom_price": 249,
                                    "item_removal_price": 50,
                                    "maximum_coverage_increase_fee": "4",
                                    "maximum_coverage_decrease_fee": "1",
                                    "maximum_allowed_decrease": "2000",
                                    "maximum_allowed_increase": "5000",
                                    "note": "AIR CONDITIONING, HEATING and HVAC SYSTEM* NOTES:\r\nIf the Residence: (a) does not have an HVAC system serve as its primary heating\r\nand cooling system, we provide the standard coverage you separately selected,\r\npaid the additional charge for, and which appears on the Account Summary for (i)\r\nthe Residence's primary gas, oil or electric heating unit and ductwork, or (ii) the\r\nResidence's primary air conditioning unit and ductwork, or (iii) both (i) and (ii)\r\nor\r\n(b) does have an HVAC system, we provide standard coverage for the HVAC \r\nsystem, provided, however, that we provide no coverage for any other air \r\nconditioning or heating equipment or ductwork that heats or cools any part of a\r\nfloor within the Residence, unless you separately selected such additional\r\ncoverage, paid the additional charge for such coverage, and such coverage\r\nappears on the Account Summary.\r\nCoverage is available on HVAC system or Heating and Air Conditioning units\r\nhaving a capacity of up to five (5) tons. EHW will pay up to $1,500 per Term for\r\naccess, diagnosis and repair or replacement of any geothermal and/or water\r\nsource heat pumps, glycol, hot water, or steam circulating system. Where covered\r\nrepairs require access to Air Conditioning and Heating ductwork, EHW will provide\r\naccess to ductwork only through unobstructed walls, ceilings or floors, and will\r\nreturn access openings to a rough finish.\r\nIf the Air Conditioning and Heating ductwork is accessible only through a concrete\r\nfloor, wall or ceiling, EHW will pay a total of up to $1,000 per Term to access,\r\ndiagnose, repair or replace such ductwork, including returning access openings to\r\na rough finish. During the Term, EHW will pay for access, diagnosis, and\r\nreplacement related to necessary or required Heating and Air Conditioning system\r\nefficiency and other upgrades except: (1) costs associated with plenums and\r\nrefrigerant line sets, and (2) any other Heating and Air Conditioning-specific\r\nlimitations and exclusions in your Agreement.\r\n*When the word “primary” is used in respect to the air conditioning and heating\r\nsystem for a heated and/or cooled floor of the Residence, “primary” means: (a) the\r\nHVAC system, if it heats and cools any part of that floor, or (b) the main source of\r\ncooling and/or heating for a floor, if there is no HVAC system that heats or cools\r\nany part of that floor.",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fdb26750e8144b9d57a41af",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-17T09:35:49.018Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "99.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0833",
                                "covered_item_id": {
                                    "title": "ELECTRICAL SYSTEM",
                                    "image": "1608200491446_Electrical_System.png",
                                    "description": "An electric system consists of all of the elements needed to distribute electrical\r\npower, including overhead and underground lines, poles, transformers, and other\r\nequipment.",
                                    "average_cost_repair": 150,
                                    "average_cost_replacement": 1500,
                                    "coverage_highlight": [
                                        ""
                                    ],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including wiring,\r\nmain panels, sub-panels, switches, breakers, receptacles, junction boxes, ground\r\nfault interrupters, attic and exhaust fans, outlets, and built-in bathroom exhaust\r\nfans",
                                    "covered_additional_information": "",
                                    "covered_system_types": [
                                        ""
                                    ],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "circuit overload | intercom systems | meter boxes | face plates | DC components |\r\nfixtures | loss and/or damage arising out of power failure, power surge, flood and/\r\nor fire",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [
                                        ""
                                    ],
                                    "freon_coverage": "",
                                    "coverage_limit": "$3,000 per Term.",
                                    "standard_price": 99,
                                    "custom_price": 129,
                                    "item_removal_price": 35,
                                    "maximum_coverage_increase_fee": "5",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "1000",
                                    "maximum_allowed_increase": "2000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fdb312b0e8144b9d57a41b0",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-17T10:21:31.476Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "99.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0834",
                                "covered_item_id": {
                                    "title": "PLUMBING SYSTEM",
                                    "image": "1608219422853_Plumbing.png",
                                    "description": "Plumbing is a system that conveys fluids for a wide range of applications.\r\nPlumbing uses pipes, valves, tanks, plumbing fixtures, and other apparatuses to\r\nconvey fluids.",
                                    "average_cost_repair": 300,
                                    "average_cost_replacement": 1500,
                                    "coverage_highlight": [],
                                    "covered_subtitle": "",
                                    "covered_list": "Interior plumbing lines including leaks/breaks of any kind, water lines, waste lines,\r\nvent lines, valves, pressure regulators, expansion tanks, toilets and related\r\nmechanisms, toilet wax ring seals, tubs, diverters, angle stops, risers, gate valves,\r\nhose bibs, basket strainers, expansion tanks, built-in bathtub whirlpool motor/\r\npump/air switch assemblies",
                                    "covered_additional_information": "Where covered repairs require access to plumbing, EHW will provide access to\r\nplumbing only through unobstructed walls, ceilings or floors, and will return\r\naccess openings to a rough finish. If the plumbing is accessible only through a\r\nconcrete floor, wall or ceiling, EHW will pay up to $1,000 per Term for access,\r\ndiagnosis, repair, or replacement of such plumbing, including returning access\r\nopenings to a rough finish. Customer is responsible for payment of any costs in\r\nexcess of $1,000.",
                                    "covered_system_types": [],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "showers | bathtubs | sinks | toilet seats and leads | jets | saunas or steam rooms |\r\nstorage tanks | holding tanks | grouting | caulking | water filtration system* | septic\r\ntanks* | sump pumps* | well pumps* | ejector pumps* | Access through roof vents.",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [],
                                    "freon_coverage": "",
                                    "coverage_limit": "$3,000 per Term",
                                    "standard_price": 99,
                                    "custom_price": 129,
                                    "item_removal_price": 40,
                                    "maximum_coverage_increase_fee": "4",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "1000",
                                    "maximum_allowed_increase": "7000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fdb7b1e0e8144b9d57a41b1",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-17T15:37:02.974Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "99.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0835",
                                "covered_item_id": {
                                    "title": "PLUMBING STOPPAGE",
                                    "image": "1608221517459_Plumbing_stopages.png",
                                    "description": "A blockage is a blockage in the plumbing system, whether it is a clog in a toilet, a\r\nclog in a sink, a clog in a bathtub, a clog in a kitchen sink or a block in any other\r\ndrain.",
                                    "average_cost_repair": 150,
                                    "average_cost_replacement": 1000,
                                    "coverage_highlight": [],
                                    "covered_subtitle": "",
                                    "covered_list": "Plumbing stoppages including stoppages of any kind, water lines, waste lines, vent\r\nlines, clearing of toilet/shower/bathtub and sink stoppages, clearing of mainline\r\ndrain and sewer stoppages through an accessible cleanout up to 100 feet from\r\naccess point, Clearing of lateral drain line stoppages up to 100 feet from access\r\npoint including accessible cleanout, p-trap, drain or overflow access points.",
                                    "covered_additional_information": "Where covered repairs require access to plumbing, EHW will provide access to\r\nplumbing only through unobstructed walls, ceilings or floors, and will return\r\naccess openings to a rough finish. If the plumbing is accessible only through a\r\nconcrete floor, wall or ceiling, EHW will pay up to $1,000 per Term for access,\r\ndiagnosis, repair, or replacement of such plumbing, including returning access\r\nopenings to a rough finish. Customer is responsible for payment of any costs in\r\nexcess of $1,000.",
                                    "covered_system_types": [],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "Interior and/or exterior Stoppages caused by collapsed, damaged or broken drain,\r\nvent or sewer lines outside the Residence's main foundation | Lines broken,\r\ninfiltrated or stopped by roots or foreign objects, even if within the Residence's\r\nmain foundation | Costs to locate or access cleanouts not found or inaccessible, or\r\nto install cleanouts | Access through roof vents.",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [],
                                    "freon_coverage": "",
                                    "coverage_limit": "$2,000 per Term.",
                                    "standard_price": 99,
                                    "custom_price": 129,
                                    "item_removal_price": 25,
                                    "maximum_coverage_increase_fee": "4",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "3000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fdb834d0e8144b9d57a41b2",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-17T16:11:57.532Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "149.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0836",
                                "covered_item_id": {
                                    "title": "WATER HEATER",
                                    "image": "1608280250203_Water_Heater.png",
                                    "description": "Water heater is a system with heat transfer process that uses an energy source to\r\nheat water above its initial temperature.",
                                    "average_cost_repair": 245,
                                    "average_cost_replacement": 1500,
                                    "coverage_highlight": [],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including\r\ntankless water heaters, circulating pumps, control board, thermostats, heating\r\nelements, gas valves, pressure switches, vent pipes, vent lines, racks, straps,\r\nblankets, hot water dispensers, thermal expansion tanks, flues, thermocouple,\r\nignition module and Igniter",
                                    "covered_additional_information": "",
                                    "covered_system_types": [],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "solar components | noise | lime buildup | magnesium rod failure",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [],
                                    "freon_coverage": "",
                                    "coverage_limit": "$3,000 per Term.",
                                    "standard_price": 149,
                                    "custom_price": 179,
                                    "item_removal_price": 40,
                                    "maximum_coverage_increase_fee": "3",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "1000",
                                    "maximum_allowed_increase": "2000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fdc68baed66698d0ab5d44d",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-18T08:30:50.241Z",
                                    "__v": 0
                                }
                            },
                            {
                                "quantity": 1,
                                "price": "129.00",
                                "category_increase": "",
                                "category_decrease": "",
                                "discount_two": "0.00",
                                "discount_three": "0.00",
                                "discount_four": "0.00",
                                "discount_more": "0.00",
                                "_id": "60127badec1a91e6ffaf0837",
                                "covered_item_id": {
                                    "title": "GARAGE DOOR OPENER",
                                    "image": "1608281400611_Garage_door_opener.png",
                                    "description": "A garage door opener is a motorized device that opens and closes garage doors\r\ncontrolled by switches on the garage wall.",
                                    "average_cost_repair": 225,
                                    "average_cost_replacement": 1500,
                                    "coverage_highlight": [],
                                    "covered_subtitle": "",
                                    "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, relays, switches, chains, belts, gears, pulley, capacitors, drive\r\ntrains, track assembly, hinges, springs, push arm, door hardware, axle bolts, and\r\nkeypad",
                                    "covered_additional_information": "",
                                    "covered_system_types": [],
                                    "not_covered_subtitle": "",
                                    "not_covered_list": "garage door",
                                    "not_covered_additional_information": "",
                                    "not_covered_system_types": [],
                                    "freon_coverage": "",
                                    "coverage_limit": "$2,000 per Term.",
                                    "standard_price": 129,
                                    "custom_price": 149,
                                    "item_removal_price": 20,
                                    "maximum_coverage_increase_fee": "4",
                                    "maximum_coverage_decrease_fee": "2",
                                    "maximum_allowed_decrease": "500",
                                    "maximum_allowed_increase": "2000",
                                    "note": "",
                                    "type": "Appliance",
                                    "status": "Active",
                                    "isDeleted": false,
                                    "_id": "5fdc6d38ed66698d0ab5d44e",
                                    "percentage_fee": "10",
                                    "createdAt": "2020-12-18T08:50:00.699Z",
                                    "__v": 0
                                }
                            }
                        ]
                    },
                    "property_type": [
                        {
                            "_id": "5fe45f9d707ef30db84c1bd3",
                            "title": "Single Family",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-24T09:30:05.876Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "state_data": [
                {
                    "additional_cost": "12.00",
                    "salex_tax": "21",
                    "surcharge": "45",
                    "_id": "60127badec1a91e6ffaf0960",
                    "state_id": "5f3147e9a7137c4e385ebf88",
                    "state": [
                        {
                            "_id": "5f3147e9a7137c4e385ebf88",
                            "title": "Alabama",
                            "abbreviation": "Al",
                            "type": "not_covered",
                            "orderNumber": 0,
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-08-10T13:13:13.652Z",
                            "__v": 0
                        }
                    ]
                },
                {
                    "additional_cost": "32.00",
                    "salex_tax": "98",
                    "surcharge": "",
                    "_id": "60127badec1a91e6ffaf0963",
                    "state_id": "5f31481ea7137c4e385ebf8f",
                    "state": [
                        {
                            "_id": "5f31481ea7137c4e385ebf8f",
                            "title": "Arkansas",
                            "abbreviation": "AR",
                            "type": "not_covered",
                            "orderNumber": 0,
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-08-10T13:14:06.665Z",
                            "__v": 0
                        }
                    ]
                },
                {
                    "additional_cost": "21.00",
                    "salex_tax": "5",
                    "surcharge": "",
                    "_id": "60127badec1a91e6ffaf0962",
                    "state_id": "5f31484aa7137c4e385ebf96",
                    "state": [
                        {
                            "_id": "5f31484aa7137c4e385ebf96",
                            "title": "Arizona",
                            "abbreviation": "AZ",
                            "type": "not_covered",
                            "orderNumber": 0,
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-08-10T13:14:50.203Z",
                            "__v": 0
                        }
                    ]
                },
                {
                    "additional_cost": "36.00",
                    "salex_tax": "5",
                    "surcharge": "90",
                    "_id": "60127badec1a91e6ffaf0961",
                    "state_id": "5f313ed4a7137c4e385ebee7",
                    "state": [
                        {
                            "_id": "5f313ed4a7137c4e385ebee7",
                            "title": "Alaska",
                            "abbreviation": "Ak",
                            "type": "cover",
                            "orderNumber": 0,
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-08-10T12:34:28.525Z",
                            "__v": 0
                        }
                    ]
                }
            ],
            "available_checkout": null,
            "optional_item_id": null,
            "optional_item": [
                {
                    "quantity": 119,
                    "_id": "60127badec1a91e6ffaf0953",
                    "covered_item_id": "5fdc9ac0ed66698d0ab5d454",
                    "covered_item": [
                        {
                            "_id": "5fdc9ac0ed66698d0ab5d454",
                            "title": "SUMP PUMP",
                            "image": "1608293056306_Sump_Pump.png",
                            "description": "A sump pump is a pump used to remove water that has accumulated in a watercollecting sump basin, commonly found in the basements of homes.",
                            "average_cost_repair": 200,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nstandard groundwater sump pumps, switches, evacuation lines, and receptacles",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "lack of capacity | battery backup systems | portable pumps | grinder pumps |\r\nsewer ejector pumps",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,500 per Term.",
                            "standard_price": 99,
                            "custom_price": 119,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:04:16.378Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "300",
                            "maximum_allowed_increase": "3500",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 199,
                    "_id": "60127badec1a91e6ffaf095d",
                    "covered_item_id": "5fdca8e1ed66698d0ab5d461",
                    "covered_item": [
                        {
                            "_id": "5fdca8e1ed66698d0ab5d461",
                            "title": "ELECTRONICS",
                            "image": "1608296673622_Electrical_all_in_one.png",
                            "description": "Electronic devices such as tv’s, desktops and a laptops.",
                            "average_cost_repair": 250,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "One television; one desktop or laptop computer that is principally used for\r\npersonal purposes within the perimeter of the home, including all components and\r\nparts needed to perform its full functionality",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "software failures | whether due to a virus or not | accidental damage.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$3,000 per Term.",
                            "standard_price": 175,
                            "custom_price": 199,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T13:04:33.842Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 169,
                    "_id": "60127badec1a91e6ffaf0952",
                    "covered_item_id": "5fdc9a15ed66698d0ab5d453",
                    "covered_item": [
                        {
                            "_id": "5fdc9a15ed66698d0ab5d453",
                            "title": "SEPTIC SYSTEM PUMPING & SEPTIC SEWAGE EJECTOR PUMP",
                            "image": "1608292885500_Septic_system_plumbing_&_septic_sewage_ejector_pump.png",
                            "description": "Septic systems are underground wastewater treatment structures, commonly used\r\nin rural areas without centralized sewer systems.",
                            "average_cost_repair": 275,
                            "average_cost_replacement": 3000,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including septic\r\ntank, sewage ejector, aerobic pump, jet pump, plumbing lines, septic pumping*,\r\nmainline stoppages that can be cleared without excavation, and power supply",
                            "covered_additional_information": "septic system pumping is only available and covered once per Term.",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "leach lines | lateral lines | cesspools | chemical treatments | cost of finding or\r\ngaining access to the septic tank or sewer hook-ups | disposal of waste.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$3,000 per Term.",
                            "standard_price": 149,
                            "custom_price": 169,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:01:25.512Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "7000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 119,
                    "_id": "60127badec1a91e6ffaf0955",
                    "covered_item_id": "5fdc9c0ced66698d0ab5d456",
                    "covered_item": [
                        {
                            "_id": "5fdc9c0ced66698d0ab5d456",
                            "title": "EJECTOR PUMP",
                            "image": "1608293388367_Ejector_Pump.png",
                            "description": "An ejector pump is a pump that replaces gravity during the transportation of waste\r\nfrom a plumbing space that is situated underneath the remainder of the system.",
                            "average_cost_repair": 200,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nstandard residential grade grinder pump located within perimeter of the home,\r\npower supply and battery-operated plumbing lines,",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "lack of capacity | portable pumps",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,500 per Term.",
                            "standard_price": 99,
                            "custom_price": 119,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:09:48.444Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "300",
                            "maximum_allowed_increase": "2500",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 119,
                    "_id": "60127badec1a91e6ffaf0951",
                    "covered_item_id": "5fdc9903ed66698d0ab5d452",
                    "covered_item": [
                        {
                            "_id": "5fdc9903ed66698d0ab5d452",
                            "title": "WELL PUMP",
                            "image": "1608292611193_Well_Pump.png",
                            "description": "Well pumps extract water from a water well in the ground to provide your home\r\nwith drinking water.",
                            "average_cost_repair": 200,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including well\r\npump, motor, pressure switch, seals, controls, impellers, electrical and plumbing lines, and pressure tanks",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "booster pumps | well casings | tempering | joint wells | geothermal well systems |\r\nwell drilling | re-drilling of wells | water source heat pumps | holding or storage\r\ntanks | charges necessary to gain access and/or locate the well pump.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,500 per Term.",
                            "standard_price": 99,
                            "custom_price": 119,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T11:56:51.232Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "3500",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 69,
                    "_id": "60127badec1a91e6ffaf0957",
                    "covered_item_id": "5fdca1e6ed66698d0ab5d459",
                    "covered_item": [
                        {
                            "_id": "5fdca1e6ed66698d0ab5d459",
                            "title": "CENTRAL VACUUM",
                            "image": "1608294886253_Central_Vacuum.png",
                            "description": "A central vacuum system, also known as a whole-house vacuum , is a built-in\r\nsystem in which pipes run through the interior walls of the home and are\r\nconnected to a large vacuum system typically located in a garage or basement.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 750,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including duct\r\nwork and hoses",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "blockages | accessories | access",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$500 per Term.",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:34:46.411Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "100",
                            "maximum_allowed_increase": "1500",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 69,
                    "_id": "60127badec1a91e6ffaf095b",
                    "covered_item_id": "5fdca4d8ed66698d0ab5d45d",
                    "covered_item": [
                        {
                            "_id": "5fdca4d8ed66698d0ab5d45d",
                            "title": "FREE STANDING ICE MAKER",
                            "image": "1608295640143_Free_Standing_Ice_Maker.png",
                            "description": "An icemaker, ice generator, or ice machine may refer to a stand-alone device for\r\nmaking ice.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 600,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including ice\r\nmaker, ice dispenser, water dispenser, control board, compressor, condensers,\r\nevaporators, thermostats, and power supply",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "touch panel | filter | freon | leaks | water lines.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term.",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:47:20.233Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "300",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "quantity": 49,
                    "_id": "60127badec1a91e6ffaf094f",
                    "covered_item_id": "5fdc9703ed66698d0ab5d450",
                    "covered_item": [
                        {
                            "_id": "5fdc9703ed66698d0ab5d450",
                            "title": "SMOKE DETECTOR",
                            "image": "1608292099194_Smoke_Detector.png",
                            "description": "A smoke detector is a device that senses smoke, typically as an indicator of fire.",
                            "average_cost_repair": 50,
                            "average_cost_replacement": 125,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nhardwired, and battery-operated units",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$500 per Term.",
                            "standard_price": 39,
                            "custom_price": 49,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T11:48:19.201Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "0",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "0"
                        }
                    ]
                },
                {
                    "quantity": 119,
                    "_id": "60127badec1a91e6ffaf0958",
                    "covered_item_id": "5fdca2bded66698d0ab5d45a",
                    "covered_item": [
                        {
                            "_id": "5fdca2bded66698d0ab5d45a",
                            "title": "WATER FILTRATION SYSTEM",
                            "image": "1608295101192_Water_Filtration_system.png",
                            "description": "Water filtration is a general term that refers to any system or process that is used\r\nto filter out particles and pollutants from water.",
                            "average_cost_repair": 150,
                            "average_cost_replacement": 750,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including standard residential grade water filtration system located within the perimeter of\r\nthe home, power supply, and all associated plumbing lines",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "Filters | Sediment buildup | lime buildup | none electric powered systems | color or\r\npurity of the water | insufficient water pressure | excessive water pressure.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term.",
                            "standard_price": 99,
                            "custom_price": 119,
                            "item_removal_price": 0,
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:38:21.346Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "300",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "3"
                        }
                    ]
                },
                {
                    "covered_item": []
                },
                {
                    "quantity": 49,
                    "_id": "60127badec1a91e6ffaf094e",
                    "covered_item_id": "5fdc738eed66698d0ab5d44f",
                    "covered_item": [
                        {
                            "_id": "5fdc738eed66698d0ab5d44f",
                            "title": "DOOR BELL",
                            "image": "1608283022368_Door_Bell.png",
                            "description": "A doorbell is a signaling device typically placed near a door to a home entrance.",
                            "average_cost_repair": 75,
                            "average_cost_replacement": 150,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including doorbell wiring",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "intercom system | systems",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$500 per Term.",
                            "standard_price": 39,
                            "custom_price": 49,
                            "item_removal_price": 10,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T09:17:02.383Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "0",
                            "maximum_allowed_increase": "0",
                            "maximum_coverage_decrease_fee": "0",
                            "maximum_coverage_increase_fee": "0"
                        }
                    ]
                },
                {
                    "quantity": 69,
                    "_id": "60127badec1a91e6ffaf0950",
                    "covered_item_id": "5fdc97cced66698d0ab5d451",
                    "covered_item": [
                        {
                            "_id": "5fdc97cced66698d0ab5d451",
                            "title": "CEILING FAN",
                            "image": "1608292300790_Ceiling_Fans.png",
                            "description": "A ceiling fan is a mechanical fan mounted on the ceiling of a room or space,\r\nusually electrically powered, suspended from the ceiling of a room, that uses hubmounted rotating blades to circulate air.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 250,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nmotors, switches, bearings, and controls",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "blades | filters | shutters | lighting",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term.",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 15,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T11:51:40.828Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "300",
                            "maximum_allowed_increase": "1000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "3"
                        }
                    ]
                },
                {
                    "quantity": 119,
                    "_id": "60127badec1a91e6ffaf0959",
                    "covered_item_id": "5fdca356ed66698d0ab5d45b",
                    "covered_item": [
                        {
                            "_id": "5fdca356ed66698d0ab5d45b",
                            "title": "PLUMBING FIXTURES",
                            "image": "1608295254012_Plumbng_fixtures.png",
                            "description": "A plumbing fixture is an exchangeable device which can be connected to a\r\nplumbing system to deliver water such as all type of faucets shower heads and\r\nshower handles.",
                            "average_cost_repair": 125,
                            "average_cost_replacement": 300,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including kitchen\r\nfaucets, bathroom faucets, shower heads, shower handles, water leaks and\r\nassembly parts",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "insufficient water pressure | excessive water pressure.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term.",
                            "standard_price": 99,
                            "custom_price": 119,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:40:54.062Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "300",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 119,
                    "_id": "60127badec1a91e6ffaf0954",
                    "covered_item_id": "5fdc9b5fed66698d0ab5d455",
                    "covered_item": [
                        {
                            "_id": "5fdc9b5fed66698d0ab5d455",
                            "title": "GRINDER PUMP",
                            "image": "1608293215284_Grinder_Pump.png",
                            "description": "A grinder pump is a wastewater conveyance device. Its goal is to grind the waste\r\ninto a fine slurry, and pump it to the central sewer system or septic tank.",
                            "average_cost_repair": 200,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including\r\nstandard residential grade grinder pump located within perimeter of the home,\r\npower supply and plumbing lines",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "lack of capacity | portable pumps.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,500 per Term.",
                            "standard_price": 99,
                            "custom_price": 119,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:06:55.331Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "300",
                            "maximum_allowed_increase": "2500",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 149,
                    "_id": "60127badec1a91e6ffaf095c",
                    "covered_item_id": "5fdca5a9ed66698d0ab5d45e",
                    "covered_item": [
                        {
                            "_id": "5fdca5a9ed66698d0ab5d45e",
                            "title": "LAWN SPRINKLER SYSTEM",
                            "image": "1608295848951_Lawn_Sprinkler_System.png",
                            "description": "A device used as a method of applying irrigation water which is similar to natural\r\nrainfall.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including water\r\nlines and power supply",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "heads | insufficient water pressure | excessive water pressure | breakdown\r\nresulting from a weather condition.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,500 per Term.",
                            "standard_price": 129,
                            "custom_price": 149,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:50:49.155Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "1500",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 229,
                    "_id": "60127badec1a91e6ffaf0956",
                    "covered_item_id": "5fdc9fe1ed66698d0ab5d457",
                    "covered_item": [
                        {
                            "_id": "5fdc9fe1ed66698d0ab5d457",
                            "title": "POOL & SPA EQUIPMENT",
                            "image": "1608294369641_Inground_pool_equipment.png",
                            "description": "Pool & Spa equipment includes pumps, filters, heaters and cleaners, and also chemical feeders and salt chlorine generators. At the heart of your pool equipment is your pool pump and pool filter, crucial pool hardware to circulate and clean your pool water.",
                            "average_cost_repair": 375,
                            "average_cost_replacement": 2500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform the full functionality of the pool\r\nmechanical system, including above ground accessible piping, pumping system,\r\nplumbing system, heating system, filtration system, electrical system, primary\r\ncirculated pump and motor, blower motor, timer, heaters, plumbing pipes, wiring,\r\npressure gauges, housings, relays, impellers, and laterals",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "portable pools | structural defects | underground components | computerized\r\ncontrol board | leaks | liners | pool cover | cover motors | waterfalls | fountains |\r\nlights | jets | pool sweeps | cleaning equipment | skimmers | popup heads |\r\nchlorinators | ionizers | light fixtures | maintenance.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$3,000 per Term.",
                            "standard_price": 199,
                            "custom_price": 229,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:26:09.649Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 329,
                    "_id": "60127badec1a91e6ffaf095e",
                    "covered_item_id": "5fdcaa09ed66698d0ab5d462",
                    "covered_item": [
                        {
                            "_id": "5fdcaa09ed66698d0ab5d462",
                            "title": "SERVICE LINE",
                            "image": "1608299186113_no_thumbnail.jpg",
                            "description": "The system of pipes, tanks, fittings, and other apparatus required for the water\r\nline and sewer system.",
                            "average_cost_repair": 500,
                            "average_cost_replacement": 2500,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform the full functionality of the sewer\r\nsystem and water line, including locating the blockage or collapse, locating a leak,\r\nexcavation to expose pipe, pipe replacement or repair, repair or replacement of\r\nseals and joints, unblocking, fitting external valves, fusing, welding, pipe cutting,\r\nbackfilling of areas disturbed by repairs, restoration of your pavement, yard, or\r\nlandscaping disturbed or excavated as part of a covered repair on your property.",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "N/A",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$5,000 in total coverage per Term for repair and/or replacement, up to maximum of 2 occurrences per Term with a limit of up to $2,500 for each occurrence for repair and/or replacement.",
                            "standard_price": 299,
                            "custom_price": 329,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T13:09:29.162Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "1000",
                            "maximum_allowed_increase": "2500",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "5"
                        }
                    ]
                },
                {
                    "quantity": 119,
                    "_id": "60127badec1a91e6ffaf095f",
                    "covered_item_id": "5fdcabd4ed66698d0ab5d463",
                    "covered_item": [
                        {
                            "_id": "5fdcabd4ed66698d0ab5d463",
                            "title": "LIMITED ROOF LEAK REPAIR",
                            "image": "1608297428821_Leak_roof_Service.png",
                            "description": "A roof is the top covering of a property, including all materials and constructions\r\nnecessary to support it on the walls of the property or on uprights, providing\r\nprotection against rain, snow, sunlight, extremes of temperature, and wind.",
                            "average_cost_repair": 225,
                            "average_cost_replacement": null,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "Limited Roof Patching Repairs required to patch a roof when necessary to stop a\r\nresulting interior leak in the occupied living area of the Residence directly beneath\r\nthe roof, or to repair an interior ceiling that experienced secondary damage solely\r\ndue to a roof leak, provided that in each case such leak resulted directly from the\r\nroof and is wholly unrelated to any casualty event, including roof leak patching\r\nactivities",
                            "covered_additional_information": "Coverage under this Section is limited to Limited Roof Leak Repair Services only\r\nand does not under any circumstances include coverage for a partial or complete\r\nreplacement of a roof.",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "cracked and/or missing tiles | shakes | shingles | sheet metal panels or solar roof\r\npanels | foam roofs | tar and gravel | structural components |any other material not\r\nspecifically mentioned as covered | any defects related to labor or materials used\r\nin structural components | leaks | gutters | downspouts | flashing, sheathing |\r\nframing | truss | patio covers | skylights | decks | solar equipment | vents | heating or\r\ncooling equipment | antennae | satellite components | balconies | or chimneys | built-up roofs | garage roofs | extraordinary painting | any type of damage and/or\r\nsecondary damage not included above in What Is Covered | damage caused by\r\npersons walking or standing on roof | damage due to lack of caulking or other\r\nnormal or preventative maintenance.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$1,000 per Term.",
                            "standard_price": 99,
                            "custom_price": 119,
                            "item_removal_price": 20,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T13:17:08.920Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "2000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                },
                {
                    "quantity": 69,
                    "_id": "60127badec1a91e6ffaf095a",
                    "covered_item_id": "5fdca410ed66698d0ab5d45c",
                    "covered_item": [
                        {
                            "_id": "5fdca410ed66698d0ab5d45c",
                            "title": "STAND ALONE FREEZER",
                            "image": "1608295440501_Stand_Alone_Freezer.png",
                            "description": "A refrigerated stand alone compartment or cabinet for preserving food at very low\r\ntemperatures.",
                            "average_cost_repair": 175,
                            "average_cost_replacement": 1750,
                            "coverage_highlight": [],
                            "covered_subtitle": "",
                            "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, compressor, condensers, evaporators, fan motors, timers, thermostats,\r\nwiring, racks, shelves, door seals, door alarms and wire harness",
                            "covered_additional_information": "",
                            "covered_system_types": [],
                            "not_covered_subtitle": "",
                            "not_covered_list": "touch panel | filter | water lines | freon | leaks.",
                            "not_covered_additional_information": "",
                            "not_covered_system_types": [],
                            "freon_coverage": "",
                            "coverage_limit": "$2,000 per Term.",
                            "standard_price": 59,
                            "custom_price": 69,
                            "item_removal_price": 0,
                            "percentage_fee": "10",
                            "note": "",
                            "status": "Active",
                            "isDeleted": false,
                            "createdAt": "2020-12-18T12:44:00.512Z",
                            "__v": 0,
                            "maximum_allowed_decrease": "500",
                            "maximum_allowed_increase": "5000",
                            "maximum_coverage_decrease_fee": "2",
                            "maximum_coverage_increase_fee": "4"
                        }
                    ]
                }
            ],
            "plan_type": "custom"
        }
    ],
    "message": "Plan fetched Successfully"
}
*/

namedRouter.post("frontend.plan.list", '/plan/list',request_param.any(),planController.list);

/**
 * @api {get} /frontend/plan/:id Plan details
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "5f2ad5d4ca3fc30d57a5fba3",
        "title": "test plan 456",
        "image": "",
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
        "plan_pricing": [
            {
                "price": "100",
                "covering_unit": 3,
                "_id": "5f2ad5d4ca3fc30d57a5fba4",
                "property_type_id": "5f23f300e58e393af84da430"
            },
            {
                "price": "150",
                "covering_unit": 4,
                "_id": "5f2ad5d4ca3fc30d57a5fba5",
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
        "createdAt": "2020-08-05T15:52:52.197Z",
        "updatedAt": "2020-08-05T15:52:52.197Z"
    },
    "message": "Plan fetched Successfully"
}
*/

namedRouter.get("frontend.plan.details", '/plan/:id',planController.details)

/**
 * @api {post} /frontend/plan/details Plan details with condition
 * @apiVersion 1.0.0
 * @apiGroup Plan
 * @apiParam {id} _id Plan ID
 * @apiParam {id} property_type_id Plan Property Type ID
 * @apiParam {id} property_size_id Property Size Id
 * @apiSuccessExample {json} Success
 * {
    "data": {
        "_id": "601a5a5fe4ee4555d43c863d",
        "title": "Elite plan",
        "image": "",
        "maximum_aggregated_coverage": "23",
        "item_removal": "",
        "service_fee": {
            "price_0": "2.00",
            "price_70": "2.00",
            "price_100": "33.00",
            "price_130": "4.00"
        },
        "category_covered_item": [
            {
                "covered_item_id": [
                    "5fd87ddb0e8144b9d57a41a8",
                    "5fd884730e8144b9d57a41a9",
                    "5fd887150e8144b9d57a41aa",
                    "5fd89ac60e8144b9d57a41ab"
                ],
                "_id": "601a5a5fe4ee4555d43c863e",
                "category_id": "5fe08c49eec7d6a7a8d2cd1f",
                "category": [
                    {
                        "_id": "5fe08c49eec7d6a7a8d2cd1f",
                        "name": "Covered Appliances ",
                        "description": "",
                        "maximum_category_coverage": 8000,
                        "maximum_category_coverage_increase": "12000",
                        "maximum_category_coverage_decrase": "1000",
                        "type": "normal",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-21T11:51:37.381Z",
                        "__v": 0,
                        "percentage_fee": "12",
                        "category_coverage_decrease_fee": "",
                        "category_coverage_increase_fee": "12",
                        "automated_category_decrease": "12",
                        "automated_category_increase": "21"
                    }
                ],
                "covered_items": [
                    {
                        "_id": "5fd87ddb0e8144b9d57a41a8",
                        "title": "CLOTHES DRYER",
                        "image": "1608044775686_Clothes_Dryer.png",
                        "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                        "coverage_limit": "$2,000 per Term",
                        "standard_price": 59,
                        "custom_price": 69,
                        "item_removal_price": 20,
                        "percentage_fee": "10",
                        "note": "",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-15T09:11:55.520Z",
                        "__v": 0,
                        "maximum_allowed_decrease": "500",
                        "maximum_allowed_increase": "3000",
                        "maximum_coverage_decrease_fee": "2",
                        "maximum_coverage_increase_fee": "6",
                        "type": "appliance"
                    },
                    {
                        "_id": "5fd884730e8144b9d57a41a9",
                        "title": "RANGE/OVEN/COOKTOP",
                        "image": "1608045016623_Range_Oven_Cooktop.png",
                        "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                        "average_cost_repair": 250,
                        "average_cost_replacement": 1200,
                        "coverage_highlight": [
                            ""
                        ],
                        "covered_subtitle": "",
                        "covered_list": "N/A",
                        "covered_additional_information": "",
                        "covered_system_types": [
                            ""
                        ],
                        "not_covered_subtitle": "",
                        "not_covered_list": "N/A",
                        "not_covered_additional_information": "",
                        "not_covered_system_types": [
                            ""
                        ],
                        "freon_coverage": "",
                        "coverage_limit": "",
                        "standard_price": 79,
                        "custom_price": 89,
                        "item_removal_price": 20,
                        "percentage_fee": "10",
                        "note": "",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-15T09:40:03.919Z",
                        "__v": 0,
                        "maximum_allowed_decrease": "500",
                        "maximum_allowed_increase": "10000",
                        "maximum_coverage_decrease_fee": "2",
                        "maximum_coverage_increase_fee": "6",
                        "type": "appliance"
                    },
                    {
                        "_id": "5fd887150e8144b9d57a41aa",
                        "title": "DISHWASHER",
                        "image": "1608045156547_Dish_Washer.png",
                        "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                        "average_cost_repair": 175,
                        "average_cost_replacement": 1000,
                        "coverage_highlight": [
                            ""
                        ],
                        "covered_subtitle": "",
                        "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                        "covered_additional_information": "",
                        "covered_system_types": [
                            ""
                        ],
                        "not_covered_subtitle": "",
                        "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                        "not_covered_additional_information": "",
                        "not_covered_system_types": [
                            ""
                        ],
                        "freon_coverage": "",
                        "coverage_limit": "$2,000 per Term",
                        "standard_price": 69,
                        "custom_price": 79,
                        "item_removal_price": 20,
                        "percentage_fee": "30",
                        "note": "",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-15T09:51:17.121Z",
                        "__v": 0,
                        "maximum_coverage_decrease_fee": "2",
                        "maximum_coverage_increase_fee": "5",
                        "maximum_allowed_decrease": "500",
                        "maximum_allowed_increase": "3000",
                        "type": "appliance"
                    },
                    {
                        "_id": "5fd89ac60e8144b9d57a41ab",
                        "title": "BUILT-IN MICROWAVE OVEN",
                        "image": "1608045198422_Built_In_Microwave.png",
                        "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                        "average_cost_repair": 125,
                        "average_cost_replacement": 400,
                        "coverage_highlight": [
                            ""
                        ],
                        "covered_subtitle": "",
                        "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                        "covered_additional_information": "",
                        "covered_system_types": [
                            ""
                        ],
                        "not_covered_subtitle": "",
                        "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                        "not_covered_additional_information": "",
                        "not_covered_system_types": [
                            ""
                        ],
                        "freon_coverage": "",
                        "coverage_limit": "$1,000 per Term",
                        "standard_price": 49,
                        "custom_price": 59,
                        "item_removal_price": 10,
                        "percentage_fee": "10",
                        "note": "",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-15T11:15:18.132Z",
                        "__v": 0,
                        "maximum_allowed_decrease": "0",
                        "maximum_allowed_increase": "4000",
                        "maximum_coverage_decrease_fee": "0",
                        "maximum_coverage_increase_fee": "5",
                        "type": "appliance"
                    }
                ]
            },
            {
                "covered_item_id": [
                    "5fd887150e8144b9d57a41aa",
                    "5fd89ac60e8144b9d57a41ab"
                ],
                "_id": "601a5a5fe4ee4555d43c863f",
                "category_id": "5fe08c64eec7d6a7a8d2cd20",
                "category": [
                    {
                        "_id": "5fe08c64eec7d6a7a8d2cd20",
                        "name": "Covered Systems",
                        "description": "",
                        "maximum_category_coverage": 10000,
                        "maximum_category_coverage_increase": "10000",
                        "maximum_category_coverage_decrase": "2000",
                        "type": "normal",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-21T11:52:04.491Z",
                        "__v": 0,
                        "percentage_fee": "12",
                        "category_coverage_decrease_fee": "",
                        "category_coverage_increase_fee": "12",
                        "automated_category_decrease": "",
                        "automated_category_increase": ""
                    }
                ],
                "covered_items": [
                    {
                        "_id": "5fd887150e8144b9d57a41aa",
                        "title": "DISHWASHER",
                        "image": "1608045156547_Dish_Washer.png",
                        "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                        "average_cost_repair": 175,
                        "average_cost_replacement": 1000,
                        "coverage_highlight": [
                            ""
                        ],
                        "covered_subtitle": "",
                        "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                        "covered_additional_information": "",
                        "covered_system_types": [
                            ""
                        ],
                        "not_covered_subtitle": "",
                        "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                        "not_covered_additional_information": "",
                        "not_covered_system_types": [
                            ""
                        ],
                        "freon_coverage": "",
                        "coverage_limit": "$2,000 per Term",
                        "standard_price": 69,
                        "custom_price": 79,
                        "item_removal_price": 20,
                        "percentage_fee": "30",
                        "note": "",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-15T09:51:17.121Z",
                        "__v": 0,
                        "maximum_coverage_decrease_fee": "2",
                        "maximum_coverage_increase_fee": "5",
                        "maximum_allowed_decrease": "500",
                        "maximum_allowed_increase": "3000",
                        "type": "appliance"
                    },
                    {
                        "_id": "5fd89ac60e8144b9d57a41ab",
                        "title": "BUILT-IN MICROWAVE OVEN",
                        "image": "1608045198422_Built_In_Microwave.png",
                        "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                        "average_cost_repair": 125,
                        "average_cost_replacement": 400,
                        "coverage_highlight": [
                            ""
                        ],
                        "covered_subtitle": "",
                        "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                        "covered_additional_information": "",
                        "covered_system_types": [
                            ""
                        ],
                        "not_covered_subtitle": "",
                        "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                        "not_covered_additional_information": "",
                        "not_covered_system_types": [
                            ""
                        ],
                        "freon_coverage": "",
                        "coverage_limit": "$1,000 per Term",
                        "standard_price": 49,
                        "custom_price": 59,
                        "item_removal_price": 10,
                        "percentage_fee": "10",
                        "note": "",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-15T11:15:18.132Z",
                        "__v": 0,
                        "maximum_allowed_decrease": "0",
                        "maximum_allowed_increase": "4000",
                        "maximum_coverage_decrease_fee": "0",
                        "maximum_coverage_increase_fee": "5",
                        "type": "appliance"
                    }
                ]
            }
        ],
        "property_pricing": [
            {
                "_id": "601a5a5fe4ee4555d43c8640",
                "property_type_id": "5fe45f9d707ef30db84c1bd3",
                "info": {
                    "property_size_id": {
                        "title": "2,501 - 4,000 Square Feet",
                        "status": "Active",
                        "isDeleted": false,
                        "_id": "5fe1fc00707ef30db84c1bcf",
                        "createdAt": "2020-12-22T14:00:32.586Z",
                        "__v": 0
                    },
                    "cost_per_plan": "21.00",
                    "description": "",
                    "automated_category_maximum_coverage_increase": "0.00",
                    "automated_aggregated_coverage_increase": "0.00",
                    "total_allowed_combined_coverage_decrease": "",
                    "_id": "601a5a5fe4ee4555d43c8646",
                    "covered_item_list": [
                        {
                            "quantity": 1,
                            "price": "59.00",
                            "category_increase": "",
                            "category_decrease": "",
                            "discount_two": "",
                            "discount_three": "",
                            "discount_four": "",
                            "discount_more": "",
                            "_id": "601a5a5fe4ee4555d43c8647",
                            "covered_item_id": {
                                "title": "CLOTHES DRYER",
                                "image": "1608044775686_Clothes_Dryer.png",
                                "description": "A dryer machine (clothes dryer, or dryer) is a home appliance used to dry laundry.",
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
                                "coverage_limit": "$2,000 per Term",
                                "standard_price": 59,
                                "custom_price": 69,
                                "item_removal_price": 20,
                                "maximum_coverage_increase_fee": "6",
                                "maximum_coverage_decrease_fee": "2",
                                "maximum_allowed_decrease": "500",
                                "maximum_allowed_increase": "3000",
                                "note": "",
                                "type": "appliance",
                                "status": "Active",
                                "isDeleted": false,
                                "_id": "5fd87ddb0e8144b9d57a41a8",
                                "percentage_fee": "10",
                                "createdAt": "2020-12-15T09:11:55.520Z",
                                "__v": 0
                            }
                        },
                        {
                            "quantity": 1,
                            "price": "79.00",
                            "category_increase": "",
                            "category_decrease": "",
                            "discount_two": "",
                            "discount_three": "",
                            "discount_four": "",
                            "discount_more": "",
                            "_id": "601a5a5fe4ee4555d43c8648",
                            "covered_item_id": {
                                "title": "RANGE/OVEN/COOKTOP",
                                "image": "1608045016623_Range_Oven_Cooktop.png",
                                "description": "A range is a stove with an oven and has a source of fuel which is either gas or\r\nelectricity. It is more like an all in one oven and stove.",
                                "average_cost_repair": 250,
                                "average_cost_replacement": 1200,
                                "coverage_highlight": [
                                    ""
                                ],
                                "covered_subtitle": "",
                                "covered_list": "N/A",
                                "covered_additional_information": "",
                                "covered_system_types": [
                                    ""
                                ],
                                "not_covered_subtitle": "",
                                "not_covered_list": "N/A",
                                "not_covered_additional_information": "",
                                "not_covered_system_types": [
                                    ""
                                ],
                                "freon_coverage": "",
                                "coverage_limit": "",
                                "standard_price": 79,
                                "custom_price": 89,
                                "item_removal_price": 20,
                                "maximum_coverage_increase_fee": "6",
                                "maximum_coverage_decrease_fee": "2",
                                "maximum_allowed_decrease": "500",
                                "maximum_allowed_increase": "10000",
                                "note": "",
                                "type": "appliance",
                                "status": "Active",
                                "isDeleted": false,
                                "_id": "5fd884730e8144b9d57a41a9",
                                "percentage_fee": "10",
                                "createdAt": "2020-12-15T09:40:03.919Z",
                                "__v": 0
                            }
                        },
                        {
                            "quantity": 1,
                            "price": "69.00",
                            "category_increase": "",
                            "category_decrease": "",
                            "discount_two": "",
                            "discount_three": "",
                            "discount_four": "",
                            "discount_more": "",
                            "_id": "601a5a5fe4ee4555d43c8649",
                            "covered_item_id": {
                                "title": "DISHWASHER",
                                "image": "1608045156547_Dish_Washer.png",
                                "description": "A dishwasher is a machine for cleaning dishware and cutlery automatically.",
                                "average_cost_repair": 175,
                                "average_cost_replacement": 1000,
                                "coverage_highlight": [
                                    ""
                                ],
                                "covered_subtitle": "",
                                "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboards, motors, heating elements, timers, hinges, latches, racks, baskets, rollers,\r\nwash arm, spray arm, and fill valves",
                                "covered_additional_information": "",
                                "covered_system_types": [
                                    ""
                                ],
                                "not_covered_subtitle": "",
                                "not_covered_list": "effectiveness of cleaning | panels | cabinetry | interior leaks",
                                "not_covered_additional_information": "",
                                "not_covered_system_types": [
                                    ""
                                ],
                                "freon_coverage": "",
                                "coverage_limit": "$2,000 per Term",
                                "standard_price": 69,
                                "custom_price": 79,
                                "item_removal_price": 20,
                                "maximum_coverage_increase_fee": "5",
                                "maximum_coverage_decrease_fee": "2",
                                "maximum_allowed_decrease": "500",
                                "maximum_allowed_increase": "3000",
                                "note": "",
                                "type": "appliance",
                                "status": "Active",
                                "isDeleted": false,
                                "_id": "5fd887150e8144b9d57a41aa",
                                "percentage_fee": "30",
                                "createdAt": "2020-12-15T09:51:17.121Z",
                                "__v": 0
                            }
                        },
                        {
                            "quantity": 1,
                            "price": "49.00",
                            "category_increase": "",
                            "category_decrease": "",
                            "discount_two": "",
                            "discount_three": "",
                            "discount_four": "",
                            "discount_more": "",
                            "_id": "601a5a5fe4ee4555d43c864a",
                            "covered_item_id": {
                                "title": "BUILT-IN MICROWAVE OVEN",
                                "image": "1608045198422_Built_In_Microwave.png",
                                "description": "A microwave oven is an electric oven that heats and cooks food by exposing it to\r\nelectromagnetic radiation in the microwave frequency range.",
                                "average_cost_repair": 125,
                                "average_cost_replacement": 400,
                                "coverage_highlight": [
                                    ""
                                ],
                                "covered_subtitle": "",
                                "covered_list": "All components and parts needed to perform its full functionality, including control\r\nboard, transformer, touch panel, door latch, timer, clocks, interior lining, and\r\nshelves",
                                "covered_additional_information": "",
                                "covered_system_types": [
                                    ""
                                ],
                                "not_covered_subtitle": "",
                                "not_covered_list": "portable units | combo unit | glass | removable trays | turn table | lights | door |\r\npanels | cabinetry",
                                "not_covered_additional_information": "",
                                "not_covered_system_types": [
                                    ""
                                ],
                                "freon_coverage": "",
                                "coverage_limit": "$1,000 per Term",
                                "standard_price": 49,
                                "custom_price": 59,
                                "item_removal_price": 10,
                                "maximum_coverage_increase_fee": "5",
                                "maximum_coverage_decrease_fee": "0",
                                "maximum_allowed_decrease": "0",
                                "maximum_allowed_increase": "4000",
                                "note": "",
                                "type": "appliance",
                                "status": "Active",
                                "isDeleted": false,
                                "_id": "5fd89ac60e8144b9d57a41ab",
                                "percentage_fee": "10",
                                "createdAt": "2020-12-15T11:15:18.132Z",
                                "__v": 0
                            }
                        }
                    ]
                },
                "property_type": [
                    {
                        "_id": "5fe45f9d707ef30db84c1bd3",
                        "title": "Single Family",
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-12-24T09:30:05.876Z",
                        "__v": 0
                    }
                ]
            }
        ],
        "state_data": [
            {
                "additional_cost": "2.00",
                "salex_tax": "2",
                "surcharge": "2",
                "_id": "601a5a5fe4ee4555d43c8662",
                "state_id": "5f3147e9a7137c4e385ebf88",
                "state": [
                    {
                        "_id": "5f3147e9a7137c4e385ebf88",
                        "title": "Alabama",
                        "abbreviation": "Al",
                        "type": "not_covered",
                        "orderNumber": 0,
                        "status": "Active",
                        "isDeleted": false,
                        "createdAt": "2020-08-10T13:13:13.652Z",
                        "__v": 0,
                        "license_number": " #10132648"
                    }
                ]
            }
        ],
        "available_checkout": "yes",
        "optional_item_id": "60194fa24c812056d5536432",
        "optional_item": [
            {
                "quantity": 69,
                "_id": "601a5a5fe4ee4555d43c8660",
                "covered_item_id": "5fd8715d0e8144b9d57a41a6",
                "covered_item": [
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
                        "maximum_coverage_increase_fee": "7",
                        "type": "appliance"
                    }
                ]
            },
            {
                "quantity": 59,
                "_id": "601a5a5fe4ee4555d43c8661",
                "covered_item_id": "5fd875e10e8144b9d57a41a7",
                "covered_item": [
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
                        "maximum_coverage_increase_fee": "5",
                        "type": "appliance"
                    }
                ]
            }
        ],
        "plan_type": "normal"
    },
    "message": "Plan fetched Successfully"
}
*/
namedRouter.post("frontend.plan.details.condition", '/plan/details',request_param.any(),planController.detailsWithCondition);

module.exports = router;
