const planRepo = require('plan/repositories/plan.repository');
const mongoose= require('mongoose');
const fs = require('fs');

class PlanController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan list
    */
    async list (req, res) {
        try {
            const planData = await planRepo.getAll(req.body);
            res.status(200).send({data: planData,message: 'Plan fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Plan add
    */
    async add (req, res){
        try {
            const plan_exist = await planRepo.getByField({'title': req.body.title});
            if(_.isEmpty(plan_exist)){ 
                // image save //
                if(req.files.length>0) {
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // image save //
                const result = await planRepo.save(req.body);
                res.status(200).send({data: result,message: 'Plan Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Plan details
    */
    async details (req,res){
        try {
            const planId = req.params.id;
            const planData = await planRepo.getDetails([{_id:mongoose.Types.ObjectId(planId),isDeleted:false,status:'Active'}]);
            res.status(200).send({data: planData,message: 'Plan fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Plan update
    */
    async update (req, res){
        try {
            const planeId = req.body.plan_id;
            const plan_exist = await planRepo.getByField({'title': req.body.title,_id:{$ne:planeId}});
            if(_.isEmpty(plan_exist)){  
                let planValue = await planRepo.getById(planeId);
                // Image Save //
                if (req.files.length > 0) {
                    /* old image delete */
                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "plan/"+planValue.image }).promise();
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // Image Save // 
                const result = await planRepo.updateById(planeId,req.body);
                res.status(200).send({data: result,message: 'Plan Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Plan delete
    */
    async delete  (req,res){
        try {
            const planId = req.body.plan_id;
            const result = await planRepo.updateById(planId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Plan Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PlanController();