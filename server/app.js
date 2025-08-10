const express = require("express");
const app = express();
require("./connection/conn");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const usersApi = require("./controllers/user");
const tasksApi = require("./controllers/task");

app.use(express.json());
app.use("/api/v1", usersApi);
app.use("/api/v1", tasksApi);

app.listen(process.env.PORT, () => {
  console.log(`Server Started : ${process.env.PORT}`);
});
