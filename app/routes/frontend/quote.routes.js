const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const multer = require('multer');
const request_param = multer();
const quoteController = require('webservice/frontend/quote.controller');

/**
 * @api {post} /frontend/quote/save Quote save
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {string} first_name
 * @apiParam {string} last_name
 * @apiParam {string} email
 * @apiParam {string} mobile_number
 * @apiParam {string} describes_you enum: ['', 'HOMEOWNER', 'RENTER', 'HOME BUYER', 'HOME SELLER', 'REAL ESTATE PROFESSIONAL', 'TITLE AGENT']
 * @apiParam {string} property_street_address
 * @apiParam {string} property_apartment
 * @apiParam {string} property_zip_code
 * @apiParam {string} property_city
 * @apiParam {string} property_state
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "first_name": "",
        "last_name": "",
        "mobile_number": "+919563743580",
        "email": "test1@yopmail.com",
        "zip": "",
        "otp": null,
        "is_verified": false,
        "describes_you": "",
        "property_street_address": "",
        "property_apartment": "",
        "property_zip_code": "",
        "property_city": "",
        "property_state": "",
        "isDeleted": false,
        "status": "Active",
        "_id": "601418f627130d177c1e5212",
        "createdAt": "2021-01-29T14:17:27.014Z",
        "updatedAt": "2021-01-29T14:17:27.014Z"
    },
    "message": "Quote Saved Successfully"
}
*/

namedRouter.post("frontend.quote.save", '/quote/save', request_param.any(), quoteController.save);

/**
 * @api {post} /frontend/quote/update/:id Quote Update
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {params} id Quote Id
 * @apiParam {string} first_name
 * @apiParam {string} last_name
 * @apiParam {string} email
 * @apiParam {string} mobile_number
 * @apiParam {string} property_user_type enum: ['', 'HOMEOWNER', 'RENTER', 'HOME BUYER', 'HOME SELLER', 'REAL ESTATE PROFESSIONAL', 'TITLE AGENT']
 * @apiParam {string} property_street_address
 * @apiParam {string} property_apartment
 * @apiParam {string} property_zip_code
 * @apiParam {string} property_city
 * @apiParam {string} property_state
 * @apiParam {string} complete_step
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "first_name": "",
        "last_name": "",
        "mobile_number": "+919563743580",
        "email": "test2@yopmail.com",
        "zip": "",
        "otp": null,
        "is_verified": false,
        "describes_you": "",
        "property_street_address": "",
        "property_apartment": "",
        "property_zip_code": "",
        "property_city": "",
        "property_state": "",
        "isDeleted": false,
        "status": "Active",
        "_id": "601418f627130d177c1e5212",
        "createdAt": "2021-01-29T14:17:27.014Z",
        "updatedAt": "2021-01-29T14:18:05.342Z"
    },
    "message": "Quote Saved Successfully"
}
*/

namedRouter.post("frontend.quote.update", '/quote/update/:id', request_param.any(), quoteController.update);

/**
 * @api {post} /frontend/quote/save-other Quote save other
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {params} from_quote_id From Quote Id
 * @apiParam {string} property_user_type enum: ['', 'HOMEOWNER', 'RENTER', 'HOME BUYER', 'HOME SELLER', 'REAL ESTATE PROFESSIONAL', 'TITLE AGENT']
 * @apiParam {string} property_street_address
 * @apiParam {string} property_apartment
 * @apiParam {string} property_zip_code
 * @apiParam {string} property_city
 * @apiParam {string} property_state
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "first_name": "",
        "last_name": "",
        "mobile_number": "+919563743580",
        "email": "test1@yopmail.com",
        "zip": "",
        "otp": null,
        "is_verified": false,
        "describes_you": "",
        "property_street_address": "",
        "property_apartment": "",
        "property_zip_code": "",
        "property_city": "",
        "property_state": "",
        "isDeleted": false,
        "status": "Active",
        "_id": "601418f627130d177c1e5212",
        "createdAt": "2021-01-29T14:17:27.014Z",
        "updatedAt": "2021-01-29T14:17:27.014Z"
    },
    "message": "Quote Saved Successfully"
}
*/

