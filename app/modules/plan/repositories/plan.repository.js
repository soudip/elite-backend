const Plan = require('plan/models/plan.model');
const PlanCoveredItem = require('plan/models/plan_covered_item.model');
const PlanPropertySize = require('plan/models/plan_property_size.model');
const mongoose    = require('mongoose');

class PlanRepository {
    constructor() {}
    
    async getAll(params) {
        try {
            //console.log("ppp",params);
            const query = [{"isDeleted": false,'status':'Active'}];
            if (_.isObject(params) && _.has(params, 'plan_type')) {
                query.push({plan_type:params.plan_type})
            }
           
            if (_.isObject(params) && _.has(params, 'covered_item_list')) {
                query.push({covered_item_id: {"$in":params.covered_item_list.map(mongoose.Types.ObjectId)}});
            }

            if (_.isObject(params) && _.has(params, 'property_type_id')) {
                query.push({"property_pricing.property_type_id": mongoose.Types.ObjectId(params.property_type_id)});
            }
            
            const searchQuery = {"$and": query};
            //console.log(searchQuery);

            var aggregate = await Plan.aggregate([
            //     //{ $match:searchQuery},
            //     { "$unwind": "$category_covered_item" },
            //     {
            //         $lookup: {
            //             from: "plan_categories",
            //             localField: "category_covered_item.category_id",
            //             foreignField: "_id",
            //             as: "category_covered_item.category"
            //         }
            //     },
            //     //{ "$unwind": "$category_covered_item.covered_item_id" },
            //     {
            //         $lookup: {
            //             from: "plan_covered_items",
            //             localField: "category_covered_item.covered_item_id",
            //             foreignField: "_id",
            //             as: "category_covered_item.covered_items"
            //         }
            //     },
            //     { "$unwind": {
            //         "path": "$category_covered_item",
            //         "preserveNullAndEmptyArrays": true
            //         } 
            //     },
            //     { "$unwind": "$property_pricing" },
            //     {
            //         $lookup: {
            //             from: "plan_property_types",
            //             localField: "property_pricing.property_type_id",
            //             foreignField: "_id",
            //             as: "property_pricing.property_type"
            //         }
            //     },
            //    // { "$unwind": "$property_pricing.info" },
            //     // {
            //     //     $lookup: {
            //     //         from: "plan_property_sizes",
            //     //         localField: "property_pricing.info.property_size_id",
            //     //         foreignField: "_id",
            //     //         as: "property_pricing.info.property_size"
            //     //     }
            //     // },
            //     //{ "$unwind": "$property_pricing.info.covered_item_list" },
            //     // {
            //     //     $lookup: {
            //     //         from: "plan_covered_items",
            //     //         localField: "property_pricing.info.covered_item_list.covered_item_id",
            //     //         foreignField: "_id",
            //     //         as: "property_pricing.info.covered_item_list.covered_item_id"
            //     //     }
            //     // },
                
            //     { "$unwind": {
            //         "path": "$property_pricing",
            //         "preserveNullAndEmptyArrays": true
            //         } 
            //     },
                
            //     { "$unwind": {
            //         "path": "$optional_item",
            //         "preserveNullAndEmptyArrays": true
            //         } 
            //     },
            //     {
            //         $lookup: {
            //             from: "plan_covered_items",
            //             localField: "optional_item.covered_item_id",
            //             foreignField: "_id",
            //             as: "optional_item.covered_item"
            //         }
            //     },
            //     { "$unwind": {
            //         "path": "$optional_item",
            //         "preserveNullAndEmptyArrays": true
            //         } 
            //     },
            //     { "$unwind": {
            //         "path": "$state_data",
            //         "preserveNullAndEmptyArrays": true
            //         } 
            //     },
            //     {
            //         $lookup: {
            //             from: "states",
            //             localField: "state_data.state_id",
            //             foreignField: "_id",
            //             as: "state_data.state"
            //         }
            //     },
            //     { "$unwind": {
            //         "path": "$state_data",
            //         "preserveNullAndEmptyArrays": true
            //         } 
            //     },


                // {
                //     $lookup: {
                //         from: "plan_additional_items",
                //         localField: "additional_item_id",
                //         foreignField: "_id",
                //         as: "additional_items"
                //     }
                // },
                // { "$unwind": {
                //     "path": "$additional_items",
                //     "preserveNullAndEmptyArrays": true
                //     } 
                // },
                // {
                //     $lookup: {
                //         from: "plan_appliance_items",
                //         localField: "appliance_item_id",
                //         foreignField: "_id",
                //         as: "appliance_items"
                //     }
                // },
                // { "$unwind": {
                //     "path": "$appliance_items",
                //     "preserveNullAndEmptyArrays": true
                //     } 
                // },
            { $match:searchQuery},
            // {
            //     "$group":{
            //         "_id":"$_id",
            //         'title':{$first:"$title"},
            //         'image':{$first:"$image"},
            //         'maximum_aggregated_coverage':{$first:"$maximum_aggregated_coverage"},
            //         'item_removal':{$first:"$item_removal"},
            //         'service_fee':{$first:"$service_fee"},
            //         'category_covered_item':{$addToSet:"$category_covered_item"},
            //         'property_pricing':{$addToSet:"$property_pricing"},
            //         'state_data':{$addToSet:"$state_data"},
            //         'available_checkout':{$first:"$available_checkout"},
            //         'optional_item_id':{$first:"$optional_item_id"},
            //         'optional_item':{$addToSet:"$optional_item"},
            //         'plan_type':{$first:"$plan_type"},
            //         'sort_order':{$first:"$sort_order"},
            //         'automated_aggregated_increase':{$first:"$automated_aggregated_increase"},
            //         'automated_aggregated_decrease':{$first:"$automated_aggregated_decrease"}
            //     }
            // },
            { "$sort": {_id: -1}}
            // {
            //         $lookup: {
            //             from: "plan_covered_items",
            //             localField: "property_pricing.info.covered_item_list.covered_item_id",
            //             foreignField: "_id",
            //             as: "property_pricing.info.covered_item_list.covered_item_id1"
            //         }
            // },
           // { "$unwind": "$property_pricing" },

          
           ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                //await PlanCoveredItem.populate(aggregate, {path: "property_pricing.info.covered_item_list.covered_item_id"});
                return aggregate;
            }

        } catch (error) {
            return error;
        }
    }

    async getAllOth(params) {
        try {
            //console.log("ppp",params);
            const query = [{"isDeleted": false,'status':'Active'}];
            if (_.isObject(params) && _.has(params, 'plan_type')) {
                query.push({plan_type:params.plan_type})
            }
           
            if (_.isObject(params) && _.has(params, 'covered_item_list')) {
                query.push({covered_item_id: {"$in":params.covered_item_list.map(mongoose.Types.ObjectId)}});
            }

            if (_.isObject(params) && _.has(params, 'property_type_id')) {
                query.push({"property_pricing.property_type_id": mongoose.Types.ObjectId(params.property_type_id)});
            }
            if (_.isObject(params) && _.has(params, 'property_size_id')) {
                query.push({"property_pricing.info.property_size_id": mongoose.Types.ObjectId(params.property_size_id)});
            }

            const searchQuery = {"$and": query};
            //console.log(searchQuery);

            var aggregate = await Plan.aggregate([
                //{ $match:searchQuery},
                { "$unwind": "$category_covered_item" },
                {
                    $lookup: {
                        from: "plan_categories",
                        localField: "category_covered_item.category_id",
                        foreignField: "_id",
                        as: "category_covered_item.category"
                    }
                },
                //{ "$unwind": "$category_covered_item.covered_item_id" },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "category_covered_item.covered_item_id",
                        foreignField: "_id",
                        as: "category_covered_item.covered_items"
                    }
                },
                { "$unwind": {
                    "path": "$category_covered_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                { "$unwind": "$property_pricing" },
                //{ "$unwind": "$property_pricing.info" },
                {
                    $lookup: {
                        from: "plan_property_types",
                        localField: "property_pricing.property_type_id",
                        foreignField: "_id",
                        as: "property_pricing.property_type"
                    }
                },
              { "$unwind": "$property_pricing.info" },
                // {
                //     $lookup: {
                //         from: "plan_property_sizes",
                //         localField: "property_pricing.info.property_size_id",
                //         foreignField: "_id",
                //         as: "property_pricing.info.property_size"
                //     }
                // },
                //{ "$unwind": "$property_pricing.info.covered_item_list" },
                // {
                //     $lookup: {
                //         from: "plan_covered_items",
                //         localField: "property_pricing.info.covered_item_list.covered_item_id",
                //         foreignField: "_id",
                //         as: "property_pricing.info.covered_item_list.covered_item_id"
                //     }
                // },
                
                // { "$unwind": {
                //     "path": "$property_pricing",
                //     "preserveNullAndEmptyArrays": true
                //     } 
                // },
                
                { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "optional_item.covered_item_id",
                        foreignField: "_id",
                        as: "optional_item.covered_item"
                    }
                },
                { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                { "$unwind": {
                    "path": "$state_data",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "states",
                        localField: "state_data.state_id",
                        foreignField: "_id",
                        as: "state_data.state"
                    }
                },
                { "$unwind": {
                    "path": "$state_data",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                // {
                //     $lookup: {
                //         from: "plan_additional_items",
                //         localField: "additional_item_id",
                //         foreignField: "_id",
                //         as: "additional_items"
                //     }
                // },
                // { "$unwind": {
                //     "path": "$additional_items",
                //     "preserveNullAndEmptyArrays": true
                //     } 
                // },
                // {
                //     $lookup: {
                //         from: "plan_appliance_items",
                //         localField: "appliance_item_id",
                //         foreignField: "_id",
                //         as: "appliance_items"
                //     }
                // },
                // { "$unwind": {
                //     "path": "$appliance_items",
                //     "preserveNullAndEmptyArrays": true
                //     } 
                // },
            { $match:searchQuery},
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'image':{$first:"$image"},
                    'maximum_aggregated_coverage':{$first:"$maximum_aggregated_coverage"},
                    'item_removal':{$first:"$item_removal"},
                    'service_fee':{$first:"$service_fee"},
                    'category_covered_item':{$addToSet:"$category_covered_item"},
                    'property_pricing':{$addToSet:"$property_pricing"},
                    'state_data':{$addToSet:"$state_data"},
                    'available_checkout':{$first:"$available_checkout"},
                    'optional_item_id':{$first:"$optional_item_id"},
                    'optional_item':{$addToSet:"$optional_item"},
                    'plan_type':{$first:"$plan_type"},
                    'sort_order':{$first:"$sort_order"},
                    'disc_amt':{$first:"$disc_amt"},
                    'promo_code':{$first:"$promo_code"},
                    'monthly_rate':{$first:"$monthly_rate"},
                    'pre_select':{$first:"$pre_select"},
                    'automated_aggregated_increase':{$first:"$automated_aggregated_increase"},
                    'automated_aggregated_decrease':{$first:"$automated_aggregated_decrease"}
                }
            },
            { "$sort": {_id: -1}}
            // {
            //         $lookup: {
            //             from: "plan_covered_items",
            //             localField: "property_pricing.info.covered_item_list.covered_item_id",
            //             foreignField: "_id",
            //             as: "property_pricing.info.covered_item_list.covered_item_id1"
            //         }
            // },
           // { "$unwind": "$property_pricing" },

          
           ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                await PlanCoveredItem.populate(aggregate, {path: "property_pricing.info.covered_item_list.covered_item_id"});
                return aggregate;
            }

        } catch (error) {
            return error;
        }
    }

    async getAllPlanWithCondition(params) {
        try {
            //console.log("ppp",params);
            const query = [{"isDeleted": false,'status':'Active'/*,'_id':{$in:[mongoose.Types.ObjectId("6155ac0227f9956d672ccbf6")]}*/}];
            if (_.isObject(params) && _.has(params, 'plan_type')) {
                query.push({plan_type:params.plan_type})
            }
           
            if (_.isObject(params) && _.has(params, 'covered_item_list')) {
                query.push({covered_item_id: {"$in":params.covered_item_list.map(mongoose.Types.ObjectId)}});
            }

            if (_.isObject(params) && _.has(params, 'property_type_id')) {
                query.push({"property_pricing.property_type_id": mongoose.Types.ObjectId(params.property_type_id)});
            }
            if (_.isObject(params) && _.has(params, 'property_size_id')) {
                query.push({"property_pricing.info.property_size_id": mongoose.Types.ObjectId(params.property_size_id)});
            }

            const searchQuery = {"$and": query};
            //console.log(searchQuery);

            var aggregate = await Plan.aggregate([
                //{ $match:searchQuery},
                { "$unwind": "$category_covered_item" },
                {
                    $lookup: {
                        from: "plan_categories",
                        localField: "category_covered_item.category_id",
                        foreignField: "_id",
                        as: "category_covered_item.category"
                    }
                },
                //{ "$unwind": "$category_covered_item.covered_item_id" },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "category_covered_item.covered_item_id",
                        foreignField: "_id",
                        as: "category_covered_item.covered_items"
                    }
                },
                { "$unwind": {
                    "path": "$category_covered_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                { "$unwind": "$property_pricing" },
                //{ "$unwind": "$property_pricing.info" },
                {
                    $lookup: {
                        from: "plan_property_types",
                        localField: "property_pricing.property_type_id",
                        foreignField: "_id",
                        as: "property_pricing.property_type"
                    }
                },
              { "$unwind": "$property_pricing.info" },
                
                
                { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "optional_item.covered_item_id",
                        foreignField: "_id",
                        as: "optional_item.covered_item"
                    }
                },
                { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
              
            { $match:searchQuery},
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'image':{$first:"$image"},
                    'maximum_aggregated_coverage':{$first:"$maximum_aggregated_coverage"},
                    'item_removal':{$first:"$item_removal"},
                    'service_fee':{$first:"$service_fee"},
                    'category_covered_item':{$addToSet:"$category_covered_item"},
                    'property_pricing':{$addToSet:"$property_pricing"},
                    'covered_item_list':{$addToSet:"$property_pricing.info.covered_item_list.covered_item_id"},
                    'available_checkout':{$first:"$available_checkout"},
                    'optional_item_id':{$first:"$optional_item_id"},
                    'optional_item':{$addToSet:"$optional_item"},
                    'plan_type':{$first:"$plan_type"},
                    'sort_order':{$first:"$sort_order"},
                    'disc_amt':{$first:"$disc_amt"},
                    'promo_code':{$first:"$promo_code"},
                    'monthly_rate':{$first:"$monthly_rate"},
                    'pre_select':{$first:"$pre_select"},
                    'automated_aggregated_increase':{$first:"$automated_aggregated_increase"},
                    'automated_aggregated_decrease':{$first:"$automated_aggregated_decrease"}
                }
            },
            { "$sort": {_id: -1}}
            
           ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                await PlanCoveredItem.populate(aggregate, {path: "property_pricing.info.covered_item_list.covered_item_id"});
                return aggregate;
            }

        } catch (error) {
            return error;
        }
    }

    async getAllGroupWise(params) {
        try {
            
            const searchQuery = {"$and": params};

            var aggregate = await Plan.aggregate([
                { "$unwind": "$plan_pricing" },
                { "$unwind": "$covered_item_id" },
                { "$unwind": "$additional_item_id" },
                {
                    $lookup: {
                        from: "plan_property_types",
                        localField: "plan_pricing.property_type_id",
                        foreignField: "_id",
                        as: "plan_pricing.property_type_id"
                    }
                },
                { "$unwind": "$plan_pricing" },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "covered_item_id",
                        foreignField: "_id",
                        as: "covered_items"
                    }
                },
                { "$unwind": "$covered_items" },
                {
                    $lookup: {
                        from: "plan_additional_items",
                        localField: "additional_item_id",
                        foreignField: "_id",
                        as: "additional_items"
                    }
                },
                { "$unwind": {
                    "path": "$additional_items",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "plan_appliance_items",
                        localField: "appliance_item_id",
                        foreignField: "_id",
                        as: "appliance_items"
                    }
                },
                { "$unwind": {
                    "path": "$appliance_items",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
            { $match:searchQuery},
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'image':{$first:"$image"},
                    'covered_items':{$addToSet:"$covered_items"},
                    'additional_items':{$addToSet:"$additional_items"},
                    'available_checkout':{$first:"$available_checkout"},
                    'optional_item_id':{$first:"$optional_item_id"},
                    'appliance_items':{$addToSet:"$appliance_items"},
                    'plan_pricing':{$addToSet:"$plan_pricing"},
                    'service_fee':{$first:"$service_fee"}
                }
            }
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

    async getDetails(param) {
        try {
            var conditions = {};
            conditions['$and'] = param;
            var aggregate = await Plan.aggregate([
                { "$unwind": {
                    "path": "$category_covered_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "plan_categories",
                        localField: "category_covered_item.category_id",
                        foreignField: "_id",
                        as: "category_covered_item.category"
                    }
                },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "category_covered_item.covered_item_id",
                        foreignField: "_id",
                        as: "category_covered_item.covered_items"
                    }
                },
                { "$unwind": {
                    "path": "$category_covered_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                { "$unwind": "$property_pricing" },
                {
                    $lookup: {
                        from: "plan_property_types",
                        localField: "property_pricing.property_type_id",
                        foreignField: "_id",
                        as: "property_pricing.property_type"
                    }
                },
                { "$unwind": {
                    "path": "$property_pricing",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "optional_item.covered_item_id",
                        foreignField: "_id",
                        as: "optional_item.covered_item"
                    }
                },
                {
                    $lookup: {
                        from: "optional_item_categories",
                        localField: "optional_item.category_id",
                        foreignField: "_id",
                        as: "optional_item.optional_item_category"
                    }
                },
                {
                    $lookup: {
                        from: "plan_categories",
                        localField: "optional_item_id",
                        foreignField: "_id",
                        as: "optional_item.category"
                    }
                },
                { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                
                { "$unwind": {
                    "path": "$state_data",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "states",
                        localField: "state_data.state_id",
                        foreignField: "_id",
                        as: "state_data.state"
                    }
                },
                { "$unwind": {
                    "path": "$state_data",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                
            { $match: conditions },
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'image':{$first:"$image"},
                    'maximum_aggregated_coverage':{$first:"$maximum_aggregated_coverage"},
                    'item_removal':{$first:"$item_removal"},
                    'service_fee':{$first:"$service_fee"},
                    'category_covered_item':{$addToSet:"$category_covered_item"},
                    'property_pricing':{$addToSet:"$property_pricing"},
                    'state_data':{$addToSet:"$state_data"},
                    'available_checkout':{$first:"$available_checkout"},
                    'optional_item_id':{$first:"$optional_item_id"},
                    'optional_item':{$addToSet:"$optional_item"},
                    'plan_type':{$first:"$plan_type"},
                    'sort_order':{$first:"$sort_order"},
                    'disc_amt':{$first:"$disc_amt"},
                    'promo_code':{$first:"$promo_code"},
                    'monthly_rate':{$first:"$monthly_rate"},
                    'pre_select':{$first:"$pre_select"},
                    'automated_aggregated_increase':{$first:"$automated_aggregated_increase"},
                    'automated_aggregated_decrease':{$first:"$automated_aggregated_decrease"}
                }
            },
            { "$unwind": "$optional_item" },
            { $sort: { "optional_item._id": 1 } },
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'image':{$first:"$image"},
                    'maximum_aggregated_coverage':{$first:"$maximum_aggregated_coverage"},
                    'item_removal':{$first:"$item_removal"},
                    'service_fee':{$first:"$service_fee"},
                    'category_covered_item':{$first:"$category_covered_item"},
                    'property_pricing':{$first:"$property_pricing"},
                    'state_data':{$first:"$state_data"},
                    'available_checkout':{$first:"$available_checkout"},
                    'optional_item_id':{$first:"$optional_item_id"},
                    'optional_item':{$push:"$optional_item"},
                    'plan_type':{$first:"$plan_type"},
                    'sort_order':{$first:"$sort_order"},
                    'disc_amt':{$first:"$disc_amt"},
                    'promo_code':{$first:"$promo_code"},
                    'monthly_rate':{$first:"$monthly_rate"},
                    'pre_select':{$first:"$pre_select"},
                    'automated_aggregated_increase':{$first:"$automated_aggregated_increase"},
                    'automated_aggregated_decrease':{$first:"$automated_aggregated_decrease"}
                }
            }
           ]);
            if (_.isEmpty(aggregate)) {
                return null;
            }
            await PlanPropertySize.populate(aggregate[0], {path: "property_pricing.info.property_size_id"});
            await PlanCoveredItem.populate(aggregate[0], {path: "property_pricing.info.covered_item_list.covered_item_id"});
            return aggregate[0];
    
        } catch (e) {
            throw (e);
        }
    }

    async getDetailsOth(params) {
        try {
            console.log("ppp",params);
            const query = [{"isDeleted": false,'status':'Active'}];
            if (_.isObject(params) && _.has(params, '_id')) {
                query.push({_id: mongoose.Types.ObjectId(params._id)});
            }
            if (_.isObject(params) && _.has(params, 'plan_type')) {
                query.push({plan_type:params.plan_type})
            }
            if (_.isObject(params) && _.has(params, 'covered_item_list')) {
                query.push({covered_item_id: {"$in":params.covered_item_list.map(mongoose.Types.ObjectId)}});
            }

            if (_.isObject(params) && _.has(params, 'property_type_id')) {
                query.push({"property_pricing.property_type_id": mongoose.Types.ObjectId(params.property_type_id)});
            }
            if (_.isObject(params) && _.has(params, 'property_size_id')) {
                query.push({"property_pricing.info.property_size_id": mongoose.Types.ObjectId(params.property_size_id)});
            }

            const searchQuery = {"$and": query};
            //console.log(searchQuery);

            var aggregate = await Plan.aggregate([
                //{ $match:searchQuery},
                { "$unwind": "$category_covered_item" },
                {
                    $lookup: {
                        from: "plan_categories",
                        localField: "category_covered_item.category_id",
                        foreignField: "_id",
                        as: "category_covered_item.category"
                    }
                },
                //{ "$unwind": "$category_covered_item.covered_item_id" },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "category_covered_item.covered_item_id",
                        foreignField: "_id",
                        as: "category_covered_item.covered_items"
                    }
                },
                { "$unwind": {
                    "path": "$category_covered_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                { "$unwind": "$property_pricing" },
                //{ "$unwind": "$property_pricing.info" },
                {
                    $lookup: {
                        from: "plan_property_types",
                        localField: "property_pricing.property_type_id",
                        foreignField: "_id",
                        as: "property_pricing.property_type"
                    }
                },
              { "$unwind": "$property_pricing.info" },
                
              { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "plan_covered_items",
                        localField: "optional_item.covered_item_id",
                        foreignField: "_id",
                        as: "optional_item.covered_item"
                    }
                },
                {
                    $lookup: {
                        from: "optional_item_categories",
                        localField: "optional_item.category_id",
                        foreignField: "_id",
                        as: "optional_item.optional_item_category"
                    }
                },
                { "$unwind": {
                    "path": "$optional_item",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                { "$unwind": {
                    "path": "$state_data",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
                {
                    $lookup: {
                        from: "states",
                        localField: "state_data.state_id",
                        foreignField: "_id",
                        as: "state_data.state"
                    }
                },
                { "$unwind": {
                    "path": "$state_data",
                    "preserveNullAndEmptyArrays": true
                    } 
                },
            { $match:searchQuery},
            {
                "$group":{
                    "_id":"$_id",
                    'title':{$first:"$title"},
                    'image':{$first:"$image"},
                    'maximum_aggregated_coverage':{$first:"$maximum_aggregated_coverage"},
                    'item_removal':{$first:"$item_removal"},
                    'service_fee':{$first:"$service_fee"},
                    'category_covered_item':{$addToSet:"$category_covered_item"},
                    'property_pricing':{$addToSet:"$property_pricing"},
                    'state_data':{$addToSet:"$state_data"},
                    'available_checkout':{$first:"$available_checkout"},
                    'optional_item_id':{$first:"$optional_item_id"},
                    'optional_item':{$addToSet:"$optional_item"},
                    'plan_type':{$first:"$plan_type"},
                    'sort_order':{$first:"$sort_order"},
                    'disc_amt':{$first:"$disc_amt"},
                    'promo_code':{$first:"$promo_code"},
                    'monthly_rate':{$first:"$monthly_rate"},
                    'pre_select':{$first:"$pre_select"},
                }
            },
            // {
            //         $lookup: {
            //             from: "plan_covered_items",
            //             localField: "property_pricing.info.covered_item_list.covered_item_id",
            //             foreignField: "_id",
            //             as: "property_pricing.info.covered_item_list.covered_item_id1"
            //         }
            // },
           // { "$unwind": "$property_pricing" },

          
           ]);

            if(_.isEmpty(aggregate)){
                return [];
            }else{
                await PlanPropertySize.populate(aggregate[0], {path: "property_pricing.info.property_size_id"});
                await PlanCoveredItem.populate(aggregate[0], {path: "property_pricing.info.covered_item_list.covered_item_id"});
                return aggregate[0];
            }

        } catch (error) {
            return error;
        }
    }


    async getById(id) {
        try {
            return await Plan.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await Plan.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await Plan.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            await Plan.findById(id).lean().exec();
            return await Plan.deleteOne({
                _id: id
            }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await Plan.findByIdAndUpdate(id, data, {
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
            const _save = new Plan(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

    async bulkInsert(arrData) {
        try {
            let result = await Plan.insertMany(arrData);
            if (!result) {
                return null;
            }
            return result;
        } catch (e) {
            throw e;
        }
    }

}

module.exports = new PlanRepository();