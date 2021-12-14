const axios = require("axios");
const API_KEY = "4a272b985875b5d5c945eae892ab0888";

const getWeatherOfCity = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${API_KEY}&units=metric`;
  console.log(url)
  return axios
    .get(url)
    .then((res) => {
      const { data } = res;
      return `${data.main.temp} \u00b0C (${data.weather[0].main}, ${data.weather[0].description})`
    })
    .catch((err) => {
      return 'Cannot fetch weather right now';
    });
};

module.exports = { getWeatherOfCity };
