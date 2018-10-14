const index = require("./indexController");
const initController = {
    init(app,router){
        app.use(router(_=>{
            _.get("/index",index.index());//首页页面渲染
            _.get("/index/index",index.showAll());//首页数据显示
            _.get("/index/show",index.showInfo());//查看信息
            _.get("/index/edit",index.edit());//编辑信息
            _.get("/index/add",index.add());//添加信息
            _.get("/index/delete",index.delete());//删除信息

        }))
    }
};
module.exports = initController;