const planAdditionalItemRepo = require('plan/repositories/plan_additional_item.repository');

class PlanAdditionalItemController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan Additional Item list
    */
    async list (req, res) {
        try {
            const planAdditionalData = await planAdditionalItemRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: planAdditionalData,message: 'Plan Additional Item fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Plan Additional Item add
    */
    async add (req, res){
        try {
            const plan_Additional_exist = await planAdditionalItemRepo.getByField({'title': req.body.title,'isDeleted':false});
            if(_.isEmpty(plan_Additional_exist)){   
                const result = await planAdditionalItemRepo.save(req.body);
                res.status(200).send({data: result,message: 'Plan Additional Item Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Additional Item already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Plan Additional Item details
    */
    async details (req,res){
        try {
            const planAdditionalItemId = req.params.id;
            const planAdditionalItemData = await planAdditionalItemRepo.getById(planAdditionalItemId);
            res.status(200).send({data: planAdditionalItemData,message: 'Plan Additional Item fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Plan Additional Item update
    */
    async update (req, res){
        try {
            const planAdditionalItemId = req.body.plan_additional_item_id;
            const _exist = await planAdditionalItemRepo.getByField({'title': req.body.title,_id:{$ne:planAdditionalItemId}});
            if(_.isEmpty(_exist)){   
                const result = await planAdditionalItemRepo.updateById(planAdditionalItemId,req.body);
                res.status(200).send({data: result,message: 'Plan Additional Item Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Additional Item already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Plan Additional Item delete
    */
    async delete  (req,res){
        try {
            const planAdditionalItemId = req.body.plan_additional_item_id;
            const result = await planAdditionalItemRepo.updateById(planAdditionalItemId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Plan Additional Item Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PlanAdditionalItemController();