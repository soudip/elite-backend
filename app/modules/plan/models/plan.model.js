const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
const deleted = [true, false];
const status = ["Active","Inactive"];
const planType = ["normal","custom"];
const availableCheckout = ["yes","no"];

var PlanSchema = new Schema({
  title: { type: String, default: '' },   
  image: { type: String, default: '' },
  maximum_aggregated_coverage: { type: String, default: '' },
  service_fee: {
    price_0:{type: Schema.Types.Double,default: 0.00},
    price_70:{type: Schema.Types.Double,default: 0.00},
    price_100:{type: Schema.Types.Double,default: 0.00},
    price_130:{type: Schema.Types.Double,default: 0.00}
  },
  category_covered_item:[{
    category_id: { type: Schema.Types.ObjectId, ref: 'Plan_Category' },
    covered_item_id: [{ type: Schema.Types.ObjectId, ref: 'plan_covered_item' }],
  }],
  property_pricing: [{
    property_type_id: { type: Schema.Types.ObjectId, ref: 'Plan_Property_Type' },
    info:[{
       property_size_id: { type: Schema.Types.ObjectId, ref: 'Plan_Property_Size', default:null },
       covered_item_list: [{
                            covered_item_id:{ type: Schema.Types.ObjectId, ref: 'plan_covered_item' },
                            quantity:{type: Number,default: 0},
                            price:{type: Schema.Types.Double,default: 0.00},
                            category_increase: { type: String, default: '' },
                            category_decrease: { type: String, default: '' },
                            discount_two: { type: String, default: '' },
                            discount_three: { type: String, default: '' },
                            discount_four: { type: String, default: '' },
                            discount_more: { type: String, default: '' }
                          }],
       cost_per_plan:{type: Schema.Types.Double,default: 0.00},
       description: { type: String, default: '' },
       automated_category_maximum_coverage_increase: { type: String, default: '' },
       automated_aggregated_coverage_increase: { type: String, default: '' },
       total_allowed_combined_coverage_decrease: { type: String, default: '' },
       maximum_coverage_per_unit:{ type: String, default: '' }
    }]
  }],
  item_removal: { type: String, default: '' },
  optional_item_id: { type: Schema.Types.ObjectId, ref: 'Plan_Category' },
  optional_item: [{
    category_id: { type: Schema.Types.ObjectId, ref: 'Optional_Item_Category' },
    covered_item_id: { type: Schema.Types.ObjectId, ref: 'plan_covered_item' },
    standard_price:{type: Schema.Types.Double,default: 0.00},
    quantity:{type: Number,default: 0},
  }],
  state_data: [{
    state_id: { type: Schema.Types.ObjectId, ref: 'State' },
    additional_cost:{type: Schema.Types.Double,default: 0.00},
    salex_tax:{ type: String, default: '' },
    surcharge:{ type: String, default: '' }
  }],
  automated_aggregated_increase: { type: String, default: '' },
  automated_aggregated_decrease: { type: String, default: '' },
  available_checkout: { type: String, default: "no", enum: availableCheckout },
  promo_code: { type: String, default: '' },
  disc_amt:{type: Schema.Types.Double,default: 0.00},
  monthly_rate:{type: Schema.Types.Double,default: 0.00},
  pre_select: { type: Boolean, default: false, enum: [true, false] },
  sort_order: { type: Number, default: 0 },
  // plan_pricing: [{
  //   property_type_id: { type: Schema.Types.ObjectId, ref: 'Plan_Property_Type' },
  //   price:{type: Schema.Types.Double,default: 0.00},
  //   covering_unit:{type: Number,default: 0},
  // }],
  
  // covered_item_id: [{ type: Schema.Types.ObjectId, ref: 'plan_covered_item' }],
  // appliance_item_id: [{ type: Schema.Types.ObjectId, ref: 'plan_appliance_item',default:null }],
  // additional_item_id: [{ type: Schema.Types.ObjectId, ref: 'plan_additional_item' }],
  // service_fee: [{
  //   price:{type: Schema.Types.Double,default: 0.00},
  //   decrease_prcie:{type: Schema.Types.Double,default: 0.00}
  // }],
  plan_type: { type: String, default: "normal", enum: planType },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  status: { type: String, default: "Active", enum: status },
}, { timestamps: true, versionKey: false });

// create the model for plans and expose it to our app
module.exports = mongoose.model('Plan', PlanSchema);