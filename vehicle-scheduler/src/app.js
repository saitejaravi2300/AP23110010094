const express = require('express');
const { PORT } = require('../config/config');
const scheduleRoutes = require('./routes/schedule');
const authorize = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());

app.use('/api', authorize, scheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});