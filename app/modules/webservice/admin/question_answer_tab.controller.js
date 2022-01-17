const questionAnswerTabRepo = require('questionAnswer/repositories/question_answer_tabs.repository');
const mongoose= require('mongoose');
const fs = require('fs');

class questionAnswerTabController {
    constructor() { 
    }

    /* @Method: list
    // @Description: questionAnswerTab list
    */
    async list (req, res) {
        try {
            if(req.body.plan_id && req.body.type){
                 var query = {plan_id:mongoose.Types.ObjectId(req.body.plan_id),'type':req.body.type,"isDeleted": false,'status':'Active'};
            }

            if(req.body.type){
                var query = {'type':req.body.type,"isDeleted": false,'status':'Active'};
            }

            if(_.isObject(query)){
                const tabData = await questionAnswerTabRepo.getAll(query);
                res.status(200).send({data: tabData,message: 'Data fetched Successfully'});
            }else{
                res.status(201).send({data:[],message: 'Something went wrong.'});
            }
            
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: questionAnswerTab add
    */
    async add (req, res){
        try {
            const tab_exist = await questionAnswerTabRepo.getByField({'name': req.body.name});
            if(_.isEmpty(tab_exist)){ 
                
                const result = await questionAnswerTabRepo.save(req.body);
                res.status(200).send({data: result,message: 'Question Answer Tab Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Tab already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

   

    /* @Method: update
    // @Description: questionAnswerTab update
    */
    async update (req, res){
        try {
            console.log(req.body)
            const tabId = req.body.tab_id;
            const tab_exist = await questionAnswerTabRepo.getByField({'name': req.body.name,_id:{$ne:tabId}});
            if(_.isEmpty(tab_exist)){  
                let tabValue = await questionAnswerTabRepo.getById(tabId);
               
                const result = await questionAnswerTabRepo.updateById(tabId,req.body);
                res.status(200).send({data: result,message: 'Tab Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Tab already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: questionAnswerTab delete
    */
    async delete  (req,res){
        try {
            const tabId = req.body.tab_id;
            const result = await questionAnswerTabRepo.updateById(tabId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Tab Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new questionAnswerTabController();