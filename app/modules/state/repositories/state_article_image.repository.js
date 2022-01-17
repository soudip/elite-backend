const StateArticleImage = require('state/models/state_article_image.model');

class StateArticleImageRepository {
    constructor() {}
    
    async getAll(param){
        try {
            var conditions = {};
            conditions['$and'] = param;
            let aggregate = await StateArticleImage.aggregate([
            { $match: conditions }
            ]);

            if (_.isEmpty(aggregate)) {
                return null;
            }

            return aggregate;

        } catch (e) {
            throw (e);
        }
    }
    async getById(id) {
        try {
            return await StateArticleImage.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await StateArticleImage.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await StateArticleImage.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await StateArticleImage.findById(id).lean().exec();
            return await StateArticleImage.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await StateArticleImage.findByIdAndUpdate(id, data, {
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
            const _save = new StateArticleImage(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new StateArticleImageRepository();