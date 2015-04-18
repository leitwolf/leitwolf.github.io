---
title: 使用ssh方式上传到github
date: 2015/03/18 11:19:00
categories: 随笔
tags: 
- github
- ssh github
---
原链接地址：[http://lonewolf.name/blog/2015/03/18/github-ssh/](http://lonewolf.name/blog/2015/03/18/github-ssh/)
原创博客，转载请注明。

---

昨天上传东西到github的时候，又发生错误了，之前也遇到过：

```shell
unable to access 'https://github.com/xxx': Empty reply from server
```
网上有人说这是被**“墙”**的原因，可以用ssh的方式上传，于是试了一下，今天上传果然可以。

github官方也有详细的介绍
[https://help.github.com/articles/generating-ssh-keys/](https://help.github.com/articles/generating-ssh-keys/)
以下以mac为例。
<!--more-->
#在本地生成ssh-key
* 打开终端，输入以下文字：

```shell
ssh-keygen -t rsa
```

* 接着会提示你，这个时候只要回车即可：

```shell
Enter file in which to save the key (/Users/you/.ssh/id_rsa):
```

* 之后是输入两次密码，密码要**4位数**以上的：

```shell
Enter passphrase (empty for no passphrase):
Enter same passphrase again: 
```
这个时候就有两个文件`~/.ssh/id_rsa`和`~/.ssh/id_rsa.pub`生成了。

* 添加ssh-key

```shell
ssh-add ~/.ssh/id_rsa
```
* 测试一下是否成功。

```shell
ssh -T git@github.com
```
出现`successfully authenticated`即是成功。

* 复制ssh-key进剪贴板

```shell
pbcopy < ~/.ssh/id_rsa.pub
```

#在github上设置
* 进github的网站
[https://github.com/settings/ssh](https://github.com/settings/ssh)
* 添加ssh key
![ssh-add-ssh-key](https://help.github.com/assets/images/help/settings/ssh-add-ssh-key.png)

在以下的界面中，title可以随便填写，在key一栏粘贴即可。

![ssh-key-paste](https://help.github.com/assets/images/help/settings/ssh-key-paste.png)

最后点击按钮。

![ssh-add-key](https://help.github.com/assets/images/help/settings/ssh-add-key.png)

#sourcetree
如果用sourcetree的话，就要把远程库`https://github.com/～.git`改成`git@github.com:～.git`

最后重启一下机子。