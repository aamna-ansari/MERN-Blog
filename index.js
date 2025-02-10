// Step 01: Express Import
const express = require("express");

// Step 04: Path import
const path = require('path');

// Step 02: Create instant
const app = express();

// Step 03: EJS

app.set('view engine','ejs')
app.set('views', path.resolve('./views'))

// Port
const PORT = 8000;

// Run Server
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
