const { logger } = require('../utils');
const request = require('../configs/restClient');
const getPicturesTransformer = require('./transforms');

class Service {
  baseUrl = '/api';
  constructor(params){
    this.params = params;
  }
  getPictures(){
    return request.get(this.baseUrl, {params: this.params}).then(({data}) => {
      const transformed = getPicturesTransformer.transform(data)
      logger.info(
        `getPicturesTransformer - from NASA API | transformed response data ${JSON.stringify(transformed)}`,
      );
      return {data: transformed}
    });
  }
}

/**
 * Expose Service
 */
 module.exports = { Service };
