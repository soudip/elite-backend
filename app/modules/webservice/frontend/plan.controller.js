const planRepo = require('plan/repositories/plan.repository');
const planCoveredItemRepo = require('plan/repositories/plan_covered_item.repository');
const mongoose= require('mongoose');

class PlanController {
    constructor() { 
    }
    

    /* @Method: list
    // @Description: Plan list
    */
    async list (req, res) {
        try {
            
            
            const planCoveredItemData = await planCoveredItemRepo.getAllByField({"isDeleted": false,'status':'Active','type':{ $in: ['appliance','system','exterior'] }});
            const planData = await planRepo.getAllPlanWithCondition(req.body);
           
            let _result = [];
            await asyncForEach(planData, async plan => {
               let itemLists = [];
                await asyncForEach(planCoveredItemData, async item => {
                    let itemId = item._id;
                    itemLists.push(item);

                })  
                plan.item_list = itemLists;
                _result.push(plan)
               
            })  
           
            async function asyncForEach(array, callback) {
                for (let index = 0; index < array.length; index++) {
                    await callback(array[index], index, array);
                }
            }
            
            res.status(200).send({data: _result,message: 'Plan fetched Successfully'});           
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    
    /* @Method: details
    // @Description: Plan details
    */
    async details (req,res){
        try {
            const planId = req.params.id;
            const planData = await planRepo.getDetails([{"isDeleted": false,'status':'Active',_id:mongoose.Types.ObjectId(planId)}]);
            res.status(200).send({data: planData,message: 'Plans fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: details
    // @Description: Plan details
    */
   async detailsWithCondition (req,res){
        try {
            const planData = await planRepo.getDetailsOth(req.body);
            res.status(200).send({data: planData,message: 'Plan fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
  };

}

module.exports = new PlanController();