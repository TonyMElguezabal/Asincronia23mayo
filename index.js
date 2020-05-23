const request = require("request");

const options = {
  url: "https://restcountries.eu/rest/v2/all",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Accept-Charset": "utf-8",
    "User-Agent": "my-reddit-client",
  },
};

request(options, function (err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
});

/*
const fs = require("fs");

function myCallback(data) {
  console.log(data);
}

fs.readFile("./data.json");

function traer() {
  request 
  fetch("https://restcountries.eu/rest/v2/all").then(function (response) {
    response.json().then(function (data) {
      objectopais = data;
      console.log(objectopais);
    });
  });
}

*/
