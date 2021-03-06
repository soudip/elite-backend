const Role = require('role/models/role.model');
const perPage = config.PAGINATION_PERPAGE;

class RoleRepository {
    constructor() { }

    async getAll(searchQuery, page, cb) {
        try {
            const match = [{ "status": "Active" }];
            if (_.has(searchQuery, "keyword")) {
                if (searchQuery.keyword != '') {
                    const search_string = searchQuery.keyword.trim();
                    match.push({
                        "$or": [{ 'roleDisplayName': { '$regex': search_string, '$options': 'i' } },
                        { 'desc': { '$regex': search_string, '$options': 'i' } }
                        ]
                    });
                }
            }
            await Role.paginate({ "$and": match }, { page: page, limit: perPage });
        } catch (error) {
            return error;
        }
    }

    async getById(id) {
        try {
            return await Role.findById(id).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async getByField(params) {
        try {
            return await Role.findOne(params).exec();
        } catch (error) {
            return error;
        }
    }

    async getAllByField(params) {
        try {
            return await Role.find(params).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async delete(id) {
        try {
            return await Role.deleteOne({ _id: id }).lean().exec();
        } catch (error) {
            return error;
        }
    }

    async updateById(data, id) {
        try {
            return await Role.findByIdAndUpdate(id, data, { new: true, upsert: true })
                .lean().exec();
        } catch (error) {
            return error;
        }
    }

    async save(data) {
        try {
            return await Role.create(data).lean().exec();
        } catch (error) {
            return error;
        }
    }
}

module.exports = new RoleRepository();