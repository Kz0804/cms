const rateLimit = require('express-rate-limit');
const config = require('../config');

const rateLimiter = rateLimit({
  windowMs: config.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000, // 15 minutes default
  max: config.RATE_LIMIT_MAX || 100, // limit each IP to 100 requests per windowMs
});

module.exports = rateLimiter;
