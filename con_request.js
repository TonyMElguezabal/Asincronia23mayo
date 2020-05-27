const request = require("request");
const API_URL = "https://restcountries.eu/rest/v2/all";

request(API_URL, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  try {
    let country_list = JSON.parse(response.body);
    country_list = country_list.map((country) => {
      return {
        name: country.name,
        capital: country.capital,
        population: country.population,
        flag: country.flag,
      };
    });

    console.log(country_list);
  } catch (e) {
    console.error(e);
  }
});
