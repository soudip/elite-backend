const Cms = require('cms/models/cms.model');

class CmsRepository {
    constructor() {}

    async getById(id) {
        try {
            return await Cms.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await Cms.findOne(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await Cms.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            let cmsData = await Cms.findById(id).lean().exec();
            if(!_.isEmpty(cmsData)) {
                return await Cms.deleteOne({
                    _id: id
                }).lean().exec();
            } else {
                return null;
            }
            
        } catch (error) {
            return error;
        }
    }

    async updateById(id,data) {
        try {
            
            let result = await Cms.findByIdAndUpdate(id, data, {
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
            const _save = new Cms(data);
            return await _save.save();
        } catch (error) {
            return error;
        }
    }

}

module.exports = new CmsRepository();