const restClient = require('../configs/restClient');

const request = {
  api: (url, searchParams = {}) => {
    const params = {};
    params.sol = searchParams?.sol ?? 1000;
    params.page = searchParams?.page ?? 1;

    return restClient.get(url, { params });
  },
};

module.exports = request;
