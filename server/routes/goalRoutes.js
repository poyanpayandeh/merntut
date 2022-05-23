const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// get goal
router.get("/", getGoals);

// create goal
router.post("/", setGoal);

// update goal
router.put("/:id", updateGoal);

//delete goal
router.delete("/:id", deleteGoal);

module.exports = router;
