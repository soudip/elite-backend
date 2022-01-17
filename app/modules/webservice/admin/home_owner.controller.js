const homeOwnerRepo = require('home_owner/repositories/home_owner.repository');
const homeOwnerArticleRepo = require('home_owner/repositories/home_owner_article.repository');
const fs = require('fs');
const gm = require('gm').subClass({
    imageMagick: true
});


class HomeOwnerController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Homeowner Hub list
    */
    async list (req, res) {
        try {
            const homeOwnerData = await homeOwnerRepo.getAllByField({status: 'Active',isDeleted: false});
            res.status(200).send({data: homeOwnerData,message: 'Homeowner hub fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: Homeowner Hub add
    */
    async add (req, res){
        try {
            const home_owner_exist = await homeOwnerRepo.getByField({'title': req.body.title});
            if(_.isEmpty(home_owner_exist)){ 
                // image save //
                if(req.files.length>0) {
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // image save //
                const result = await homeOwnerRepo.save(req.body);
                res.status(200).send({data: result,message: 'Homeowner hub Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Homeowner hub already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: details
    // @Description: Homeowner Hub details
    */
    async details (req,res){
        try {
            const homeOwnerId = req.params.id;
            const homeOwnerData = await homeOwnerRepo.getById(homeOwnerId);
            res.status(200).send({data: homeOwnerData,message: 'Homeowner hub fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Homeowner Hub update
    */
    async update (req, res){
        try {
            const homeOwnerId = req.body.home_owner_id;
            const home_owner_exist = await homeOwnerRepo.getByField({'title': req.body.title,_id:{$ne:homeOwnerId}});
            if(_.isEmpty(home_owner_exist)){  
                let homeOwnerValue = await homeOwnerRepo.getById(homeOwnerId);
                // Image Save //
                if (req.files.length > 0) {
                    /* old image delete */
                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "home_owner_hub/"+homeOwnerValue.image }).promise();
                    let uploadImageArr = req.files[0].key.split("/");
                    let uploadImageName = uploadImageArr[1];   
                    req.body.image = uploadImageName;
                }
                // Image Save // 
                const result = await homeOwnerRepo.updateById(homeOwnerId,req.body);
                res.status(200).send({data: result,message: 'Homeowner hub Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Homeowner hub already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Homeowner Hub delete
    */
    async delete  (req,res){
        try {
            const homeOwnerId = req.body.home_owner_id;
            const result = await homeOwnerRepo.updateById(homeOwnerId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Homeowner hub Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: multipleDelete
    // @Description: multiple delete
    */
   async multipleDelete (req,res){
    try {
           let homeOwnerId = '';
           let homeOwnerData = '';
           let updateHomeOwner = '';
           if(!_.isEmpty(req.body) && _.has(req.body,'home_owner_id') && (req.body.home_owner_id.length)> 0) {
               for(let i=0;i<req.body.home_owner_id.length;i++) {
                   homeOwnerId = req.body.home_owner_id[i];
                   homeOwnerData = await homeOwnerRepo.getById(homeOwnerId);
                   if(!_.isEmpty(homeOwnerData)){  
                        updateHomeOwner = await homeOwnerRepo.updateById(homeOwnerId,{ "isDeleted": true });
                   }
               } 
               res.status(200).send({data: updateHomeOwner,message: 'Homeowner hub Deleted Successfully'});   
           } else {
               res.status(201).send({data: {},message: 'Homeowner hub not exist with this value!'});    
           }
       } catch (error) {
           res.status(500).send({message:error.message});
       }
   };

}

module.exports = new HomeOwnerController();