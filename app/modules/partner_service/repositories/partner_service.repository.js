const PartnerService = require('partner_service/models/partner_service.model');

class PartnerServiceRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PartnerService.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PartnerService.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PartnerService.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PartnerService.findById(id).lean().exec();
            return await PartnerService.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PartnerService.findByIdAndUpdate(id, data, {
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
            const _save = new PartnerService(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PartnerServiceRepository();