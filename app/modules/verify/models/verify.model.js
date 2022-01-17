const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
const deleted = [true, false];
const status = ["Active","Inactive"];

var VerifySchema = new Schema({
  mobile_number: { type: String, default: '' },
  is_verified: { type: Boolean, default: false, enum: deleted },
  user_ip: { type: String, default: '' },
  browser_ip: [{ type: String, default: '' }],
  isDeleted: { type: Boolean, default: false, enum: deleted },
  status: { type: String, default: "Active", enum: status },
}, { timestamps: true, versionKey: false });


// create the model for Verifys and expose it to our app
module.exports = mongoose.model('Verify', VerifySchema);