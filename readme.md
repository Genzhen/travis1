1.github 新建项目，将项目代码上传到github
2.将github的秘钥通过点击travis的setting将秘钥设置到traivs，将traivs于github关联起来
3.将本地代码上传，在项目目录
git init
git add .
git commit -m "测试"
git remote add origin https://github.com/WangGenzhen/travis1.git
git push -u origin master