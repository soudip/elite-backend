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

    /* @Method: details
    // @Description: Plan Property type details
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

}

module.exports = new PlanPropertyTypeController();