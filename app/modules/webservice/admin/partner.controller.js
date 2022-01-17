const partnerRepo = require('partner/repositories/partner.repository');
const partnerTypeRepo = require('partner_type/repositories/partner_type.repository');
const fs = require('fs');
const mongoose= require('mongoose');


class PartnerController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Partner list
    */
    async list (req, res) {
        try {
            const partnerTypeId = req.body.partner_type_id;
            const partnerData = await partnerRepo.getAll(req);
            res.status(200).send({data: partnerData,message: 'Partner fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Partner add
    */
   async add (req, res){
     try {
            const partnerTypeId = req.body.partner_type_id;
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
    
    /* @Method: details
    // @Description: Partner details
    */
    async details (req,res){
        try {
            const partnerId = req.params.id;
            let partnerData = await partnerRepo.getDetails([{_id:mongoose.Types.ObjectId(partnerId),isDeleted:false}]);
            res.status(200).send({data: partnerData,message: 'Partner fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Partner update
    */
    async update (req, res){
        try {
            const partnerId = req.body.partner_id;
            const partnerValue = await partnerRepo.getById(partnerId);
            if(!_.isEmpty(partnerValue)){  
                // Document Save //
                if (req.files.length > 0) {
                    let uploadDocumentArr = [];
                    let uploadDcumentName = '';
                    for(let i=0;i<req.files.length;i++) {
                        if(req.files[i].fieldname == 'contractor_license_document'){
                            /* old document delete */
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "contractor_license_document/"+partnerValue.contractor_license_document }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.contractor_license_document = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'insurance_policy_document'){
                            /* old document delete */
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "insurance_policy_document/"+partnerValue.insurance_policy_document }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.insurance_policy_document = uploadDcumentName; 
                        }
                        
                    }  
                }
                // Document Save // 
                const result = await partnerRepo.updateById(partnerId,req.body);
                res.status(200).send({data: result,message: 'Partner Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Partner not exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: statusChange
    // @Description: Partner approve / pending
    */
   async statusChange (req,res){
        try {
            const partnerId = req.body.partner_id;
            const partnerData = await partnerRepo.getById(partnerId);
            if(!_.isEmpty(partnerData)){  
                const partnerStatus = req.body.status;
                const updatePartner = await partnerRepo.updateById(partnerId,{ 'status': partnerStatus });
                // Sending mail to partner //
                if(partnerStatus == 'Approve') {

                }
                if(partnerStatus == 'Deny') {
                    
                }
                res.status(200).send({data: updatePartner,message: 'Partner has approved successfully'});
            } else {
                res.status(201).send({data: {},message: 'Partner not exist with this value!'});    
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: multipleStatusChange
    // @Description: Partner approve / pending
    */
   async multipleStatusChange (req,res){
        try {
            let partnerId = '';
            let partnerData = '';
            let partnerStatus = '';
            let updatePartner = '';
            if(!_.isEmpty(req.body) && _.has(req.body,'partner') && (req.body.partner.length)> 0) {
                for(let i=0;i<req.body.partner.length;i++) {
                    partnerId = req.body.partner[i].id;
                    partnerData = await partnerRepo.getById(partnerId);
                    if(!_.isEmpty(partnerData)){  
                        partnerStatus = req.body.partner[i].status;
                        updatePartner = await partnerRepo.updateById(partnerId,{ 'status': partnerStatus });
                    }
                } 
                res.status(200).send({data: updatePartner,message: 'Partner has approved successfully'});   
            } else {
                res.status(201).send({data: {},message: 'Partner not exist with this value!'});    
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: delete
    // @Description: Partner delete
    */
    async delete  (req,res){
        try {
            const partnerId = req.body.partner_id;
            const result = await partnerRepo.updateById(partnerId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Partner type Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PartnerController();