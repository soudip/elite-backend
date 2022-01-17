const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deleted = [true, false];
const status = ["Active", "Inactive"];


const LinkNumberSchema = new Schema({
  link_number: [{ 
    number: {type: String, default: ''},
    code: {type: String, default: ''},
    isVerify: { type: Boolean, default: false, enum: deleted },
  }],
  status: { type: String, default: "Active", enum: status },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  createdAt: { type: Date, default: Date.now }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Link_Number', LinkNumberSchema);
