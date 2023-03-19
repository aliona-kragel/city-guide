import AutocompleteTextfield from "components/AutocompleteTextfield";
import MapBlock from "components/MapBlock";
import { FlexContainer } from "components/styled/FlexContainer";
import "./index.scss";

const Map = () => {
  return (
    <FlexContainer className="map__container" direction="column">
      <AutocompleteTextfield />
      <MapBlock />
    </FlexContainer>
  )
}

export default Map;