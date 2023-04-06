import { FlexContainer } from "components/styled/FlexContainer";
import useCitiesActions from "hooks/useCitiesActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect, useState } from "react";
import placeDetailsService from "services/getPlaceDetails";
import ImageNotSupportedOutlinedIcon from '@mui/icons-material/ImageNotSupportedOutlined';
import styled from "styled-components";
import "./index.scss";
import { useTranslation } from "react-i18next";

const AttractionsBlock = () => {
  const { attractionsList, attractionDetails } = useTypedSelector(state => state.cities);
  const { setAttractionDetails, clearCitiesState } = useCitiesActions();
  const [activeAttractionId, setActiveAttractionId] = useState<string | undefined>();
  const { t } = useTranslation()

  const handleClick = (attraction: string | undefined) => {
    setActiveAttractionId(attraction);
  }

  useEffect(() => {
    if (!(activeAttractionId)) return;
    placeDetailsService.getbyXid(activeAttractionId)
      .then(res => setAttractionDetails(res))
      .catch(err => console.log(err.message));
  }, [activeAttractionId, setAttractionDetails])

  useEffect(() => {
    return () => { clearCitiesState() }
  }, [clearCitiesState])

  return (
    <FlexContainer direction="column" align="flex-start" gap="10px" justify="space-between" >
      {!!attractionsList?.length &&
        <>
          <Subtitle>{t("attractions")}</Subtitle>
          <FlexContainer className="attractions__block" gap="20px">
            <FlexContainer
              className="attractions__list"
              direction="column"
              align="flex-start"
              justify="flex-start"
              gap="3px"
              padding="0 10px 0 0" >
              {attractionsList?.map((item) =>
                <div
                  className={`attraction__item ${item.properties.xid === activeAttractionId && "active"}`}
                  key={item.id}
                  onClick={() => handleClick(item.properties.xid)}>
                  <p>{item?.properties?.name}</p>
                  <HashTag>#{item?.properties.kinds.split(",").at(1)}</HashTag>
                </div>
              )}
            </FlexContainer>
            {attractionDetails &&
              <FlexContainer className="attraction__details" direction="column" gap="10px" padding="10px" >
                {
                  attractionDetails?.preview?.source ?
                    <Picture src={attractionDetails.preview.source} alt={attractionDetails?.name} /> : <ImageNotSupportedOutlinedIcon fontSize="large" color="disabled" />
                }
                {
                  attractionDetails?.wikipedia_extracts?.text ?
                    <p className="attraction__details-content">{attractionDetails?.wikipedia_extracts?.text}</p> : <p style={{ color: `lightgray` }}>{t("noDescription")}</p>
                }
              </FlexContainer>
            }
          </FlexContainer>
        </>
      }
    </FlexContainer >
  )
}

export default AttractionsBlock;

const HashTag = styled.p`
font-weight: 400;
font-size: 12px;
`

const Subtitle = styled.h3`
margin-bottom: 10px;
`

const Picture = styled.img`
max-width: 100%;
min-height: 400px;
height: 100%;
object-fit: cover;
`

