const server = require("./src/app");
require("dotenv").config();

server.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT}!`);
});
