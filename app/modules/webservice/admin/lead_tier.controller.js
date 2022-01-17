const leadTierRepo = require('lead_tier/repositories/lead_tier.repository');

class LeadTierController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Lead tier list
    */
    async list (req, res) {
        try {
            const leadTierData = await leadTierRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: leadTierData,message: 'Lead tier fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Lead tier add
    */
    async add (req, res){
        try {
            const tier_exist = await leadTierRepo.getByField({'title': req.body.title});
            if(_.isEmpty(tier_exist)){   
                const result = await leadTierRepo.save(req.body);
                res.status(200).send({data: result,message: 'Lead tier Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Lead tier already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Lead tier details
    */
    async details (req,res){
        try {
            const leadTierId = req.params.id;
            const leadTierData = await leadTierRepo.getById(leadTierId);
            res.status(200).send({data: leadTierData,message: 'Lead tier fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Lead tier update
    */
    async update (req, res){
        try {
            const leadTierId = req.body.lead_tier_id;
            const type_exist = await leadTierRepo.getByField({'title': req.body.title,_id:{$ne:leadTierId}});
            if(_.isEmpty(type_exist)){   
                const result = await leadTierRepo.updateById(leadTierId,req.body);
                res.status(200).send({data: result,message: 'Lead tier Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Lead tier already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Lead tier delete
    */
    async delete  (req,res){
        try {
            const leadTierId = req.body.lead_tier_id;
            const result = await leadTierRepo.updateById(leadTierId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Lead tier Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new LeadTierController();