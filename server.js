const express = require('express');
const dotenv = require('dotenv').config();

// 
const dbConfig = require("./src/config/DbConnection")


const app = express();
// database configuration


// middleware
// routes
// Error handlers middleware
// Listen to Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Port: ${PORT} server running successfully`));