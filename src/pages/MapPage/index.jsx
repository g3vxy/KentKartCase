import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Map from "../../components/Map";

import "./index.scss";

export default function MapPage() {
  const stops = useSelector((state) => state.stop.stops);

  return (
    <main className="map-page">
      <Header />
      <Map stops={stops} />
    </main>
  );
}
