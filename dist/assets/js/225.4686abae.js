(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{738:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用pm2部署nodejs-full"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用pm2部署nodejs-full"}},[s._v("#")]),s._v(" 使用pm2部署Nodejs Full")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("最近用node写了一个小型的项目，项目完成后到了部署的阶段，才开始考虑怎样才能更好的监控项目。在node的开发过程中有很多痛点，最让人忍受不了的就是文件修改后服务的重启，需要不断的关闭进程，启动进程，后来研究了一下，发现可以用nodemon自动重启服务，方便了很多，但是项目需要上线的时候，发现nodemon不能后台运行，于是自己用python写了一个自动启停的脚本，可以实现后台运行，代码如下，")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node_status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   pids"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("ps aux|grep node|grep www|awk '{print $2}'")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("pids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    then\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    fi\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node_start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    node_status\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    then\n            nohup node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("claire"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n    fi\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node_stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    node_status\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    then\n            kill "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("pids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    fi\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node_restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    node_stop\n    sleep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    node_start\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node_defend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    node_status\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    then\n            node_start\n    fi\n    sleep "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    done\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ACTION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ACTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            node_start\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            node_stop\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            node_restart\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    defend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            node_defend\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("写python脚本的时候，如果用编辑器，需要将编码格式转成*"),a("strong",[s._v("unix格式*")]),s._v("，要不会报错，我用的nodepad++，修改方式为右键点击选择unix格式即可。")]),s._v(" "),a("p",[s._v("后来发现Nodejs有一个高大上的管理工具PM2，是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡。它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能。并且使用起来非常简单，赶快上手试试吧。")]),s._v(" "),a("h2",{attrs:{id:"nodejs安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs安装"}},[s._v("#")]),s._v(" Nodejs安装")]),s._v(" "),a("p",[s._v("之前nodejs安装，是去官方网站上下载安装包然后安装的，在使用pm2的过程中，了解到，***nvm***利器，可以方便切换nodejs版本，推荐用这个方法安装node。\n删除之前安装的node，查询全局安装的模块然后删除")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" list -g --depth "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("p",[s._v("执行curl过程中报错curl: (35) SSL connect error，执行")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum update nss\n")])])]),a("p",[s._v("最后执行")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\nnvm--version             //查看nvm是否安装成功\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" stable       //安装最新稳定版本\n")])])]),a("h2",{attrs:{id:"pm2安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2安装"}},[s._v("#")]),s._v(" PM2安装")]),s._v(" "),a("p",[s._v("安装环境")]),s._v(" "),a("ul",[a("li",[s._v("Linux x86_64")]),s._v(" "),a("li",[s._v("node v10.8.0")]),s._v(" "),a("li",[s._v("npm 6.2.0")])]),s._v(" "),a("p",[s._v("全局安装")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g\n")])])]),a("p",[s._v("安装成功后可直接启动")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pm2 start bin/www\n")])])]),a("h2",{attrs:{id:"nodejs部署方式-pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs部署方式-pm2"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/zzsdream/p/6898974.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nodejs部署方式-pm2"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("目前Nodejs开发中有很多痛点，其中有一个是修改完代码以后需要我们重启服务才能看到效果。这样一次次的杀进程、重启，杀进程、重启很让人头大。程序员是最痛恨重复工作的物种，之前有了解过的同学可能知道 "),a("code",[s._v("forever")]),s._v(" 。 "),a("code",[s._v("forever")]),s._v(" 可以帮我们解决上面的问题，通过对资源变化的检测做到变化后自动重启。开发阶段我们使用 "),a("code",[s._v("node file.js")]),s._v(" 来启动另外由于Nodejs的单线程，任何异常都会导致整个服务中断，这对于生产上长时间提供服务的程序来讲是不可以的， "),a("code",[s._v("forever")]),s._v(" 可以帮我们在异常后重启，保证服务一直在线，我想这也就是它名字的由来吧。但我想说的是 "),a("code",[s._v("forever")]),s._v(" 不够“高！大！上！”。接下来我要介绍一个足够高大上的神器– "),a("a",{attrs:{href:"http://pm2.keymetrics.io/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("pm2")]),s._v(" "),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[a("code",[s._v("pm2")]),s._v(" = "),a("strong",[s._v("P")]),s._v(" (rocess) "),a("strong",[s._v("M")]),s._v(" (anager)2，是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡。它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能。并且使用起来非常简单。下面我将把我的使用过程分享出来，Nodejs应用是一个基于Express 4.x的应用，名称是 "),a("code",[s._v("Wolverine")]),s._v(" 。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("环境清单：")]),s._v(" "),a("ul",[a("li",[s._v("windows7 x64")]),s._v(" "),a("li",[s._v("node v5.0.0")]),s._v(" "),a("li",[s._v("npm 3.3.6")])]),s._v(" "),a("p",[s._v("全局安装 "),a("code",[s._v("pm2")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g\n")])])]),a("p",[s._v("更新")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ pm2 update\n")])])]),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("p",[s._v("以前启动 "),a("code",[s._v("Wolverine")]),s._v(" 是利用package.json的 "),a("code",[s._v("scripts")]),s._v(" 来实现的，只需要执行 "),a("code",[s._v("npm run start")]),s._v(" 就可以启动，配置如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node ./bin/www"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node debug ./bin/www"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n")])])]),a("p",[s._v("使用 "),a("code",[s._v("pm2")]),s._v(" 我们可以在start处配置成 "),a("code",[s._v("pm2 ./bin/www")]),s._v(" ,命令后面支持加参数来实现watch、cluster多进程模式等功能。我不太喜欢一大串的命令，于是我使用了配置文件的方式。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("Wolverine")]),s._v(" 的根目录，我创建了一个 "),a("code",[s._v("processes.json")]),s._v(" 配置文件，配置文件内容如下，注释写的也很清楚了")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apps"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Wolverine"')]),s._v(",  //名称\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"script"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./bin/www"')]),s._v(", //程序入库\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),s._v(",           //根目录\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin"')]),s._v(",\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"common"')]),s._v(",\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"configs"')]),s._v(",\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),s._v(",\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"routes"')]),s._v(",\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"views"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",//需要监控的目录\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error_file"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/app-err.log"')]),s._v(",//错误输出日志\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"out_file"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/app-out.log"')]),s._v(",  //日志\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log_date_format"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YYYY-MM-DD HH:mm Z"')]),s._v(" //日期格式\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("随后，我在package.json中增加了一条")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2 start processes.json"')]),s._v("\n")])])]),a("p",[s._v("在启动就直接输入如下命令就好：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run pm2\n")])])]),a("p",[s._v("看到下面的界面，就启动成功了，然后我们就可以关掉这个窗口了，服务不会因此停止，是不是高大上多了。")]),s._v(" "),a("h2",{attrs:{id:"管理和监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理和监控"}},[s._v("#")]),s._v(" 管理和监控")]),s._v(" "),a("p",[s._v("启动成功的界面会展示App name和id，这两个值很重要。当然这两个值都可以在processes.json配置文件进行配置。")]),s._v(" "),a("p",[s._v("打开命令行，在任何路径下，输入")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ pm2 list\n")])])]),a("p",[s._v("就能看到启动时的图表界面，方便我们查看所有通过pm2管理的Nodejs服务。")]),s._v(" "),a("p",[s._v("输入,下面命令配合id或者name可以查看某一个进程的详细信息")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pm2 show Wolverine 或者\n$ pm2 show 0\n")])])]),a("p",[s._v("内容涉及重启次数、运行时间、脚本路径、参数、日志路径、运行模式等等信息")]),s._v(" "),a("p",[s._v("输入")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pm2 monit\n")])])]),a("p",[s._v("停止、重启等命令")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pm2 stop [app-name|id]  #停止某一个进程，可以使用app-name或者id\n$ pm2 stop all            #停止所有进程\n\n$ pm2 restart all         #重启所有的进程\n\n$ pm2 delete [app-name|id]#删除并停止进程\n$ pm2 delete all          #删除并停止所有进程\n")])])]),a("p",[s._v("可以进一步查看每一个服务的cpu、内存动态占用情况。")]),s._v(" "),a("h2",{attrs:{id:"日志监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志监控"}},[s._v("#")]),s._v(" 日志监控")]),s._v(" "),a("p",[s._v("如果你一直使用 "),a("code",[s._v("tail -f log_file.log log_error.log")]),s._v(" 来查看日志，你可能会爱上下面的这个功能。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pm2 logs\n$ pm2 logs [app-name]\n")])])]),a("p",[s._v("我们可以实时查看全部进程的日志，或者只查看某一个。我们甚至可以使用json格式查看日志。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pm2 logs --json\n")])])]),a("h2",{attrs:{id:"web-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-api"}},[s._v("#")]),s._v(" Web API")]),s._v(" "),a("p",[s._v("如果你不仅仅想监控被pm2管理的进程，还需要监控进程所运行的机器的信息，你可以使用下面这个API")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ pm2 web\n")])])]),a("p",[s._v("pm2会启动一个叫做pm2-http-interface的进程提供web服务。你打开浏览器输入http：//127.0.0.1:9615，是不是被看到的结果惊艳到了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);