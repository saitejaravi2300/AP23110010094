const axios = require('axios');
const { BASE_URL, TOKEN } = require('../../config/config');

const fetchDepots = async () => {
  // Mock data for demonstration (no token needed)
  const mockDepots = [
    { depotId: 1, mechanicHours: 20 },
    { depotId: 2, mechanicHours: 15 },
    { depotId: 3, mechanicHours: 25 }
  ];

  // Uncomment below to use real API with token
  /*
  try {
    const response = await axios.get(`${BASE_URL}/depots`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch depots: ' + error.message);
  }
  */

  return mockDepots;
};

module.exports = {
  fetchDepots
};