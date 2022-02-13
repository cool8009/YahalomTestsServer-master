const awilix = require("awilix");
const database = require("./data/database");

const container = awilix.createContainer( {injectionMode: awilix.InjectionMode.CLASSIC});

container.register({
    //database: awilix.asClass(database).singleton()
});

module.exports = container;