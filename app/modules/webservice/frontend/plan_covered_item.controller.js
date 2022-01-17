const planCoveredItemRepo = require('plan/repositories/plan_covered_item.repository');
const mongoose= require('mongoose');

class PlanCoveredItemController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan list
    */
    async list (req, res) {
        try {
            const planCoveredItemData = await planCoveredItemRepo.getAllOth([{"isDeleted": false,'status':'Active','type':{ $in: ['appliance','system','exterior'] }}]);
            res.status(200).send({data: planCoveredItemData,message: 'Plan covered item fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

}

module.exports = new PlanCoveredItemController();