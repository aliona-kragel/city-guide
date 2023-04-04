import axios from "axios";

const placeDetailsService = {
  async getByOsmId(osm_id: string) {
    const { data } = await axios.get(`https://nominatim.openstreetmap.org/details?osmtype=R&osmid=${osm_id}&format=json`);
    return data;
  },
  async getByLatLongAttractions(lon: number | undefined, lat: number | undefined) {
    const apiKey = "5ae2e3f221c38a28845f05b60def87c9355419e7a26f4c5ea7db848d";
    const { data } = await axios.get(`https://api.opentripmap.com/0.1/ru/places/radius?radius=1000&lon=${lon}&lat=${lat}&apikey=${apiKey}`)
    return data;
  },
  async getbyXid(xid: string | undefined) {
    const apiKey = "5ae2e3f221c38a28845f05b60def87c9355419e7a26f4c5ea7db848d";
    const { data } = await axios.get(`http://api.opentripmap.com/0.1/ru/places/xid/${xid}?apikey=${apiKey}`)
    return data;
  },
}

export default placeDetailsService;