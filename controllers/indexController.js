const indexM = require("../models/indexModel");
const indexController = {
    index(){
        return async ctx =>{
            ctx.body = await ctx.render('index');
        }
    },
    showAll(){
        return async ctx =>{
            ctx.body = await indexM.selectAll();
        }
    },
    showInfo(){
        return async ctx => {
            const id = ctx.request.query.id;
            ctx.body = await indexM.showInfo(id);
        }
    },
    edit(){
        return async ctx =>{
            const id = ctx.request.query.id;
            const name = ctx.request.query.name;
            ctx.body = await indexM.edit(id,name);
        }
    },
    add(){
        return async ctx =>{
            const id = ctx.request.query.id;
            const name = ctx.request.query.name;
            ctx.body = await indexM.add(id,name);
        }
    },
    delete(){
        return async ctx =>{
            const id = ctx.request.query.id;
            ctx.body = await indexM.delete(id);
        }
    }

}

module.exports = indexController;