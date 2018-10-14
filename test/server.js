const supertest = require("supertest");
const should = require('should');
const app = require("../app.js");

const request = supertest(app.listen());
describe("接口测试", function () {
    it("数据添加成功", function (done) {
        request
            .get("/index/add1")
            .query({
                id: '1',
                name: "wang"
            })
            .expect(404)
            .end(function (err, res) {
                // should(null).not.be.ok();
                res.status.should.equal(404);
                should.not.exist(err);
                should.exists(res);
                done();
            })
    })
    // it("数据添加失败", function (done) {
    //     request
    //         .get("/index/add")
    //         .query({
    //             id: '1',
    //             name:"wang"
    //         })
    //         .expect(200)
    //         .end(function (err, res) {
    //             should.not.exist(err);
    //             res.body.status.should.equal('0');
    //             done(err);
    //         })
    // })
    // it("数据全部显示", function (done) {
    //     request
    //         .get("/index/index")
    //         .set('Accept', 'application/json')
    //         .expect(200)
    //         .end(function (err, res) {
    //             if (err) return done(err);
    //             done();
    //         })
    // })
    // it("数据详细信息", function (done) {
    //     request
    //         .get("/index/show")
    //         .query({
    //             id: 1
    //         })
    //         .expect(200)
    //         .end(function (err, res) {
    //             should.not.exist(err);
    //             res.body.name.should.equal('wang');
    //             done(err);
    //         })
    // })
    // it("数据修改", function (done) {
    //     request
    //         .get("/index/edit")
    //         .query({
    //             id: 1,
    //             name:"long"
    //         })
    //         .expect(200)
    //         .end(function (err, res) {
    //             should.not.exist(err);
    //             res.body.status.should.equal('1');
    //             done(err);
    //         })
    // })
    // it("数据删除", function (done) {
    //     request
    //         .get("/index/delete")
    //         .query({
    //             id: '1',
    //         })
    //         .expect(200)
    //         .end(function (err, res) {
    //             should.not.exist(err);
    //             res.body.status.should.equal('1');
    //             done(err);
    //         })
    // })
})