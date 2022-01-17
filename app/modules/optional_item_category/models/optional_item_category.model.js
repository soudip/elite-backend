const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const deleted = [true, false];
const status = ["Active", "Inactive"];


const optionalItemCategorySchema = new Schema({
  title: { type: String, default: '' },
  covered_item_id:[{ type: Schema.Types.ObjectId, ref: 'plan_covered_item',default:null }],
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});

// For pagination
optionalItemCategorySchema.plugin(mongooseAggregatePaginate);

// create the model for users and expose it to our app
module.exports = mongoose.model('Optional_Item_Category', optionalItemCategorySchema);