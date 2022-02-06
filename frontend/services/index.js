const request = require('../configs/restClient');
const getPicturesTransformer = require('./transforms');
class Service {
  baseUrl = '/api';
  constructor(customParams = {}){
    const params = {
      ...customParams,
    }
    this.params = params;
  }
  getPictures(){
    console.log(`Params for Service, ${JSON.stringify(this.params)}`)
    return request.get(this.baseUrl, {params: this.params}).then(({data}) => {
      const transformed = getPicturesTransformer.transform(data)
      console.log(
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
