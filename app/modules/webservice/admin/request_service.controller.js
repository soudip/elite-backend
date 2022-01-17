const requestServiceRepo = require('request_service/repositories/service.repository');

class RequestServiceController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Request service list
    */
    async list (req, res) {
        try {
            console.log("pppppp");
            const serviceData = await requestServiceRepo.getAll([{"isDeleted": false,'status':'Active'}]);
            res.status(200).send({data: serviceData,message: 'Request service fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: allParentService
    // @Description: Request service parent list
    */
   async allParentService (req, res) {
    try {
        const serviceData = await requestServiceRepo.getAllActiveParentService();
        res.status(200).send({data: serviceData,message: 'Request service parent fetched Successfully'});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

    /* @Method: add
    // @Description: Request service add
    */
    async add (req, res){
        try {
            if (_.isEmpty(req.body.parent_id)) {
                req.body.parent_id = null;
            }
            if (_.isEmpty(req.body.group_id)) {
                req.body.group_id = null;
            }
            const service_exist = await requestServiceRepo.getByField({'title': req.body.title,'parent_id':req.body.parent_id,'is_deleted':false});
            if(_.isEmpty(service_exist)){   
                const result = await requestServiceRepo.save(req.body);
                // This is for group section //
                if (!_.isEmpty(req.body.group_id)) {
                    const updateGroup = await requestServiceRepo.updateById(req.body.group_id,{group_id:req.body.group_id});      
                }
                res.status(200).send({data: result,message: 'Request service Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Request service already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

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

    /* @Method: update
    // @Description: Request service update
    */
    async update (req, res){
        try {
            if (_.isEmpty(req.body.parent_id)) {
                req.body.parent_id = null;
            }
            if (_.isEmpty(req.body.group_id)) {
                req.body.group_id = null;
            }
            const serviceId = req.body.request_service_id;
            const service_exist = await requestServiceRepo.getByField({'title': req.body.title,'parent_id':req.body.parent_id,_id:{$ne:serviceId}});
            if(_.isEmpty(service_exist)){   
                const result = await requestServiceRepo.updateById(serviceId,req.body);
                // This is for group section //
                if (!_.isEmpty(req.body.group_id)) {
                    console.log(req.body.group_id);
                    const updateGroup = await requestServiceRepo.updateById(req.body.group_id,{group_id:req.body.group_id});      
                }
                res.status(200).send({data: result,message: 'Request service Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Request service already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: statusChange
    // @Description: Request service status change
    */
   async statusChange (req,res){
        try {
            const serviceId = req.body.request_service_id;
            const serviceData = await requestServiceRepo.getById(serviceId);
            const serviceStatus = (serviceData.status == 'Active') ? 'Inactive' : 'Active';
            const updateStatus = await requestServiceRepo.updateById(serviceId,{ 'status': serviceStatus });
            res.status(200).send({data: updateStatus,message: 'Request service status has changed successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Request service delete
    */
    async delete  (req,res){
        try {
            const serviceId = req.body.request_service_id;
            const result = await requestServiceRepo.updateById(serviceId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Request service Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new RequestServiceController();