const questionAnswerModel = require('questionAnswer/models/question_answer.model');
const mongoose    = require('mongoose');

class questionAnswerRepository {
    constructor() {}
    
    async getAll(params) {
        try {
            
            var aggregate = await questionAnswerModel.aggregate([
                
            { $match:params},
            {
                "$group":{
                    "_id":"$_id",
                    'question':{$first:"$question"},
                    'answer':{$first:"$answer"},
                    'isDeleted':{$first:"$isDeleted"},
                    
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
            return await questionAnswerModel.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await questionAnswerModel.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await questionAnswerModel.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await questionAnswerModel.findById(id).lean().exec();
            return await questionAnswerModel.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await questionAnswerModel.findByIdAndUpdate(id, data, {
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
            const _save = new questionAnswerModel(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

    

}

module.exports = new questionAnswerRepository();