namedRouter.post("frontend.quote.save.other", '/quote/save-other', request_param.any(), quoteController.saveOther);



/**
 * @api {post} /frontend/quote/update-other/:id Quote Update Other
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {params} id Quote Id
 * @apiParam {params} from_quote_id From Quote Id
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "first_name": "",
        "last_name": "",
        "mobile_number": "+919563743580",
        "email": "test2@yopmail.com",
        "zip": "",
        "otp": null,
        "is_verified": false,
        "describes_you": "",
        "property_street_address": "",
        "property_apartment": "",
        "property_zip_code": "",
        "property_city": "",
        "property_state": "",
        "isDeleted": false,
        "status": "Active",
        "_id": "601418f627130d177c1e5212",
        "createdAt": "2021-01-29T14:17:27.014Z",
        "updatedAt": "2021-01-29T14:18:05.342Z"
    },
    "message": "Quote Saved Successfully"
}
*/

namedRouter.post("frontend.quote.update.other", '/quote/update-other/:id', request_param.any(), quoteController.updateOther);

/**
 * @api {post} /frontend/quote/sendOtp Quote sendOtp
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam mobile_number
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {},
    "message": "An otp containing 4-digit number has been sent to your mobile number."
}
*/

namedRouter.post("frontend.quote.sendOtp", '/quote/sendOtp', request_param.any(), quoteController.sendOtp);

/**
 * @api {post} /frontend/quote/sendVoiceOtp Quote Voice OTP
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam mobile_number
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {},
    "message": "An otp containing 4-digit number has been sent to your mobile number."
}
*/

namedRouter.post("frontend.quote.sendVoiceOtp", '/quote/sendVoiceOtp', request_param.any(), quoteController.sendOtpByCall);

/**
 * @api {post} /frontend/quote/verifyOtp Quote verifyOtp
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam mobile_number
 * @apiParam otp
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "first_name": "",
        "last_name": "",
        "mobile_number": "+919563743580",
        "email": "test2@yopmail.com",
        "zip": "",
        "otp": null,
        "is_verified": true,
        "describes_you": "",
        "property_street_address": "",
        "property_apartment": "",
        "property_zip_code": "",
        "property_city": "",
        "property_state": "",
        "isDeleted": false,
        "status": "Active",
        "_id": "601418f627130d177c1e5212",
        "createdAt": "2021-01-29T14:17:27.014Z",
        "updatedAt": "2021-01-29T14:37:03.729Z"
    },
    "message": "Quote has been verified successfully"
}
*/

namedRouter.post("frontend.quote.verifyOtp", '/quote/verifyOtp', request_param.any(), quoteController.verifyOtp);

