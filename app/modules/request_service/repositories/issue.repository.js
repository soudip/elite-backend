const Issue = require('request_service/models/issue.model');
const RequestService = require('request_service/models/service.model');
const mongoose    = require('mongoose');

class IssueRepository {
    constructor() {}
    
    // async getAll(params) {
    //     try {
    //         return await Issue.find(params).populate('service_id').lean().exec();
    //     } catch (error) {
    //         return error;
    //     }
    // }

    async getAll(params) {
        try {
            const query = [{"issues.isDeleted": false,'issues.status':'Active'}];
           
            if (_.isObject(params) && _.has(params, 'service_id')) {
                query.push({_id: mongoose.Types.ObjectId(params.service_id)});
            }
            if (_.isObject(params) && _.has(params, 'service_id_list')) {
                query.push({_id: {"$in":params.service_id_list.map(mongoose.Types.ObjectId)}});
            }

            const searchQuery = {"$and": query};

            var aggregate = await RequestService.aggregate([{
                $lookup: {
                    from: "service_issues",
                    localField: "_id",
                    foreignField: "service_id",
                    as: "issues"
                }
            },
            { "$unwind": "$issues" },
            { $match:searchQuery},
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'service_issues':{$addToSet:"$issues"}
                }
            },
            {
                $unwind: "$service_issues"
            },
            {
                $sort: { "service_issues._id": 1 }
            },
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'service_issues':{$push:"$service_issues"}
                }
            },
            
            ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                return aggregate;
            }

        } catch (error) {
            return error;
        }
    }


    async getById(id) {
        try {
            return await Issue.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await Issue.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await Issue.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await Issue.findById(id).lean().exec();
            return await Issue.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await Issue.findByIdAndUpdate(id, data, {
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
            const _save = new Issue(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

    async bulkInsert(arrData) {
        try {
            let result = await Issue.insertMany(arrData);
            if (!result) {
                return null;
            }
            return result;
        } catch (e) {
            throw e;
        }
    }

}

module.exports = new IssueRepository();