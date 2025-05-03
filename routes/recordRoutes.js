const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController");

router.post("/", recordController.createRecord);
router.get("/", recordController.getAllRecords);
router.delete("/", recordController.deleteAllRecords);
router.get("/:id", recordController.getRecordById);

module.exports = router;
