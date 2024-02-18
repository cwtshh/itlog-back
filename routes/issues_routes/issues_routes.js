const express = require('express');
const router = express();

const { create_issue } = require("../../controllers/issues_controller.js");

router.post("/create", create_issue);

module.exports = router;
