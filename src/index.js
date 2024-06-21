const config = require('./config');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('./common/morgan');
const rateLimit = require('./common/rateLimit');

const app = express();
app.use(helmet());
app.use(rateLimit);
app.use(cors());
app.use(express.json());
app.use(morgan);

app.listen(config.PORT, () => {
  console.log(`server is running on port ${config.PORT}`);
});
