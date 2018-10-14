1.github 新建项目，将项目代码上传到github
2.将本地代码上传，在项目目录
git init
git add .
git commit -m "测试"
git remote add origin https://github.com/WangGenzhen/travis1.git
git push -u origin master
3.将github的秘钥通过点击travis的setting将秘钥设置到traivs，将traivs于github关联起来
4.现在应该可以检测到代码提交，并进行构建,但是会停留在输入密码，因为没有配置免密登陆

5.下一步配置秘钥，将代码自动部署到远程服务器，可以按照这个地址的服务器配置部分进行https://www.jianshu.com/p/1226d159d514

`ssh-keygen -t rsa`   然后一路回车即可
ssh-copy-id <登录部署服务器用户名>@<部署服务器地址> -p <部署服务器ssh端口>
例：端口号一般使用默认22的可以不进行设置
`ssh-copy-id root@140.143.202.200`
现在如果可以用下面登陆服务器，说明免密配置成功，接下来需要安装travis命令行工具
`ssh root@140.143.202.200`

# 安装travis命令行工具，如无法使用gem指令须先安装ruby
gem install travis

# --auto自动登录github帐号
travis login --auto

# 此处的--add参数表示自动添加脚本到.travis.yml文件中
travis encrypt-file ~/.ssh/id_rsa --add
# 这个命令会自动把 id_rsa 加密传送到 .git 指定的仓库对应的 travis 中去

执行完以后会发现在travis网站项目里面的环境变量里多了两个参数，就是添加github秘钥的地方

并且在.travis.yml里的before_install周期中多了下面这2行
- openssl aes-256-cbc -K $encrypted_97d432d3ed20_key -iv $encrypted_97d432d3ed20_iv
  -in id_rsa.enc -out ~\/.ssh/id_rsa -d
  默认生成的命令可能会在/前面带转义符\，我们不需要这些转义符，手动删掉所有的转义符，否则可能在后面引发莫名的错误
  之后为了保证命令的顺利运行，我们还需要正确地设置权限和认证

before_install
- openssl aes-256-cbc -K $encrypted_97d432d3ed20_key -iv $encrypted_97d432d3ed20_iv
  -in id_rsa.enc -out ~/.ssh/id_rsa -d
- chmod 600 ~/.ssh/id_rsa

最后，就是在after_script周期中，添加上传服务器的指令即可，在这里要注意，如果没有stricthostkeychecking=no参数，将构建失败
- scp -o stricthostkeychecking=no  -r ./* root@140.143.202.200:/usr/share/nginx/html/test   #拷贝该项目所有文件到服务器，只是为了测试自动部署流程