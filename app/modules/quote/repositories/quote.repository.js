const mongoose = require('mongoose');
const Quote = require('quote/models/quote.model');

const quoteRepository = {
    getAll: async (req) => {
        try {
            var conditions = {};
            var and_clauses = [];

            and_clauses.push({ "quote_type_id": req.body.quote_type_id, "isDeleted": false });

            if (_.isObject(req.body.query) && _.has(req.body.query, 'generalSearch')) {
                and_clauses.push({
                    $or: [
                        { 'full_name': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'mobile_number': { $regex: req.body.query.generalSearch, $options: 'i' } },
                        { 'email': { $regex: req.body.query.generalSearch, $options: 'i' } },
                    ]
                });
            }
            // status wise check //
            if (_.has(req.body, 'status') && !_.isEmpty(req.body.status)) {
                and_clauses.push({ "status": req.body.status });
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

            var allQuotes = Quote.aggregate([

                { $match: conditions },
                sortOperator
            ]);

            return allQuotes;
        }
        catch (e) {
            throw (e);
        }
    },



    getById: async (id) => {
        try {
            let quote = await Quote.findById(id).exec();
            if (!quote) {
                return null;
            }
            return quote;

        } catch (e) {
            return e;
        }
    },

    getByField: async (params) => {

        try {
            let quote = await Quote.findOne(params).exec();
            if (!quote) {
                return null;
            }
            return quote;

        } catch (e) {
            return e;
        }
    },

    getAllByField: async (params) => {
        try {
            let quote = await Quote.find(params).exec();
            if (!quote) {
                return null;
            }
            return quote;

        } catch (e) {
            return e;
        }
    },

    updateById: async (data, id) => {
        try {
            let quote = await Quote.findByIdAndUpdate(id, data, {
                new: true
            });
            if (!quote) {
                return null;
            }
            return quote;
        } catch (e) {
            return e;
        }
    },

    updateByField: async (value, condition) => {
        try {
            let quote = await Quote.findOneAndUpdate(condition, value, { new: true });
            if (!quote) {
                return null;
            }
            return quote;
        } catch (e) {
            return e;
        }
    },
    updateBulkData: async (value, condition) => {
        try {
            let quote = await Quote.updateMany(condition, value, { multi: true });
            if (!quote) {
                return null;
            }
            return quote;
        } catch (e) {
            return e;
        }
    },


    save: async (data) => {
        try {
            let quote = await Quote.create(data);

            if (!quote) {
                return null;
            }
            return quote;
        } catch (e) {
            return e;
        }
    },



    delete: async (id) => {
        try {
            let quote = await Quote.findById(id);
            if (quote) {
                let quoteDelete = await Quote.remove({
                    _id: id
                }).exec();
                if (!quoteDelete) {
                    return null;
                }
                return quoteDelete;
            }
        } catch (e) {
            return e;
        }
    },

    deleteByField: async (field, fieldValue) => {
        //todo: Implement delete by field
    },


};

module.exports = quoteRepository;