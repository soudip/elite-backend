const cmsRepo = require('cms/repositories/cms.repository');

class CmsController {
    constructor() { 
    }

    /* @Method: list
    // @Description: CMS list
    */
    async list (req, res) {
        try {
            const cmsData = await cmsRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: cmsData,message: 'CMS fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: CMS add
    */
    async add (req, res){
        try {
            const cms_exist = await cmsRepo.getByField({'title': req.body.title});
            if(_.isEmpty(cms_exist)){   
                const result = await cmsRepo.save(req.body);
                res.status(200).send({data: result,message: 'CMS Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'CMS already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: CMS details
    */
    async details (req,res){
        try {
            const cmsId = req.params.id;
            const cmsData = await cmsRepo.getById(cmsId);
            res.status(200).send({data: cmsData,message: 'CMS fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: CMS update
    */
    async update (req, res){
        try {
            const cmsId = req.body.cms_id;
            const cms_exist = await cmsRepo.getByField({'title': req.body.title,_id:{$ne:cmsId}});
            if(_.isEmpty(cms_exist)){   
                const result = await cmsRepo.updateById(cmsId,req.body);
                res.status(200).send({data: result,message: 'CMS Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'CMS already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: CMS delete
    */
    async delete  (req,res){
        try {
            const cmsId = req.body.cms_id;
            const result = await cmsRepo.updateById(cmsId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'CMS Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new CmsController();