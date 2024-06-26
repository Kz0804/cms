const createLogger = require('../../common/logger');
const config = require('../../config');

const logger = createLogger(__filename);

module.exports = (error, req, res, next) => {
  logger.error(`${error.message}\nstack: ${error.stack}`);
  res.formatResponse(
    'Something went wrong, please try again later',
    500,
    config.NODE_ENV === 'dev' && { stack: error.stack }
  );
};
