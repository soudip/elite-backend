const stateRepo = require('state/repositories/state.repository');
const stateArticleRepo = require('state/repositories/state_article.repository');

class StateController {
    constructor() { 
    }

    /* @Method: list
    // @Description: State list
    */
    async list (req, res) {
        try {
            const stateData = await stateRepo.getAllByField({isDeleted: false});
            res.status(200).send({data: stateData,message: 'State fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: State add
    */
    async add (req, res){
        try {
            const state_exist = await stateRepo.getByField({'abbreviation': req.body.abbreviation});
            if(_.isEmpty(state_exist)){   
                const result = await stateRepo.save(req.body);
                /* This section for data insert in article table */
                // if(!_.isEmpty(result)){
                //     const stateArticleSection = ["Section One", "Section Two", "Section Three", "Section Four", "Section Five", "Section Six"];
                //     const sectionIdentity = ["section_one", "section_two", "section_three", "section_four", "section_five", "section_six"];
                //     const sectionArr = [];
                //     let insrtObj = '';
                //     for(let i =0;i<stateArticleSection.length;i++) {
                //         insrtObj = {state_id:result._id,section:stateArticleSection[i],identity:sectionIdentity[i]};
                //         sectionArr.push(insrtObj)
                //     }
                //     if(sectionArr.length > 0) {
                //         let newSection = await stateArticleRepo.bulkInsert(sectionArr);
                //     }
                // }
                /* This section for data insert in article table */
                res.status(200).send({data: result,message: 'State Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'State already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

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

    /* @Method: update
    // @Description: State update
    */
    async update (req, res){
        try {
            const stateId = req.body.state_id;
            const state_exist = await stateRepo.getByField({'abbreviation': req.body.abbreviation,_id:{$ne:stateId}});
            if(_.isEmpty(state_exist)){   
                const result = await stateRepo.updateById(stateId,req.body);
                res.status(200).send({data: result,message: 'State Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'State already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: bulkStatusupdate
    // @Description: State bulk status update
    */
   async bulkStatusupdate (req, res){
    try {
        let stateId = req.body.state_id;
        for (let i = 0; i < stateId.length; i++) {
            const stateData = await stateRepo.getById(stateId[i]);
            if(!_.isEmpty(stateData)){ 
                const stateStatus = (stateData.status == 'Active')?'Inactive':'Active';
                const updateResult = await stateRepo.updateById(stateId[i],{'status':stateStatus});
            }
        }  
        res.status(200).send({data: stateId,message: 'State status Updated Successfully'});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};


    /* @Method: delete
    // @Description: State delete
    */
    async delete  (req,res){
        try {
            const stateId = req.body.state_id;
            const result = await stateRepo.updateById(stateId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'State Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new StateController();