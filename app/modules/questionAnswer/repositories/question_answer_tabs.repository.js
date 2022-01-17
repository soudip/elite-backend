const questionAnswerTabModel = require('questionAnswer/models/question_answer_tabs.model');
const mongoose    = require('mongoose');

class questionAnswerTabRepository {
    constructor() {}
    
    async getAll(params) {
        try {
            
            var aggregate = await questionAnswerTabModel.aggregate([
                
            { $match:params},
            {
                "$group":{
                    "_id":"$_id",
                    'name':{$first:"$name"},
                    'plan_id':{$first:"$plan_id"},
                    'isDeleted':{$first:"$isDeleted"},
                    'type':{$first:"$type"},
                    
                }
            }
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
            return await questionAnswerTabModel.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await questionAnswerTabModel.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await questionAnswerTabModel.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await questionAnswerTabModel.findById(id).lean().exec();
            return await questionAnswerTabModel.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await questionAnswerTabModel.findByIdAndUpdate(id, data, {
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
            const _save = new questionAnswerTabModel(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

    

}

module.exports = new questionAnswerTabRepository();