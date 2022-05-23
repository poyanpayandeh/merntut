const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// create goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("fu");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.json(goal);
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
