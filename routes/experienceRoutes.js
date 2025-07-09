const express = require("express");
const { addExperiences, getCompanies, getExperiences, getSpecExperiences } = require("../controllers/experienceControllers");
const router = express.Router();

router.post("/add-experience", addExperiences);
router.get("/companies", getCompanies);
router.get("/all-experiences", getExperiences);
router.get("/all-experiences/:company", getSpecExperiences);
module.exports = router;