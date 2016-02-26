---
title: 使用git命名行
date: 2016/02/26 15:41
categories: git
tags: 
- git
---
原链接地址：[http://lonewolf.name/post/git-cmd.html](http://lonewolf.name/post/git-cmd.html)
原创博客，转载请注明。

---

现在已用vscode作为主力的代码编辑器了，它本身集成了git的大部分功能，只有加几个git命令就可以摆脱git图形客户端了。

#首先是配置ssh-key
教程地址:[https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

#配置全局用户名和邮箱地址

```shell
git config --global user.email "yourname@example.com"
git config --global user.name "yourname"
```

#克隆到本地

```shell
git clone git@github.com:yourname/repository.git site
```

之后其它的操作都可以在vscode中完成了。