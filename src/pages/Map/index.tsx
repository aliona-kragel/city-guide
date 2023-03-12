// import SearchControl from "../../components/SearchControl";
import MapBlock from "../../components/MapBlock";
import { FlexContainer } from "../../components/styled/FlexContainer";
import "./index.scss"

const Map = () => {
  return (
    <FlexContainer className="map__container" direction="column">
      {/* <SearchControl /> */}
      <MapBlock />
    </FlexContainer>
  )
}

export default Map;