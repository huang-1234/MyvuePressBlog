## Git push

​    在使用git commit命令将修改从暂存区提交到本地版本库后，只剩下最后一步将本地版本库的分支推送到远程服务器上对应的分支了，如果不清楚版本库的构成，可以查看我的另一篇，git 仓库的基本结构。

  git push的一般形式为 git push <远程主机名> <本地分支名>  <远程分支名> ，例如 git push origin master: refs/for/master ，即是将本地的master分支推送到远程主机origin上的对应master分支， origin 是远程主机名，

  第一个master是本地分支名，第二个master是远程分支名。

### 1.1 git push origin master

​    如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建

   ### 1.2 git push origin ：refs/for/master 

　　如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin --delete master

  ### 1.3 git push origin

　　 如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支 

　### 1.4 git push

　　如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名

　### 1.5 git push 的其他命令

　　这几个常见的用法已足以满足我们日常开发的使用了，还有几个扩展的用法，如下：

　　　　（1） git push -u origin master 如果当前分支与多个主机存在追踪关系，则可以使用 -u 参数指定一个默认主机，这样后面就可以不加任何参数使用git push，

　　　　　　不带任何参数的git push，默认只推送当前分支，这叫做simple方式，还有一种matching方式，会推送所有有对应的远程分支的本地分支， Git 2.0之前默认使用matching，现在改为simple方式

　　　　　　如果想更改设置，可以使用git config命令。git config --global push.default matching OR git config --global push.default simple；可以使用git config -l 查看配置

　　　　（2） git push --all origin 当遇到这种情况就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要 -all 选项

　　　　（3） git push --force origin git push的时候需要本地先git pull更新到跟服务器版本一致，如果本地版本库比远程服务器上的低，那么一般会提示你git pull更新，如果一定要提交，那么可以使用这个命令。

　　　　（4） git push origin --tags //git push 的时候不会推送分支，如果一定要推送标签的话那么可以使用这个命令

　### 1.6 关于 refs/for

　　// refs/for 的意义在于我们提交代码到服务器之后是需要经过code review 之后才能进行merge的，而refs/heads 不需要

学习无他法，唯有持之以恒

## 执行git push时，由于代码冲突

```js
git pull --rebase #衍合服务器最新代码
git status #查看有哪些冲突的文件
vi 冲突文件 #打开文件后搜索<<<<<<<与>>>>>>>之间的内容，就是冲突的地方，修改冲突行，保存退出。
git add 冲突文件 #添加修改后的文件到缓存区
git rebase --continue #继续rebase
git log #如果rebase成功，表示冲突已解决，此时可以查看log
git commit --amend #修改最后一次提交，包括文件与注释
git push #重新push提交
```

### $ git push origin

上面命令表示，将当前分支推送到origin主机的对应分支。 

如果当前分支只有一个追踪分支，那么主机名都可以省略。 

$ git push 如果当前分支与多个主机存在追踪关系，那么这个时候-u选项会指定一个默认主机，这样后面就可以不加任何参数使用git push。

$ git push -u origin master 上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。

 不带任何参数的git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。

## pull and push

一、pull操作
1、将远程指定分支 拉取到 本地指定分支上：



git pull origin <远程分支名>:<本地分支名>

（注：命令里的尖括号<>只是包裹中文的标识，方便你看的，实际使用时不用写，不过冒号需要）

2、将远程指定分支 拉取到 本地当前分支上：
```bash
git pull origin <远程分支名>
```

3、将与本地当前分支同名的远程分支 拉取到 本地当前分支上(需先关联远程分支，方法见文章末尾，只需关联一次)
```bash
git pull
```

在克隆远程项目的时候，本地分支会自动与远程仓库建立追踪关系，可以使用默认的origin来替代远程仓库名

二、push操作
1、将本地当前分支 推送到 远程指定分支上（注意：pull是远程在前本地在后，push相反）：
```bash
git push origin <本地分支名>:<远程分支名>
```
2、将本地当前分支 推送到 与本地当前分支同名的远程分支上（注意：pull是远程在前本地在后，push相反）：
```bash
git push origin <本地分支名>
```
3、将本地当前分支 推送到 与本地当前分支同名的远程分支上(需先关联远程分支，方法见文章末尾)
```bash
git push
```

附：
将本地分支与远程同名分支相关联
```bash
git push --set-upstream origin <本地分支名>
```
// 简写方式
```bash
git push -u origin <本地分支名>
```