const optionalItemCategoryRepo = require('optional_item_category/repositories/optional_item_category.repository');
const mongoose = require('mongoose');

class OptionalItemController {
    constructor() { 
    }

    /* @Method: list
    // @Description: optional item category list
    */
    async list (req, res) {
        try {
            const optionalItemCategoryData = await optionalItemCategoryRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: optionalItemCategoryData,message: 'Optional item category fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: optional item category add
    */
    async add (req, res){
        try {
            const type_exist = await optionalItemCategoryRepo.getByField({'title': req.body.title});
            if(_.isEmpty(type_exist)){   
                const result = await optionalItemCategoryRepo.save(req.body);
                res.status(200).send({data: result,message: 'Optional item category Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Optional item category already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: optional item category details
    */
    async details (req,res){
        try {
            const optionalItemCategoryId = req.params.id;
            const optionalItemCategoryData = await optionalItemCategoryRepo.getDetails([{'_id':mongoose.Types.ObjectId(optionalItemCategoryId),'status':'Active','isDeleted':false}]);
            res.status(200).send({data: optionalItemCategoryData,message: 'Optional item category fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: optional item category update
    */
    async update (req, res){
        try {
            const optionalItemCategoryId = req.body.optional_item_category_id;
            const type_exist = await optionalItemCategoryRepo.getByField({'title': req.body.title,_id:{$ne:optionalItemCategoryId}});
            if(_.isEmpty(type_exist)){   
                const result = await optionalItemCategoryRepo.updateById(optionalItemCategoryId,req.body);
                res.status(200).send({data: result,message: 'Optional item category Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Optional item category already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: optional item category delete
    */
    async delete  (req,res){
        try {
            const optionalItemCategoryId = req.body.optional_item_category_id;
            const result = await optionalItemCategoryRepo.updateById(optionalItemCategoryId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Optional item category Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: assignItem
    // @Description: optional item category assign item
    */
    async assignItem (req, res){
        try {
            const optionalItemCategoryId = req.body.optional_item_category_id;
            const type_exist = await optionalItemCategoryRepo.getById(optionalItemCategoryId);
            if(!_.isEmpty(type_exist)){   
                const result = await optionalItemCategoryRepo.updateById(optionalItemCategoryId,req.body);
                res.status(200).send({data: result,message: 'Item has assigned Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Sorry data not found!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new OptionalItemController();