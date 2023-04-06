import { LatLngExpression } from "leaflet";
import { LocationTypes } from "types/locationTypes";

export interface IMap {
  selectedLocation: LocationTypes | null;
  markerPosition: LatLngExpression | undefined
}
