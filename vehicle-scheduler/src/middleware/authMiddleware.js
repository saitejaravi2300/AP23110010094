const { LOCAL_TOKEN } = require('../../config/config');

const authorize = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token || token !== LOCAL_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};

module.exports = authorize;
