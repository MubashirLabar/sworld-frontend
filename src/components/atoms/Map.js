import GoogleMapReact from "google-map-react";

function Map({
  center = {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom = 11,
}) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_API_KEY_HERE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
