const HomeOwnerArticle = require('home_owner/models/home_owner_article.model');

class HomeownerArticleRepository {
    constructor() {}
    
    async getAll(param){
        try {
            var conditions = {};
            conditions['$and'] = param;
            let aggregate = await HomeOwnerArticle.aggregate([
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
            return await HomeOwnerArticle.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await HomeOwnerArticle.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await HomeOwnerArticle.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getSectionList(params) {
        try {
            return await HomeOwnerArticle.find(params).select({'_id':1,'section':1}).lean().exec();
        } catch (error) {
            return error;
        }
    }
    async getAllData(param){
        try {
            var conditions = {};
            conditions['$and'] = param;
            let aggregate = await HomeOwnerArticle.aggregate([
            {
                $lookup: {
                    from: "home_owners",
                    localField: "home_owner_id",
                    foreignField: "_id",
                    as: "home_owner"
                }
            },
            { "$unwind": "$home_owner" },
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

    async getDetails(param){
        try {
            var conditions = {};
            conditions['$and'] = param;
            let aggregate = await HomeOwnerArticle.aggregate([
            {
                $lookup: {
                    from: "home_owners",
                    localField: "home_owner_id",
                    foreignField: "_id",
                    as: "home_owner"
                }
            },
            { "$unwind": "$home_owner" },
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
            await HomeOwnerArticle.findById(id).lean().exec();
            return await HomeOwnerArticle.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await HomeOwnerArticle.findByIdAndUpdate(id, data, {
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
            const _save = new HomeOwnerArticle(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

    async bulkInsert(arrData) {

        try {
            let result = await HomeOwnerArticle.insertMany(arrData);
            if (!result) {
                return null;
            }
            return result;
        } catch (e) {
            throw e;
        }
    }

}

module.exports = new HomeownerArticleRepository();