/**
 * @api {post} /quote/list Quote List
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam mobile_number
 * @apiParam email
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": [
        {
            "step4": {
                "streetAddress": "3e E 67th St",
                "apt_number": null,
                "zip_code": "10065",
                "city": "New York",
                "state": "New York"
            },
            "sub1step4": {
                "purchase_plan": "buyingthePlan"
            },
            "sub2step4": {
                "streetAddress": "8745 International Dr",
                "apt_number": null,
                "zip_code": "32819",
                "city": "Orlando",
                "state": "Florida"
            },
            "sub3step4": {
                "estimatedClosingDate": "05/08/2021"
            },
            "sub4step4": {
                "Shareinvoice": false
            },
            "sub5step4": {
                "first_name": "asdas",
                "last_name": "We",
                "email": "navin.vishwakarma@webskitters.com",
                "mobile_number": "2342342342",
                "streetAddress": "3D-Sideouts",
                "apt_number": "",
                "zip_code": "60042",
                "city": "Island Lake",
                "state": "Illinois"
            },
            "step5": {
                "propertyType_name": "Townhouse",
                "propertyType": "5fd23ac0b439a09a2dccafdd"
            },
            "step6": {
                "propertySize_name": "2,501 - 4,000 Square Feet",
                "propertySize": "5fe1fc00707ef30db84c1bcf"
            },
            "sub6step4": {
                "first_name": "3rf",
                "last_name": "Texas",
                "email": "sa@asdf.com",
                "mobile_number": "4534534534"
            },
            "step7": {
                "title": "ELITE SYSTEMS",
                "isSelected": true,
                "plan_id": "6079c0713a05f64686f103e8"
            },
            "step8": {
                "covered_item_list": [
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 2,
                        "covrageValue": 5000,
                        "defaultCoverage": 0,
                        "quantity": 2,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "AIR CONDITIONING INCLUDING DUCTWORK",
                        "_id": "6091247b5039d8006f49a524"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 2,
                        "covrageValue": 5000,
                        "defaultCoverage": 0,
                        "quantity": 2,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "HEATING INCLUDING DUCTWORK",
                        "_id": "6091247b5039d8006f49a525"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "ELECTRICAL SYSTEM",
                        "_id": "6091247b5039d8006f49a526"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "PLUMBING SYSTEM",
                        "_id": "6091247b5039d8006f49a527"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 2000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "PLUMBING STOPPAGE",
                        "_id": "6091247b5039d8006f49a528"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "WATER HEATER",
                        "_id": "6091247b5039d8006f49a529"
                    },
                    {
                        "addedcosttotal": 495,
                        "additionalunitdefaultvalue": 5,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 2000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 2000,
                        "totalincreseCoverageValue": 0,
                        "title": "GARAGE DOOR OPENER",
                        "_id": "6091247b5039d8006f49a52a"
                    }
                ]
            },
            "step9": {
                "optional_item": [
                    {
                        "increseCoverageFee": 0,
                        "ispanelOpen": false,
                        "quantity": 69,
                        "totalCoverageValue": 3000,
                        "totalincreseCoverageValue": 0,
                        "coveredunit": 0,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "addedcosttotal": 345,
                        "additionalunitdefaultvalue": 5,
                        "title": "REFRIGERATOR INCLUDING ICE MAKER & WATER DISPENSER",
                        "_id": "609124855039d8006f49a52b"
                    },
                    {
                        "increseCoverageFee": 0,
                        "ispanelOpen": false,
                        "quantity": 59,
                        "totalCoverageValue": 1600,
                        "totalincreseCoverageValue": 0,
                        "coveredunit": 0,
                        "covrageValue": 2000,
                        "defaultCoverage": 0,
                        "addedcosttotal": 236,
                        "additionalunitdefaultvalue": 4,
                        "title": "DISHWASHER",
                        "_id": "609124855039d8006f49a52c"
                    }
                ]
            },
            "step10": {
                "category_covered_item": []
            },
            "step11": {
                "service_fee": {
                    "Price": "",
                    "name": ""
                }
            },
            "step12": {
                "coverage_selection": [
                    {
                        "coveredunit": 1,
                        "covrageValue": 2000,
                        "defaultCoverage": 300,
                        "increseCoverageFee": 60,
                        "price": "59.00",
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 12
                    },
                    {
                        "count": "1",
                        "coveredunit": 0,
                        "covrageValue": 3000,
                        "defaultCoverage": 500,
                        "increseCoverageFee": 100,
                        "quantity": 69,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 20
                    }
                ]
            },
            "first_name": "asd",
            "last_name": "asd",
            "mobile_number": "+13423423423",
            "email": "asd@asd.com",
            "zip": "",
            "otp": null,
            "is_verified": false,
            "property_user_type": "HOMEOWNER",
            "property_street_address": "202 W Lincoln Ave, Orange, CA 92865, USA",
            "property_apartment": "",
            "property_zip_code": "92865",
            "property_city": "",
            "property_state": "",
            "isDeleted": false,
            "status": "Active",
            "_id": "608fdd2826d1fd3c07896729",
            "createdAt": "2021-05-03T11:23:20.316Z",
            "updatedAt": "2021-05-04T10:51:01.036Z"
        }
    ],
    "message": "Records fetched successfully"
}
*/
namedRouter.post("frontend.quote.list", '/quote/list', request_param.any(), quoteController.quoteList);

