import { OpenStreetMapProvider } from 'leaflet-geosearch';

const provider = new OpenStreetMapProvider();

export const getLocations = async (inputValue: string) => {
  const results = await provider.search({ query: inputValue });
  return results;
}
