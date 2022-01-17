const roleRepo = require('role/repositories/role.repository');

class RoleController {
    constructor() { 
    }

    /* @Method: list
    // @Description: Role list
    */
    async list (req, res) {
        try {
            let roles = await roleRepo.getAllByField({});
            res.status(200).send({data:roles,message: 'Roles fetched Successfully'});
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

}

module.exports = new RoleController();