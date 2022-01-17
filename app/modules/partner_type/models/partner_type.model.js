const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];


const PartnerTypeSchema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for partner type and expose it to our app
module.exports = mongoose.model('Partner_Type', PartnerTypeSchema);