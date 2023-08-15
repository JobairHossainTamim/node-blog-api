const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser');

// 
const dbConfig = require("./src/config/DbConnection")
const userRoutes = require('./src/modules/User/user.router');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));
app.use(bodyParser.raw({ type: 'application/json' }));
// database configuration



// routes
// user Route
app.use("/api/user", userRoutes)
// comment Route
// Post Route

// Category Route
// Error handlers middleware
// Listen to Server

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Server Running"));

app.listen(PORT, console.log(`Port: ${PORT} server running successfully`));