const RequestService = require('request_service/models/service.model');

class RequestServiceRepository {
    constructor() {}
    
    async getAll(params) {
        try {
           
            const searchQuery = {"$and": params};
            var aggregate = await RequestService.aggregate([{
                $lookup: {
                    from: "request_services",
                    localField: "parent_id",
                    foreignField: "_id",
                    as: "parent_service"
                }
            },
            { "$unwind": {
                "path": "$parent_service",
                "preserveNullAndEmptyArrays": true
            } },
            
            { $match:searchQuery},
           ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                return aggregate;
            }

        } catch (error) {
            return error;
        }
    }

    async getAllActiveParentService() {
        try {
            return await RequestService.find({ status: 'Active',isDeleted:'no',parent_id: null }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllRequestService() {
        try {
            return await RequestService.find({ status: 'Active',isDeleted: 'no' }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllServiceByName(service_name) {
        try {
            return await RequestService.find({ "title" : { "$in" : [ service_name ] }}).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAll1(params) {
        try {
            return await RequestService.find(params).populate('parent_id').lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllGroupWise(params) {
        try {


            var aggregate = await RequestService.aggregate([
                { $match: { parent_id: null, status:'Active', isDeleted: false } },
                {
                    $graphLookup: {
                        from: "request_services",
                        startWith: "$_id",
                        connectFromField: "_id",
                        connectToField: "parent_id",
                        restrictSearchWithMatch: { status:'Active',isDeleted: false },
                        as: "services"
                    }
                },
               
                {
                    $unwind: "$services"
                },
                {
                    $sort: { "services._id": 1 }
                },
                {
                    $group: {
                        _id: "$_id",
                        title: {$first:"$title"},
                        createdAt: {$first:"$createdAt"},
                        services: { $push: "$services" }
                    }
                },
                {
                    $sort: { "_id": 1 }
                },
            
            ]);
    
            if(_.isEmpty(aggregate)){
                return [];
            }else{
                return aggregate;
            }

        } catch (error) {
            return error;
        }
    }


    async getById(id) {
        try {
            return await RequestService.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await RequestService.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await RequestService.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await RequestService.findById(id).lean().exec();
            return await RequestService.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await RequestService.findByIdAndUpdate(id, data, {
                new: true
            });
            
            if (!result) {
                return null;
            }
            return result;
        } catch (e) {
            return e;
        }
    }

    async save(data) {
        try {
            const _save = new RequestService(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new RequestServiceRepository();