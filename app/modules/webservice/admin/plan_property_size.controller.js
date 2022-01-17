const planPropertySizeRepo = require('plan/repositories/plan_property_size.repository');

class PlanPropertySizeController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan Property Size list
    */
    async list (req, res) {
        try {
            const planPropertySizeData = await planPropertySizeRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: planPropertySizeData,message: 'Plan Property Size fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Plan Property Size add
    */
    async add (req, res){
        try {
            const plan_property_size_exist = await planPropertySizeRepo.getByField({'title': req.body.title,'isDeleted':false});
            if(_.isEmpty(plan_property_size_exist)){   
                const result = await planPropertySizeRepo.save(req.body);
                res.status(200).send({data: result,message: 'Plan Property Size Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Property Size already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Plan Property Size details
    */
    async details (req,res){
        try {
            const planPropertSizeId = req.params.id;
            const planPropertSizeData = await planPropertySizeRepo.getById(planPropertSizeId);
            res.status(200).send({data: planPropertSizeData,message: 'Plan Property Size fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Plan Property Size update
    */
    async update (req, res){
        try {
            const planPropertSizeId = req.body.plan_property_size_id;
            const size_exist = await planPropertySizeRepo.getByField({'title': req.body.title,_id:{$ne:planPropertSizeId}});
            if(_.isEmpty(size_exist)){   
                const result = await planPropertySizeRepo.updateById(planPropertSizeId,req.body);
                res.status(200).send({data: result,message: 'Plan Property Size Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Property Size already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Plan  Proprty Size delete
    */
    async delete  (req,res){
        try {
            const planPropertSizeId = req.body.plan_property_size_id;
            const result = await planPropertySizeRepo.updateById(planPropertSizeId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Plan Property Size Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PlanPropertySizeController();