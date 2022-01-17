const stateRepo = require('state/repositories/state.repository');
const stateArticleRepo = require('state/repositories/state_article.repository');
const stateArticleImageRepo = require('state/repositories/state_article_image.repository');
const mongoose= require('mongoose');

class StateArticleController {
    constructor() { 
    }

    /* @Method: list
    // @Description: State Article section list
    */
    async list (req, res) {
        try {
            const stateId = req.params.stateId;
            const stateData = await stateRepo.getParticularField({_id:mongoose.Types.ObjectId(stateId)},{title:1});
            const articleData = await stateArticleRepo.getSectionList({state_id:mongoose.Types.ObjectId(stateId),status: 'Active',isDeleted: false});
            res.status(200).send({data: articleData,state:stateData,message: 'State article section fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: details
    // @Description: State Article details
    */
    async details (req,res){
        try {
            const stateId = req.params.id;
            const articleData = await stateArticleRepo.getDetails([{state_id:mongoose.Types.ObjectId(stateId),isDeleted:false}]);
            res.status(200).send({data: articleData,message: 'State article fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: add
    // @Description: State Article add
    */
    async add (req, res){
        try {
            const section_exist = await stateArticleRepo.getByField({'section': req.body.section});
            if(_.isEmpty(section_exist)){ 
                // image save //
                if(req.files.length>0) {
                    let uploadDocumentArr = [];
                    let uploadDcumentName = '';
                    for(let i=0;i<req.files.length;i++) {
                        if(req.files[i].fieldname == 'banner_image'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.banner_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'image_one'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.image_one = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'image_two'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.image_two = uploadDcumentName; 
                        }
                        
                    }
                }
                // image save //  
                const result = await stateArticleRepo.save(req.body);
                res.status(200).send({data: result,message: 'State article Created successfully'});
            } else {
                res.status(201).send({data:{},message: 'State article section already exist with this value!'});
            }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: update
    // @Description: State Article update
    */
    async update (req, res){
        try {
            if(_.has(req.body,'article_id')) {
                const articleId = req.body.article_id;
                const section_exist = await stateArticleRepo.getByField({'state_id': req.body.state_id,_id:{$ne:articleId}});
                if(_.isEmpty(section_exist)){ 
                        const articleValue = await stateArticleRepo.getById(articleId); 
                        // Image Save //
                        if (req.files.length > 0) {
                            let uploadDocumentArr = [];
                            let uploadDcumentName = '';
                            for(let i=0;i<req.files.length;i++) {
                                if(req.files[i].fieldname == 'section1_image1'){
                                    /* old document delete */
                                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+articleValue.image_one }).promise();
                                    uploadDocumentArr = req.files[i].key.split("/");
                                    uploadDcumentName = uploadDocumentArr[1];   
                                    req.body.section_one.image_one = uploadDcumentName; 
                                }
                                if(req.files[i].fieldname == 'section2_image1'){
                                    /* old document delete */
                                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+articleValue.image_one }).promise();
                                    uploadDocumentArr = req.files[i].key.split("/");
                                    uploadDcumentName = uploadDocumentArr[1];   
                                    req.body.section_two.image_one = uploadDcumentName; 
                                }
                                if(req.files[i].fieldname == 'section2_image2'){
                                    /* old document delete */
                                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+articleValue.image_one }).promise();
                                    uploadDocumentArr = req.files[i].key.split("/");
                                    uploadDcumentName = uploadDocumentArr[1];   
                                    req.body.section_two.image_two = uploadDcumentName; 
                                }
                                if(req.files[i].fieldname == 'section3_image1'){
                                    /* old document delete */
                                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+articleValue.image_one }).promise();
                                    uploadDocumentArr = req.files[i].key.split("/");
                                    uploadDcumentName = uploadDocumentArr[1];   
                                    req.body.section_three.image_one = uploadDcumentName; 
                                }
                                if(req.files[i].fieldname == 'section5_image1'){
                                    /* old document delete */
                                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+articleValue.image_one }).promise();
                                    uploadDocumentArr = req.files[i].key.split("/");
                                    uploadDcumentName = uploadDocumentArr[1];   
                                    req.body.section_five.image_one = uploadDcumentName; 
                                }
                                if(req.files[i].fieldname == 'section6_image1'){
                                    /* old document delete */
                                    await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+articleValue.image_one }).promise();
                                    uploadDocumentArr = req.files[i].key.split("/");
                                    uploadDcumentName = uploadDocumentArr[1];   
                                    req.body.section_six.image_one = uploadDcumentName; 
                                }
                                
                                
                            }  
                        }
                        console.log(req.body);
                        // Image Save //  
                        const result = await stateArticleRepo.updateById(articleId,req.body);
                        res.status(200).send({data: result,message: 'State article Updated Successfully'});
                    
                }  else {
                        res.status(201).send({data:{},message: 'State section already exist with this value!'});
                }
            } 
            else {
                 
            // Image Save //
            if (req.files.length > 0) {
                let uploadDocumentArr = [];
                let uploadDcumentName = '';
                console.log(req.files);
                for(let i=0;i<req.files.length;i++) {
                    if(req.files[i].fieldname == 'section1_image1'){
                        uploadDocumentArr = req.files[i].key.split("/");
                        uploadDcumentName = uploadDocumentArr[1];   
                        console.log(uploadDocumentArr);
                        req.body.section_one.image_one = uploadDcumentName; 
                    }
                    if(req.files[i].fieldname == 'section2_image1'){
                        uploadDocumentArr = req.files[i].key.split("/");
                        uploadDcumentName = uploadDocumentArr[1];   
                        req.body.section_two.image_one = uploadDcumentName; 
                    }
                    if(req.files[i].fieldname == 'section2_image2'){
                        uploadDocumentArr = req.files[i].key.split("/");
                        uploadDcumentName = uploadDocumentArr[1];   
                        req.body.section_two.image_two = uploadDcumentName; 
                    }
                    if(req.files[i].fieldname == 'section3_image1'){
                        uploadDocumentArr = req.files[i].key.split("/");
                        uploadDcumentName = uploadDocumentArr[1];   
                        req.body.section_three.image_one = uploadDcumentName; 
                    }
                    if(req.files[i].fieldname == 'section5_image1'){
                        uploadDocumentArr = req.files[i].key.split("/");
                        uploadDcumentName = uploadDocumentArr[1];   
                        req.body.section_five.image_one = uploadDcumentName; 
                    }
                    if(req.files[i].fieldname == 'section6_image1'){
                        uploadDocumentArr = req.files[i].key.split("/");
                        uploadDcumentName = uploadDocumentArr[1];   
                        req.body.section_six.image_one = uploadDcumentName; 
                    }
                    
                }  
                console.log("eeioeo",req.body);
            }
            console.log(req.body);
            // Image Save //  
            const result = await stateArticleRepo.save(req.body);
            res.status(200).send({data: result,message: 'State article Saved Successfully'});
          }
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: delete
    // @Description: State Article delete
    */
    async delete  (req,res){
        try {
            const articleId = req.body.article_id;
            const result = await stateArticleRepo.updateById(articleId,{"isDeleted": true});
            res.status(200).send({data: result,message: 'State article Deleted Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };

    /* @Method: imageList
    // @Description: State Article image list
    */
    async imageList (req, res) {
        try {
           console.log('eieiieie');
            const imageData = await stateArticleImageRepo.getAll([{status: 'Active',isDeleted: false}]);
            res.status(200).send({data:imageData,message: 'State article image fetched Successfully'});
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    }

    /* @Method: add
    // @Description: State Article image add
    */
    async imageAdd (req, res){
        try {
              // image save //
                if(req.files.length>0) {
                    let uploadDocumentArr = [];
                    let uploadDcumentName = '';
                    for(let i=0;i<req.files.length;i++) {
                        if(req.files[i].fieldname == 'elite_appliances_image'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_appliances_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_systems_image'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_systems_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_complete_image'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_complete_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_electronics_image'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_electronics_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_sewer_image'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_sewer_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'customize_own_image'){
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.customize_own_image = uploadDcumentName; 
                        }
                        
                    }
                    // image save //  
                    const result = await stateArticleImageRepo.save(req.body);
                    res.status(200).send({data: result,message: 'State article image added successfully'});
                } else {
                    res.status(201).send({data:{},message: 'Please upload an image'});
                }
                
        } catch (error) {
            res.status(500).send({message:error.message});
        }
    };


    /* @Method: update
    // @Description: State Article image update
    */
    async imageUpdate (req, res){
        try {
            const imageId = req.body.image_id;
            const imageValue = await stateArticleImageRepo.getById(imageId); 
                // Image Save //
                if (req.files.length > 0) {
                    let uploadDocumentArr = [];
                    let uploadDcumentName = '';
                    for(let i=0;i<req.files.length;i++) {

                        if(req.files[i].fieldname == 'elite_appliances_image'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+imageValue.elite_appliances_image }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_appliances_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_systems_image'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+imageValue.elite_systems_image }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_systems_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_complete_image'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+imageValue.elite_complete_image }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_complete_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_electronics_image'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+imageValue.elite_electronics_image }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_electronics_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'elite_sewer_image'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+imageValue.elite_sewer_image }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.elite_sewer_image = uploadDcumentName; 
                        }
                        if(req.files[i].fieldname == 'customize_own_image'){
                            await s3.deleteObject({ Bucket: config.aws.bucket, Key: "state_article/"+imageValue.customize_own_image }).promise();
                            uploadDocumentArr = req.files[i].key.split("/");
                            uploadDcumentName = uploadDocumentArr[1];   
                            req.body.customize_own_image = uploadDcumentName; 
                        }
                    }  
                }
                // Image Save //  
                const result = await stateArticleImageRepo.updateById(imageId,req.body);
                res.status(200).send({data: result,message: 'State article image Updated Successfully'});
         } catch (error) {
            res.status(500).send({message:error.message});
        }
    };
    

}

module.exports = new StateArticleController();