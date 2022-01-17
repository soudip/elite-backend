const peaceMindRepo = require('peace_of_mind/repositories/peace_mind.repository');
const fs = require('fs');
const gm = require('gm').subClass({
    imageMagick: true
});


class PeaceMindController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Peace of mind list
    */
    async list (req, res) {
        try {
            const peaceMindData = await peaceMindRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: peaceMindData,message: 'Peace of mind fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Peace of mind add
    */
    async add (req, res){
        try {
            const peace_mind_exist = await peaceMindRepo.getByField({'title': req.body.title});
            if(_.isEmpty(peace_mind_exist)){ 
                // image save //
                if(req.files.length>0) {
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // image save //
                const result = await peaceMindRepo.save(req.body);
                res.status(200).send({data: result,message: 'Peace of mind Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Peace of mind already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Peace of mind details
    */
    async details (req,res){
        try {
            const peaceMindId = req.params.id;
            const peaceMindData = await peaceMindRepo.getById(peaceMindId);
            res.status(200).send({data: peaceMindData,message: 'Peace of mind fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Peace of mind update
    */
    async update (req, res){
        try {
            const peaceMindId = req.body.peace_mind_id;
            const peace_mind_exist = await peaceMindRepo.getByField({'title': req.body.title,_id:{$ne:peaceMindId}});
            if(_.isEmpty(peace_mind_exist)){  
                let peaceMindValue = await peaceMindRepo.getById(peaceMindId);
                // Image Save //
                if (req.files.length > 0) {
                    /* old image delete */
                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "peace_of_mind/"+peaceMindValue.image }).promise();
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // Image Save // 
                const result = await peaceMindRepo.updateById(peaceMindId,req.body);
                res.status(200).send({data: result,message: 'Peace of mind Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Peace of mind already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Peace of mind delete
    */
    async delete  (req,res){
        try {
            const peaceMindId = req.body.peace_mind_id;
            const result = await peaceMindRepo.updateById(peaceMindId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Peace of mind Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PeaceMindController();