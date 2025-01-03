const {
  showAvilableCountries,
} = require("../controllers/showAvilableCountries");

const getAvilableCountries = async (req, res) => {
  try {
    const result = await showAvilableCountries();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAvilableCountries,
};