/**
 * @api {post} /quote/exist-checking Exist Checking
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam mobile_number
 * @apiParam user_ip
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": [
        {
            "step4": {
                "streetAddress": "3e E 67th St",
                "apt_number": null,
                "zip_code": "10065",
                "city": "New York",
                "state": "New York"
            },
            "sub1step4": {
                "purchase_plan": "buyingthePlan"
            },
            "sub2step4": {
                "streetAddress": "8745 International Dr",
                "apt_number": null,
                "zip_code": "32819",
                "city": "Orlando",
                "state": "Florida"
            },
            "sub3step4": {
                "estimatedClosingDate": "05/08/2021"
            },
            "sub4step4": {
                "Shareinvoice": false
            },
            "sub5step4": {
                "first_name": "asdas",
                "last_name": "We",
                "email": "navin.vishwakarma@webskitters.com",
                "mobile_number": "2342342342",
                "streetAddress": "3D-Sideouts",
                "apt_number": "",
                "zip_code": "60042",
                "city": "Island Lake",
                "state": "Illinois"
            },
            "step5": {
                "propertyType_name": "Townhouse",
                "propertyType": "5fd23ac0b439a09a2dccafdd"
            },
            "step6": {
                "propertySize_name": "2,501 - 4,000 Square Feet",
                "propertySize": "5fe1fc00707ef30db84c1bcf"
            },
            "sub6step4": {
                "first_name": "3rf",
                "last_name": "Texas",
                "email": "sa@asdf.com",
                "mobile_number": "4534534534"
            },
            "step7": {
                "title": "ELITE SYSTEMS",
                "isSelected": true,
                "plan_id": "6079c0713a05f64686f103e8"
            },
            "step8": {
                "covered_item_list": [
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 2,
                        "covrageValue": 5000,
                        "defaultCoverage": 0,
                        "quantity": 2,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "AIR CONDITIONING INCLUDING DUCTWORK",
                        "_id": "6091247b5039d8006f49a524"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 2,
                        "covrageValue": 5000,
                        "defaultCoverage": 0,
                        "quantity": 2,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "HEATING INCLUDING DUCTWORK",
                        "_id": "6091247b5039d8006f49a525"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "ELECTRICAL SYSTEM",
                        "_id": "6091247b5039d8006f49a526"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "PLUMBING SYSTEM",
                        "_id": "6091247b5039d8006f49a527"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 2000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "PLUMBING STOPPAGE",
                        "_id": "6091247b5039d8006f49a528"
                    },
                    {
                        "addedcosttotal": 0,
                        "additionalunitdefaultvalue": 0,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 0,
                        "title": "WATER HEATER",
                        "_id": "6091247b5039d8006f49a529"
                    },
                    {
                        "addedcosttotal": 495,
                        "additionalunitdefaultvalue": 5,
                        "category_decrease": "",
                        "category_increase": "",
                        "coverageValueForDuplicatesec": 0,
                        "coverageaddedcostForDuplicates": 0,
                        "coveredunit": 1,
                        "covrageValue": 2000,
                        "defaultCoverage": 0,
                        "quantity": 1,
                        "totalCoverageValue": 2000,
                        "totalincreseCoverageValue": 0,
                        "title": "GARAGE DOOR OPENER",
                        "_id": "6091247b5039d8006f49a52a"
                    }
                ]
            },
            "step9": {
                "optional_item": [
                    {
                        "increseCoverageFee": 0,
                        "ispanelOpen": false,
                        "quantity": 69,
                        "totalCoverageValue": 3000,
                        "totalincreseCoverageValue": 0,
                        "coveredunit": 0,
                        "covrageValue": 3000,
                        "defaultCoverage": 0,
                        "addedcosttotal": 345,
                        "additionalunitdefaultvalue": 5,
                        "title": "REFRIGERATOR INCLUDING ICE MAKER & WATER DISPENSER",
                        "_id": "609124855039d8006f49a52b"
                    },
                    {
                        "increseCoverageFee": 0,
                        "ispanelOpen": false,
                        "quantity": 59,
                        "totalCoverageValue": 1600,
                        "totalincreseCoverageValue": 0,
                        "coveredunit": 0,
                        "covrageValue": 2000,
                        "defaultCoverage": 0,
                        "addedcosttotal": 236,
                        "additionalunitdefaultvalue": 4,
                        "title": "DISHWASHER",
                        "_id": "609124855039d8006f49a52c"
                    }
                ]
            },
            "step10": {
                "category_covered_item": []
            },
            "step11": {
                "service_fee": {
                    "Price": "",
                    "name": ""
                }
            },
            "step12": {
                "coverage_selection": [
                    {
                        "coveredunit": 1,
                        "covrageValue": 2000,
                        "defaultCoverage": 300,
                        "increseCoverageFee": 60,
                        "price": "59.00",
                        "quantity": 1,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 12
                    },
                    {
                        "count": "1",
                        "coveredunit": 0,
                        "covrageValue": 3000,
                        "defaultCoverage": 500,
                        "increseCoverageFee": 100,
                        "quantity": 69,
                        "totalCoverageValue": 0,
                        "totalincreseCoverageValue": 20
                    }
                ]
            },
            "first_name": "asd",
            "last_name": "asd",
            "mobile_number": "+13423423423",
            "email": "asd@asd.com",
            "zip": "",
            "otp": null,
            "is_verified": false,
            "property_user_type": "HOMEOWNER",
            "property_street_address": "202 W Lincoln Ave, Orange, CA 92865, USA",
            "property_apartment": "",
            "property_zip_code": "92865",
            "property_city": "",
            "property_state": "",
            "isDeleted": false,
            "status": "Active",
            "_id": "608fdd2826d1fd3c07896729",
            "createdAt": "2021-05-03T11:23:20.316Z",
            "updatedAt": "2021-05-04T10:51:01.036Z"
        }
    ],
    "message": "Records fetched successfully"
}
*/
namedRouter.post("frontend.quote.exist-checking", '/quote/exist-checking', request_param.any(), quoteController.quoteExistChecking);


