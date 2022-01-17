const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const status = ["Approved", "Pending", "Rejected"];
const formType = ["csp", "rep", "title_agencies", "vendors", "affiliates"];

const LeadFormSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  mobile: {
    type: String,
    default: ''
  },
  companyDetails: {
    companyName: {
        type: String,
        default: ''
      },
      ein_number: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ''
      },
      zipCode: {
        type: String,
        default: ''
      },
      city: {
        type: String,
        default: ''
      },
      state: {
        type: String,
        default: ''
      }
  },
  business_email: {
    type: String,
    default: ''
  },
  business_phone: {
    type: String,
    default: ''
  },
  licensed_employees: {
    type: String,
    default: ''
  },
  availableInStates: {
    nationWide: {
      type: Boolean,
      default: false,
      enum: [true, false]
    },
    availability: [{
      type: String,
      default: ''
    }]
  },
  insuranceDetails: {
    contractor_licence_no: {
        type: String,
        default: ''
    },
    contractor_licence_upload: {
        type: String,
        default: ''
    },
    insurance_carrier: {
        type: String,
        default: ''
    },
    policy_no: {
        type: String,
        default: ''
    },
    policy_document: {
        type: String,
        default: ''
    }
  },
  service_fee: {
    fee: {
      type: String,
      default: ''
    },
    factored: {
      type: String,
      default: 'No',
      enum: ["Yes", "No"]
    }
  },
  items: [
    {
      type: String,
      default: ''
    }
  ],
  comments: {
    type: String,
    default: ''
  },
  formType: {
    type: String,
    default: '',
    enum: formType
  },
  status: {
    type: String,
    default: 'Pending',
    enum: status
  },
  isDeleted: {
    type: Boolean,
    default: false,
    enum: [true, false]
  },
});

// For pagination
LeadFormSchema.plugin(mongooseAggregatePaginate);

// create the model for users and expose it to our app
module.exports = mongoose.model('LeadForm', LeadFormSchema);