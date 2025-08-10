const express = require("express");
const app = express();
require("./connection/conn");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cookieParser());

const allowedOrigins=["https://taskify-hazel-mu.vercel.app/", 
  "http://localhost:5173"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    
  })
);

const usersApi = require("./controllers/user");
const tasksApi = require("./controllers/task");
const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use("/api/v1", usersApi);
app.use("/api/v1", tasksApi);

app.listen(PORT, () => {
  console.log(`Server Started : ${process.env.PORT}`);
});
