import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import React, { useState, useRef, useCallback } from "react";
// import { render } from "react-dom";
// import MapGL from "react-map-gl";
// import Geocoder from "react-map-gl-geocoder";

// // Please be a decent human and don't abuse my Mapbox API token.
// // If you fork this sandbox, replace my API token with your own.
// // Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens


// const App = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });
//   const mapRef = useRef();
//   const handleViewportChange = useCallback(
//     (newViewport) => setViewport(newViewport),
//     []
//   );

//   // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
//   const handleGeocoderViewportChange = useCallback(
//     (newViewport) => {
//       const geocoderDefaultOverrides = { transitionDuration: 1000 };

//       return handleViewportChange({
//         ...newViewport,
//         ...geocoderDefaultOverrides
//       });
//     },
//     [handleViewportChange]
//   );

//   return (
//     <div style={{ height: "100vh" }}>
//       <MapGL
//         ref={mapRef}
//         {...viewport}
//         width="100%"
//         height="100%"
//         onViewportChange={handleViewportChange}
//         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
//       >
//         <Geocoder
//           mapRef={mapRef}
//           onViewportChange={handleGeocoderViewportChange}
//           mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
//           position="top-left"
//         />
//       </MapGL>
//     </div>
//   );
// };

// render(<App />, document.getElementById("root"));
