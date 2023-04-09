import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePlacesActions from "hooks/usePlacesActions";
import placeDetailsService from "services/getPlaceDetails";
import AttractionsBlock from "components/AttractionsBlock";
import CityDescription from "components/CityDescription";
import { FlexContainer } from "components/styled/FlexContainer";
import "./index.scss";

const PlaceDetails = () => {
  let { osm_id } = useParams();
  const { setAttractionsList, setLocationDescription } = usePlacesActions();

  const getAttractionsList = (res: any) => {
    placeDetailsService.getByLatLongAttractions(res.geometry.coordinates[0], res.geometry.coordinates[1])
      .then((res) => setAttractionsList(res.features))
      .catch(err => console.log(err.message));
  }

  useEffect(() => {
    if (!(osm_id)) return;
    placeDetailsService.getByOsmId(osm_id)
      .then((res) => {
        setLocationDescription(res);
        getAttractionsList(res);
      }).catch(err => console.log(err.message));
  }, [setAttractionsList, osm_id, setLocationDescription])

  return (
    <FlexContainer
      direction="column"
      align="flex-start"
      justify="space-between"
      gap="20px"
      height="calc(100vh - 40px)"
      width="100%">
      <CityDescription />
      <AttractionsBlock />
    </FlexContainer>

  )
}

export default PlaceDetails;