/**
 * @api {get} /quote/details/:id Details
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "step4": {
            "streetAddress": "3320 E Palm Valley Blvd",
            "apt_number": "",
            "zip_code": "78665",
            "city": "Round Rock",
            "state": "Texas"
        },
        "sub1step4": {
            "purchase_plan": "needInvoice"
        },
        "sub2step4": {
            "streetAddress": "",
            "apt_number": "",
            "zip_code": "",
            "city": "",
            "state": ""
        },
        "sub3step4": {
            "estimatedClosingDate": ""
        },
        "sub4step4": {
            "Shareinvoice": false
        },
        "sub5step4": {
            "first_name": "",
            "last_name": "",
            "email": "",
            "mobile_number": "",
            "streetAddress": "",
            "apt_number": "",
            "zip_code": "",
            "city": "",
            "state": ""
        },
        "step5": {
            "propertyType_name": "Single Family",
            "propertyType": "5fe45f9d707ef30db84c1bd3"
        },
        "step6": {
            "propertySize_name": "2,501 - 4,000 Square Feet",
            "propertySize": "5fe1fc00707ef30db84c1bcf"
        },
        "sub6step4": {
            "first_name": "",
            "last_name": "",
            "email": "",
            "mobile_number": ""
        },
        "step7": {
            "title": "ELITE APPLIANCES",
            "price": 500,
            "isSelected": true,
            "plan_id": "6079b29c3a05f64686f1031a"
        },
        "step8": {
            "covered_item_list": [
                {
                    "addedcosttotal": 0,
                    "additionalunitdefaultvalue": 0,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 2,
                    "covrageValue": 3000,
                    "defaultCoverage": 0,
                    "quantity": 2,
                    "totalCoverageValue": 0,
                    "totalincreseCoverageValue": 0,
                    "title": "REFRIGERATOR INCLUDING ICE MAKER & WATER DISPENSER",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc10514"
                },
                {
                    "addedcosttotal": 0,
                    "additionalunitdefaultvalue": 0,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 1,
                    "covrageValue": 2000,
                    "defaultCoverage": 0,
                    "quantity": 1,
                    "totalCoverageValue": 0,
                    "totalincreseCoverageValue": 0,
                    "title": "CLOTHES WASHER",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc10515"
                },
                {
                    "addedcosttotal": 0,
                    "additionalunitdefaultvalue": 0,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 1,
                    "covrageValue": 2000,
                    "defaultCoverage": 0,
                    "quantity": 1,
                    "totalCoverageValue": 0,
                    "totalincreseCoverageValue": 0,
                    "title": "CLOTHES DRYER",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc10516"
                },
                {
                    "addedcosttotal": 345,
                    "additionalunitdefaultvalue": 5,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 1,
                    "covrageValue": 2000,
                    "defaultCoverage": 0,
                    "quantity": 1,
                    "totalCoverageValue": 2000,
                    "totalincreseCoverageValue": 0,
                    "title": "RANGE/OVEN/COOKTOP",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc10517"
                },
                {
                    "addedcosttotal": 0,
                    "additionalunitdefaultvalue": 0,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 1,
                    "covrageValue": 2000,
                    "defaultCoverage": 0,
                    "quantity": 1,
                    "totalCoverageValue": 0,
                    "totalincreseCoverageValue": 0,
                    "title": "DISHWASHER",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc10518"
                },
                {
                    "addedcosttotal": 0,
                    "additionalunitdefaultvalue": 0,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 1,
                    "covrageValue": 1000,
                    "defaultCoverage": 0,
                    "quantity": 1,
                    "totalCoverageValue": 0,
                    "totalincreseCoverageValue": 0,
                    "title": "BUILT-IN MICROWAVE OVEN",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc10519"
                },
                {
                    "addedcosttotal": 78,
                    "additionalunitdefaultvalue": 2,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 1,
                    "covrageValue": 700,
                    "defaultCoverage": 0,
                    "quantity": 1,
                    "totalCoverageValue": 280,
                    "totalincreseCoverageValue": 0,
                    "title": "TRASH COMPACTOR",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc1051a"
                },
                {
                    "addedcosttotal": 0,
                    "additionalunitdefaultvalue": 0,
                    "category_decrease": "",
                    "category_increase": "",
                    "coverageValueForDuplicatesec": 0,
                    "coverageaddedcostForDuplicates": 0,
                    "coveredunit": 1,
                    "covrageValue": 500,
                    "defaultCoverage": 0,
                    "quantity": 1,
                    "totalCoverageValue": 0,
                    "totalincreseCoverageValue": 0,
                    "title": "GARBAGE DISPOSAL",
                    "price": 0,
                    "type": "appliance",
                    "_id": "6093ef873303f03d2bc1051b"
                }
            ]
        },
        "step9": {
            "optional_item": []
        },
        "step10": {
            "category_covered_item": []
        },
        "step11": {
            "service_fee": {
                "Price": "",
                "name": ""
            }
        },
        "step12": {
            "coverage_selection": []
        },
        "step13": {
            "state_data": [
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "South Carolina",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f1",
                    "state_id": "5f314b92349dc14f4f308cfe"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Massachusetts",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f2",
                    "state_id": "5f3149ffa7137c4e385ebfc7"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Oklahoma",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f3",
                    "state_id": "5f314b45349dc14f4f308cf0"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "South Dakota",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f4",
                    "state_id": "5f3143f7a7137c4e385ebf6c"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "West Virginia",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f5",
                    "state_id": "5f314452a7137c4e385ebf81"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "North Dakota",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f6",
                    "state_id": "5f314310a7137c4e385ebf42"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Indiana",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f7",
                    "state_id": "5f314214a7137c4e385ebf18"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Kansas",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f8",
                    "state_id": "5f313fcca7137c4e385ebf0a"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Ohio",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104f9",
                    "state_id": "5f314385a7137c4e385ebf57"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Kentucky",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104fa",
                    "state_id": "5f313ffea7137c4e385ebf11"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Louisiana",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104fb",
                    "state_id": "5f3149baa7137c4e385ebfc0"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Utah",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104fc",
                    "state_id": "5f314434a7137c4e385ebf7a"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "New York",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104fd",
                    "state_id": "5f314b1f349dc14f4f308ce9"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Pennsylvania",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104fe",
                    "state_id": "5f3143b2a7137c4e385ebf5e"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Vermont",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc104ff",
                    "state_id": "5f314c06349dc14f4f308d13"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Tennessee",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10500",
                    "state_id": "5f31441ea7137c4e385ebf73"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Colorado",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10501",
                    "state_id": "5f313f0fa7137c4e385ebeee"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Mississippi",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10502",
                    "state_id": "5f31429da7137c4e385ebf2d"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Iowa",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10503",
                    "state_id": "5f31493ca7137c4e385ebfb2"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Michigan",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10504",
                    "state_id": "5f314249a7137c4e385ebf1f"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Georgia",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10505",
                    "state_id": "5f313f9fa7137c4e385ebf03"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Montana",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10506",
                    "state_id": "5f3142c2a7137c4e385ebf34"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Delaware",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10507",
                    "state_id": "5f313f56a7137c4e385ebef5"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "New Hampshire",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10508",
                    "state_id": "5f314a9aa7137c4e385ebfe3"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Missouri",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10509",
                    "state_id": "5f314270a7137c4e385ebf26"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Rhode Island",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc1050a",
                    "state_id": "5f3143cfa7137c4e385ebf65"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Maryland",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc1050b",
                    "state_id": "5f314a25a7137c4e385ebfce"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Nebraska",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc1050c",
                    "state_id": "5f31433ba7137c4e385ebf49"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "District of Columbia",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc1050d",
                    "state_id": "5fca1b3db439a09a2dccafd0"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "New Jersey",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc1050e",
                    "state_id": "5f314364a7137c4e385ebf50"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Alaska",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc1050f",
                    "state_id": "5f313ed4a7137c4e385ebee7"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Alabama",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10510",
                    "state_id": "5f3147e9a7137c4e385ebf88"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Idaho",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10511",
                    "state_id": "5f313f79a7137c4e385ebefc"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "Arkansas",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10512",
                    "state_id": "5f31481ea7137c4e385ebf8f"
                },
                {
                    "additional_cost": "0.00",
                    "salex_tax": "",
                    "state_name": "North Carolina",
                    "surcharge": "",
                    "state_type": "cover",
                    "_id": "6093ef773303f03d2bc10513",
                    "state_id": "5f3142f1a7137c4e385ebf3b"
                }
            ]
        },
        "quote_number": "297131",
        "first_name": "sda",
        "last_name": "asd",
        "mobile_number": "+918250157338",
        "email": "sd@asd.com",
        "zip": "",
        "otp": null,
        "is_verified": true,
        "property_user_type": "HOMEOWNER",
        "property_street_address": "3320 E Palm Valley Blvd, Round Rock, TX 78665, USA",
        "property_apartment": "",
        "property_zip_code": "78665",
        "property_city": "",
        "property_state": "",
        "isDeleted": false,
        "status": "Active",
        "user_ip": "45.251.234.114",
        "_id": "6093eead3303f03d2bc104f0",
        "createdAt": "2021-05-06T13:27:09.748Z",
        "updatedAt": "2021-05-06T13:30:47.191Z"
    },
    "message": "Records fetched successfully"
}
*/
namedRouter.get("frontend.quote.details", '/quote/details/:id', request_param.any(), quoteController.quoteDetails);

