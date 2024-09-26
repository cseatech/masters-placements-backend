const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_URL);
        console.log(`Database is connected to `, connect.connection.name);
    } catch(err) {
        console.log(`Database is not connected`);
    }
}

module.exports = { connectDB };