import { useCallback, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

import "./index.scss";

const containerStyle = {
  width: "100%",
  height: "90%",
  position: "absolute",
};

const center = {
  lat: 40.762741,
  lng: 29.943461,
};

export default function Map({ stops }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GMAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <main className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {stops.map((stop) => {
          return (
            <Marker
              position={{
                lat: stop.stop_lat,
                lng: stop.stop_lon,
              }}
              key={stop.stop_id}
              onClick={() => {
                setActiveMarker(stop.stop_id);
              }}
            >
              {activeMarker === stop.stop_id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <>
                    <h3>Durak Adı: {stop.stop_name}</h3>
                    <p>Durak Açıklaması: {stop.stop_desc}</p>
                    <p>Durak Kodu: {stop.stop_code}</p>
                    <p>
                      Durak Koordinatları:
                      {JSON.stringify({
                        lon: stop.stop_lon,
                        lat: stop.stop_lat,
                      })}
                    </p>
                  </>
                </InfoWindow>
              ) : null}
            </Marker>
          );
        })}
      </GoogleMap>
    </main>
  ) : (
    <></>
  );
}