/**
 * @api {post} /quote/delete/:id Delete
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {}
 }
*/
namedRouter.post("frontend.quote.delete", '/quote/delete', request_param.any(), quoteController.quoteDelete);

/**
 * @api {post} /quote/number-link Number link
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {objectid} link_id Link Id [If Upddate Link Number]
 * @apiParam {string} number Link Number [Array]
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "isVerify": false,
        "status": "Active",
        "isDeleted": false,
        "_id": "60a38fa2812c854b39a34a0c",
        "link_number": [
            {
                "number": "+918250157338",
                "code": "4535",
                "_id": "60a38fa2812c854b39a34a0d"
            },
            {
                "number": "+917003493828",
                "code": "7840",
                "_id": "60a38fa2812c854b39a34a0e"
            }
        ],
        "createdAt": "2021-05-18T09:57:54.712Z",
        "__v": 0
    },
    "message": "An otp containing 4-digit number has been sent to your mobile number. Please verify mobile number"
}
*/
namedRouter.post("frontend.quote.number-link", '/quote/number-link', request_param.any(), quoteController.linkNumber);

/**
 * @api {post} /quote/verify/number-link Verify Number link
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {objectid} link_id Link Id
 * @apiParam {string} number Link Number [array of object]
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "isVerify": true,
        "status": "Active",
        "isDeleted": false,
        "_id": "60a39051a438f74bd9fc688c",
        "link_number": [
            {
                "number": "+918250157338",
                "code": "",
                "_id": "60a3914cb696eb4cdbf1bac3"
            },
            {
                "number": "+917003493828",
                "code": "",
                "_id": "60a3914cb696eb4cdbf1bac4"
            }
        ],
        "createdAt": "2021-05-18T10:00:49.263Z",
        "__v": 0
    },
    "message": "Mobile number successfully linked"
}
*/
namedRouter.post("frontend.quote.verify-number-link", '/quote/verify/number-link', request_param.any(), quoteController.linkNumberVerify);

