const PartnerType = require('partner_type/models/partner_type.model');

class PartnerTypeRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PartnerType.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PartnerType.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PartnerType.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PartnerType.findById(id).lean().exec();
            return await PartnerType.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PartnerType.findByIdAndUpdate(id, data, {
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
            const _save = new PartnerType(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PartnerTypeRepository();