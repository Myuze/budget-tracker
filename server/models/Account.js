const { Schema, model } = require('mongoose');

const accountSchema = new Schema(
  {
    name: {
      type: String,
    },
    acctNum: {
      type: Number,
    },
    balance: {
      type: Number,
    },
    lastTransaction: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Account = model('Account', accountSchema);

module.exports = Account;
