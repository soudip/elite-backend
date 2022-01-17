const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];


const PlanApplianceItemSchema = new Schema({
  title: { type: String, default: '' },
  covered_list: [{ type: String,default: []}],
  not_covered_list: [{ type: String,default: []}],
  highlight: { type: String, default: '' },
  note: { type: String, default: '' },
  coverage_limit: {type: Schema.Types.Double,default: 0.00},
  price: { type: Number, default:0},
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for PlanApplianceItemSchema and expose it to our app
module.exports = mongoose.model('plan_appliance_item', PlanApplianceItemSchema);