import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadCountries } from "./Countriees.js";
import { loadCountry } from "./country.js";

const countries = await loadCountries();
const html = render(countries, "");
await writeFile('countries.html', html);
