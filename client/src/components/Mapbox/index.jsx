/* eslint-disable */
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef, useMemo, useCallback } from "react";
import { Map, Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "./index.scss";
const Mapbox = () => {
  const markerRef = useRef(null);

  const popup = useMemo(() => {
    return new mapboxgl.Popup().setText(` 2nd floor, G.R.S Complex, 152,
    Velachery main road, Pallikarnai, Chennai - 600100`);
  }, []);

  const togglePopup = useCallback(() => {
    markerRef.current?.togglePopup();
  }, []);
  const [lng, setlng] = useState(80.1923599);
  const [lat, setLat] = useState(12.941168);
  const [zoom, setZoom] = useState(9);
  return (
    <div>
      <div className="map-container">
        <Map
          mapboxAccessToken="pk.eyJ1IjoiYWthc2hyYWowIiwiYSI6ImNsdHEyMHYwYTAxamYyaXBjb3RwczRyd24ifQ.SLRuxUgILsV3OerQzmAiUQ"
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: zoom,
            scrollZoom: false,
          }}
          mapStyle="mapbox://styles/akashraj0/cltq2v5c600vu01pk3kvnbk4m"
        >
          <Marker
            longitude={lng}
            latitude={lat}
            color="black"
            popup={popup}
            ref={markerRef}
          ></Marker>
          <button onClick={togglePopup} style={{ color: "black" }}>
            Toggle
          </button>
        </Map>
      </div>
    </div>
  );
};

export default Mapbox;
