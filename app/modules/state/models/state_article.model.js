const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];

const StateArticleSchema = new Schema({
  state_id: { type: Schema.Types.ObjectId, ref: 'State' },  
  section_one : {
    image_one: { type: String, default: '' },
    title_one: { type: String, default: '' },
    content_one: { type: String, default: '' },
  },
  section_two : {
    image_one: { type: String, default: '' },
    image_two: { type: String, default: '' },
    title_one: { type: String, default: '' },
    title_two: { type: String, default: '' },
    content_one: { type: String, default: '' },
    content_two: { type: String, default: '' },
  },
  section_three : {
    image_one: { type: String, default: '' },
    title_one: { type: String, default: '' },
    content_one: { type: String, default: '' },
    content_two: { type: String, default: '' },
    content_three: { type: String, default: '' },
  },
  section_four : {
    content_one: { type: String, default: '' },
    content_two: { type: String, default: '' },
    content_three: { type: String, default: '' },
    content_four: { type: String, default: '' },
    content_five: { type: String, default: '' },
    content_six: { type: String, default: '' },
  },
  section_five : {
    image_one: { type: String, default: '' },
    title_one: { type: String, default: '' },
    content_one: { type: String, default: '' },
    content_two: { type: String, default: '' },
    content_three: { type: String, default: '' },
  },
  section_six : {
    image_one: { type: String, default: '' },
    title_one: { type: String, default: '' },
    content_one: { type: String, default: '' },
    content_two: { type: String, default: '' },
    content_three: { type: String, default: '' },
  },
  meta_title: { type: String, default: '' },
  meta_description: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('State_Article', StateArticleSchema);