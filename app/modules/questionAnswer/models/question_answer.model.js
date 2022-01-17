const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const deleted = [true, false];
const status = ["Active","Inactive"];

var question_answerSchema = new Schema({
  question: { type: String, default: '' },
  answer: { type: String, default: '' },  
  question_answer_tab_id: { type: Schema.Types.ObjectId, ref: 'question_answer_tab',default:null },   
  isDeleted: { type: Boolean, default: false, enum: deleted },
  status: { type: String, default: "Active", enum: status },
}, { timestamps: true, versionKey: false });

// create the model for plans and expose it to our app
module.exports = mongoose.model('question_answer', question_answerSchema);