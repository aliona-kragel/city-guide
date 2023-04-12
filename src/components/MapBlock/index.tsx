import { FC, PropsWithChildren } from "react";
import WeatherInfo from "components/WeatherInfo";
import { useTypedSelector } from "hooks/useTypedSelector";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.scss";

interface IMapBlock {
  mapRef?: any
}

const MapBlock: FC<PropsWithChildren<IMapBlock>> = ({ mapRef }) => {
  const { markerPosition, selectedLocation } = useTypedSelector(state => state.map);

  return (
    <MapContainer ref={mapRef} center={[53.904541, 27.561523]} zoom={5} scrollWheelZoom={false} className="map-block__container" transform3DLimit={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!!markerPosition && (
        <Marker position={markerPosition}>
          {!!selectedLocation?.raw.osm_id &&
            <Popup className="weather__popup">
              <WeatherInfo />
            </Popup>
          }
        </Marker>)}
    </MapContainer >
  )
}

export default MapBlock;