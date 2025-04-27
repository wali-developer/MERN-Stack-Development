const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    contact: {
      type: Number,
      default: null,
    },
    enrollNumber: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      default: null,
    },
    address: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
