const axios = require('axios');
const { BASE_URL, TOKEN } = require('../../config/config');

const fetchVehicles = async () => {
  // Mock data for demonstration (no token needed)
  const mockVehicles = [
    { TaskID: 'V001', Duration: 5, Impact: 40 },
    { TaskID: 'V002', Duration: 8, Impact: 60 },
    { TaskID: 'V003', Duration: 3, Impact: 25 },
    { TaskID: 'V004', Duration: 10, Impact: 75 },
    { TaskID: 'V005', Duration: 4, Impact: 30 },
    { TaskID: 'V006', Duration: 7, Impact: 50 },
    { TaskID: 'V007', Duration: 6, Impact: 45 }
  ];

  // Uncomment below to use real API with token
  /*
  try {
    const response = await axios.get(`${BASE_URL}/vehicles`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch vehicles: ' + error.message);
  }
  */

  return mockVehicles;
};

module.exports = {
  fetchVehicles
};