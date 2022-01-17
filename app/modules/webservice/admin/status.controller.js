const statusRepo = require('status/repositories/status.repository');

class StatusController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Role list
    */
    async list (req, res) {
        try {
            const statusData = await statusRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: statusData,message: 'Status fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Status add
    */
    async add (req, res){
        try {
            const status_exist = await statusRepo.getByField({'title': req.body.title});
            if(_.isEmpty(status_exist)){ 
                const lastOrder = await statusRepo.getLastOrder({}); 
                req.body.orderNumber = !_.isEmpty(lastOrder)?(lastOrder.orderNumber+1):1;
                const result = await statusRepo.save(req.body);
                res.status(200).send({data: result,message: 'Status Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Status already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Status details
    */
    async details (req,res){
        try {
            const statusId = req.params.id;
            const statusData = await statusRepo.getById(statusId);
            res.status(200).send({data: statusData,message: 'Status fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Status update
    */
    async update (req, res){
        try {
            const statusId = req.body.status_id;
            const status_exist = await statusRepo.getByField({'title': req.body.title,_id:{$ne:statusId}});
            if(_.isEmpty(status_exist)){   
                const result = await statusRepo.updateById(statusId,req.body);
                res.status(200).send({data: result,message: 'Status Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Status already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Status delete
    */
    async delete  (req,res){
        try {
            const statusId = req.body.status_id;
            const result = await statusRepo.updateById(statusId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Status Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new StatusController();