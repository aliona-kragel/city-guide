import PlacesList from "components/PlacesList";
import SearchControl from "components/SearchControl";
import { FlexContainer } from "../../components/styled/FlexContainer";
import "./index.scss";

const Places = () => {
  return (
    <FlexContainer className="places__container" direction="column" justify='start' gap="20px">
      <SearchControl />
      <PlacesList />
    </FlexContainer>
  )
}

export default Places;