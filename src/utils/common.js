import Geocode from "react-geocode";

// Get latitude & longitude from address.
export const getLatLngFromAddress = (address) => {
  const geoLocation = Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      const _geoloc = {
        lat: lat,
        lng: lng,
      };
      return _geoloc;
    },
    (error) => {
      console.error(error);
    }
  );

  return geoLocation;
};
