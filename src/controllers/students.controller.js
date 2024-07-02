const StudentService = require('../services/students.service');

const getAllStudents = (req, res, next) => {
  const result = StudentService.getAllStudents();
  res.formatResponse(result);
};

const getStudentById = (req, res, next) => {};
const addStudent = (req, res, next) => {};
const updateStudentById = (req, res, next) => {};
const deleteStudentById = (req, res, next) => {};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
};
