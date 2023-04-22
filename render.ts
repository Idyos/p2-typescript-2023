import { Countries } from "./Countriees.js";
import { Country } from "./country.js";

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

const renderCountries = (countries: Array<Countries>) => {
  let html = "";
  for (const country of countries) {
    html += `<div class="country">
      <img src="${country.flags.png}" />
      <div class="data">
        <div class="name">${country.name.common}</div>
        <div class="info"><b>Capital:</b> ${country.capital} <b>Continent:</b> ${country.region}</div>
      </div>
    </div>`;
  }
  return html;
}

const renderCountry = (name: string) => {
  let html = "";
  for (const country of name) {
    html += `<div class="country">
      <img src="" />
      <div class="data">
        <div class="name"></div>
        <div class="info"><b>Capital:</b>  <b>Continent:</b> </div>
      </div>
    </div>`;
  }
  return html;
}


export const render = (countries: Array<Countries>, name: string="") => {
  return `
<html>
  ${head("All countries in the world")}
  <body>
  <div class="grid">
  ${countries.length!==0 ? renderCountries(countries) : renderCountry(name)}
  </body>
  </div>
</html>`;
};
