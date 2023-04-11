import styled from "styled-components";
import BreadCrumbs from "components/BreadCrumbs";
import { Tag } from "components/styled/Tag";
import { FlexContainer } from "components/styled/FlexContainer";
import { useTypedSelector } from "hooks/useTypedSelector";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from "react-i18next";

const PlaceDescription = () => {
  const { locationDescription } = useTypedSelector(state => state.places);
  const { t } = useTranslation();

  return (
    <CityDescriptionContainer>
      <FlexContainer justify="space-between" width="100%">
        <FlexContainer gap="10px">
          <LocationOnIcon />
          <h1>{locationDescription?.localname}</h1>
        </FlexContainer>
        <BreadCrumbs />
      </FlexContainer>
      <FlexContainer gap="2rem" justify="space-between">
        <Tag direction="column" align="flex-start">
          <FlexContainer gap="0.5rem">
            <PublicOutlinedIcon className="city-desc__icon" />
            <TagMainInfo textTransform="uppercase">{locationDescription?.country_code}</TagMainInfo>
          </FlexContainer>
          <TagDescription>{t("countryCode")}</TagDescription>
        </Tag>
        {
          locationDescription?.extratags?.linked_place &&
          <Tag direction="column" align="flex-start" >
            <FlexContainer gap="0.5rem">
              <NotListedLocationOutlinedIcon className="city-desc__icon" />
              <TagMainInfo textTransform="capitalize">{locationDescription?.extratags.linked_place}</TagMainInfo>
            </FlexContainer>
            <TagDescription>{t("typeOfPlace")}</TagDescription>
          </Tag>
        }
        {
          locationDescription?.extratags.capital === "yes" &&
          <Tag direction="column" align="flex-start">
            <FlexContainer justify="flex-start" gap="0.5rem">
              <OutlinedFlagTwoToneIcon className="city-desc__icon" />
              <TagMainInfo textTransform="capitalize">{t("capital")}</TagMainInfo>
            </FlexContainer>
            <TagDescription>{t("cityCategory")}</TagDescription>
          </Tag>
        }
        {
          locationDescription?.extratags?.population &&
          <Tag direction="column" align="flex-start" >
            <FlexContainer justify="flex-start" gap="0.5rem">
              <GroupsOutlinedIcon className="city-desc__icon" />
              <TagMainInfo>{locationDescription?.extratags.population}</TagMainInfo>
            </FlexContainer>
            <TagDescription>{t("population")}</TagDescription>
          </Tag >
        }
      </FlexContainer>
    </CityDescriptionContainer >
  )
}

export default PlaceDescription;

const CityDescriptionContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
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