const request = require('../api');

const picturesController = {
  getPictures: async (req, res) => {
    let response;
    const url = 'mars-photos/api/v1/rovers/curiosity/photos';

    try {
      const { data } = await request.api(url, { searchParams: req });
      response = res.status(200).json(data);
    } catch (error) {
      response = res.status(500).json({ msj: 'Server Error' });
    }

    return response;
  },
  getPicture: () => {},
};

module.exports = picturesController;
