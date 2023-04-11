import { useRef } from "react";
import AutocompleteTextfield from "components/AutocompleteTextfield";
import MapBlock from "components/MapBlock";
import { FlexContainer } from "components/styled/FlexContainer";
import "./index.scss";

const Map = () => {
  const mapRef = useRef();

  return (
    <FlexContainer className="map__container" direction="column" justify="start">
      <AutocompleteTextfield mapRef={mapRef} />
      <MapBlock mapRef={mapRef} />
    </FlexContainer>
  )
}

export default Map;