import styled from "styled-components";
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

const Logo = () => {
  return (
    <LogoContainer>
      <ModeOfTravelIcon />
      <h3>City-guide</h3>
    </LogoContainer>
  )
}

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  color: #B4CD93;
  background: linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`