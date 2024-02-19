require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

console.log(port);

// json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors(
    {
        credentials: true,
        origin: process.env.FRONT_URL,
    }
));

// db
require("./config/db");

// routes
app.use("/", require("./routes/router"))
;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})



