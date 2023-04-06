import axios from "axios"
import { currentWeather } from "types/weatherTypes";

const weatherService = {
  async getCurrentWeather(lat: number | undefined, lon: number | undefined): Promise<currentWeather | undefined> {
    const apiKey: string = "600e2cd2a746ea7aeb8bed7fa2604dde";
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    return data;
  }
}

export default weatherService;