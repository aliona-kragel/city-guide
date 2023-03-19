import { LatLngTuple } from "leaflet";
import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Location } from "types";
import "./index.scss";

interface MapBlockProps {
  selectedLocation: Location | null
}

const MapBlock: FC<MapBlockProps> = ({ selectedLocation }) => {
  const [marker, setMarker] = useState<LatLngTuple | []>([53.904541, 27.561523])
  const [position, setPosition] = useState<LatLngTuple | []>([53.904541, 27.561523])
  console.log(position);


  useEffect(() => {
    if (selectedLocation?.x && selectedLocation?.y) {
      const { x, y } = selectedLocation;
      setMarker([x, y]);
      setPosition([x, y]);
    }
  }, [selectedLocation])


  return (
    <MapContainer center={[53.904541, 27.561523]} zoom={2} scrollWheelZoom={true} className="map-block__container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!!marker?.length && (
        <Marker position={marker}>
          <Popup>
            {selectedLocation?.label}
          </Popup>
        </Marker>)}
    </MapContainer >
  )
}

export default MapBlock;