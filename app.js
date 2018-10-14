const Koa = require("koa");
const router = require("koa-simple-router");
const serve = require("koa-static");
const render = require("koa-swig");
const co = require("co");

const config = require("./config/config");
const init = require("./controllers/initController");
const app = new Koa();

app.use(serve(config.get("staticDir")));
app.context.render = co.wrap(render({
    root: config.get("views"),
    autoescape: true,
    cache: 'memory',
    ext: 'html',
}));
init.init(app,router);
app.listen(config.get("port"), function () {
    console.log("server at localhost:" + config.get("port"));
});

module.exports = app;      
   
