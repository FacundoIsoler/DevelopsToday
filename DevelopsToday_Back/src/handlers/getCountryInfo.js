const { showCountryInfo } = require("../controllers/showCountryInfo");

const getCountryInfo = async (req, res) => {
  const { countryCode } = req.params;

  try {
    const result = await showCountryInfo(countryCode);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountryInfo,
};
