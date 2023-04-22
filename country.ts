export class Country {
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
      public independent: boolean,
      public unMember: boolean,
      public currencies: {
        BBD: {
          name: string;
          symbol: string;
        };
      },
      public idd: {
        root: string;
        suffixes: Array<string>;
      },
      public capital: Array<string>,
      public region: string,
      public subregion: string,
      public languages: {
        eng: string;
      },
      public latlng: Array<string>,
      public landlocked: boolean,
      public area: number,
      public maps: {
        googleMaps: string;
      },
      public population: number,
      public car: {
        signs: Array<string>;
        side: string;
      },
      public timezones: Array<string>,
      public contintents: Array<string>,
      public flags: {
        png: string;
      }
    ) {}
  }
  
  export const loadCountry = async (name: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const { results } = (await response.json()) as { results: any[] };
    const country: Array<Country> = [];
    for (const {
      name,
      independent,
      unMember,
      currencies,
      idd,
      capital,
      region,
      subregion,
      languages,
      latlng,
      landlocked,
      area,
      maps,
      population,
      car,
      timezones,
      contintents,
      flags,
    } of results) {
      country.push(
        new Country(
          name,
          independent,
          unMember,
          currencies,
          idd,
          capital,
          region,
          subregion,
          languages,
          latlng,
          landlocked,
          area,
          maps,
          population,
          car,
          timezones,
          contintents,
          flags
        )
      );
    }
    return country;
  };
  