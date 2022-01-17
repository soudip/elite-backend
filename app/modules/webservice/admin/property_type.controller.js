const propertyTypeRepo = require('property_type/repositories/property_type.repository');

class PropertyTypeController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Property Type list
    */
    async list (req, res) {
        try {
            const propertyTypeData = await propertyTypeRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: propertyTypeData,message: 'Property Type fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Property Type add
    */
    async add (req, res){
        try {
            const type_exist = await propertyTypeRepo.getByField({'title': req.body.title});
            if(_.isEmpty(type_exist)){   
                const result = await propertyTypeRepo.save(req.body);
                res.status(200).send({data: result,message: 'Property Type Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Property Type already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Property Type details
    */
    async details (req,res){
        try {
            const propertTypeId = req.params.id;
            const propertyTypeData = await propertyTypeRepo.getById(propertTypeId);
            res.status(200).send({data: propertyTypeData,message: 'Property Type fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Property Type update
    */
    async update (req, res){
        try {
            const propertTypeId = req.body.property_type_id;
            const type_exist = await propertyTypeRepo.getByField({'title': req.body.title,_id:{$ne:propertTypeId}});
            if(_.isEmpty(type_exist)){   
                const result = await propertyTypeRepo.updateById(propertTypeId,req.body);
                res.status(200).send({data: result,message: 'Property Type Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Property Type already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Proprty Type delete
    */
    async delete  (req,res){
        try {
            const propertTypeId = req.body.property_type_id;
            const result = await propertyTypeRepo.updateById(propertTypeId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Property Type Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new PropertyTypeController();