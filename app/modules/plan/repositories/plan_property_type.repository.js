const PlanPropertyType = require('plan/models/plan_property_type.model');
const perPage = config.PAGINATION_PERPAGE;

class PlanPropertyTypeRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PlanPropertyType.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PlanPropertyType.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PlanPropertyType.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PlanPropertyType.findById(id).lean().exec();
            return await PlanPropertyType.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PlanPropertyType.findByIdAndUpdate(id, data, {
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
            const _save = new PlanPropertyType(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PlanPropertyTypeRepository();