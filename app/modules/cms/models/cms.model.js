const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deleted = [true, false];
const status = ["Active", "Inactive"];

const CmsSchema = new Schema({
  title: { type: String, default: '' },
  slug: { type: String, default: '' },
  content: { type: String, default: '' },
  page_group: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for cms and expose it to our app
module.exports = mongoose.model('Cms', CmsSchema);