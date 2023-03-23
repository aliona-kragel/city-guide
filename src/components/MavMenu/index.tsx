import LinkItem from "../base/LinkItem";
import { FlexContainer } from "../styled/FlexContainer";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./index.scss";

const NavMenu = () => {
  return (
    <FlexContainer className="nav__container" direction="column" align="flex-start" justify="space-around" >
      <div className="nav__links">
        <LinkItem to="map">
          <MapOutlinedIcon />
          <span>Map</span>
        </LinkItem>
        <LinkItem to="cities">
          <HomeWorkOutlinedIcon />
          <span>Cities</span>
        </LinkItem>
      </div>
      <div className="nav__logout">
        <LogoutOutlinedIcon />
        <span>Logout</span>
      </div>
    </FlexContainer>
  )
}

export default NavMenu;