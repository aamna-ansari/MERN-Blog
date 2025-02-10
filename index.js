// Step 01: Express Import
const express = require("express");

// Step 02: Create instant
const app = express();

// Port
const PORT = 8000;

// Run Server
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
