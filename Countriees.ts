export class Countries {
  constructor(
    public name: {
      common: string;
      nativeName: {
        eng: {
          official: string;
        };
      };
      last: string;
    },
    public currencies: {
      BBD: {
        name: string,
        symbol: string,
      }
    },
    public capital: Array<string>,
    public region: string,
    public subregion: string,
    public languages: {
      eng: string,
    },
    public flags: {
      png: string;
    }

  ) {}

}

export const loadCountries = async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const  results  = (await response.json());
  const countries: Array<Countries> = [];
  for (const {name, currencies, capital, region, subregion, languages, flags} of results) {
    countries.push(new Countries(name, currencies, capital, region, subregion, languages, flags));
  }
  return countries;
};
