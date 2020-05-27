const axios = require("axios");
const request = require("request");
const API_URL = "https://restcountries.eu/rest/v2/all";

function promesa() {
  return axios({
    url: API_URL,
    type: "GET",
  });
}

promesa().then((axios_response) => {
  const country_list = axios_response.data.map((country) => {
    return {
      name: country.name,
      capital: country.capital,
      population: country.population,
      flag: country.flag,
    };
  });
  console.log(country_list);
});
