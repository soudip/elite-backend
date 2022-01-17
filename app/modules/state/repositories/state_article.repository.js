const StateArticle = require('state/models/state_article.model');

class StateArticleRepository {
    constructor() {}
    
    async getAll(param){
        try {
            var conditions = {};
            conditions['$and'] = param;
            let aggregate = await StateArticle.aggregate([
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
            return await StateArticle.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await StateArticle.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await StateArticle.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getSectionList(params) {
        try {
            return await StateArticle.find(params).select({'_id':1,'section':1}).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getDetails(param){
        try {
            var conditions = {};
            conditions['$and'] = param;
            let aggregate = await StateArticle.aggregate([
            {
                $lookup: {
                    from: "states",
                    localField: "state_id",
                    foreignField: "_id",
                    as: "state"
                }
            },
            { "$unwind": "$state" },
            { $match: conditions }
            ]);

            if (_.isEmpty(aggregate)) {
                return null;
            }

            return aggregate[0];

        } catch (e) {
            throw (e);
        }
    }

    async delete(id) {
        try {
            await StateArticle.findById(id).lean().exec();
            return await StateArticle.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await StateArticle.findByIdAndUpdate(id, data, {
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
            const _save = new StateArticle(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

    async bulkInsert(arrData) {

        try {
            let result = await StateArticle.insertMany(arrData);
            if (!result) {
                return null;
            }
            return result;
        } catch (e) {
            throw e;
        }
    }

}

module.exports = new StateArticleRepository();