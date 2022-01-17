const PeaceMind = require('peace_of_mind/models/peace_mind.model');

class PeaceMindRepository {
    constructor() {}

    async getById(id) {
        try {
            return await PeaceMind.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await PeaceMind.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await PeaceMind.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await PeaceMind.findById(id).lean().exec();
            return await PeaceMind.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await PeaceMind.findByIdAndUpdate(id, data, {
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
            const _save = new PeaceMind(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new PeaceMindRepository();