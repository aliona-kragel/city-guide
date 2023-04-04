import WeatherInfo from "components/WeatherInfo";
import { useTypedSelector } from "hooks/useTypedSelector";
import { FC, PropsWithChildren } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.scss";

interface IMapBlock {
  mapRef?: any
}

const MapBlock: FC<PropsWithChildren<IMapBlock>> = ({ mapRef }) => {
  const { markerPosition } = useTypedSelector(state => state.map);
  const { selectedLocation } = useTypedSelector(state => state.map);

  return (
    <MapContainer ref={mapRef} center={markerPosition} zoom={2} scrollWheelZoom={false} className="map-block__container" transform3DLimit={13}>
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