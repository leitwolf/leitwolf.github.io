---
title: mysql启动故障排查
date: 2015/03/23 12:19:00
categories: webserver
tags: 
- mysql
---
原链接地址：[http://lonewolf.name/blog/2015/03/23/mysql-error/](http://lonewolf.name/blog/2015/03/23/mysql-error/)
原创博客，转载请注明。

---

昨天提到[用homebrew安装apache、php、mysql](http://lonewolf.name/blog/2015/03/22/homebrew-apache-php-mysql/)，运行得好好的，今天mysql却启动不了，在命令行下的提示为：

```
Starting MySQL..The server quit without updating PID file (/var/lib/mysql/pan.pan.pid
```
于是翻看日志。
<!-- more -->
#原因
日志中这么一句：

```
/usr/local/Cellar/mysql/5.6.23/bin/mysqld: Can't find file: './mysql/plugin.frm' (errno: 13 - Permission denied)
```
是权限问题，后面还有一堆的`ERROR`，不过应该是由这个引起的。

#解决1
mysql的数据文件是放在`/usr/local/var/mysql`这个路径下的。
对`./mysql/plugin.frm`授权：

```
sudo chmod 777 plugin.frm
```
启动之后还是不行。

#解决2
对整个目录：

```
sudo chown -R mysql:mysql /usr/local/var/mysql
```
重启后成功。