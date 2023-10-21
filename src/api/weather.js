import axios from "axios";

const KEY = "KEY";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/",
  timeout: 2000,
});

async function getCityWeather(city) {
  const response = await instance.get(
    `data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
  );
  return response.data;
}

export default getCityWeather;
