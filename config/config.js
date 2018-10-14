const path = require("path");
const config = new Map();
config.set("port",3000);
config.set("staticDir",path.join(__dirname,"..","public"));
config.set("views",path.join(__dirname,"..","views"));
module.exports = config;
