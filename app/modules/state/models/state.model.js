const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];
const type = ["cover", "processing","not_covered"];


const StateSchema = new Schema({
  title: { type: String, default: '' },
  abbreviation: { type: String, default: '' },
  type: { type: String, default: "not_covered", enum: type },
  orderNumber: { type: Number, default: 0 },
  license_number: { type: String, default: '' },
  state_url: { type: String, default: '' },
  surcharge:{ type: String, default: '' },
  sales_tax:{ type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('State', StateSchema);
