import { useEffect, useState } from "react";
import Routing from "./routing";
import "./assets/scss/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";
import { setUserGeoLocation } from "store/reducers/globalReducer";
import { getLatLngFromAddress } from "utils/common";
import env from "config";

// TODO: Replace this google map key to client key
Geocode.setApiKey(`${env.GOOGLE_MAP_KEY}`);

function App() {
  const dispatch = useDispatch();

  const [address, setAddress] = useState(
    JSON.parse(window.localStorage.getItem("address"))
      ? JSON.parse(window.localStorage.getItem("address"))
      : ""
  );

  useEffect(() => {
    // timed so it appears after page load
    setTimeout(function () {
      fetchLocalStorages();
      allowUserLocationPermission();
    }, 1500);
  }, []);

  const fetchLocalStorages = async () => {
    const _address = JSON.parse(window.localStorage.getItem("address"));
    if (_address) {
      dispatch(setUserGeoLocation(await getLatLngFromAddress(_address)));
    }
  };

  const allowUserLocationPermission = () => {
    if (navigator.geolocation) {
      getUserCurrentLocation();
      // navigator.permissions
      //   .query({ name: "geolocation" })
      //   .then(function (result) {
      //     if (result.state === "granted") {
      //       console.log("location granted...", result.state);
      //       getUserCurrentLocation();
      //     } else if (result.state === "prompt") {
      //       console.log("location prompt...", result.state);
      //     } else if (result.state === "denied") {
      //       console.log("location denied...", result.state);
      //       toast(
      //         "Please allow your Geolocation for better usage or enter your location.",
      //         {
      //           type: "error",
      //         }
      //       );
      //     }
      //     result.onchange = function () {
      //       console.log(result.state);
      //     };
      //   });
    } else {
      console.log("Sorry geolocation not available!");
      // toast("Sorry geolocation not available!", {
      //   type: "error",
      // });
    }
  };

  const getUserCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let lat = parseFloat(position.coords.latitude);
        let lng = parseFloat(position.coords.longitude);
        let geoLocation = {
          lat,
          lng,
        };
        Geocode.fromLatLng(lat, lng).then(
          (response) => {
            const adr = response.results[0].formatted_address;
            if (address === "" || address === null) {
              window.localStorage.setItem("address", JSON.stringify(adr));
              setAddress(adr);
              dispatch(setUserGeoLocation(geoLocation));
            }
          },
          (error) => {
            console.error("Geocode error..", error);
            toast(error.message, {
              type: "error",
              position: "top-center",
              autoClose: 7000,
            });
          }
        );
      },
      function (error) {
        console.log("Error Code = " + error.code + " - " + error.message);
        toast("Please allow your Geolocation for better usage.", {
          type: "error",
          position: "top-center",
          autoClose: 7000,
        });
      }
    );
  };

  return (
    <div className="App">
      <Routing />
      <ToastContainer
        autoClose={5000}
        position="top-center"
        className="toast-container"
      />
    </div>
  );
}

export default App;
