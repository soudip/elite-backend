const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
const namedRouter = routeLabel(router);
const leadFormController = require('webservice/frontend/lead_form.controller');

const multer = require('multer');
const request_param = multer();

const Storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./public/uploads/lead_form")
	},
	filename: (req, file, callback) => {
		callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname.replace(/\s/g, '_'));
	}
});

const uploadFile = multer({storage: Storage});

//authentication section of leadform
// namedRouter.all('/leadform*', auth.authenticateAPI);


/**
 * @api {post} /leadform/create Create
 * @apiVersion 1.0.0
 * @apiGroup Lead Form
 * @apiParam {string} name Name
 * @apiParam {string} email Email
 * @apiParam {string} mobile Mobile
 * @apiParam {string} companyName Company Name
 * @apiParam {string} ein_number Company ein number (optional)
 * @apiParam {string} address Company Address
 * @apiParam {string} zipCode Company Zip Code
 * @apiParam {string} city Company City
 * @apiParam {string} state Company's State Name
 * @apiParam {string} business_email Business Email
 * @apiParam {string} business_phone Business Phone
 * @apiParam {string} licensed_employees Company Licensed Employees Number
 * @apiParam {boolean} nationWide Company Nation Wide Availability
 * @apiParam {array} availability Available States Name (optional)
 * @apiParam {string} contractor_licence_no Contractor License Number (optional)
 * @apiParam {file} contractor_licence_upload Contractor License Document (required for 'csp' formType)
 * @apiParam {string} insurance_carrier Contractor Insurance Carrier (optional)
 * @apiParam {string} policy_no Contractor Policy Number (optional)
 * @apiParam {file} policy_document Contractor Policy Document (required for 'csp' formType)
 * @apiParam {string} fee Service/Diagnosis Fee (optional)
 * @apiParam {string} factored Service/Diagnosis Factored ["Yes", "No"] (optional)
 * @apiParam {array} items Selected Items
 * @apiParam {string} comments Comments
 * @apiParam {string} formType ["csp", "rep", "title_agencies", "vendors", "affiliates"]
 * @apiSuccessExample {json} Success
 * {
    "status": 200,
    "data": {
        "companyDetails": {
            "companyName": "abcd company",
            "ein_number": "1234566666",
            "address": "asdfghj asdfgh xcvbn",
            "zipCode": "10005",
            "city": "test city",
            "state": "State Name"
        },
        "availableInStates": {
            "nationWide": false,
            "availability": [
                "State Name 1",
                "State Name 2"
            ]
        },
        "insuranceDetails": {
            "contractor_licence_no": "654789321",
            "contractor_licence_upload": "contractor_licence_upload_1587999943165_background-2400765_1920.jpg",
            "insurance_carrier": "blah blah insurance",
            "policy_no": "147852369",
            "policy_document": "policy_document_1587999943182_daylight-forest-glossy-443446.jpg"
        },
        "service_fee": {
            "fee": "2000",
            "factored": "No"
        },
        "name": "alsee hooman",
        "email": "human@yopmail.com",
        "mobile": "1234567890",
        "business_email": "abcdcompany@yopmail.com",
        "business_phone": "987456321",
        "licensed_employees": "12",
        "items": [
            "item 1",
            "item 2"
        ],
        "comments": "some comments goes here",
        "formType": "csp",
        "status": "Active",
        "isDeleted": false,
        "_id": "5ea6f4c7a0a5662f64ec71dc",
        "__v": 0
    },
    "message": "Your form submitted successfully"
}
*/
namedRouter.post("api.leadform.store", '/leadform/create', uploadFile.any(), async (req, res) => {
    try {
        const success = await leadFormController.save(req, res);
        res.status(success.status).send(success);
    } catch (error){
        res.status(error.status).send(error);
    }
});

//Export the express.Router() instance
module.exports = router;