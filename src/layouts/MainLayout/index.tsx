import { Outlet } from "react-router-dom";
import NavMenu from "../../components/MavMenu";
import { FlexContainer } from "../../components/styled/FlexContainer";


const MainLayout = () => {
  return (
    <section>
      <FlexContainer justify="flex-start" align="flex-starts" gap="20px">
        <NavMenu />
        <Outlet />
      </FlexContainer>
    </section>
  )
}

export default MainLayout;