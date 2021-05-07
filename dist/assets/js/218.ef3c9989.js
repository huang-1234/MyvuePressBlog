(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{724:function(t,a,r){"use strict";r.r(a);var i=r(6),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"git简单使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git简单使用"}},[t._v("#")]),t._v(" Git简单使用")]),t._v(" "),r("h2",{attrs:{id:"什么是git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是git"}},[t._v("#")]),t._v(" 什么是git")]),t._v(" "),r("p",[t._v("Git(读音为/gɪt/),是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。\n　　Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),t._v(" "),r("p",[t._v("优点：")]),t._v(" "),r("ol",[r("li",[t._v("适合分布式开发，强调个体。")]),t._v(" "),r("li",[t._v("公共服务器压力和数据量都不会太大。")]),t._v(" "),r("li",[t._v("速度快、灵活。")]),t._v(" "),r("li",[t._v("任意两个开发者之间可以很容易的解决冲突。")]),t._v(" "),r("li",[t._v("离线工作。\n"),r("a",{attrs:{href:"https://www.progit.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("成为Git专家"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"上传项目到git的操作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#上传项目到git的操作流程"}},[t._v("#")]),t._v(" 上传项目到git的操作流程")]),t._v(" "),r("h3",{attrs:{id:"_1-本地安装git"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地安装git"}},[t._v("#")]),t._v(" 1.本地安装Git")]),t._v(" "),r("p",[t._v("这个步骤网上教程很多")]),t._v(" "),r("p",[t._v("可参考：https://jingyan.baidu.com/article/9f7e7ec0b17cac6f2815548d.html")]),t._v(" "),r("h3",{attrs:{id:"_2-进入你想上传的项目文件夹下-然后右键点击"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-进入你想上传的项目文件夹下-然后右键点击"}},[t._v("#")]),t._v(" 2.进入你想上传的项目文件夹下，然后右键点击")]),t._v(" "),r("p",[t._v("Git Bash Here")]),t._v(" "),r("h3",{attrs:{id:"_3-配置你的用户名及邮箱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置你的用户名及邮箱"}},[t._v("#")]),t._v(" 3.配置你的用户名及邮箱")]),t._v(" "),r("p",[t._v('$ git config --global user.name "xxx"')]),t._v(" "),r("p",[t._v('$ git config --global user.email "xxx"')]),t._v(" "),r("h3",{attrs:{id:"_4-查看用户名及邮箱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看用户名及邮箱"}},[t._v("#")]),t._v(" 4.查看用户名及邮箱")]),t._v(" "),r("p",[t._v("$ git config user.name")]),t._v(" "),r("p",[t._v("$ git config user.email")]),t._v(" "),r("h3",{attrs:{id:"_5-初始化本地环境-把该项目变成可被git管理的仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-初始化本地环境-把该项目变成可被git管理的仓库"}},[t._v("#")]),t._v(" 5.初始化本地环境，把该项目变成可被git管理的仓库")]),t._v(" "),r("p",[t._v("$ git init")]),t._v(" "),r("h3",{attrs:{id:"_6-添加该项目下的所有文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-添加该项目下的所有文件"}},[t._v("#")]),t._v(" 6.添加该项目下的所有文件")]),t._v(" "),r("p",[t._v("$git add .  （注意这里有个点）")]),t._v(" "),r("h3",{attrs:{id:"_7-使用如下命令将文件添加到仓库中去"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用如下命令将文件添加到仓库中去"}},[t._v("#")]),t._v(" 7.使用如下命令将文件添加到仓库中去")]),t._v(" "),r("p",[t._v("$ git commit -m '本次提交的说明'（说明信息为必填项，最好是信息有意义，便于后期理解）")]),t._v(" "),r("h3",{attrs:{id:"_8-在远程端创建一个仓库-此处省略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-在远程端创建一个仓库-此处省略"}},[t._v("#")]),t._v(" 8.在远程端创建一个仓库（此处省略）")]),t._v(" "),r("p",[t._v("具体怎么创建，很简单，自己摸索或者百度")]),t._v(" "),r("h3",{attrs:{id:"_9-将本地代码库与远程代码库相关联"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-将本地代码库与远程代码库相关联"}},[t._v("#")]),t._v(" 9.将本地代码库与远程代码库相关联")]),t._v(" "),r("p",[t._v("$ git remote add origin https://gitee.com/qlqaq/projects/仓库名称")]),t._v(" "),r("h3",{attrs:{id:"_10-强制把远程仓库的代码跟新到当前分支上面。ps-如果仓库为空这一步可以跳过"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-强制把远程仓库的代码跟新到当前分支上面。ps-如果仓库为空这一步可以跳过"}},[t._v("#")]),t._v(" 10.强制把远程仓库的代码跟新到当前分支上面。ps:如果仓库为空这一步可以跳过")]),t._v(" "),r("p",[t._v("$ git pull --rebase origin master")]),t._v(" "),r("h3",{attrs:{id:"_11-将本地代码推送到指定远程的仓库中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-将本地代码推送到指定远程的仓库中"}},[t._v("#")]),t._v(" 11.将本地代码推送到指定远程的仓库中")]),t._v(" "),r("p",[t._v("$ git push -u origin master")]),t._v(" "),r("p",[r("strong",[t._v("解决方法共两步")]),t._v("\n1、移除\ngit remote rm origin\n2、再次连接\ngit remote add origin ‘仓库地址’")]),t._v(" "),r("p",[t._v("输入“git remote -v”查看项目远程地址。")]),t._v(" "),r("p",[t._v("输入“git branch -a”查看远程项目所有分支，红颜色分支代表当前所在分支，其他的所列的就是所有分支了。")]),t._v(" "),r("p",[t._v("输入“git log”查看历史提交信息。")]),t._v(" "),r("p",[t._v("输入“git status”检查下修改了什么内容。")]),t._v(" "),r("p",[t._v("输入“git remote show origin”查看当前仓库基本信息。")]),t._v(" "),r("h1",{attrs:{id:"一些使用git时出现的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一些使用git时出现的问题"}},[t._v("#")]),t._v(" 一些使用Git时出现的问题")]),t._v(" "),r("h2",{attrs:{id:"everything-up-to-date"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#everything-up-to-date"}},[t._v("#")]),t._v(" Everything up-to-date")]),t._v(" "),r("p",[t._v("出现这个问题的原因是git提交改动到缓存，要push的时候不会将本地所有的分支都push掉，所以出现这个问题。我们应该告诉git提交哪个分支。\n这里有种特殊的情况是如果你是fork别人的仓库再clone到本地的话，即使git上只有一个主分支，他还是可能出现这个错误。那么我们就需要新建分支提交改动然后合并分支。")]),t._v(" "),r("p",[t._v("接下来先创建一个新分支提交改动")]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[t._v("git branch newbranch\n然后输入这条命令检查是否创建成功\n"),r("span",{pre:!0,attrs:{class:"token command"}},[t._v("$ git branch")]),t._v("\n这时输出\n newbranch\n master\n")])])]),r("p",[t._v("这样就创建成功了，前面的*代表的是当前你所在的工作分支。我们接下来就要切换工作分支。\n$ git checkout newbranch\n这样就切换完了，可以 $ git branch确认下。然后你要将你的改动提交到新的分支上。\n$ git add .\n$ git commit -a\n此时可以 $ git status检查下提交情况。如果提交成功，我们接下来就要回主分支了，代码和之前一样。\n$ git checkout master\n然后我们要将新分支提交的改动合并到主分支上\n$ git merge newbranch\n合并分支可能产生冲突这是正常的，虽然我们这是新建的分支不会产生冲突，但还是在这里记录下。下面的代码可以查看产生冲突的文件，然后做对应的修改再提交一次就可以了。\n$ git diff\n我们的问题就解决了，接下来就可以push代码了。\n$ git push -u origin master\n新建分支的朋友别忘了删除这个分支\n$ git branch -D newbranch\n如果想保留分支只是想删除已经合并的部分只要把大写的D改成小写的d就行了。")]),t._v(" "),r("h3",{attrs:{id:"or-create-a-new-repository-on-the-command-line"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#or-create-a-new-repository-on-the-command-line"}},[t._v("#")]),t._v(" …or create a new repository on the command line")]),t._v(" "),r("div",{staticClass:"language-git extra-class"},[r("pre",{pre:!0,attrs:{class:"language-git"}},[r("code",[t._v("echo "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"# MyvuePressBlog"')]),t._v(" >> README.md\ngit init\ngit add README.md\ngit commit -m "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\ngit branch -M main\ngit remote add origin git@github.com:huang-1234/MyvuePressBlog.git\ngit push -u origin main\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);