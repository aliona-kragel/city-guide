import { FlexContainer } from "components/styled/FlexContainer"
import { useTypedSelector } from "hooks/useTypedSelector";
import "./index.scss";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DetailsButton from "components/base/DetailsButton";
import CitySticker from "components/CitySticker";
import { useNavigate } from "react-router-dom";

const CitiesList = () => {
  const { locationsList } = useTypedSelector(state => state.cities);
  const navigate = useNavigate();
  return (
    <FlexContainer direction="column" align="center" gap="10px" >
      {
        !!locationsList?.length && locationsList.map((item) =>
          <div className="location__item" key={item.raw.osm_id}>
            <CitySticker>{item.raw.type}</CitySticker>
            <FlexContainer justify="flex-start" gap="20px" margin="0 0 10px 0">
              <PlaceOutlinedIcon />
              <span>{item.label}</span>
            </FlexContainer>
            <DetailsButton onClick={() => navigate(`/cities/${item.raw.osm_id}`)}>view more</DetailsButton>
          </div>)
      }
    </FlexContainer>
  )
}

export default CitiesList