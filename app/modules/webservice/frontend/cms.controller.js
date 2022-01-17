const cmsRepo = require('cms/repositories/cms.repository');

class CmsController {
    constructor() { 
    }

    /* @Method: getContent
    // @Description: Content get by slug
    */
    async getContent (req,res){
        try {
            const cmsSlug = req.params.slug;
            const cmsData = await cmsRepo.getByField({ slug: cmsSlug, status: 'Active' });
            res.status(200).send({data: cmsData,message: 'CMS fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new CmsController();