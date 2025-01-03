const { showCountriesFlags } = require("../controllers/showCountriesFlags");

const getCountriesFlags = async (req, res) => {
  try {
    const result = await showCountriesFlags();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountriesFlags,
};
