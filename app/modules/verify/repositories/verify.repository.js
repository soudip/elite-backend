const mongoose = require('mongoose');
const Verify = require('verify/models/verify.model');

const verifyRepository = {


    getById: async (id) => {
        try {
            let verify = await Verify.findById(id).exec();
            if (!verify) {
                return null;
            }
            return verify;

        } catch (e) {
            return e;
        }
    },

    getByField: async (params) => {

        try {
            let verify = await Verify.findOne(params).exec();
            if (!verify) {
                return null;
            }
            return verify;

        } catch (e) {
            return e;
        }
    },

    getAllByField: async (params) => {
        try {
            let verify = await Verify.find(params).exec();
            if (!verify) {
                return null;
            }
            return verify;

        } catch (e) {
            return e;
        }
    },

    updateById: async (data, id) => {
        try {
            let verify = await Verify.findByIdAndUpdate(id, data, {
                new: true
            });

            if (!verify) {
                return null;
            }
            return verify;
        } catch (e) {
            return e;
        }
    },

    updateByField: async (field, fieldValue, data) => {
        try {
            let verify = await Verify.findByIdAndUpdate(fieldValue, field, {
                new: true
            });
            if (!verify) {
                return null;
            }
            return verify;
        } catch (e) {
            return e;
        }
    },

    save: async (data) => {
        try {
            let verify = await Verify.create(data);

            if (!verify) {
                return null;
            }
            return verify;
        } catch (e) {
            return e;
        }
    },
    delete: async (id) => {
        try {
            let verify = await Verify.findById(id);
            if (verify) {
                let verifyDelete = await Verify.remove({
                    _id: id
                }).exec();
                if (!verifyDelete) {
                    return null;
                }
                return verifyDelete;
            }
        } catch (e) {
            return e;
        }
    },

    deleteByField: async (field, fieldValue) => {
        //todo: Implement delete by field
    },


};

module.exports = verifyRepository;