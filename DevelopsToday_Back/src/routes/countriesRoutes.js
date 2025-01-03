const { Router } = require("express");
const { getAvilableCountries } = require("../handlers/getAvilableCountries");
const { getCountryInfo } = require("../handlers/getCountryInfo");
const {
  getCountriesPopulation,
} = require("../handlers/getCountriesPopulation");
const { getCountriesFlags } = require("../handlers/getCountriesFlags");

const countriesRoutes = Router();
countriesRoutes.get("/showAvilableCountries", getAvilableCountries);
countriesRoutes.get("/showCountryInfo/:countryCode", getCountryInfo);
countriesRoutes.get("/showCountriesPopulation", getCountriesPopulation);
countriesRoutes.get("/showCountriesFlags", getCountriesFlags);

module.exports = {
  countriesRoutes,
};
