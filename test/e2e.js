
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:3000/index');
    await driver.findElement(By.id('see')).click();
  } finally {
    await driver.quit();
  }
})();    



// var webdriver = require('selenium-webdriver'), driver;
 
// driver = new webdriver.Builder().
//   withCapabilities({
//     'browserName': 'firefox',
//     'platform': 'VISTA',
//     'version': 'latest',
//     'client_key': process.env.TESTINGBOT_KEY,
//     'client_secret': process.env.TESTINGBOT_SECRET,
//     'name': (process.env.TRAVIS_JOB_ID ? ("Travis Build " + process.env.TRAVIS_JOB_ID) : "Simple Test")
//   }).
//   usingServer("https://" + TESTINGBOT_KEY + ":" + TESTINGBOT_SECRET +
//               "@hub.testingbot.com/wd/hub").
//   build();
 
// driver.get('https://www.google.com');
 
// driver.getTitle().then(function (title) {
//     console.log("title is: " + title);
// });
 
// driver.quit();      



// import { Selector } from 'testcafe';

// fixture `Getting Started`
//     .page `http://devexpress.github.io/testcafe/example`;

// test('My first test', async t => {
//     await t
//         .typeText('#developer-name', 'John Smith')
//         .click('#submit-button')

//         // Use the assertion to check if the actual header text is equal to the expected one
//         .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
// });










// const webdriver = require('selenium-webdriver');
// const By = webdriver.By;
// const driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();
// driver.get('http://localhost:3000/index')
//     .then(function () {
//         driver.findElement(By.id('pramise_count')).click();
//         // driver.executeScript(`var url=$('.imgrow img').attr('src');console.log(url);window.open(url);`)
//     }).catch(function (e) {
//         console.log(e);
//     });








//jasmine-node
// describe('查看按钮点击返回json数据', function () {
//     it('should be on correct page', function () {
//         driver.get('http://localhost:3000/index');
//         driver.getTitle().then(function (title) {
//             console.log(title);
//             expect(title).toBe('图书馆管理系统');
//             done();
//         });
//     });
// })