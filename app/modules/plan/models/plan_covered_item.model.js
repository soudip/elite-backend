const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];
const type = ["appliance", "system", "optional","exterior"];


const PlanCoveredItemSchema = new Schema({
  title: { type: String, default: '' },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  average_cost_repair: {type: Schema.Types.Double,default: 0.00},
  average_cost_replacement: {type: Schema.Types.Double,default: 0.00},
  coverage_highlight: [{ type: String,default: []}],
  covered_subtitle: { type: String, default: '' },
  covered_list: { type: String, default: '' },
  covered_additional_information: { type: String, default: '' },
  covered_system_types:[{ type: String, default: '' }],
  not_covered_subtitle: { type: String, default: '' },
  not_covered_list: { type: String, default: '' },
  not_covered_additional_information: { type: String, default: '' },
  maxQuantity:{ type: Number, default: 0 },
  not_covered_system_types:[{ type: String, default: '' }],
  freon_coverage: { type: String, default: '' },
  coverage_limit: {type: String, default: ''},
  standard_price: {type: Schema.Types.Double,default: 0.00},
  custom_price: {type: Schema.Types.Double,default: 0.00},
  item_removal_price: {type: Schema.Types.Double,default: 0.00},
  maximum_coverage_increase_fee: { type: String, default: '' },
  maximum_coverage_decrease_fee: { type: String, default: '' },
  maximum_allowed_decrease: { type: String, default: '' },
  maximum_allowed_increase: { type: String, default: '' },
  note: { type: String, default: '' },
  type: { type: String, default: "Appliance", enum: type },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});

// create the model for PlanCoveredItemSchema and expose it to our app
module.exports = mongoose.model('plan_covered_item', PlanCoveredItemSchema);