const authMiddleware = require("../middleware/authMiddleware");
const { addTask, getTask, editTask, deleteTask } = require("../service/task");
const router = require("express").Router();

//ad task
router.post("/addTask", authMiddleware, addTask);

//getTaskById
router.get("/getTask/:id", authMiddleware, getTask);

//getTaskById
router.put("/editTask/:id", authMiddleware, editTask);

//deleteTaskById
router.delete("/deleteTask/:id", authMiddleware, deleteTask);
module.exports = router;
