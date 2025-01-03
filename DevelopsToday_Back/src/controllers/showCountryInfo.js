const axios = require("axios");

const showCountryInfo = async (countryCode) => {
  try {
    const response = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    const countryInfo = response.data;

    console.log(
      `Successfully retrieved information for country: ${countryInfo.commonName}.`
    );
    return countryInfo;
  } catch (error) {
    console.log("Error retrieving country information:", error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  showCountryInfo,
};
