import { FlexContainer } from "components/styled/FlexContainer";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect, useState } from "react";
import weatherService from "services/getWeather";
import { currentWeather } from "types/weatherTypes";
import LinkItem from "../base/LinkItem";
import "./index.scss";

const WeatherInfo = () => {
  const { selectedLocation } = useTypedSelector(state => state.map);
  const [currentWeather, setWeather] = useState<currentWeather | undefined>();

  useEffect(() => {
    if (!(selectedLocation?.y && selectedLocation?.x)) return;
    weatherService.getCurrentWeather(selectedLocation?.y, selectedLocation?.x)
      .then(res => setWeather(res));
  }, [selectedLocation])
  console.log(selectedLocation);

  const icon = `http://openweathermap.org/img/w/${currentWeather?.weather[0].icon}.png`

  return (
    <>
      <LinkItem to={`/cities/${selectedLocation?.raw.osm_id}`}>{selectedLocation?.label}</LinkItem>
      {!!selectedLocation?.raw.osm_id &&
        <FlexContainer padding="0px 10px 0px 0px" gap="5px" className="weather__block">
          <img src={icon} alt="img" className="weather__icon" />
          <div className="weather__desc">
            <p className="weather__degree">{currentWeather?.main.temp.toFixed(0)}&deg;C</p>
            <p className="weather__state">{currentWeather?.weather[0].main}</p>
          </div>
        </FlexContainer>
      }
    </>
  )
}

export default WeatherInfo;