import { writeFile } from "fs/promises";
import { countryRender, render } from "./render.js";
import { loadCountries } from "./Countriees.js";
import { loadCountry } from "./country.js";

const countries = await loadCountries();
const html = render(countries);
await writeFile('countries.html', html);

 for(const countryIndividual of countries){
    const country = await loadCountry(countryIndividual.name.common);
    const html = countryRender(country); 
    await writeFile(`./countries/${countryIndividual.name.common}.html`, html);
}


