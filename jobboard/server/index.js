const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require('./middleware/error');
//import routes
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');

//database connection
mongoose.connect(process.env.DATABASE)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}));
app.use(cors());

//Routes
app.use('/', authRoutes);

app.use('/jobs', jobRoutes);

//port
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});