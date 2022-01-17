const PropertyType = require('property_type/models/property_type.model');
const perPage = config.PAGINATION_PERPAGE;

class PropertyTypeRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PropertyType.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PropertyType.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PropertyType.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PropertyType.findById(id).lean().exec();
            return await PropertyType.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PropertyType.findByIdAndUpdate(id, data, {
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
            const _save = new PropertyType(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PropertyTypeRepository();