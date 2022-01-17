const issueRepo = require('request_service/repositories/issue.repository');
const mongoose = require('mongoose');

class serviceIssueController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Service issue list
    */
    async list (req, res) {
        try {
            const serviceId = req.params.serviceId;
            const issueData = await issueRepo.getAll({service_id:serviceId});
            res.status(200).send({data: issueData,message: 'Request service issue fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }


    /* @Method: add
    // @Description: Service issue add
    */
    async add (req, res){
        try {
            
            const issue_exist = await issueRepo.getByField({'content': req.body.content,'service_id':req.body.service_id});
            if(_.isEmpty(issue_exist)){   
                const result = await issueRepo.save(req.body);
                res.status(200).send({data: result,message: 'Request service issue created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Request service issue already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Service issue details
    */
    async details (req,res){
        try {
            const issueId = req.params.id;
            const issueData = await issueRepo.getById(issueId);
            res.status(200).send({data: issueData,message: 'Request service issue fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Request service issue update
    */
    async update (req, res){
        try {
            const issueId = req.body.issue_id;
            const issue_exist = await issueRepo.getByField({'content': req.body.content,'service_id':req.body.service_id,_id:{$ne:issueId}});
            if(_.isEmpty(issue_exist)){   
                const result = await issueRepo.updateById(issueId,req.body);
                res.status(200).send({data: result,message: 'Request service issue has updated successfully'});
            } else {
                res.status(201).send({data:{},message: 'Request service already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: statusChange
    // @Description: Request service issue status change
    */
   async statusChange (req,res){
    try {
        const issueId = req.body.issue_id;
        const issueData = await issueRepo.getById(issueId);
        const issueStatus = (issueData.status == 'Active') ? 'Inactive' : 'Active';
        const updateStatus = await issueRepo.updateById(issueId,{ 'status': issueStatus });
        res.status(200).send({data: updateStatus,message: 'Request service issue status has changed successfully'});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};


    /* @Method: delete
    // @Description: Request service issue delete
    */
    async delete  (req,res){
        try {
            const issueId = req.body.issue_id;
            const result = await issueRepo.updateById(issueId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Request service issue Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new serviceIssueController();