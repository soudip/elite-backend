const PlanPropertySize = require('plan/models/plan_property_size.model');
const perPage = config.PAGINATION_PERPAGE;

class PlanPropertySizeRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PlanPropertySize.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PlanPropertySize.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PlanPropertySize.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PlanPropertySize.findById(id).lean().exec();
            return await PlanPropertySize.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PlanPropertySize.findByIdAndUpdate(id, data, {
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
            const _save = new PlanPropertySize(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PlanPropertySizeRepository();