const LinknumberModel = require('linknumber/models/linknumber.model');

class LinknumberRepository {
    constructor() {}

    async getById(id) {
        try {
            return await LinknumberModel.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await LinknumberModel.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getParticularField(params,selects) {
        try {
            return await LinknumberModel.findOne(params).select(selects).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await LinknumberModel.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await LinknumberModel.findById(id).lean().exec();
            return await LinknumberModel.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await LinknumberModel.findByIdAndUpdate(id, data, {
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
            const _save = new LinknumberModel(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new LinknumberRepository();