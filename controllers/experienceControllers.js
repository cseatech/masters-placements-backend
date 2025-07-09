const Experience = require("../models/experienceModel");

const addExperiences = async(req, res) => {
    console.log(req.body);
    const { name, email, year, company, type, linkedinurl, file, verified } = req.body;
    const newExperience = new Experience({
        name,
        email,
        year,
        company,
        type,
        linkedinurl,
        experienceFile: file,
        verified: false
    });

    await newExperience.save();
    
    return res.status(200).json({
        message: "Experience posted successfully",
        success: true
    })
}

const getCompanies = async(req, res) => {
    try {
        let result = await Experience.distinct("company");
        return res.status(200).json({
            message: result,
            success: true
        });
    } catch (err) {
        return res.status(400).json({
            message: err,
            success: false
        });
    }
}

const getExperiences = async(req, res) => {
    let experiences = await Experience.find({ verified: "true" });
    return res.status(200).json({
        message: experiences,
        success: true
    })
}

const getSpecExperiences = async(req, res) => {
    let experiences = await Experience.find({ verified: "true", company: req.params.company });
    return res.status(200).json({
        message: experiences,
        success: true
    })
}
module.exports = {addExperiences, getCompanies, getExperiences, getSpecExperiences};