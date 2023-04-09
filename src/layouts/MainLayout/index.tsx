import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavMenu from "components/MavMenu";
import { FlexContainer } from "components/styled/FlexContainer";

const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      navigate('/start');
    }
  }, []);

  return (
    <LayoutContainer>
      <FlexContainer justify="flex-start" align="flex-starts" gap="20px">
        <NavMenu />
        <Outlet />
      </FlexContainer>
    </LayoutContainer>
  )
}

export default MainLayout;

const LayoutContainer = styled.section`
  padding: 20px;
`