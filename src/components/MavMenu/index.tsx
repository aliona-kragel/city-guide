import LinkItem from "../base/LinkItem";
import { FlexContainer } from "../styled/FlexContainer";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Logo from "components/Logo";
import LanguageSelect from "components/LanguageSelect";
import { useTranslation } from "react-i18next";
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
        <LinkItem to="cities">
          <HomeWorkOutlinedIcon fontSize="small" />
          <span>{t("cities")}</span>
        </LinkItem>
      </div>
      {/* <div className="nav__logout">
        <LogoutOutlinedIcon />
        <span>Logout</span>
      </div> */}
      <LanguageSelect />
    </FlexContainer>
  )
}

export default NavMenu;
