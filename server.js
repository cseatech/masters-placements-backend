const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const { connectDB } = require("./config/dbConnection.js");

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

connectDB();
app.use(cors({
  origin: ["https://masters-placements-frontend.vercel.app", "https://masters-placement.cseaceg.org.in", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false,
}));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Server running..." });
});
app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/experiences", require("./routes/experienceRoutes.js"));

module.exports = app;