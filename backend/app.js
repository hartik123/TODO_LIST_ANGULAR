const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");
const authenticateToken = require("./jwt-auth/tokenAuthentication").authenticateToken;
dotenv.config();
require("./db/dbConnector");

app.use(cors());
app.use(bodyParser.json());

app.use("/todo",authenticateToken, todoRoute);
app.use("/user", userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
})