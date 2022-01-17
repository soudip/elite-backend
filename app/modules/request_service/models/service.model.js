const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];


const RequestServiceSchema = new Schema({
  title: { type: String, default: '' },
  parent_id: {type: Schema.Types.ObjectId, ref: 'Request_Service', default: null},
  description: { type: String, default: '' },
  group_id: {type: Schema.Types.ObjectId, ref: 'Request_Service', default: null},
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Request_Service', RequestServiceSchema);