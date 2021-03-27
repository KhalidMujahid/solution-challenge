const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  first_name: {
    type: String,
    required: (true, "Name field is required")
  },

  last_name: {
    type: String,
    required: (true, "Name field is required")
  },

  amount: {
    type: Number,
    required: (true, "amount field is required")
  },

  state: {
    type: String,
    required: (true, "Name field is required")
  }

});
const Data = mongoose.model("data", dataSchema)

module.exports = Data;
