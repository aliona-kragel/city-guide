import { Canvas } from "@react-three/fiber";
import DetailsButton from "components/base/DetailsButton";
import Earth from "components/Earth";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Start = () => {
  const navigate = useNavigate();
  return (
    <EarthContainer>
      <Canvas >
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Slogan>
        <DetailsButton onClick={() => navigate(`/map`)}>Get start</DetailsButton>
      </Slogan>
    </EarthContainer >
  )
}

export default Start;

const EarthContainer = styled.section`
display: flex;
width: 100vw;
height: 100vh;
background-color: rgb(3, 2, 14);
`

const Slogan = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
`