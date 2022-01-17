const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];


const IssueSchema = new Schema({
  service_id: {type: Schema.Types.ObjectId, ref: 'Request_Service', default: null},
  content: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Service_Issue', IssueSchema);