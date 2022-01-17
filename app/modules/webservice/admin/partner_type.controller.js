const partnerTypeRepo = require('partner_type/repositories/partner_type.repository');
const fs = require('fs');
const gm = require('gm').subClass({
    imageMagick: true
});


class PartnerTypeController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Partner Type list
    */
    async list (req, res) {
        try {
            const partnerTypeData = await partnerTypeRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: partnerTypeData,message: 'Partner type fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Partner type add
    */
    async add (req, res){
        try {
            const partner_type_exist = await partnerTypeRepo.getByField({'title': req.body.title});
            if(_.isEmpty(partner_type_exist)){ 
                // image save //
                if(req.files.length>0) {
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // image save //
                const result = await partnerTypeRepo.save(req.body);
                res.status(200).send({data: result,message: 'Partner type Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Partner type already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Partner type details
    */
    async details (req,res){
        try {
            const partnerTypeId = req.params.id;
            const partnerTypeData = await partnerTypeRepo.getById(partnerTypeId);
            res.status(200).send({data: partnerTypeData,message: 'Partner type fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Partner type update
    */
    async update (req, res){
        try {
            const partnerTypeId = req.body.partner_type_id;
            const partner_type_exist = await partnerTypeRepo.getByField({'title': req.body.title,_id:{$ne:partnerTypeId}});
            if(_.isEmpty(partner_type_exist)){  
                let partnerTypeValue = await partnerTypeRepo.getById(partnerTypeId);
                // Image Save //
                if (req.files.length > 0) {
                    /* old image delete */
                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "partner_type/"+partnerTypeValue.image }).promise();
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // Image Save // 
                const result = await partnerTypeRepo.updateById(partnerTypeId,req.body);
                res.status(200).send({data: result,message: 'Partner type Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Partner type already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Partner type delete
    */
    async delete  (req,res){
        try {
            const partnerTypeId = req.body.partner_type_id;
            const result = await partnerTypeRepo.updateById(partnerTypeId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Partner type Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PartnerTypeController();