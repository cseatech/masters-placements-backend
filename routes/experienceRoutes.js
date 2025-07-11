const express = require("express");
const { addExperiences, getCompanies, getExperiences, getSpecExperiences, getUnverifiedFiles, deleteExperience, verifyExperience } = require("../controllers/experienceControllers");
const router = express.Router();

router.post("/new", addExperiences);
router.get("/companies", getCompanies);
router.get("/unverified", getUnverifiedFiles);
router.get("/:company", getSpecExperiences);
router.get("/delete/:id", deleteExperience);
router.get("/verify/:id", verifyExperience);
router.get("/", getExperiences);
module.exports = router;