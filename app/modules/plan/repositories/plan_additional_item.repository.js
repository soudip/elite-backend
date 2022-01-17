const PlanAdditionalItem = require('plan/models/plan_additional_item.model');
const perPage = config.PAGINATION_PERPAGE;

class PlanAdditionalItemRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PlanAdditionalItem.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PlanAdditionalItem.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PlanAdditionalItem.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PlanAdditionalItem.findById(id).lean().exec();
            return await PlanAdditionalItem.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PlanAdditionalItem.findByIdAndUpdate(id, data, {
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
            const _save = new PlanAdditionalItem(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PlanAdditionalItemRepository();