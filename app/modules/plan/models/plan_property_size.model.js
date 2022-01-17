const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];


const PlanPropertySizeSchema = new Schema({
  title: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});

// create the model for PlanPropertySize and expose it to our app
module.exports = mongoose.model('Plan_Property_Size', PlanPropertySizeSchema);