require('dotenv').config();

const optionalConfigs = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000,
  RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX || 100,
};

const requiredConfigs = {
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};

for (const key in requiredConfigs) {
  if (requiredConfigs[key] == null) {
    throw new Error(`Missing value for environment variable ${key}`);
  }
}

module.exports = {
  ...optionalConfigs,
  ...requiredConfigs,
};
