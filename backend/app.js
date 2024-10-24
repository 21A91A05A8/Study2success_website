const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./src/config/db"); // Make sure to update the path accordingly
const UserRouter = require("./src/routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});