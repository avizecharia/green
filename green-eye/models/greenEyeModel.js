const mongoose = require("mongoose");

<<<<<<< HEAD
const populationSchema = new  mongoose.Schema({
  areas:[String],
  units:[Number],
})

const greenEyeSchema = new mongoose.Schema({
=======
const populationSchema = new mongoose.Schema({
  area :[String],
  units :[String],
})

export const greenEyeSchema = new mongoose.Schema({
>>>>>>> 8643634203b065bea5e6fec3cacb5cbe7b655c43
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
<<<<<<< HEAD
    required: [true, "please tell me who you are"],
=======
    required: [true, "please specify who you are"],
>>>>>>> 8643634203b065bea5e6fec3cacb5cbe7b655c43
  },
  length: {
    type: Number,
    default: 3,
  },
<<<<<<< HEAD
  replies: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
  },
  population:{
    type: populationSchema
  }
});

const GreenEyeModel = mongoose.model("greenEye", greenEyeSchema);

module.exports = GreenEyeModel;
=======
  replies:{
    type:[mongoose.Schema.Types.ObjectId],
    ref : 'user'
  },
  population : {
    type:populationSchema
  }
});

const greenEyeModel = mongoose.model("greenEye", greenEyeSchema);

module.exports = {
  greenEyeSchema,
  greenEyeModel,
};
>>>>>>> 8643634203b065bea5e6fec3cacb5cbe7b655c43
