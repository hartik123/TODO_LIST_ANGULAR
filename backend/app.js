const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");
const authenticateToken = require("./jwt-auth/tokenAuthentication").authenticateToken;
require("./db/dbConnector");

app.use(cors());
app.use(bodyParser.json());

app.use("/todo",authenticateToken, todoRoute);
app.use("/user", userRoute);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})