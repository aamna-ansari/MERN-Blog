// Step 01: Express Import
const express = require("express");

// Import User From Routes
const userRoute = require('./routes/user');

// Step 03: Path import
const path = require('path');

// Step 02: Create instant
const app = express();

// Step 04: EJS
app.set('view engine','ejs')
app.set('views', path.resolve('./views'));


// For test Routes
app.get('/', (req,res)=>{
    res.render('home');
})

// UseRoute
app.use('/user', userRoute);



// Port
const PORT = 8000;

// Run Server
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
