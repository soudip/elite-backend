const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];
const popular = [true, false];
const section = ["Section One", "Section Two", "Section Three", "Section Four"];


const HomeOwnerArticleSchema = new Schema({
  home_owner_id: { type: Schema.Types.ObjectId, ref: 'Home_Owner' },
  title: { type: String, default: '' },
  image_one: { type: String, default: '' },
  image_two: { type: String, default: '' },
  description_one: { type: String, default: '' },
  description_two: { type: String, default: '' },
  content: [{
    title:{type: String, default: ''},
    image_one: {type: String, default: ''},
    image_two: {type: String, default: ''},
    description_one: { type: String, default: '' },
    description_two: { type: String, default: '' },
    description_three: { type: String, default: '' },
    identity: { type: String, default: '' },
  }],
  meta_title: { type: String, default: '' },
  meta_description: { type: String, default: '' },
  status: { type: String, default: "Active", enum: status },
  totalVisit: { type: Number, default: 0 },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for HomeOwnerArticle and expose it to our app
module.exports = mongoose.model('Home_Owner_Article', HomeOwnerArticleSchema);