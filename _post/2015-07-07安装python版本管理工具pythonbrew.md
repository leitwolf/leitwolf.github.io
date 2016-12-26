---
filename: install-pythonbrew
title: 安装python版本管理工具pythonbrew
date: 2015-07-07 20:40:00
category: python
tags: pythonbrew
---
{{original}}

鉴于python各版本的不兼容性，一直想安装一个python的版本管理工具。今天终于抽出空来实践了一把。

我安装的是[pythonbrew](https://pypi.python.org/pypi/pythonbrew)。

# 安装

```shell
curl -kL http://xrl.us/pythonbrewinstall | bash
```
# 配置
在`~/.bash_profile`中添加：

```shell
[[ -s $HOME/.pythonbrew/etc/bashrc ]] && source $HOME/.pythonbrew/etc/bashrc
```
<!-- more -->
# 更新

```shell
pythonbrew update
```
# 类库
我是通过`homebrew`安装`openssl`的，但安装完并没有软链接，导致之后安装的python并不成功，所以要先调整一下。

具体方法是执行一下以下命令：

```shell
brew link openssl
```
其它有相似情况的类库也照些处理。

# 安装python

```shell
pythonbrew install 2.7.10
pythonbrew install 3.4.3
```
# 转换当前python环境

```shell
pythonbrew switch 2.7.10
```
# 列出已安装的python环境

```shell
pythonbrew list
```
# 卸载python

```shell
pythonbrew uninstall 2.7.10
```
# 清除下载的源文件及编译生成的临时文档

```shell
pythonbrew cleanup
```
