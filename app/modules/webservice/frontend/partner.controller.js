const partnerRepo = require('partner/repositories/partner.repository');
const partnerTypeRepo = require('partner_type/repositories/partner_type.repository');
const mongoose= require('mongoose');


class PartnerController {
    constructor() { 
    }


    /* @Method: add
    // @Description: Partner add
    */
   async add (req, res){
     try {
            const partnerTypeId = req.body.partner_type_id;
            const partnerTypeDetails = await partnerTypeRepo.getById(partnerTypeId);
            const partner_exist = await partnerRepo.getByField({_id:partnerTypeId,'email': req.body.email});
            if(_.isEmpty(partner_exist)){ 
                // document save //
                if(req.files.length>0) {
                    let uploadDocumentArr = [];
                    let uploadDcumentName = '';
                    for(let i=0;i<req.files.length;i++) {
                        if(req.files[i].fieldname == 'contractor_license_document'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.contractor_license_document = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'insurance_policy_document'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.insurance_policy_document = uploadDcumentName; 
                        }
                        
                    }
                }
                // document save //
                let random_pass = Math.random().toString(36).substr(2, 9);
                let readable_pass = random_pass;
                random_pass = user.generateHash(random_pass);
                req.body.password = random_pass;
                const result = await partnerRepo.save(req.body);
                res.status(200).send({data: result,message: 'Partner Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Partner already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };
   
}

module.exports = new PartnerController();