import LinkItem from "../base/LinkItem";
import { FlexContainer } from "../styled/FlexContainer";
// import MapLogo from "../../icons/map.svg"
// import CityLogo from 'icons/city.svg';
// import LogoutLogo from '../../icons/logout.svg';
import "./index.scss";

const NavMenu = () => {
  return (
    <FlexContainer className="nav__container" direction="column" align="flex-start" justify="space-around" >
      <div className="nav__links">
        <LinkItem to="map">
          {/* <MapLogo /> */}
          <span>Map</span>
        </LinkItem>
        <LinkItem to="cities">
          {/* <CityLogo className="" /> */}
          <span>Cities</span>
        </LinkItem>
      </div>
      <div className="nav__logout">
        {/* <LogoutLogo /> */}
        <span>Logout</span>
      </div>
    </FlexContainer>

  )
}

export default NavMenu;