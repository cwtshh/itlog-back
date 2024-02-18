const express = require('express');
const router = express();

router.get("/", (req, res) => {
    res.send("Hello!");
})

router.use("/admin", require("./admin_routes/admin_router.js"));

module.exports = router;