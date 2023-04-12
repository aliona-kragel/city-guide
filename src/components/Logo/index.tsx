import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { NavLink } from "react-router-dom";
import "./index.scss";

const Logo = () => {
  return (
    <NavLink to="/start" className="logo__container">
      <ModeOfTravelIcon />
      <h3>City-guide</h3>
    </NavLink>
  )
}

export default Logo;
