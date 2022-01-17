const State = require('state/models/state.model');

class StateRepository {
    constructor() {}

    async getById(id) {
        try {
            return await State.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await State.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getParticularField(params,selects) {
        try {
            return await State.findOne(params).select(selects).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await State.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await State.findById(id).lean().exec();
            return await State.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await State.findByIdAndUpdate(id, data, {
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
            const _save = new State(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new StateRepository();