const planCategoryRepo = require('plan/repositories/plan_category.repository');

class PlanCategoryController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Plan Category list
    */
    async list (req, res) {
        try {
            const planCategoryData = await planCategoryRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: planCategoryData,message: 'Plan category fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Plan Category add
    */
    async add (req, res){
        try {
            const plan_category_exist = await planCategoryRepo.getByField({'name': req.body.name,'isDeleted':false});
            if(_.isEmpty(plan_category_exist)){   
                const result = await planCategoryRepo.save(req.body);
                res.status(200).send({data: result,message: 'Plan category Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan category already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Plan category details
    */
    async details (req,res){
        try {
            const planCategoryId = req.params.id;
            const planCategoryData = await planCategoryRepo.getById(planCategoryId);
            res.status(200).send({data: planCategoryData,message: 'Plan category fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Plan category update
    */
    async update (req, res){
        try {
            const planCategoryId = req.body.plan_category_id;
            const category_exist = await planCategoryRepo.getByField({'name': req.body.name,'isDeleted':false,_id:{$ne:planCategoryId}});
            if(_.isEmpty(category_exist)){   
                const result = await planCategoryRepo.updateById(planCategoryId,req.body);
                res.status(200).send({data: result,message: 'Plan category Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Plan category already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: optional
    // @Description: Plan category details
    */
   async optional (req,res){
    try {
        const planCategoryData = await planCategoryRepo.getByField({'type': 'optional','isDeleted':false});
        res.status(200).send({data: planCategoryData,message: 'Plan optional category fetched Successfully'});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};


    /* @Method: delete
    // @Description: Plan  category delete
    */
    async delete  (req,res){
        try {
            const planCategoryId = req.body.plan_category_id;
            const result = await planCategoryRepo.updateById(planCategoryId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Plan Category Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PlanCategoryController();