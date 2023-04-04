import { FlexContainer } from "components/styled/FlexContainer";
import styled from "styled-components";
import { useTypedSelector } from "hooks/useTypedSelector";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';

const CityDescription = () => {
  const { locationDescription } = useTypedSelector(state => state.cities);
  return (
    <CityDescriptionContainer>
      <h2>{locationDescription?.localname}</h2>
      <FlexContainer gap="2rem" justify="space-between">
        <FlexContainer gap="0.5rem"><PublicOutlinedIcon /><p className="city-description__country-code">{locationDescription?.country_code}</p></FlexContainer>
        {
          locationDescription?.extratags?.linked_place && <FlexContainer gap="0.5rem"><NotListedLocationOutlinedIcon /> <p className="city-description__info">{locationDescription?.extratags.linked_place}</p></FlexContainer>
        }
        {
          locationDescription?.extratags.capital === "yes" && <FlexContainer gap="0.5rem"><OutlinedFlagTwoToneIcon /><p className="city-description__info">capital</p></FlexContainer>
        }
        {
          locationDescription?.extratags?.population && < FlexContainer gap="0.5rem"><GroupsOutlinedIcon /> <span>{locationDescription?.extratags.population} </span></FlexContainer >
        }
      </FlexContainer>
    </CityDescriptionContainer >
  )
}

export default CityDescription

const CityDescriptionContainer = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
.city-description__country-code{
  text-transform: uppercase;
}
.city-description__info{
  text-transform: capitalize;
}
`