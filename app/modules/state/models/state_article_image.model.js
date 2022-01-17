const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];

const StateArticleImageSchema = new Schema({
  elite_appliances_image: { type: String, default: '' },
  elite_systems_image: { type: String, default: '' },
  elite_complete_image: { type: String, default: '' },
  elite_electronics_image: { type: String, default: '' },
  elite_sewer_image: { type: String, default: '' },
  customize_own_image: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('State_Article_Image', StateArticleImageSchema);