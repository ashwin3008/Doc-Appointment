const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
dotenv.config();
connectDB();
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
colors.enable();

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `server running in ${process.env.NODE_MODE} Mode on port${process.env.PORT}`
      .bgCyan.white
  );
});
