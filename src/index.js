const config = require('./config');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('./common/morgan');
const rateLimit = require('./common/rateLimit');
const createLogger = require('./common/logger');
const formatResponseMiddleware = require('./middleware/formatResponse.middleware');
const logger = createLogger(__filename);

const app = express();
app.use(helmet());
app.use(rateLimit);
app.use(cors());
app.use(express.json());
app.use(morgan);
app.use(formatResponseMiddleware);

app.get('/', (req, res) => {
  console.log(res);
  res.formatResponse([]);
});

app.listen(config.PORT, () => {
  logger.info(`server is running on port ${config.PORT}`);
});
