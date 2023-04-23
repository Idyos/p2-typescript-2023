export class Country {
    constructor(
      public name: {
        common: string,
        official: string,
        nativeName: {
          eng: {
            official: string;
             
          };
        };
        last: string;
      },
      public independent: boolean,
      public unMember: boolean,
      public currencies: object,
      public capital: Array<string>,
      public region: string,
      public subregion: string,
      public languages: object,
      public latlng: Array<string>,
      public landlocked: boolean,
      public area: number,
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
    console.log("SIN SEPARAR: "+name);
    var name2=name.replace(/ /g, '%20');
    console.log("SEPARADO: "+name2);


    const response = await fetch(`https://restcountries.com/v3.1/name/${name2}`);
    const result  = await response.json() as Country[];
    const country: Array<Country> = [];
    for (const {name, independent, unMember, currencies,  capital, region, subregion, languages, latlng, landlocked, area, population, car, timezones, contintents, flags} of result) {
      country.push(new Country(name, independent, unMember, currencies, capital, region, subregion, languages, latlng, landlocked, area, population, car, timezones, contintents, flags));
    }
    
    return country;
  };
  