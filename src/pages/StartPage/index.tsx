import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Earth from "components/Earth";
import { FlexContainer } from "components/styled/FlexContainer";

const Start = () => {
  const navigate = useNavigate();
  return (
    <EarthContainer>
      <Canvas >
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <FlexContainer width="50%" height="100vh" direction="column" align="end">
        <Slogan>Discover<br />and enjoy your new <br />places and experiences</Slogan>
        <StartButton onClick={() => navigate(`/map`)}>Get start</StartButton>
      </FlexContainer>
    </EarthContainer >
  )
}

export default Start;

const EarthContainer = styled.section`
display: flex;
width: 100vw;
height: 100vh;
padding-right: 50px;
background: linear-gradient(147deg, rgba(10,13,31,1) 32%, rgba(63,64,69,1) 34%, rgba(11,15,37,1) 36%, rgba(42,44,52,1) 45%, rgba(83,84,86,1) 51%, rgba(167,167,157,1) 58%, rgba(198,198,187,1) 66%, rgba(244,244,233,1) 79%);
`

const Slogan = styled.h3`
text-align: end;
color: #808080;
font-size: 2.5rem;
margin-bottom: 4rem;
`

const StartButton = styled.button`
border: 2px solid #B4CD93;
background-color: #B4CD93;
border-radius: 4px;
padding: 15px 40px;
transition: all 0.35s ease-in-out;
font-size: 1.5rem;
color: white;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
&:hover{
  background: none;
  color: #B4CD93;
&:active{
  background-color: #B4CD93;
  color: white;
  }
}
`