const restClient = require('../configs/restClient');

module.exports = (url, { params = {} }) => {
  return restClient.get(url, { params });
};
