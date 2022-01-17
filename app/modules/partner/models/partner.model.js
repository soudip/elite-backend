const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
const deleted = [true, false];
const status = ["Approve","Pending","Deny"];
const factor = ['Yes', 'No'];

var PartnerSchema = new Schema({
  partner_type_id: { type: Schema.Types.ObjectId, ref: 'Partner_Type' },
  full_name: { type: String, default: '' },
  mobile_number: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  company_name: { type: String, default: '' },
  ein_number: { type: String, default: '' },
  company_address: { type: String, default: '' },
  company_apartment: { type: String, default: '' },
  company_zip: { type: String, default: '' },
  company_city: { type: String, default: '' },
  company_state: { type: String, default: '' },
  business_email: { type: String, default: '' },
  business_phone: { type: String, default: '' },
  licensed_technician_number: { type: Number, default: 0 },
  agent_number: { type: Number, default: 0 },
  company_service_provide_state: { type: String, default: '' },
  contractor_license_number: { type: String, default: '' },
  contractor_license_document: { type: String, default: '' },
  insurer_name: { type: String, default: '' },
  insurance_policy_number: { type: String, default: '' },
  insurance_policy_document: { type: String, default: '' },
  diagnosis_service_fee: { type: Schema.Types.Double, default: 0.0 },
  service_fee_factor:{ type: Boolean, default: 'No', enum: factor },
  service: { type: String, default: '' },
  comment: { type: String, default: '' },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  status: { type: String, default: "Pending", enum: status },
}, { timestamps: true, versionKey: false });

// generating a hash
PartnerSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
PartnerSchema.methods.validPassword = function (password, checkPassword) {
  return bcrypt.compareSync(password, checkPassword);
  //bcrypt.compare(jsonData.password, result[0].pass
};

// create the model for partners and expose it to our app
module.exports = mongoose.model('Partner', PartnerSchema);