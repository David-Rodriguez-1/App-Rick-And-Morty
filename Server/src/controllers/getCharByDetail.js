const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (res, id) => {
  axios
    .get(URL + id)
    .then((respnse) => {
      const { id, name, gender, species, origin, image, status } = respnse.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ id, name, gender, species, origin, image, status })
      );
    })
    .catch((reason) => {
      res
        .writeHead(500, { "Content-Type": "text-plain" })
        .res.end(reason.message);
    });
};

module.exports = getCharById;
