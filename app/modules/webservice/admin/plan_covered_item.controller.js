const planCoveredItemRepo = require('plan/repositories/plan_covered_item.repository');
const fs = require('fs');
class PlanCoveredItemController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan Covered Item list
    */
    async list (req, res) {
        try {
            const planCoveredData = await planCoveredItemRepo.getAllByField({isDeleted: false});
            res.status(200).send({data: planCoveredData,message: 'Plan Covered Item fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Plan Covered Item add
    */
    async add (req, res){
        try {
            const plan_covered_exist = await planCoveredItemRepo.getByField({'title': req.body.title,'isDeleted':false});
            if(_.isEmpty(plan_covered_exist)){  
                if (req.files.length>0){
                    req.body.image = req.files[0].filename;
                } 
                const result = await planCoveredItemRepo.save(req.body);
                res.status(200).send({data: result,message: 'Plan Covered Item Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Covered Item already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Plan Covered Item details
    */
    async details (req,res){
        try {
            const planCoveredItemId = req.params.id;
            const planCoveredItemData = await planCoveredItemRepo.getById(planCoveredItemId);
            res.status(200).send({data: planCoveredItemData,message: 'Plan Covered Item fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Plan Covered Item update
    */
    async update (req, res){
        try {
            const planCoveredItemId = req.body.plan_covered_item_id;
            const _exist = await planCoveredItemRepo.getByField({'title': req.body.title,_id:{$ne:planCoveredItemId}});
            if(_.isEmpty(_exist)){ 
                let oldData = await planCoveredItemRepo.getById(planCoveredItemId);  
                if (req.files.length > 0){
                    if (fs.existsSync('./public/uploads/plan_covered_item/' + oldData.image) && oldData.image != '') {
                        fs.unlinkSync('./public/uploads/plan_covered_item/' + oldData.image);
                    }
                    req.body.image = req.files[0].filename;
                }
                console.log(req.body);
                const result = await planCoveredItemRepo.updateById(planCoveredItemId,req.body);
                console.log("yyy",result);
                res.status(200).send({data: result,message: 'Plan Covered Item Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan Covered Item already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: bulkStatusupdate
    // @Description: item bulk status update
    */
   async bulkStatusupdate (req, res){
        try {
            let itemId = req.body.plan_covered_item_id;
            for (let i = 0; i < itemId.length; i++) {
                const itemData = await planCoveredItemRepo.getById(itemId[i]);
                if(!_.isEmpty(itemData)){ 
                    const itemStatus = (itemData.status == 'Active')?'Inactive':'Active';
                    const updateResult = await planCoveredItemRepo.updateById(itemId[i],{'status':itemStatus});
                }
            }  
            res.status(200).send({data: itemId,message: 'Plan status Updated Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Plan Covered Item delete
    */
    async delete  (req,res){
        try {
            const planCoveredItemId = req.body.plan_covered_item_id;
            const result = await planCoveredItemRepo.updateById(planCoveredItemId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Plan Covered Item Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PlanCoveredItemController();