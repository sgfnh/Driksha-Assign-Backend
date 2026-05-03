import Teacher from "../models/Teacher.js";

// CREATE
export const createTeacher = async (req, res) => {
  try {
    const{name,email,gender}=req.body
    const teacher = await Teacher.create({
        name,email,gender
    });
    res.status(201).json({message:teacher});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({message:teacher});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};