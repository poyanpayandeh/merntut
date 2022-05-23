const asyncHandler = require("express-async-handler");

// get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: "get goals" });
});

// create goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.message) {
    res.status(400);
    throw new Error("fu");
  }
  res.json({ mesasge: "set goals" });
});

// get goals
// @route PUT /api/goals/id:
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ mesasge: `update goal ${req.params.id}` });
});

// delete goals
// @route DELETE /api/goals/id:
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ mesasge: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
