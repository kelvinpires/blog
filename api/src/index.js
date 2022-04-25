require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes");

const { connectDb } = require("./connectDb");

const PORT = process.env.PORT || 5000;

connectDb();
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
