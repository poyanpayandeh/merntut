// get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.json({ message: "get goals" });
};

// create goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.json({ mesasge: "set goals" });
};

// get goals
// @route PUT /api/goals/id:
// @access Private
const updateGoal = (req, res) => {
  res.json({ mesasge: `update goal ${req.params.id}` });
};

// delete goals
// @route DELETE /api/goals/id:
// @access Private
const deleteGoal = (req, res) => {
  res.json({ mesasge: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
