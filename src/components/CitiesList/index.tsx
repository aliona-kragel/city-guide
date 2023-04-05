import { FlexContainer } from "components/styled/FlexContainer"
import { useTypedSelector } from "hooks/useTypedSelector";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DetailsButton from "components/base/DetailsButton";
import CitySticker from "components/CitySticker";
import { useNavigate } from "react-router-dom";
import { Search } from '@mui/icons-material';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import "./index.scss";
import { useTranslation } from "react-i18next";

const CitiesList = () => {
  const { locationsList, responseReceived } = useTypedSelector(state => state.cities);
  const navigate = useNavigate();
  const { t } = useTranslation()
  return (
    <FlexContainer className="locations__list" direction="column" align="center" gap="10px" >
      {
        locationsList?.length ? locationsList.map((item) =>
          <div className="location__item" key={item.raw.osm_id}>
            <CitySticker>{item.raw.type}</CitySticker>
            <FlexContainer justify="flex-start" gap="20px" margin="0 0 10px 0">
              <PlaceOutlinedIcon />
              <span>{item.label}</span>
            </FlexContainer>
            <DetailsButton onClick={() => navigate(`/cities/${item.raw.osm_id}`)}>{t("viewMore")}</DetailsButton>
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

export default CitiesList;