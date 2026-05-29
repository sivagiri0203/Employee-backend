const Employee = require('../models/Employee');

// Create Employee
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Employee
const updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Employee Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
};