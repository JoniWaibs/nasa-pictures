const request = require('../api');
const { logger } = require('../utils');

const picturesController = {
  getPictures: async (req, res) => {
    let response;
    const url = 'mars-photos/api/v1/rovers/curiosity/photos';

    try {
      const { data } = await request(url, { searchParams: req });
      logger.info(`Get Pictures - from NASA API - ${JSON.stringify(data)}`)
      response = res.status(200).json(data);
    } catch (error) {
      logger.error(`Get Pictures - from NASA API - ${JSON.stringify(error.message)}`)
      response = res.status(500).json({ msj: error.message });
    }

    return response;
  },
  getPicture: () => {},
};

module.exports = picturesController;
