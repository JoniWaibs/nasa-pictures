
module.exports.transform = (data) => {
  const { photos } = data || { photos: null };

  if (!photos) {
    return [];
  }

  const response = photos.map(photo => {
    return {
      id: photo.id || null,
      camera: photo.camera || {},
      imgSrc: photo.img_src || '',
      earthDate: photo.earth_date || '',
      roverData: photo.rover || {},
    }
  });

  return response;
}
