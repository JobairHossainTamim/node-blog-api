const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/DbConfig');

const userRoutes = require("./routers/users/userRoutes");
const postRoutes = require("./routers/posts/postRoutes");
const commentRoutes = require("./routers/comments/commentRoutes");
const categoriesRoutes = require("./routers/categories/categoriesRoutes");
const globalErrorHandler = require('./middlewares/globalErrorHandler');


// App Requirement 

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));
app.use(bodyParser.raw({ type: 'application/json' }));




// middleware
// --------------

const userAuth = {
    isLogin: true,
    isAdmin: false,
}
app.use((req, res, next) => {
    if (userAuth.isLogin) {
        next();
    }
    else {

        return res.json({
            msg: "Invalid login credential "
        })
    }

})

// routes ----------------------------------------------------------------

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', categoriesRoutes);

// -------------------------------------------------------------------------

// Error handlers middleware

app.use(globalErrorHandler)

// 404 err
app.use("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
})
// Listen to server


const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Server running successfully");
});

app.listen(port, console.log(`Server running on port ${port} 🔥`));