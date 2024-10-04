const express = require("express")

const PORT = 6969;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})