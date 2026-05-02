const depotService = require('../services/depotService');
const vehicleService = require('../services/vehicleService');
const knapsackService = require('../services/knapsackService');

const getOptimizedSchedule = async (req, res) => {
  try {
    const depots = await depotService.fetchDepots();
    const vehicles = await vehicleService.fetchVehicles();

    const results = depots.map(depot => {
      const { depotId, mechanicHours } = depot;
      const selectedTasks = knapsackService.solveKnapsack(vehicles, mechanicHours);
      const maxImpact = selectedTasks.reduce((sum, task) => sum + task.Impact, 0);
      return {
        depotId,
        maxImpact,
        selectedTasks
      };
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOptimizedSchedule
};