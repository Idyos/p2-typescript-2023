import { type } from "os";
import { Countries } from "./Countriees.js";
import { Country } from "./country.js";
import { count } from "console";
import { cursorTo } from "readline";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
      display: grid;
      justify-items: center;
      align-items: center;
    }

    .country {
      margin: 1.4rem;
      box-shadow: 0px 2px 18px 0px #8f8f8f;
      border-radius: 20px;
      font-family: sans-serif;
      position: relative;
      display: flex;
      flex-direction: row;
    }
    .country img {
      max-height: 25vh;
      border-radius: 10px;
    }
    .country .name {
      text-align: center;
      font-weight: bold;
      font-size: 2.5rem;
    }
    .country .data {
      border-radius: 10px;
      position: absolute;
      width: 90%;
      height: 90%;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.3);
      background-color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: 0.3s ease-in-out;
    }
    .country .info{
      text-align: center;
    }

    .country:hover{
      cursor: pointer; 
    }

    .country:hover > .data {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      transition: 0.3s ease-in-out;
    }
  </style>
</head>`;

const headCountry = (title: string) => `<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<style>
body {
  margin: 0;
  padding: 0;
}

img {
  height: 30vh;
}

.jumbotron {
  font-family: sans-serif;
  padding: 20px;
  box-shadow: 0px 8px 20px 1px #0000008f;
  display: flex;
  flex-direction: row;
}

.countryInfo{
  margin-left: 20px;
  column-gap: 50px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  display: grid;
  align-items: center;
}

iframe{
  width: 100%;
  height: 70%;
}
</style>
</head>`;

const renderCountries = (countries: Array<Countries>) => {
  let html = "";
  for (const country of countries) {
    html += `<a class="country" href="./countries/${country.name.common}.html">
      <img src="${country.flags.png}" />
      <div class="data">
        <div class="name">${country.name.common}</div>
        <div class="info"><b>Capital:</b> ${country.capital} <b>Continent:</b> ${country.region}</div>
      </div>
    </a>`;
  }
  return html;
};

//<p><b>Currency: </b>${country[0].currencies} ${country[0].currencies}</p>

const getLanguages = (languages: object) => {
  let languagesString = "";
  let index = 0;
  if (languages != undefined && languages != null) {
    for (const language of Object.values(languages)) {
      if (index == Object.values(languages).length - 1)
        languagesString += `<p style="display: inline-block;">${language}</p>`;
      else
        languagesString += `<p style="display: inline-block;">${language}, </p>`;
      index++;
    }
  }
  return languagesString;
};

const getCurrencies = (currencies: object) => {
  let currenciesString = "";
  let index = 0;
  if (currencies != undefined && currencies != null) {
    for (const currency of Object.values(currencies)) {
      if (index == Object.values(currencies).length - 1)
        currenciesString += `<p style="display: inline-block; margin: 0">${currency.name} <b>(${currency.symbol})</b></p>`;
      else
        currenciesString += `<p style="display: inline-block; margin: 0">${currency.name} <b>(${currency.symbol})</b>, </p>`;
      index++;
    }
  }
  return currenciesString;
};

const getTimezones = (timezones: Array<string>) => {
  let timezonesString = "";
  let index = 0;
  for (const timezone of timezones) {
    if (index == timezones.length - 1)
      timezonesString += `<p style="display: inline-block; margin: 0">${timezone} <b>(${timezone})</b></p>`;
    else
      timezonesString += `<p style="display: inline-block; margin: 0">${timezone} <b>(${timezone})</b>, </p>`;
    index++;
  }
  return timezonesString;
};

export const countryRender = (country: Array<Country>) => {
  return `
<html>
  ${headCountry(country[0].name.common)}
  <body>
    <div class="jumbotron">
      <img src="${country[0].flags.png}" />
        <div class="countryInfo">
          <h1 style="margin-top: 0;">${country[0].name.official}</h1>
          <div class="monedas">
          <h3 style="display: inline-block; margin: 0">Currencies: </h3>
          ${getCurrencies(country[0].currencies)}
        </div>
          <p><b>Capital:</b> ${country[0].capital}</p>

     
        <div class="idiomas">
          <h3 style="display: inline-block; margin: 0">Languages: </h3>
          ${getLanguages(country[0].languages)}
        </div>

          <p><b>Population:</b> ${country[0].population}</p>

          <p><b>Location:</b> ${country[0].region}, ${country[0].subregion}</p>


          <p><b>United Nations Member:</b> ${
            country[0].unMember ? "Yes" : "No"
          }</p>
          
          <div class="timezones">
          <p style="display: inline-block; margin: 0"><b>Timezones:</b></p>
          ${getTimezones(country[0].timezones)}
          </div>

          <p><b>Area:</b> ${country[0].area}m<sup>2</sup></p>

        </div>
    </div>
    <iframe 
  frameborder="0" 
  scrolling="no" 
  marginheight="0" 
  marginwidth="0" 
  src=https://maps.google.com/maps?q=${country[0].latlng[0]},${
    country[0].latlng[1]
  }&hl=en&z=9&amp;output=embed

 </iframe>

  </body>
</html>`;
};

export const render = (countries: Array<Countries>) => {
  return `
<html>
  ${head("All countries in the world")}
  <body>
  <div class="grid">
  ${renderCountries(countries)}
  </body>
  </div>
</html>`;
};