/**
 * @api {post} /quote/fetch/number-link Get Number link
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {string} number Link Number
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": [
        {
            "number": "+917003493828",
            "code": "",
            "isVerify": true,
            "_id": "60a4b0d24b8d642f0c5f3f67"
        },
        {
            "number": "+918250157338",
            "code": "",
            "isVerify": true,
            "_id": "60a4b0d24b8d642f0c5f3f68"
        }
    ],
    "message": "Data fetch successfully"
}
*/
namedRouter.post("frontend.quote.fetch-number-link", '/quote/fetch/number-link', request_param.any(), quoteController.linkNumberFetch);

/**
 * @api {post} /quote/remove/number-link Link Number Remove
 * @apiVersion 1.0.0
 * @apiGroup Quote
 * @apiParam {string} number Link Number
 * @apiParam {string} id Link Number Id
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "_id": "60a39051a438f74bd9fc688c",
        "isVerify": true,
        "status": "Active",
        "isDeleted": false,
        "link_number": [
            {
                "number": "+918250157338",
                "code": "",
                "_id": "60a3914cb696eb4cdbf1bac3"
            },
            {
                "number": "+917003493828",
                "code": "",
                "_id": "60a3914cb696eb4cdbf1bac4"
            }
        ],
        "createdAt": "2021-05-18T10:00:49.263Z",
        "__v": 0
    },
    "message": "Data fetch successfully"
}
*/
namedRouter.post("frontend.quote.number-link-remove", '/quote/remove/number-link', request_param.any(), quoteController.linkNumberRemoveNumber);

module.exports = router;