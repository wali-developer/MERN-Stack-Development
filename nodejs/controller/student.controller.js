const Student = require("../models/student");

module.exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(201).json({
      message: "Student record inserted successfully!",
      student,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messsge: "Server error adding student",
      error: error.message,
    });
  }
};

module.exports.studentsList = async (req, res) => {
  try {
    const data = await Student.find();
    return res.status(201).json({
      message: "Students data fetched successfully!",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messsge: "Server error getting students data",
      error: error.message,
    });
  }
};

module.exports.getStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const student = await Student.findById(id);
    return res.status(201).send(student);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messsge: "Server error getting student data",
      error: error.message,
    });
  }
};

module.exports.updateStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!student) {
      return res.status(404).send("Student record not found!");
    }

    return res.status(201).send(student);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messsge: "Server error getting student data",
      error: error.message,
    });
  }
};

module.exports.deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).send("Student record not found!");
    }

    return res.status(201).json(deletedStudent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messsge: "Server error getting student data",
      error: error.message,
    });
  }
};
