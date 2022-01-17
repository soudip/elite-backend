const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPermissionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  permissionall: [{ type: Schema.Types.ObjectId, ref: 'Permission',default: []}]
});

module.exports = mongoose.model('UserPermission', UserPermissionSchema);