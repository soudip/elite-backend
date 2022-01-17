const cmsRepo = require('cms/repositories/cms.repository');
const peaceMindRepo = require('peace_of_mind/repositories/peace_mind.repository');
const homeOwnerRepo = require('home_owner/repositories/home_owner.repository');

class LandingController {
    constructor() { 
    }

    /* @Method: getContent
    // @Description: Content get by slug
    */
    async getContent (req,res){
        try {
            const allData = {};
            const peaceMindData = await peaceMindRepo.getAllByField({status: 'Active',isDeleted: false});
            const homeOwnerData = await homeOwnerRepo.getAllByField({status: 'Active',isDeleted: false});
            allData.peace_of_mind = peaceMindData;
            allData.home_owner_hub = homeOwnerData;
            res.status(200).send({data: allData,message: 'Landing content fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new LandingController();