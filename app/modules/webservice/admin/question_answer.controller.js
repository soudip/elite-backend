const questionAnswerRepo = require('questionAnswer/repositories/question_answer.repository');
const mongoose= require('mongoose');
const fs = require('fs');

class questionAnswerController {
    constructor() { 
    }

    /* @Method: list
    // @Description: questionAnswerTab list
    */
    async list (req, res) {
        try {
           
            if(req.body.question_answer_tab_id){
                var query = {'question_answer_tab_id':mongoose.Types.ObjectId(req.body.question_answer_tab_id),"isDeleted": false,'status':'Active'};
            }

            if(_.isObject(query)){
                const tabData = await questionAnswerRepo.getAll(query);
                res.status(200).send({data: tabData,message: 'Data fetched Successfully'});
            }else{
                res.status(201).send({data:[],message: 'Something went wrong.'});
            }
            
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: questionAnswer add
    */
    async add (req, res){
        try { 
            const result = await questionAnswerRepo.save(req.body);
            res.status(200).send({data: result,message: 'Question Answer Created successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

   

    /* @Method: update
    // @Description: questionAnswer update
    */
    async update (req, res){
        try {
          
            const quesetionAnswerId = req.body.id;

            let tabValue = await questionAnswerRepo.getById(quesetionAnswerId);
            if(!_.isEmpty(tabValue)){
                const result = await questionAnswerRepo.updateById(quesetionAnswerId,req.body);
                res.status(200).send({data: result,message: 'Quesetion Answer Updated Successfully'});
            }else{
                res.status(201).send({data:[],message: 'Something went wrong.'});
            } 
            
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: questionAnswer delete
    */
    async delete  (req,res){
        try {
            const id = req.body.id;
            const result = await questionAnswerRepo.updateById(id,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new questionAnswerController();