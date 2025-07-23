// don't change this interface
interface City {
  id: number;
  name: string;
  population: number;
  country: string;
}

/**
 * You can use this array
 * to manually test your code
 */
const cities: City[] = [
  {
    id: 301,
    name: "New York",
    population: 8398748,
    country: "United States",
  },
  {
    id: 302,
    name: "Paris",
    population: 2140526,
    country: "France",
  },
  {
    id: 303,
    name: "Tokyo",
    population: 13960000,
    country: "Japan",
  },
  {
    id: 304,
    name: "Sydney",
    population: 5230330,
    country: "Australia",
  },
  {
    id: 305,
    name: "Cairo",
    population: 9121515,
    country: "Egypt",
  },
];

/**
 * `getCityPopulation` function:
 * - Accepts a `city` parameter of type `City`.
 * - Returns the population of the specified city.
 * Example:
 *  getCityPopulation(cities[0]); // => 8398748
 */
function getCityPopulation(city: City): number {
  return city.population;
}

/**
 * `isPopulationAboveThreshold` function:
 * - Accepts:
 *   - A `city` parameter of type `City`.
 *   - A `threshold` parameter of type `number`.
 * - Returns `true` if the city's population is greater than or equal to the threshold, otherwise returns `false`.
 * Example:
 *  isPopulationAboveThreshold(cities[1], 2000000); // => true
 */
function isPopulationAboveThreshold(city: City, threshold: number): boolean {
  if (city.population >= threshold) {
    return true;
  } else {
    return false;
  }
}

/**
 * `addCity` function:
 * - Accepts:
 *   - A `cities` array of type `City[]`.
 *   - An `id` parameter of type `number`.
 *   - A `name` parameter of type `string`.
 *   - A `population` parameter of type `number`.
 *   - A `country` parameter of type `string`.
 * - Creates a new `City` object and adds it to the end of the array.
 * - Returns the updated array of cities.
 * Example:
 *  addCity(cities, 306, "Vancouver", 1200000, "Canada");
 *    // => [
 *    //   { id: 301, name: "New York", population: 8398748, country: "United States" }, // first element
 *    //   ...
 *    //   { id: 306, name: "Vancouver", population: 1200000, country: "Canada" }, // last element
 *    // ]
 */
function addCity(
  cities: City[],
  id: number,
  name: string,
  population: number,
  country: string
): City[] {
  let newCity = {
    id: id,
    name: name,
    population: population,
    country: country,
  };
  cities.push(newCity);
  return cities;
}

/**
 * `countCitiesInCountry` function:
 * - Accepts:
 *   - A `cities` array of type `City[]`.
 *   - A `country` parameter of type `string`.
 * - Returns the number of cities in the specified country.
 * Example:
 *  countCitiesInCountry(cities, "France"); // => 1
 */
function countCitiesInCountry(cities: City[], country: string): number {
  let foundCountries = cities.filter((city) => city.country == country);
  return foundCountries.length;
}

export {
  City,
  getCityPopulation,
  isPopulationAboveThreshold,
  addCity,
  countCitiesInCountry,
};
