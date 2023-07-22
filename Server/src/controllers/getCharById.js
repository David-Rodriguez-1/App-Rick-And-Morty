const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL}${id}`)
    .then((response) => {
      const { status, name, species, origin, image, gender } = response.data;
      const character = { id, status, name, species, origin, image, gender };

      return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;
