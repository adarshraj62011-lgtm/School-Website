const express = require("express");
const router = express.Router();
const{createContact, getContacts, deleteContact } = require("../config/controllers/contact");

router.post("/", createContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact);
router.put("/", (req, res) => {});

module.exports = router;