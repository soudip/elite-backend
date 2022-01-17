const mongoose = require("mongoose");
const leadFormRepo = require("lead_form/repositories/lead_form.repository");
const statesRepo = require("state/repositories/state.repository");
const express = require("express");
const zipcodes = require("zipcodes");

class leadFormController {
	constructor() { this.lead = []; }

    async save (req, res) {
        try {
            //console.log(req.body);
            //console.log(req.files);
            let checkAvailabilty = await leadFormRepo.getByField({email: req.body.email, formType: req.body.formType, isDeleted: false});
            if (_.isEmpty(checkAvailabilty)){
                if (!req.body.items){
                    req.body.items = [];
                }
                if (req.body.nationWide === 'true' || req.body.nationWide === true){
                    req.body.availability = null;
                }
                if (req.body.formType === 'csp'){
                    if (!req.body.availability){
                        req.body.availability = [];
                    }
                    if (req.files.length > 0){
                        for (let i = 0; i<req.files.length; i++){
                            if (req.files[i].fieldname === 'contractor_licence_upload'){
                                req.body.contractor_licence_upload = req.files[i].filename;
                            } else if (req.files[i].fieldname === 'policy_document'){
                                req.body.policy_document = req.files[i].filename;
                            }
                        }
                    } 
                    // else if (req.files.length !== 2) {
                    //     return { status: 201, data: [], message: 'Please upload required files' };
                    // }
                } else {
                    if (!req.body.availability){
                        req.body.availability = [];
                    }
                }

                if (!req.body.contractor_licence_upload){
                    req.body.contractor_licence_upload = '';
                }

                if (!req.body.policy_document){
                    req.body.policy_document = '';
                }

                let zipData = zipcodes.lookup(req.body.zipCode);
                if (_.isObject(zipData)){
                    if (!req.body.city || req.body.city === ''){
                        req.body.city = zipData.city;
                    }
                }
                
                let checkState = await statesRepo.getByField({'title': zipData.state, 'isDeleted': false});
                if (_.isEmpty(checkState)){
                    let saveState = await statesRepo.save({'title': zipData.state, 'abbreviation': zipData.state});
                }

                let formData = {
                    'name': req.body.name,
                    'email': req.body.email,
                    'mobile': req.body.mobile,
                    'companyDetails.companyName': req.body.companyName,
                    'companyDetails.ein_number': req.body.ein_number !== ''? req.body.ein_number : '',
                    'companyDetails.address': req.body.address,
                    'companyDetails.zipCode': req.body.zipCode,
                    'companyDetails.city': req.body.city,
                    'companyDetails.state': req.body.state,
                    'business_email': req.body.business_email,
                    'business_phone': req.body.business_phone,
                    'licensed_employees': req.body.licensed_employees !== ''? req.body.licensed_employees : '0',
                    'availableInStates.nationWide': req.body.nationWide,
                    'availableInStates.availability': req.body.availability.length>0 ? req.body.availability : [],
                    'insuranceDetails.contractor_licence_no': req.body.contractor_licence_no,
                    'insuranceDetails.contractor_licence_upload': req.body.contractor_licence_upload,
                    'insuranceDetails.insurance_carrier': req.body.insurance_carrier,
                    'insuranceDetails.policy_no': req.body.policy_no,
                    'insuranceDetails.policy_document': req.body.policy_document,
                    'service_fee.fee': req.body.fee,
                    'service_fee.factored': req.body.factored,
                    'items': req.body.items.length>0?req.body.items : [],
                    'comments': req.body.comments,
                    'formType': req.body.formType
                };

                let saveForm = await leadFormRepo.save(formData);
                if (_.isObject(saveForm)){
                    return { status: 200, data: saveForm, message: 'Your form submitted successfully' };
                } else {
                    return { status: 201, data: [], message: 'Failed to save your data' };
                }
            } else {
                return { status: 201, data: [], message: 'You\'ve already submitted this form.' };
            }
        } catch (e) {
            return { status: 500, data: [], message: e.message };
        }
    }
}

module.exports = new leadFormController();