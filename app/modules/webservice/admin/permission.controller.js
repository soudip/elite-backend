const permissionRepo = require('permission/repositories/permission.repository');

class PermissionController {
    constructor() { 
    }

    /* @Method: updatePermission
    // @Description: update Permission
    */
   async createPermissions(req,res) {
        try {
            let path = req.body.operation;
            let permissionsObj = { permission_group: req.body.permission_group, operation: path, displayName:req.body.displayName, description: req.body.description };
            let permission = await permissionRepo.getByField({ operation: { $in: [path] } });
            if(!permission) {
                let savePermission = await permissionRepo.save(permissionsObj);
                res.status(200).send({data:savePermission,message: 'Permissions created Successfully'});
            } else {
                let updatePermission = await permissionRepo.updateById(permissionsObj, permission._id);
                res.status(200).send({data:updatePermission,message: 'Permissions updated Successfully'});
            }
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }

    };

    /* @Method: getRolePermissionList
    // @Description: Role wise Permission list
    */
    async getRolePermissionList (req,res){
        try {
            const permissionsList = await permissionRepo.getPermissionByRole(req.params.id);
            res.status(200).send({data:permissionsList,message: 'Permissions fetched Successfully'});
        } catch (error) {
                res.status(500).send({ message: error.message });
            }
    };

    /* @Method: updateRolePermission
    // @Description: update Role Permission
    */
    async updateRolePermission(req,res) {
        try {
            const permissionsList = await permissionRepo.updateRolePermissionById({'role':req.body.role},req.body);
            res.status(200).send({data:permissionsList,message: 'Permissions updated Successfully'});
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    };

    /* @Method: getUserPermissionList
    // @Description: User wise Permission list
    */
   async getUserPermissionList (req,res){
        try {
            const permissionsList = await permissionRepo.getPermissionByUser(req.params.id);
            res.status(200).send({data:permissionsList,message: 'Permissions fetched Successfully'});
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    };

    /* @Method: updateUserPermission
    // @Description: update User Permission
    */
   async updateUserPermission(req,res) {
        try {
            const permissionsList = await permissionRepo.updateUserPermissionById({'userId':req.body.userId},req.body);
            res.status(200).send({data:permissionsList,message: 'Permissions updated Successfully'});
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    };

}
module.exports = new PermissionController();
