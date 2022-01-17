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

}

module.exports = new PlanPropertySizeController();