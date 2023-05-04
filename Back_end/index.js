const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const Books_ruter = require('./Route/book_route');
app.use(express.json());
app.use(cors());

const url_l = "mongodb+srv://mrahman171:nVtb7E9gLBzT8Ihz@cluster0.b3elaga.mongodb.net/test"
const config = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(url_l, config);

 
app.use('/Books', Books_ruter);
app.listen(3000);