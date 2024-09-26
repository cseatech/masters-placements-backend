const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a valid name"],
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);