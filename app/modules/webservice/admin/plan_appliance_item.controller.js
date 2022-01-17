const planApplianceItemRepo = require('plan/repositories/plan_appliance_item.repository');

class PlanApplianceItemController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan Appliance Item list
    */
    async list (req, res) {
        try {
            const planApplianceData = await planApplianceItemRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: planApplianceData,message: 'Plan Appliance Item fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Plan Appliance Item add
    */
    async add (req, res){
        try {
            const plan_appliance_exist = await planApplianceItemRepo.getByField({'title': req.body.title,'isDeleted':false});
            if(_.isEmpty(plan_appliance_exist)){   
                const result = await planApplianceItemRepo.save(req.body);
                res.status(200).send({data: result,message: 'Plan Appliance Item Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Appliance Item already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Plan Appliance Item details
    */
    async details (req,res){
        try {
            const planApplianceItemId = req.params.id;
            const planApplianceItemData = await planApplianceItemRepo.getById(planApplianceItemId);
            res.status(200).send({data: planApplianceItemData,message: 'Plan Appliance Item fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Plan Appliance Item update
    */
    async update (req, res){
        try {
            const planApplianceItemId = req.body.plan_appliance_item_id;
            const _exist = await planApplianceItemRepo.getByField({'title': req.body.title,_id:{$ne:planApplianceItemId}});
            if(_.isEmpty(_exist)){   
                const result = await planApplianceItemRepo.updateById(planApplianceItemId,req.body);
                res.status(200).send({data: result,message: 'Plan Appliance Item Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Appliance Item already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Plan Appliance Item delete
    */
    async delete  (req,res){
        try {
            const planApplianceItemId = req.body.plan_appliance_item_id;
            const result = await planApplianceItemRepo.updateById(planApplianceItemId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Plan Appliance Item Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PlanApplianceItemController();