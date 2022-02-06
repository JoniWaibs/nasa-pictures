
module.exports.transform = (data) => {
  const { photos: pictures } = data || { photos: null };

  if (!pictures) {
    return [];
  }

  const response = pictures.map(picture => {
    return {
      id: picture.id || null,
      camera: {
        fullName: picture.camera.full_name || '',
        id: picture.camera.full_name || null,
        name: picture.camera.name || '',
        roverId: picture.camera.rover_id || null,
      },
      imgSrc: picture.img_src || '',
      earthDate: picture.earth_date || '',
      roverData: {
        id: picture.rover.id || null,
        landingDate: picture.rover.landing_date || null,
        launchDate: picture.rover.launch_date || null,
        name: picture.rover.name || null,
        status: picture.rover.active || null,
      },
    }
  });

  return response;
}
