const express = require("express");
const app = express();
const api = require("./routes/index");

app.use("/", api);

const port = 3030;
app.listen(port, () => console.log(`Listening on port ${port}`));