import LinkItem from "../base/LinkItem";
import { FlexContainer } from "../styled/FlexContainer";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Logo from "components/Logo";
import LanguageSelect from "components/LanguageSelect";
import { useTranslation } from "react-i18next";
import { Newspaper } from "@mui/icons-material";
import "./index.scss";



const NavMenu = () => {
  const { t } = useTranslation()

  return (
    <FlexContainer className="nav__container" direction="column" align="flex-start" justify="space-around" >
      <Logo />
      <div className="nav__links">
        <LinkItem to="map">
          <MapOutlinedIcon fontSize="small" />
          <span>{t("map")}</span>
        </LinkItem>
        <LinkItem to="places">
          <HomeWorkOutlinedIcon fontSize="small" />
          <span>{t("places")}</span>
        </LinkItem>
        <LinkItem to="news">
          <Newspaper fontSize="small" />
          <span>{t("news")}</span>
        </LinkItem>
      </div>
      <LanguageSelect />
    </FlexContainer>
  )
}

export default NavMenu;
