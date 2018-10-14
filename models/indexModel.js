const rp = require("request-promise");
const indexModel = {
    selectAll() {
        const options = {
            method: 'GET',
            uri: 'http://localhost/libriy_mock/index.php',
            json:true
        };
        return new Promise((resolve,reject)=>{
            rp(options)
            .then(function (result) {
                // console.log(result);
                resolve(result);
            })
            .catch(function (err) {
                reject(err);
            });
        })
    },
    showInfo(id){
        const options = {
            method: 'GET',
            uri: 'http://localhost/libriy_mock/index.php',
            qs:{
                id:id
            },
            json:true
        };
        return new Promise((resolve,reject)=>{
            rp(options)
            .then(function (result) {
                resolve(result);
            })
            .catch(function (err) {
                reject(err);
            });
        })
    },
    edit(id,name){
        const options = {
            method: 'GET',
            uri: 'http://localhost/libriy_mock/index.php',
            qs:{
                id:id,
                name:name
            },
            json:true
        };
        return new Promise((resolve,reject)=>{
            rp(options)
            .then(function (result) {
                resolve(result);
            })
            .catch(function (err) {
                reject(err);
            });
        })
    },
    add(id,name){
        const options = {
            method: 'GET',
            uri: 'http://localhost/libriy_mock/index.php',
            qs:{
                id:id,
                name:name
            },
            json:true
        };
        return new Promise((resolve,reject)=>{
            rp(options)
            .then(function (result) {
                resolve(result);
            })
            .catch(function (err) {
                const data = { status: '0', info: '添加失败'};
                resolve(data);
                // reject(data);
            });
        })
    },
    delete(id){
        const options = {
            method: 'GET',
            uri: 'http://localhost/libriy_mock/index.php',
            qs:{
                id:id
            },
            json:true
        };
        return new Promise((resolve,reject)=>{
            rp(options)
            .then(function (result) {
                resolve(result);
            })
            .catch(function (err) {
                reject(err);
            });
        })
    }
}
module.exports = indexModel;