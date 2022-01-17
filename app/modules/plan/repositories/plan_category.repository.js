  const PlanCategory = require('plan/models/plan_category.model');

class PlanCategoryRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PlanCategory.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PlanCategory.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PlanCategory.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PlanCategory.findById(id).lean().exec();
            return await PlanCategory.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PlanCategory.findByIdAndUpdate(id, data, {
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
            const _save = new PlanCategory(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PlanCategoryRepository();