import { FlexContainer } from "components/styled/FlexContainer";
import styled from "styled-components";
import { useTypedSelector } from "hooks/useTypedSelector";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import { Tag } from "components/Tag";

const CityDescription = () => {
  const { locationDescription } = useTypedSelector(state => state.cities);
  return (
    <CityDescriptionContainer>
      <h2>{locationDescription?.localname}</h2>
      <FlexContainer gap="2rem" justify="space-between">
        <Tag direction="column" align="flex-start">
          <FlexContainer gap="0.5rem">
            <PublicOutlinedIcon className="city-desc__icon" />
            <TagMainInfo textTransform="uppercase">{locationDescription?.country_code}</TagMainInfo>
          </FlexContainer>
          <TagDescription>Country code</TagDescription>
        </Tag>
        {
          locationDescription?.extratags?.linked_place &&
          <Tag direction="column" align="flex-start" >
            <FlexContainer gap="0.5rem">
              <NotListedLocationOutlinedIcon className="city-desc__icon" />
              <TagMainInfo textTransform="capitalize">{locationDescription?.extratags.linked_place}</TagMainInfo>
            </FlexContainer>
            <TagDescription>Type of place</TagDescription>
          </Tag>
        }
        {
          locationDescription?.extratags.capital === "yes" &&
          <Tag direction="column" align="flex-start">
            <FlexContainer justify="flex-start" gap="0.5rem">
              <OutlinedFlagTwoToneIcon className="city-desc__icon" />
              <TagMainInfo textTransform="capitalize">capital</TagMainInfo>
            </FlexContainer>
            <TagDescription>City category</TagDescription>
          </Tag>
        }
        {
          locationDescription?.extratags?.population &&
          <Tag direction="column" align="flex-start" >
            <FlexContainer justify="flex-start" gap="0.5rem">
              <GroupsOutlinedIcon className="city-desc__icon" />
              <TagMainInfo>{locationDescription?.extratags.population}</TagMainInfo>
            </FlexContainer>
            <TagDescription>Population</TagDescription>
          </Tag >
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
align-items: flex-start;
gap: 1rem;
  .city-desc__icon{
    position: absolute;
    right:3%;
    top:5%;
  }
`

const TagDescription = styled.p`
font-size: 12px;
font-weight: 400;
`

const TagMainInfo = styled.p<ITag>`
font-size: 18px;
font-weight: 600;
text-transform: ${({ textTransform }) => textTransform || ""}
`

interface ITag {
  textTransform?: string;
}