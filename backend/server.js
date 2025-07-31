const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.listen(3001, () => {
  console.log("Backend rodando em http://localhost:3001");
});
