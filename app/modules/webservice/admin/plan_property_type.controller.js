const planPropertyTypeRepo = require('plan/repositories/plan_property_type.repository');

class PlanPropertyTypeController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan Property Type list
    */
    async list (req, res) {
        try {
            const planPropertyTypeData = await planPropertyTypeRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: planPropertyTypeData,message: 'Plan Property Type fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Plan Property Type add
    */
    async add (req, res){
        try {
            const plan_property_type_exist = await planPropertyTypeRepo.getByField({'title': req.body.title,'isDeleted':false});
            if(_.isEmpty(plan_property_type_exist)){   
                const result = await planPropertyTypeRepo.save(req.body);
                res.status(200).send({data: result,message: 'Plan Property Type Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Property Type already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Plan Property Type details
    */
    async details (req,res){
        try {
            const planPropertTypeId = req.params.id;
            const planPropertTypeData = await planPropertyTypeRepo.getById(planPropertTypeId);
            res.status(200).send({data: planPropertTypeData,message: 'Plan Property Type fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Plan Property Type update
    */
    async update (req, res){
        try {
            const planPropertTypeId = req.body.plan_property_type_id;
            const type_exist = await planPropertyTypeRepo.getByField({'title': req.body.title,_id:{$ne:planPropertTypeId}});
            if(_.isEmpty(type_exist)){   
                const result = await planPropertyTypeRepo.updateById(planPropertTypeId,req.body);
                res.status(200).send({data: result,message: 'Plan Property Type Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Property Type already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Plan  Proprty Type delete
    */
    async delete  (req,res){
        try {
            const planPropertTypeId = req.body.plan_property_type_id;
            const result = await planPropertyTypeRepo.updateById(planPropertTypeId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Plan Property Type Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PlanPropertyTypeController();