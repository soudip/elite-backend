const PlanApplianceItem = require('plan/models/plan_appliance_item.model');
const perPage = config.PAGINATION_PERPAGE;

class PlanApplianceItemRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PlanApplianceItem.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PlanApplianceItem.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PlanApplianceItem.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PlanApplianceItem.findById(id).lean().exec();
            return await PlanApplianceItem.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PlanApplianceItem.findByIdAndUpdate(id, data, {
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
            const _save = new PlanApplianceItem(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PlanApplianceItemRepository();