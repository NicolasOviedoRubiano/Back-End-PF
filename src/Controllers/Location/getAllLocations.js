const { Location } = require("../../db");

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();

    if (!locations || locations.length === 0) {
      return res.status(404).json({ message: "Locations Not Found" });
    }

    return res.status(200).json(locations);
  } catch (error) {
    return res.status(500).json({ message: "Error simulado" });
  }
};

module.exports = getAllLocations;
