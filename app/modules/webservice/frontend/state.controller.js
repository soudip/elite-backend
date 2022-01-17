const stateRepo = require('state/repositories/state.repository');
const stateArticleRepo = require('state/repositories/state_article.repository');
const stateArticleImageRepo = require('state/repositories/state_article_image.repository');
const mongoose= require('mongoose');
class StateController {
    constructor() { 
    }

    /* @Method: list
    // @Description: State list
    */
    async list (req, res) {
        try {
            const stateData = await stateRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: stateData,message: 'State fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: details
    // @Description: State details
    */
    async details (req,res){
        try {
            const stateId = req.params.id;
            const stateData = await stateRepo.getById(stateId);
            res.status(200).send({data: stateData,message: 'State fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: article
    // @Description: State article details
    */
    async article (req,res){
        try {
            const stateId = req.params.id;
            const stateData = await stateRepo.getParticularField({_id:mongoose.Types.ObjectId(stateId)},{title:1,abbreviation:1});
            const articleData = await stateArticleRepo.getAll([{state_id:mongoose.Types.ObjectId(stateId),isDeleted:false}]);
            res.status(200).send({data: articleData,state:stateData,message: 'State article fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: article image
    // @Description: State article details
    */
    async articleImage (req,res){
        try {
            const imageData = await stateArticleImageRepo.getAll([{status: 'Active',isDeleted: false}]);
            res.status(200).send({data: imageData,message: 'State article image fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new StateController();