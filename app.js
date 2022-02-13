const express = require("express");
const app = express();
const questionRouter = require("./routes/questionRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const Urls = require("./settings/staticUrls");
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/quizzerdb.db'
});
const Test  = require("./models/Tests")(sequelize, Sequelize.DataTypes);
const container = require("./containerConfig");


app.use(cors());
app.use(bodyParser.json());
app.listen(Urls.serverPort, () =>
  console.log(
    `YahalomTests server is running at ${Urls.serverDomain}:${Urls.serverPort}`
  )
);


app.post('/createtest', async (req, res) => {
  try {
    await Test.create(req.body);
    res.send('test created');
    
  } catch (error) {
    console.log(error);
  }
});


app.use("/api/Questions", questionRouter);

