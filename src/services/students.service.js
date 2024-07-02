const StudentModel = require('../models/students.model');

const getAllStudents = async () => {
  // TODO: pagination
  const students = await StudentModel.find().exec();
  return students;
};

module.exports = {
  getAllStudents,
};
