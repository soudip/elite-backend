const PartnerServiceRepo = require('partner_service/repositories/partner_service.repository');

class PartnerServiceController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Service list
    */
    async list (req, res) {
        try {
            const serviceData = await PartnerServiceRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: serviceData,message: 'Service fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Service add
    */
    async add (req, res){
        try {
            const service_exist = await PartnerServiceRepo.getByField({'title': req.body.title});
            if(_.isEmpty(service_exist)){   
                const result = await PartnerServiceRepo.save(req.body);
                res.status(200).send({data: result,message: 'Service Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Service already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Service details
    */
    async details (req,res){
        try {
            const serviceId = req.params.id;
            const serviceData = await PartnerServiceRepo.getById(serviceId);
            res.status(200).send({data: serviceData,message: 'Service fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Service update
    */
    async update (req, res){
        try {
            const serviceId = req.body.service_id;
            const service_exist = await PartnerServiceRepo.getByField({'title': req.body.title,_id:{$ne:serviceId}});
            if(_.isEmpty(service_exist)){   
                const result = await PartnerServiceRepo.updateById(serviceId,req.body);
                res.status(200).send({data: result,message: 'Service Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Service already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Service delete
    */
    async delete  (req,res){
        try {
            const serviceId = req.body.service_id;
            const result = await PartnerServiceRepo.updateById(serviceId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Service Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PartnerServiceController();