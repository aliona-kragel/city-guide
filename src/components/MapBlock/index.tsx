import useMapActions from "hooks/useMapActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.scss";

const MapBlock = () => {
  const { selectedLocation, markerPosition } = useTypedSelector(state => state.map);
  const { setMarker } = useMapActions()

  useEffect(() => {
    if (selectedLocation?.x && selectedLocation?.y) {
      const { x, y } = selectedLocation;
      setMarker([x, y]);
    }
  }, [selectedLocation])


  return (
    <MapContainer center={[53.904541, 27.561523]} zoom={2} scrollWheelZoom={false} className="map-block__container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!!markerPosition?.length && (
        <Marker position={markerPosition}>
          <Popup>
            {selectedLocation?.label}
          </Popup>
        </Marker>)}
    </MapContainer >
  )
}

export default MapBlock;