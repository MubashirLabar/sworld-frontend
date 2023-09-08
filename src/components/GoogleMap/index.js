import React, { useEffect, useState } from "react";

// GOOGLE API
import Geocode from "react-geocode";
import GoogleMapReact from "google-map-react";
import env from "config";

Geocode.setApiKey(`${env.GOOGLE_MAP_KEY}`);

/* const google = window.google */
let marker;
let markers = [];

function GoogleMap(props) {
  const [Lat_Lng, setLat_Lng] = useState({
    Latitude: props.geoLocation.lat,
    Longitude: props.geoLocation.lng,
  });
  const [apiMaps, setApiMaps] = useState();
  const [apiMap, setApiMap] = useState();

  useEffect(() => {
    let Latitude = props.geoLocation.lat;
    let Longitude = props.geoLocation.lng;
    let geoLocation = {
      Latitude,
      Longitude,
    };
    setLat_Lng({ ...Lat_Lng, ...geoLocation });

    if (apiMap && apiMaps) {
      marker = new apiMaps.Marker({
        position: {
          lat: props.geoLocation.lat,
          lng: props.geoLocation.lng,
        },
        apiMap,
        draggable: true,
      });
      marker.addListener("dragend", () => {
        onMarkerDragEnd(marker.getPosition());
      });
      markers.push(marker);
      marker.setMap(apiMap);
      if (markers.length > 1) {
        for (let i = 0; markers.length > i; i++) {
          if (markers.length !== i + 1) {
            markers[i].setMap(null);
            markers.splice(i, 1);
          }
        }
      }
    }
    return () => {
      Latitude = null;
      Longitude = null;
      geoLocation = null;
    };
  }, [props.geoLocation]);

  console.log("apiMap", apiMap);
  console.log("apiMaps", apiMaps);

  // HNADLE CHANGE ON MARKER DRAG
  const onMarkerDragEnd = (event) => {
    Geocode.fromLatLng(event.lat(), event.lng()).then(
      (response) => {
        const address = response.results[0].formatted_address;
        let lat = event.lat();
        let lng = event.lng();
        let geoLocation = {
          lat,
          lng,
        };
        setLat_Lng({ ...Lat_Lng, ...geoLocation });
        props.parentCallback(geoLocation, address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // INIT ONLY FIRST TIME
  const loadMap = (map, maps) => {
    //  console.log("LOADED");
    setApiMap(map);
    setApiMaps(maps);
    marker = new maps.Marker({
      position: { lat: Lat_Lng.Latitude, lng: Lat_Lng.Longitude },
      map,
      draggable: props.typeWhere === "viewListing" ? false : true,
    });
    markers.push(marker);
    console.log("MARKERSS");
    marker.addListener("dragend", () => {
      onMarkerDragEnd(marker.getPosition());
    });
  };

  /* const createMapOptions = (maps) => {
        return {
            panControl: true,
            mapTypeControl: true,
            scrollwheel: true,
        }
    } */

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyANPgFV4OvaRYVT0hWgzGnvyYSEg4oIEmE",
          region: "CA",
          id: "CUSTOM_SCRIPT_ID",
        }}
        center={{ lat: Lat_Lng.Latitude, lng: Lat_Lng.Longitude }}
        /* options={props.typeWhere === "viewListing"?createMapOptions:""} */
        zoom={props?.zoom ? props.zoom : 8}
        resetBoundsOnResize={true}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
