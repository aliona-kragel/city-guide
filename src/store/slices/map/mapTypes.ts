import { LatLngExpression } from "leaflet";

export interface Location {
  x: number;
  y: number;
  label: string;
  bounds: [
    [number, number],
    [number, number],
  ];
  raw: {
    place_id: string;
    license: string;
    osm_type: string;
    osm_id: number;
    boundingbox: [string, string, string, string];
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    icon?: string;
  }
}

export interface IMap {
  selectedLocation: Location | null;
  markerPosition: LatLngExpression | undefined
}
