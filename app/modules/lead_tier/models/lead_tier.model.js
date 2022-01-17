const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;


const deleted = [true, false];
const status = ["Active", "Inactive"];


const LeadTierSchema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  perHourCapacity: { type: Number, default: 0 },
  perDayCapacity: { type: Number, default: 0 },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});



// create the model for users and expose it to our app
module.exports = mongoose.model('Lead_Tier', LeadTierSchema);