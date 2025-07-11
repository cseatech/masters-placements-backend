const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/dbConnection.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;
app.use(cors({
    origin: ["https://masters-placements-frontend.vercel.app","https://masters-placement.cseaceg.org.in", "http://localhost:5173"], // Your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: false
}));
connectDB();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.get("/", (req, res) => {
        res.json({ message: "Hi." });
});
app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/experiences", require("./routes/experienceRoutes.js"));
// app.listen(PORT, () => {
//     console.log(`Server is listening on ${PORT}`);
// });

module.exports = app;