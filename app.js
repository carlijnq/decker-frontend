const express = require("express")

app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log("Running server on port " + PORT)
})
