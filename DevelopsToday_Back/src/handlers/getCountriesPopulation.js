const {
  showCountriesPopulation,
} = require("../controllers/showCountriesPopulation");

const getCountriesPopulation = async (req, res) => {
  try {
    const result = await showCountriesPopulation();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountriesPopulation,
};
