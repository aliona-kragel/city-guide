import CitiesList from "components/CitiesList";
import SearchControl from "components/SearchControl";
import { FlexContainer } from "../../components/styled/FlexContainer";
import "./index.scss";

const Cities = () => {
  return (
    <FlexContainer className="cities__container" direction="column" justify='start'>
      <SearchControl />
      <CitiesList />
    </FlexContainer>
  )
}

export default Cities;