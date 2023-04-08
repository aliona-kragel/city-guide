import { FlexContainer } from "components/styled/FlexContainer"
import { useTypedSelector } from "hooks/useTypedSelector";
import DetailsButton from "components/base/DetailsButton";
import PlaceSticker from "components/PlaceSticker";
import { useNavigate } from "react-router-dom";
import { Search } from '@mui/icons-material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import { useTranslation } from "react-i18next";
import "./index.scss";

const PlacesList = () => {
  const { locationsList, responseReceived } = useTypedSelector(state => state.places);
  const navigate = useNavigate();
  const { t } = useTranslation()
  return (
    <FlexContainer
      className="locations__list"
      width="80%"
      height="100%"
      direction="column"
      align="center"
      gap="10px"
      justify="normal"
      padding="5px 10px">
      {
        locationsList?.length ? locationsList.map((item) =>
          <div className="location__item" key={item.raw.osm_id}>
            <PlaceSticker>{item.raw.type}</PlaceSticker>
            <FlexContainer justify="flex-start" gap="20px" margin="0 0 10px 0">
              <PlaceOutlinedIcon />
              <span>{item.label}</span>
            </FlexContainer>
            <DetailsButton onClick={() => navigate(`/places/${item.raw.osm_id}`)}>{t("viewMore")}</DetailsButton>
          </div>) : (
          <FlexContainer gap="10px">
            {(responseReceived) ?
              <><Search color="disabled" />
                <span className="location__notification">{t("noMatches")}</span>
              </> :
              <><AddLocationAltOutlinedIcon color="disabled" />
                <span className="location__notification">{t("typeValue")}</span>
              </>}
          </FlexContainer>
        )
      }
    </FlexContainer>
  )
}

export default PlacesList;
