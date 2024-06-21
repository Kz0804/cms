module.exports = (req, res, next) => {
  res.formatResponse = (data, statusCode = 200, customerObject = {}) => {
    const dataKey = statusCode < 400 ? 'data' : 'error';

    const responseData = {
      status: statusCode,
      [dataKey]: data,
      ...customerObject,
    };

    res.status(statusCode).json(responseData);
  };

  next();
};
