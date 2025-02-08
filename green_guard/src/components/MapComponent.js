import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <div>
      <MapContainer
        center={[28.7041, 77.1025]}
        zoom={10}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[28.7041, 77.1025]}>
          <Popup>Delhi - AQI: 220 (Unhealthy)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
