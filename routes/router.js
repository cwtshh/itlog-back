const express = require('express');
const router = express();

router.get("/", (req, res) => {
    res.send("Hello!");
})

router.use("/admin", require("./admin_routes/admin_router.js"));
router.use("/issue", require("./issues_routes/issues_routes.js"));

module.exports = router;