const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/dbConnection.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;

connectDB();
app.use(express.json());
app.use("/api/users", require("./routes/userRoutes.js"))
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
