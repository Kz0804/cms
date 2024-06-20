const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const winston = require('winston');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
