const restClient = require('../configs/restClient');

module.exports = (url, searchParams = {}) => {
  const params = {};
  params.sol = searchParams?.sol ?? 1000;
  params.page = searchParams?.page ?? 1;

  return restClient.get(url, { params });
};
