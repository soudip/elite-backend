const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
const deleted = [true, false];
const status = ["Active", "Inactive"];
const factor = ['Yes', 'No'];

var QuoteSchema = new Schema({
  quote_number: { type: String, default: '' },
  first_name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  mobile_number: { type: String, default: '' },
  mobile_number_type: { type: String, default: 'mobile', enum: ['mobile', 'phone'] },
  second_mobile_number: [{ type: String, default: '' }],
  link_mobile_number: { type: String, default: '' },
  email: { type: String, default: '' },
  zip: { type: String, default: '' },
  otp: { type: Number, default: '' },
  is_verified: { type: Boolean, default: false, enum: deleted },
  property_user_type: { type: String, default: '', enum: ['', 'HOMEOWNER', 'RENTER', 'HOME BUYER', 'HOME SELLER', 'REAL ESTATE PROFESSIONAL', 'TITLE AGENT'] },
  property_street_address: { type: String, default: '' },
  property_apartment: { type: String, default: '' },
  property_zip_code: { type: String, default: '' },
  property_city: { type: String, default: '' },
  property_state: { type: String, default: '' },
  isDeleted: { type: Boolean, default: false, enum: deleted },
  status: { type: String, default: "Active", enum: status },
  user_ip: { type: String, default: '' },
  browser_ip: [{ type: String, default: '' }],
  total_cost: { type: Number, default: 0 },
  total_coverage: { type: Number, default: 0 },

  step4: {
    streetAddress: { type: String, default: '' },
    apt_number: { type: String, default: null },
    zip_code: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' }
  },

  sub1step4: {
    purchase_plan: { type: String, default: '', enum: ['', 'needInvoice', 'buyingthePlan'] }
  },

  sub2step4: {
    streetAddress: { type: String, default: '' },
    apt_number: { type: String, default: '' },
    zip_code: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' }
  },

  sub3step4: {
    estimatedClosingDate: { type: String, default: '' }
  },

  sub4step4: {
    Shareinvoice: { type: String, default: '', enum: ['', 'yes', 'no'] }
  },

  sub5step4: [{
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    email: { type: String, default: '' },
    mobile_number: { type: String, default: '' },
    streetAddress: { type: String, default: '' },
    apt_number: { type: String, default: '' },
    zip_code: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' }
  }],

  step5: {
    propertyType_name: { type: String, default: '' },
    propertyType: { type: Schema.Types.ObjectId, ref: 'Plan_Property_Type' }
  },

  step6: {
    propertySize_name: { type: String, default: '' },
    propertySize: { type: Schema.Types.ObjectId, ref: 'Plan_Property_Size' }
  },

  sub6step4: {
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    email: { type: String, default: '' },
    mobile_number: { type: String, default: '' },
  },

  step7: {
    title: { type: String, default: '' },
    plan_id: { type: Schema.Types.ObjectId, ref: 'Plan' },
    price: { type: Number, default: 0 },
    isSelected: { type: Boolean, default: false, enum: deleted }
  },
  step8: {
    covered_item_list: [{
      dublicateItemlist: [{
        count: { type: String, default: '' },
        addedcosttotal: { type: Number, default: 0 },
        additionalunitdefaultvalue: { type: Number, default: 0 },
        coverageValueForDuplicatesec: { type: Number, default: 0 },
        coverageaddedcostForDuplicates: { type: Number, default: 0 },
        coveredunit: { type: Number, default: 0 },
        covrageValue: { type: Number, default: 0 },
        defaultCoverage: { type: Number, default: 0 },
        quantity: { type: Number, default: 0 },
        totalCoverageValue: { type: Number, default: 0 },
        totalincreseCoverageValue: { type: Number, default: 0 },
        title: { type: String, default: '' },
        maximum_coverage_increase_fee: { type: String, default: '' },
        maximum_coverage_decrease_fee: { type: String, default: '' }
      }],
      addedcosttotal: { type: Number, default: 0 },
      additionalunitdefaultvalue: { type: Number, default: 0 },
      category_decrease: { type: String, default: '' },
      category_increase: { type: String, default: '' },
      coverageValueForDuplicatesec: { type: Number, default: 0 },
      coverageaddedcostForDuplicates: { type: Number, default: 0 },
      coveredunit: { type: Number, default: 0 },
      covrageValue: { type: Number, default: 0 },
      defaultCoverage: { type: Number, default: 0 },
      quantity: { type: Number, default: 0 },
      totalCoverageValue: { type: Number, default: 0 },
      totalincreseCoverageValue: { type: Number, default: 0 },
      title: { type: String, default: '' },
      price: { type: Number, default: 0 },
      type: { type: String, default: '' },
    }]
  },

  step9: {
    optional_item: [{
      dublicateItemlist: [{
        addedcosttotal: { type: Number, default: 0 },
        additionalunitdefaultvalue: { type: Number, default: 0 },
        count: { type: String, default: '' },
        title: { type: String, default: '' },
        coveredunit: { type: Number, default: 0 },
        covrageValue: { type: Number, default: 0 },
        defaultCoverage: { type: Number, default: 0 },
        quantity: { type: Number, default: 0 },
        totalCoverageValue: { type: Number, default: 0 },
        totalincreseCoverageValue: { type: Number, default: 0 },
        maximum_coverage_increase_fee: { type: String, default: '' },
        maximum_coverage_decrease_fee: { type: String, default: '' }
      }],
      increseCoverageFee: { type: Number, default: 0 },
      ispanelOpen: { type: Boolean, default: false, enum: deleted },
      quantity: { type: Number, default: 0 },
      totalCoverageValue: { type: Number, default: 0 },
      totalincreseCoverageValue: { type: Number, default: 0 },
      coveredunit: { type: Number, default: 0 },
      covrageValue: { type: Number, default: 0 },
      defaultCoverage: { type: Number, default: 0 },
      quantity: { type: Number, default: 0 },
      totalCoverageValue: { type: Number, default: 0 },
      totalincreseCoverageValue: { type: Number, default: 0 },
      coveredunit: { type: Number, default: 0 },
      covrageValue: { type: Number, default: 0 },
      defaultCoverage: { type: Number, default: 0 },
      addedcosttotal: { type: Number, default: 0 },
      additionalunitdefaultvalue: { type: Number, default: 0 },
      title: { type: String, default: '' },
      price: { type: Number, default: 0 },
    }]
  },

  step10: {
    category_covered_item: [{
      defaultcategoryCoverage: { type: Number, default: 0 },
      title: { type: String, default: '' },
      categoryCoverageamount: { type: Number, default: 0 },
      defaultcategoryCoverage: { type: Number, default: 0 },
      totalCalculatedCost: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
    }],
  },

  step11: {
    service_fee: {
      Price: { type: String, default: '' },
      name: { type: String, default: '' }
    }
  },

  step12: {
    coverage_selection: [{
      type: { type: String, default: '' },
      count: { type: String, default: '' },
      title: { type: String, default: '' },
      coveredunit: { type: Number, default: 0 },
      covrageValue: { type: Number, default: 0 },
      defaultCoverage: { type: Number, default: 0 },
      discount_four: { type: String, default: '' },
      discount_more: { type: String, default: '' },
      discount_three: { type: String, default: '' },
      discount_two: { type: String, default: '' },
      increseCoverageFee: { type: Number, default: 0 },
      price: { type: String, default: '' },
      quantity: { type: Number, default: 0 },
      totalCoverageValue: { type: Number, default: 0 },
      totalincreseCoverageValue: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
    }]
  },
  step13: {
    state_data: [{
      additional_cost: { type: String, default: '' },
      salex_tax: { type: String, default: '' },
      state_name: { type: String, default: '' },
      state_id: { type: Schema.Types.ObjectId, ref: 'State' },
      surcharge: { type: String, default: '' },
      state_type: { type: String, default: '' }
    }]
  },
  complete_step: { type: Number, default: 0 }



}, { timestamps: true, versionKey: false });

// create the model for partners and expose it to our app
module.exports = mongoose.model('Quote', QuoteSchema);