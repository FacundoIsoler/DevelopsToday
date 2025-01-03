const axios = require("axios");

const showAvilableCountries = async () => {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    const countries = response.data;
    console.log(
      `Successfully retrieved ${countries.length} available countries.`
    );
    return countries;
  } catch (error) {
    console.log("Error retrieving available countries:", error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  showAvilableCountries,
};
