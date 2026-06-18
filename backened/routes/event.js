const express = require("express");
const router = express.Router();
const{createEvent, getEvents, deleteDelete, } = require("../config/controllers/event");

router.post("/", createEvent);
router.get("/", getEvents);
router.delete("/:id", deleteDelete);
router.put("/", (req, res) => {});

module.exports = router;