const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
    },
    year: {
        type: String,
    },
    company: {
        type: String,
    },
    type: {
        type: String,
    },
    linkedinurl: {
        type: String,
    },
    experienceFile: {
        type: String,
    },
    verified: {
        type: String,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Experience", experienceSchema);