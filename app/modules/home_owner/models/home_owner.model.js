const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];


const HomeOwnerSchema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Home_Owner', HomeOwnerSchema);