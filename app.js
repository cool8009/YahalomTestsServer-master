const express = require("express");
const app = express();
const questionRouter = require("./routes/questionRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const Urls = require("./settings/staticUrls");
const Test = require("./models/Tests")
const {Sequelize} = require('sequelize');

//TODO: dependency inject sequelize instance into this using awilix

app.use(cors());
app.use(bodyParser.json());
app.listen(Urls.serverPort, () =>
  console.log(
    `YahalomTests server is running at ${Urls.serverDomain}:${Urls.serverPort}`
  )
);

app.post('/createtest', async (req, res) => {
  await Sequelize.models.Test.build(req.body);
  res.send('test created');
});


app.use("/api/Questions", questionRouter);
