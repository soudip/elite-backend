const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];
const type = ["normal", "custom" ,"optional"];


const PlanCategorySchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  maximum_category_coverage: {type: Schema.Types.Double,default: 0.00},
  maximum_category_coverage_increase: { type: String, default: '' },
  maximum_category_coverage_decrase: { type: String, default: '' },
  category_coverage_increase_fee: { type: String, default: '' },
  category_coverage_decrease_fee: { type: String, default: '' },
  automated_category_increase: { type: String, default: '' },
  automated_category_decrease: { type: String, default: '' },
  type: { type: String, default: "normal", enum: type },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});

// create the model for PlanCategory and expose it to our app
module.exports = mongoose.model('Plan_Category', PlanCategorySchema);