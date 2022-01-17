const Status = require('status/models/status.model');
const perPage = config.PAGINATION_PERPAGE;

class StatusRepository {
    constructor() {}

    async getById(id) {
        try {
            return await Status.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await Status.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await Status.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getLastOrder(params) {
        try {
            return await Status.findOne(params).sort({"orderNumber": -1}).exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await Status.findById(id).lean().exec();
            return await Status.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await Status.findByIdAndUpdate(id, data, {
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
            const _save = new Status(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new StatusRepository();