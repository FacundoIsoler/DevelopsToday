const axios = require("axios");

const showCountriesFlags = async () => {
  try {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );
    const countries = response.data.data;
    console.log(
      `Successfully retrieved flag data for ${countries.length} countries.`
    );
    return countries;
  } catch (error) {
    console.error("Failed to fetch flag data:", error.message);
    throw new Error("Unable to retrieve flag data. Please try again later.");
  }
};

module.exports = {
  showCountriesFlags,
};
