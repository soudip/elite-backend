const PlanCoveredItem = require('plan/models/plan_covered_item.model');
const perPage = config.PAGINATION_PERPAGE;

class PlanCoveredItemRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PlanCoveredItem.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PlanCoveredItem.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PlanCoveredItem.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllOth(params) {
        try {
            
            const searchQuery = {"$and": params};
           
            var aggregate = await PlanCoveredItem.aggregate([
            { $match:searchQuery},
            {
                "$group":{
                    "_id":"$type",
                    'items':{$addToSet:'$$ROOT'},
                    
                }
            }
           ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                return aggregate;
            }

        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PlanCoveredItem.findById(id).lean().exec();
            return await PlanCoveredItem.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PlanCoveredItem.findByIdAndUpdate(id, data, {
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
            const _save = new PlanCoveredItem(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PlanCoveredItemRepository();