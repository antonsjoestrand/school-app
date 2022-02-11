const express = require("express");
const router = express.Router();

// Load school model
const school = require("../../models/school");

// Get all students
router.get("/", (req, res) => {
  school.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(404).json({ noStudentsFound: "No students found!" }));
});

// Get student by id
router.get("/:id", (req, res) => {
  school.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) =>
      res.status(404).json({ noStudentsFound: "No student found!" })
    );
});

// Add student record
router.post("/", (req, res) => {
  school.create(req.body)
    .then((student) => res.json({ msg: "Student added successfully!" }))
    .catch((err) => res.status(400).json({ error: "Student could not be added!" }));
});

// Update student record by id
router.put("/:id", (req, res) => {
  school.findByIdAndUpdate(req.params.id, req.body)
    .then((student) => res.json({ msg: "Updated successfully!" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update student record!" })
    );
});

// Delete student by id
router.delete("/:id", (req, res) => {
  school.findByIdAndRemove(req.params.id, req.body)
    .then((student) => res.json({ mgs: "Student entry deleted successfully!" }))
    .catch((err) => res.status(404).json({ error: "The requested student wasn't found!" }));
});

module.exports = router;
