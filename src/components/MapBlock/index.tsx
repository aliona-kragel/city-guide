import WeatherInfo from "components/WeatherInfo";
import { useTypedSelector } from "hooks/useTypedSelector";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.scss";

const MapBlock = () => {
  const { markerPosition } = useTypedSelector(state => state.map);
  const { selectedLocation } = useTypedSelector(state => state.map);

  return (
    <MapContainer center={markerPosition} zoom={2} scrollWheelZoom={false} className="map-block__container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!!markerPosition && (
        <Marker position={markerPosition}>
          {!!selectedLocation?.raw.osm_id &&
            <Popup className="popup">
              <WeatherInfo />
            </Popup>
          }
        </Marker>)}
    </MapContainer >
  )
}

export default MapBlock;