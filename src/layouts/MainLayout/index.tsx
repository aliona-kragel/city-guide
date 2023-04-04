import { Outlet } from "react-router-dom";
import NavMenu from "../../components/MavMenu";
import { FlexContainer } from "../../components/styled/FlexContainer";


const MainLayout = () => {
  return (
    <section>
      <FlexContainer justify="space-between" gap="20px">
        <NavMenu />
        <Outlet />
      </FlexContainer>
    </section>
  )
}

export default MainLayout;