const homeOwnerRepo = require('home_owner/repositories/home_owner.repository');
const homeOwnerArticleRepo = require('home_owner/repositories/home_owner_article.repository');
const mongoose= require('mongoose');

class HomeOwnerController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Homeowner Article section list
    */
    async listAll (req, res) {
        try {
            const articleData = await homeOwnerArticleRepo.getAllData([{status: 'Active',isDeleted: false}]);
            res.status(200).send({data: articleData,message: 'Homeowner article section fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: list
    // @Description: Homeowner Article section list
    */
    async list (req, res) {
        try {
            const homeownerId = req.params.homeownerId;
            const homeOwnerData = await homeOwnerRepo.getParticularField({_id:mongoose.Types.ObjectId(homeownerId)},{title:1});
            const articleData = await homeOwnerArticleRepo.getAll([{home_owner_id:mongoose.Types.ObjectId(homeownerId),status: 'Active',isDeleted: false}]);
            res.status(200).send({data: articleData,home_owner:homeOwnerData,message: 'Homeowner article section fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: details
    // @Description: Homeowner Article details
    */
    async details (req,res){
        try {
            const articleId = req.params.id;
            const articleData = await homeOwnerArticleRepo.getDetails([{_id:mongoose.Types.ObjectId(articleId),isDeleted:false}]);
            res.status(200).send({data: articleData,message: 'Homeowner article fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: add
    // @Description: Homeowner Article add
    */
    async add (req, res){
        try {
            
            const home_owner_article_exist = await homeOwnerArticleRepo.getByField({'title': req.body.title});
            if(_.isEmpty(home_owner_article_exist)){ 
                // image save //
                if(req.files.length>0) {
                    let uploadDocumentArr = [];
                    let uploadDcumentName = '';
                    for(let i=0;i<req.files.length;i++) {
                        if(req.files[i].fieldname == 'image_one'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[2];   
                            req.body.image_one = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'image_two'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[2];   
                            req.body.image_two = uploadDcumentName; 
                        }
                        
                        const sectionIdentity = ["section_one", "section_two", "section_three", "section_four"];
                        for(let y=0;y<sectionIdentity.length;y++) {
                            if(req.files[i].fieldname == 'content['+y+'][image_one]'){
                                uploadDocumentArr = req.files[i].key.split("/");
                                uploadDcumentName = uploadDocumentArr[2];   
                                req.body.content[y]['image_one'] = uploadDcumentName; 
                            }
                            if(req.files[i].fieldname == 'content['+y+'][image_two]'){
                                uploadDocumentArr = req.files[i].key.split("/");
                                uploadDcumentName = uploadDocumentArr[2];   
                                req.body.content[y]['image_two'] = uploadDcumentName; 
                            }
                            
                        }
                    }
                }
                // image save //  
                const result = await homeOwnerArticleRepo.save(req.body);
                res.status(200).send({data: result,message: 'Homeowner article Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'Homeowner article already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: Homeowner Article update
    */
    async update (req, res){
        try {
            const articleId = req.body.article_id;
            const article_exist = await homeOwnerArticleRepo.getByField({'title': req.body.title,_id:{$ne:articleId}});
            if(_.isEmpty(article_exist)){ 
                const articleValue = await homeOwnerArticleRepo.getById(articleId); 
                // image save //
                if(req.files.length>0) {
                    let uploadDocumentArr = [];
                    let uploadDcumentName = '';
                    for(let i=0;i<req.files.length;i++) {
                        if(req.files[i].fieldname == 'image_one'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "home_owner/article/"+articleValue.image_one }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[2];   
                            req.body.image_one = uploadDcumentName; 
                        }

                        if(req.files[i].fieldname == 'image_two'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "home_owner/article/"+articleValue.image_two }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[2];   
                            req.body.image_two = uploadDcumentName; 
                        }
                        
                        const sectionIdentity = ["section_one", "section_two", "section_three", "section_four"];
                        for(let y=0;y<sectionIdentity.length;y++) {
                            if(req.files[i].fieldname == 'content['+y+'][image_one]'){
                                await s3.deleteObject({ Bucket: config.aws.bucket, Key: "home_owner/article/"+articleValue.content[y].image_one }).promise();
                                uploadDocumentArr = req.files[i].key.split("/");
                                uploadDcumentName = uploadDocumentArr[2];   
                                req.body.content[y]['image_one'] = uploadDcumentName; 
                            }
                            if(req.files[i].fieldname == 'content['+y+'][image_two]'){
                                await s3.deleteObject({ Bucket: config.aws.bucket, Key: "home_owner/article/"+articleValue.content[y].image_two }).promise();
                                uploadDocumentArr = req.files[i].key.split("/");
                                uploadDcumentName = uploadDocumentArr[2];   
                                req.body.content[y]['image_two'] = uploadDcumentName; 
                            }
                            
                        }
                    }
                }
                // image save //

                const result = await homeOwnerArticleRepo.updateById(articleId,req.body);
                res.status(200).send({data: result,message: 'Homeowner article Updated Successfully'});
            } else {
                res.status(201).send({data:{},message: 'Homeowner section already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: Homeowner Article delete
    */
    async delete  (req,res){
        try {
            const articleId = req.body.article_id;
            const result = await homeOwnerArticleRepo.updateById(articleId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'Homeowner article Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

}

module.exports = new HomeOwnerController();