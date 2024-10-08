const mongoose = require("mongoose");

const populationSchema = new  mongoose.Schema({
  areas:[String],
  units:[Number],
})

export const greenEyeSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "please tell me who you are"],
    required: [true, "please specify who you are"],
  },
  length: {
    type: Number,
    default: 3,
  },
  replies: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
  },
  population:{
    type: populationSchema
  }
});



const greenEyeModel = mongoose.model("greenEye", greenEyeSchema);

module.exports = {
  greenEyeSchema,
  greenEyeModel,
};
