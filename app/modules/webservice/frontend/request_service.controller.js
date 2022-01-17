const requestServiceRepo = require('request_service/repositories/service.repository');
const issueRepo = require('request_service/repositories/issue.repository');

class RequestServiceController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Request service list
    */
    async list (req, res) {
        try {
            const serviceData = await requestServiceRepo.getAll([{"isDeleted": false,'status':'Active'}]);
            res.status(200).send({data: serviceData,message: 'Request service fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: groupList
    // @Description: Request service group wise list
    */
   async groupList (req, res) {
    try {
        const serviceData = await requestServiceRepo.getAllGroupWise({status: 'Active',isDeleted: false});
        res.status(200).send({data: serviceData,message: 'Request service fetched Successfully'});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

    /* @Method: details
    // @Description: Request service details
    */
    async details (req,res){
        try {
            const serviceId = req.params.id;
            const serviceData = await requestServiceRepo.getById(serviceId);
            res.status(200).send({data: serviceData,message: 'Request service fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

     /* @Method: getIssue
    // @Description: Request service issue list
    */
   async getIssue (req, res) {
    try {
       
        const serviceIdArr = req.body.service_id;
        const serviceData = await issueRepo.getAll({service_id_list:serviceIdArr});
        res.status(200).send({data: serviceData,message: 'Request service fetched Successfully'});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

}

module.exports = new RequestServiceController();