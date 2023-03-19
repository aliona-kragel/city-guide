import AutocompleteTextfield from "components/AutocompleteTextfield";
import { useState } from "react";
import { Location } from "types";
import MapBlock from "components/MapBlock";
import { FlexContainer } from "components/styled/FlexContainer";
import "./index.scss";

const Map = () => {
  const [location, setLocation] = useState<Location | null>(null);

  return (
    <FlexContainer className="map__container" direction="column">
      <AutocompleteTextfield value={location} setValue={setLocation} />
      <MapBlock selectedLocation={location} />
    </FlexContainer>
  )
}

export default Map;