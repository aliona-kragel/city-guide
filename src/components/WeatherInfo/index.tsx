import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect, useState } from "react";
import weatherService from "services/getWeather";
import { currentWeather } from "types/weatherTypes";

const WeatherInfo = () => {
  const { selectedLocation } = useTypedSelector(state => state.map);
  const [currentWeather, setWeather] = useState<currentWeather | undefined>();

  useEffect(() => {
    if (!(selectedLocation?.y && selectedLocation?.x)) return;
    weatherService.getCurrentWeather(selectedLocation?.y, selectedLocation?.x)
      .then(res => setWeather(res));
  }, [selectedLocation])

  return (
    <>
      <p>
        {currentWeather?.weather[0].description}
      </p>
      <p>
        Temperature: {currentWeather?.main.temp.toFixed(0)}&deg;C
      </p>
    </>
  )
}

export default WeatherInfo;