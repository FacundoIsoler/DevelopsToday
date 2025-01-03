const axios = require("axios");

const showCountriesPopulation = async () => {
  try {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/population"
    );
    const countries = response.data.data;
    console.log(
      `Successfully retrieved population data for ${countries.length} countries.`
    );
    return countries;
  } catch (error) {
    console.error("Failed to fetch population data:", error.message);
    throw new Error(
      "Unable to retrieve population data. Please try again later."
    );
  }
};

module.exports = {
  showCountriesPopulation,
};
