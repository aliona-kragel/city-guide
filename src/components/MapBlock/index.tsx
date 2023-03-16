import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.scss";

const MapBlock = () => {
  const position: LatLngTuple = [53.904541, 27.561523];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map-block__container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {/* A pretty CSS3 popup. <br /> Easily customizable. */}
        </Popup>
      </Marker>
    </MapContainer >
  )
}

export default MapBlock;