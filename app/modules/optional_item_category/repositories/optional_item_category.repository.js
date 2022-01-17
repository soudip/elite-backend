const OptioanalItemCategory = require('optional_item_category/models/optional_item_category.model');
const perPage = config.PAGINATION_PERPAGE;

class OptioanlItemCategoryRepository {
    constructor() {}

    async getById(id) {
        try {
            return await OptioanalItemCategory.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await OptioanalItemCategory.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await OptioanalItemCategory.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getDetails(params) {
        try {
            
            const searchQuery = {"$and": params};

            var aggregate = await OptioanalItemCategory.aggregate([
                { $unwind: { path: '$covered_item_id', preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "covered_item_id",
                        foreignField: "_id",
                        as: "plan_covered_items_data"
                    }
                },
                { $unwind: { path: '$plan_covered_items_data', preserveNullAndEmptyArrays: true } },
             { $match:searchQuery},
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'covered_item_id':{$addToSet:"$plan_covered_items_data._id"},
                    'plan_covered_items_data':{$addToSet:"$plan_covered_items_data"}
                }
            }
           ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                return aggregate[0];
            }

        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await OptioanalItemCategory.findById(id).lean().exec();
            return await OptioanalItemCategory.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await OptioanalItemCategory.findByIdAndUpdate(id, data, {
                new: true
            });
            
            if (!result) {
                return null;
            }
            return result;
        } catch (e) {
            return e;
        }
    }

    async save(data) {
        try {
            const _save = new OptioanalItemCategory(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new OptioanlItemCategoryRepository();