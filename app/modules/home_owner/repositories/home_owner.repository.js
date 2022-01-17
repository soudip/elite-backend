const HomeOwner = require('home_owner/models/home_owner.model');

class HomeOwnerRepository {
    constructor() {}

    async getById(id) {
        try {
            return await HomeOwner.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await HomeOwner.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await HomeOwner.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }
    async getParticularField(params,selects) {
        try {
            return await HomeOwner.findOne(params).select(selects).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await HomeOwner.findById(id).lean().exec();
            return await HomeOwner.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await HomeOwner.findByIdAndUpdate(id, data, {
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
            const _save = new HomeOwner(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new HomeOwnerRepository();