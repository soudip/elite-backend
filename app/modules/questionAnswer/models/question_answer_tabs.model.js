const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deleted = [true, false];
const status = ["Active","Inactive"];

var question_answer_tabSchema = new Schema({
  name: { type: String, default: '' }, 
  plan_id: { type: Schema.Types.ObjectId, ref: 'Plan',default:null },
  type: { type:String,default:'',enum:['','plan','home'] },   
  isDeleted: { type: Boolean, default: false, enum: deleted },
  status: { type: String, default: "Active", enum: status },
}, { timestamps: true, versionKey: false });

// create the model for plans and expose it to our app
module.exports = mongoose.model('question_answer_tab', question_answer_tabSchema);