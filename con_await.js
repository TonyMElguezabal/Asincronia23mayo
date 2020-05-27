const axios = require("axios");
const request = require("request");
const API_URL = "https://restcountries.eu/rest/v2/all";

function con_await() {
  return new Promise((resolve, reject) => {
    axios({
      url: API_URL,
      type: "GET",
    }).then((response) => {
      const country_list = response.data.map((country) => {
        return {
          name: country.name,
          capital: country.capital,
          population: country.population,
          flag: country.flag,
        };
      });
      resolve(country_list);
    });
  });
}

async function asyncawait() {
  console.log("Ya pedi la data");
  const await_response = await con_await();
  console.log(await_response);
}

asyncawait();
