import { FlexContainer } from "components/styled/FlexContainer";
import useCitiesActions from "hooks/useCitiesActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect, useState } from "react";
import placeDetailsService from "services/getPlaceDetails";
import "./index.scss";

const AttractionsBlock = () => {
  const { attractionsList, attractionDetails } = useTypedSelector(state => state.cities);
  const { setAttractionDetails, clearCitieState } = useCitiesActions();
  const [activeAttractionId, setActiveAttractionId] = useState<string | undefined>();

  const handleClick = (attraction: string | undefined) => {
    setActiveAttractionId(attraction);
  }

  useEffect(() => {
    if (!(activeAttractionId)) return;
    placeDetailsService.getbyXid(activeAttractionId)
      .then(res => setAttractionDetails(res))
  }, [activeAttractionId, setAttractionDetails])

  useEffect(() => {
    return () => { clearCitieState() }
  }, [clearCitieState])

  return (
    <FlexContainer gap="20px">
      <FlexContainer className="attractions__list" direction="column" align="flex-start" justify="flex-start" gap="3px" padding="0 10px 0 0" >
        {attractionsList?.map((item) =>
          <div className={`attraction__item ${item.properties.xid === activeAttractionId && "active"}`} key={item.id} onClick={() => handleClick(item.properties.xid)}>
            <p>{item?.properties?.name}</p>
          </div>
        )}
      </FlexContainer>
      <FlexContainer className="attraction__details" direction="column" gap="10px">
        {!!attractionDetails?.preview?.source && <img src={attractionDetails.preview.source} alt={attractionDetails?.name} />}
        <h3>{attractionDetails?.name}</h3>
        <p>{attractionDetails?.wikipedia_extracts?.text}</p>
      </FlexContainer>
    </FlexContainer>
  )
}

export default AttractionsBlock;