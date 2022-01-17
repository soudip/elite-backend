const mongoose = require('mongoose');
const Partner = require('partner/models/partner.model');
const PartnerType = require('partner_type/models/partner_type.model');

const partnerRepository = {
    getAll: async (req) => {
        try {
            var conditions = {};
            var and_clauses = [];
            
            and_clauses.push({ "partner_type_id": req.body.partner_type_id,"isDeleted": false });

            if (_.isObject(req.body.query) && _.has(req.body.query, 'generalSearch')) {
                and_clauses.push({
                    $or: [
                        { 'full_name': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'mobile_number': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'email': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'company_name': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'company_address': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'company_city': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'company_zip': { $regex: req.body.query.generalSearch, $options: 'i' } },
                    ]
                });
            }
            // status wise check //
            if (_.has(req.body, 'status') && !_.isEmpty(req.body.status)) {
                and_clauses.push({ "status": req.body.status});
            }
            // technician list //
            if (_.has(req.body, 'partner_type') && !_.isEmpty(req.body.partner_type) && (req.body.partner_type == 'certified_technicians')) {
                and_clauses.push({ licensed_technician_number: { $gt: 0 }});
            } 
            
            conditions['$and'] = and_clauses;

            var sortOperator = { "$sort": {} };
            if (_.has(req.body, 'sort')) {
                var sortField = req.body.sort.field;
                if (req.body.sort.sort == 'desc') {
                    var sortOrder = -1;
                }
                else if (req.body.sort.sort == 'asc') {
                    var sortOrder = 1;
                }
                sortOperator["$sort"][sortField] = sortOrder;
            }
            else {
                sortOperator["$sort"]['_id'] = -1;
            }

            var allPartners = Partner.aggregate([
                {
                    $lookup: {
                        "from": "partner_types",
                        "localField": "partner_type_id",
                        "foreignField": "_id",
                        "as": "partner_type"
                    }
                },
                { "$unwind": "$partner_type" },
                { $match: conditions },
                sortOperator
            ]);

            return allPartners;
        }
        catch (e) {
            throw (e);
        }
    },

    getDetails: async (param) => {
        try {
            var conditions = {};
            conditions['$and'] = param;
            let aggregate = await Partner.aggregate([
            {
                $lookup: {
                    from: "partner_types",
                    localField: "partner_type_id",
                    foreignField: "_id",
                    as: "partner_type"
                }
            },
            { "$unwind": "$partner_type" },
            { $match: conditions }
            ]);

            if (_.isEmpty(aggregate)) {
                return null;
            }

            return aggregate[0];

        } catch (e) {
            throw (e);
        }
    },

    getById: async (id) => {
        try {
            let partner = await Partner.findById(id).exec();
            if (!partner) {
                return null;
            }
            return partner;

        } catch (e) {
            return e;
        }
    },

    getByField: async (params) => {

        try {
            let partner = await Partner.findOne(params).exec();
            if (!partner) {
                return null;
            }
            return partner;

        } catch (e) {
            return e;
        }
    },

    getAllByField: async (params) => {
        try {
            let partner = await Partner.find(params).exec();
            if (!partner) {
                return null;
            }
            return partner;

        } catch (e) {
            return e;
        }
    },

    updateById: async (data, id) => {
        try {
            let partner = await Partner.findByIdAndUpdate(id, data, {
                new: true
            });

            if (!partner) {
                return null;
            }
            return partner;
        } catch (e) {
            return e;
        }
    },

    updateByField: async (field, fieldValue, data) => {
        try {
            let partner = await Partner.findByIdAndUpdate(fieldValue, field, {
                new: true
            });
            if (!partner) {
                return null;
            }
            return partner;
        } catch (e) {
            return e;
        }
    },

    save: async (data) => {
        try {
            let partner = await Partner.create(data);

            if (!partner) {
                return null;
            }
            return partner;
        } catch (e) {
            return e;
        }
    },

    getPartnerByField: async (data) => {
        try {
            let partner = await Partner.findOne(data).populate('partner_type_id').exec();
            if (!partner) {
                return null;
            }
            return partner;
        } catch (e) {
            return e;
        }
    },
    getPartnersByField: async (data) => {
        try {
            let partner = await Partner.find(data).populate('partner_type_id').exec();
            if (!partner) {
                return null;
            }
            return partner;
        } catch (e) {
            return e;
        }
    },

    getPartnerCountByParam: async (params) => {
        try {

            let partner = await Partner.countDocuments(params);
            return partner;
        } catch (e) {
            throw (e);
        }
    },
    

    getPartnersCount: async (req) => {
        try {
            var conditions = {
                'status': 'Active'
            };
            var and_clauses = [];

            and_clauses.push({
                "isDeleted": false
            });
            

            conditions['$and'] = and_clauses;
            let partners = await Partner.aggregate([{
                "$lookup": {
                    "from": "partner_types",
                    "localField": "partner_type_id",
                    "foreignField": "_id",
                    "as": "partner_type"
                },
            },
            {
                $unwind: "$partner_type"
            },
            {
                $match: conditions
            },
            {
                $group: {
                    _id: "$partner_type._id",
                    name: {
                        $first: "$partner_type.title"
                    },
                    count: {
                        $sum: 1
                    }
                }
            },
            {
                "$sort": {
                    _id: 1
                }
            },
            ]).exec();
            return partners;
        } catch (e) {
            throw (e);
        }
    },
    delete: async (id) => {
        try {
            let partner = await Partner.findById(id);
            if (partner) {
                let partnerDelete = await Partner.remove({
                    _id: id
                }).exec();
                if (!partnerDelete) {
                    return null;
                }
                return partnerDelete;
            }
        } catch (e) {
            return e;
        }
    },

    deleteByField: async (field, fieldValue) => {
        //todo: Implement delete by field
    },


};

module.exports = partnerRepository;