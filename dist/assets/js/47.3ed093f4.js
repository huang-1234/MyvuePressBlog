(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{551:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cra执行setupproxy-js的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cra执行setupproxy-js的"}},[t._v("#")]),t._v(" CRA执行setupProxy.js的？")]),t._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在讲述原理之前，我们先抛出一个问题：为什么直接在"),a("code",[t._v("src")]),t._v("目录下创建"),a("code",[t._v("setupProxy.js")]),t._v("文件就可以进行跨域请求了？下面带着这个问题来探索一番。")])]),t._v(" "),a("li",[a("p",[t._v("既然在"),a("code",[t._v("react-scripts start")]),t._v("启动项目之后就可以跨域请求，肯定是在生成本地服务过程中引入某个代理中间件并根据"),a("code",[t._v("setupProxy.js")]),t._v("配置配置中间件。就相当于"),a("code",[t._v("express")]),t._v("项目中先生成"),a("code",[t._v("express")]),t._v("实例，然后再使用实例的"),a("code",[t._v("use")]),t._v("方法配置中间件：")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bodyParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'body-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用body-parser解析请求body参数")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bodyParser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("http-proxy-middleware")]),t._v("中间件的使用")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-proxy-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://10.119.168.87:4000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("4 当运行"),a("code",[t._v("react-scripts start")]),t._v("时会执行"),a("code",[t._v("scripts")]),t._v("目录下的"),a("code",[t._v("start.js")]),t._v("脚本")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("如引入")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("config"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("目录下的")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("以及基础构建脚本")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("和")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("devServer"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("服务配置文件")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("webpackDevServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[a("blockquote",[a("p",[a("code",[t._v("paths.js")]),t._v("存放的是一些文件路径映射，比如我们的代理配置文件"),a("code",[t._v("setupProxy.js")]),t._v("的路径"),a("code",[t._v("webpack.config.js")]),t._v("就是基础的构建配置，比如样式加载解析、代码压缩等等。"),a("code",[t._v("webpackDevServer.config.js")]),t._v("配置的就是我们的本地服务，包括我们的跨域请求")])])]),t._v(" "),a("li",[a("p",[t._v("引入上述文件后，"),a("code",[t._v("start.js")]),t._v("中生成一个本地服务实例（"),a("code",[t._v("const app = express()")]),t._v("）后会根据构建、代理配置文件等配置中间件，然后启动服务")])])]),t._v(" "),a("p",[t._v("其实，创建本地服务使用的是"),a("code",[t._v("webpack-dev-server")]),t._v("包，而这个包是基于"),a("code",[t._v("express")]),t._v("实现的")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const WebpackDevServer = require('webpack-dev-server');\nconst devServer = new WebpackDevServer(compiler, serverConfig);\n")])])]),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/zhaoweikai/p/9969282.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("http-proxy-middleware用于后台将请求转发给其它服务器。")]),t._v(" "),a("p",[t._v("例如：我们当前主机A为"),a("a",{attrs:{href:"https://link.jianshu.com/?t=http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/"),a("OutboundLink")],1),t._v("，现在浏览器发送一个请求，请求接口/api，这个请求的数据在另外一台服务器B上（http://10.119.168.87:4000），这时，就可通过在A主机设置代理，直接将请求发送给B主机。")]),t._v(" "),a("p",[t._v("简单实现代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1 let express = require('express');\n2 let proxy = require('http-proxy-middleware');\n3 \n4 let app = express();\n5 \n6 app.use('/api', proxy({target: 'http://10.119.168.87:4000', changeOrigin: true}));\n7 app.listen(3000);\n")])])]),a("p",[t._v("说明：我们利用express在3000端口启动了一个小型的服务器，利用了"),a("code",[t._v("app.use('/api', proxy({target: 'http://10.119.168.87:4000/', changeOrigin: true}))")]),t._v("这句话，使发到3000端口的/api请求转发到了4000端口。即请求"),a("code",[t._v("http://localhost:3000/api")]),t._v("相当于请求http://10.119.168.87:4000"),a("code",[t._v("/api")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("安装")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev http-proxy-middleware\n")])])]),a("p",[a("font",{attrs:{color:"red"}},[t._v("proxy([context,] config)")])],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-proxy-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" apiProxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("下面是使用Express构建服务器")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-proxy-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proxy 中间件的选择项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标服务器 host")]),t._v("\n        changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认false，是否需要改变原始主机头为目标URL")]),t._v("\n        ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否代理websockets")]),t._v("\n        pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api/old-path'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/new-path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api/remove/path'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同上")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果请求主机 == 'dev.localhost:3000',")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev.localhost:3000'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8000'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" exampleProxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建代理")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用代理")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exampleProxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-1-参数一-context-详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-参数一-context-详解"}},[t._v("#")]),t._v(" 3.1 参数一**[context]**详解")]),t._v(" "),a("p",[t._v("下边是一个完整地址划分：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8042")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("over"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("there"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ferret#nose\n \\_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  \\______________"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\_________"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" \\_________"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" \\__"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n协议          主机         路径          查询     碎片\n")])])]),a("p",[t._v("第一个参数主要设置要代理的路径，该参数具有如下用法：")]),t._v(" "),a("p",[a("strong",[t._v("1）可以省略")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("proxy({...})")]),t._v("：匹配任何路径，所有请求将被转发；")])]),t._v(" "),a("p",[a("strong",[t._v("2）可以设置为路径字符串")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("proxy('/', {...})")]),t._v(" ：匹配任何路径，所有请求将被转发；")]),t._v(" "),a("li",[a("code",[t._v("proxy('/api', {...})")]),t._v("：匹配/api开头的请求")])]),t._v(" "),a("p",[a("strong",[t._v("3）可以设置为数组")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("proxy(['/api', '/ajax', '/someotherpath'], {...}) ：匹配多个路径")])])]),t._v(" "),a("p",[a("strong",[t._v("4）可以设置为函数（自定义配置规则）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("filter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" apiProxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("5）可以设置为通配符")])]),t._v(" "),a("p",[t._v("细粒度的匹配可以使用通配符匹配，Glob 匹配模式由 micromatch创造，访问 "),a("a",{attrs:{href:"https://link.jianshu.com/?t=https://www.npmjs.com/package/micromatch",target:"_blank",rel:"noopener noreferrer"}},[t._v("micromatch"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://link.jianshu.com/?t=https://www.npmjs.com/package/glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("glob"),a("OutboundLink")],1),t._v(" 查找更多用例。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("proxy('**', {...})")]),t._v(" 匹配任何路径，所有请求将被转发；")]),t._v(" "),a("li",[a("code",[t._v("proxy('**/*.html', {...})")]),t._v(" 匹配任何以.html结尾的请求；")]),t._v(" "),a("li",[a("code",[t._v("proxy('/*.html', {...})")]),t._v(" 匹配当前路径下以html结尾的请求；")]),t._v(" "),a("li",[a("code",[t._v("proxy('/api/**/*.html', {...})")]),t._v(" 匹配/api下以html为结尾的请求；")]),t._v(" "),a("li",[a("code",[t._v("proxy(['/api/**', '/ajax/**'], {...})")]),t._v(" 组合")]),t._v(" "),a("li",[a("code",[t._v("proxy(['/api/**', '!**/bad.json'], {...})")]),t._v(" 不包括"),a("code",[t._v("**/bad.json")])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-参数二config详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-参数二config详解"}},[t._v("#")]),t._v(" 3.2 参数二config详解")]),t._v(" "),a("p",[t._v("该接口是一个对象，里边包含的参数有如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proxy 中间件的选择项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.org'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标服务器 host")]),t._v("\n        changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认false，是否需要改变原始主机头为目标URL")]),t._v("\n        ws"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否代理websockets")]),t._v("\n        pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api/old-path'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/new-path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     \n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api/remove/path'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同上")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        router"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果请求主机 == 'dev.localhost:3000',")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev.localhost:3000'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8000'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建代理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" exampleProxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("1）target")]),t._v(" :用于设置目标服务器host。")]),t._v(" "),a("p",[a("strong",[t._v("2）changeOrigin")]),t._v(":默认false，是否需要改变原始主机头为目标URL。")]),t._v(" "),a("p",[a("strong",[t._v("3）ws")]),t._v("：设置是否代理websockets。")]),t._v(" "),a("p",[a("strong",[t._v("4）pathRewrite")]),t._v("：重写目标url路径。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写")]),t._v("\npathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/old/api'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/new/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除")]),t._v("\npathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/remove/api'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加")]),t._v("\npathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/basepath/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pathRewrite")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/base/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("5）router:重写指定请求转发目标。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用主机或者路径进行匹配，返回最先匹配到结果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以配置的顺序很重要")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'integration.localhost:3000'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// host only")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'staging.localhost:3000'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8002'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// host only")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost:3000/api'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8003'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// host + path")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/rest'")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8004'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path only")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("router")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8004'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),a("blockquote",[a("p",[t._v("http-proxy-middleware实际是用http-proxy库实现代理中间件功能。")])]),t._v(" "),a("p",[a("strong",[t._v("1）proxy([context,] config)，这步是执行了源码中HttpProxyMiddleware方法，该方法核心内容是调用httpProxy.createProxyServer()方法创建一个代理服务，并且在该方法最后返回一个middleware。")])]),t._v(" "),a("p",[t._v("httpProxy官网：https://github.com/nodejitsu/node-http-proxy#core-concept")]),t._v(" "),a("p",[a("strong",[t._v("2）分析返回值middleware是一个函数，该函数核心是用上边创建的proxy服务返回值，调用web方法，用于转发请求。")])]),t._v(" "),a("p",[a("strong",[t._v("3）app.use('/api', proxy（options）)，相当于本地服务器监听到客户端请求的‘/api’接口时，执行的回到是上边的middleware中间件函数，从上边可以看出，该函数中将请求转发到代理服务器。")])]),t._v(" "),a("p",[a("strong",[t._v("总结：http-proxy-middleware实际就是将http-proxy封装，使用起来更加方便简单。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);