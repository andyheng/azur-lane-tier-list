require('dotenv').config()
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const publicPath = path.join(__dirname, "..", "public")

app.use(express.static(publicPath))

//bodyparser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use routes
const shipRoutes = require("./routes/shipRoutes");


// routing
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"))
})

app.use("/api/ships", shipRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server has started')
})