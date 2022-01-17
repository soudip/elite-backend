const LeadTier = require('lead_tier/models/lead_tier.model');
const perPage = config.PAGINATION_PERPAGE;

class LeadTierRepository {
    constructor() {}

    async getById(id) {
        try {
            return await LeadTier.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await LeadTier.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await LeadTier.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await LeadTier.findById(id).lean().exec();
            return await LeadTier.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await LeadTier.findByIdAndUpdate(id, data, {
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
            const _save = new LeadTier(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new LeadTierRepository();