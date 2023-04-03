import AttractionsBlock from "components/AttractionsBlock";
import CityDescription from "components/CityDescription";
import { FlexContainer } from "components/styled/FlexContainer";
import useCitiesActions from "hooks/useCitiesActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import placeDetailsService from "services/getPlaceDetails";
import "./index.scss";

const PlaceDetails = () => {
  let { osm_id } = useParams();
  const { setAttractionsList } = useCitiesActions();

  useEffect(() => {
    if (!(osm_id)) return;
    placeDetailsService.getByOsmId(osm_id)
      .then((res) => placeDetailsService.getByLatLongAttractions(res.geometry.coordinates[0], res.geometry.coordinates[1]))
      .then((res) => setAttractionsList(res.features));
  }, [setAttractionsList, osm_id])

  return (
    <FlexContainer className="place-details__container" direction="column">
      <CityDescription />
      <AttractionsBlock />
    </FlexContainer>

  )
}

export default PlaceDetails;