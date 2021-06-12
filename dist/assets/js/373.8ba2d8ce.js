(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{885:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack热加载插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack热加载插件"}},[t._v("#")]),t._v(" WebPack热加载插件")]),t._v(" "),a("h2",{attrs:{id:"优化自动刷新的性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化自动刷新的性能"}},[t._v("#")]),t._v(" 优化自动刷新的性能")]),t._v(" "),a("p",[a("code",[t._v("devServer.inline")]),t._v("是用来控制是否往"),a("code",[t._v("Chunk")]),t._v("中注入代理客户端的，默认会注入。 事实上，在开启"),a("code",[t._v("inline")]),t._v("时，DevServer会为每个输出的"),a("code",[t._v("Chunk")]),t._v("中注入代理客户端的代码，当你的项目需要输出的"),a("code",[t._v("Chunk")]),t._v("有很多个时，这会导致你的构建缓慢。 其实要完成自动刷新，一个页面只需要一个代理客户端就行了，DevServer之所以粗暴的为每个"),a("code",[t._v("Chunk")]),t._v("都注入，是因为它不知道某个网页依赖哪几个"),a("code",[t._v("Chunk")]),t._v("，索性就全部都注入一个代理客户端。 网页只要依赖了其中任何一个"),a("code",[t._v("Chunk")]),t._v("，代理客户端就被注入到网页中去。")]),t._v(" "),a("p",[t._v("这里优化的思路是关闭还不够优雅的"),a("code",[t._v("inline")]),t._v("模式，只注入一个代理客户端。 为了关闭"),a("code",[t._v("inline")]),t._v("模式，在启动DevServer时，可通过执行命令"),a("code",[t._v("webpack-dev-server --inline false")]),t._v("（也可以在配置文件中设置），这时输出的日志如下：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("inline "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\nProject "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("running")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("at")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nwebpack output "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("served")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5a43fc44b5e85f4c2cf1\nVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.5")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".5")]),t._v("\nTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1130ms\n        Asset    Size  Chunks                    Chunk Names\n    bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),t._v(" kB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("big")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\nbundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("897")]),t._v(" kB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         main\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.29")]),t._v(" kB "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("built")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("169")]),t._v(" hidden modules\n")])])]),a("p",[t._v("要开发的网页被放进了一个"),a("code",[t._v("iframe")]),t._v("中，编辑源码后，"),a("code",[t._v("iframe")]),t._v("会被自动刷新。 同时你会发现构建时间从1566ms减少到了1130ms，说明优化生效了。构建性能提升的效果在要输出的"),a("code",[t._v("Chunk")]),t._v("数量越多时会显得越突出。\n如果你不想通过"),a("code",[t._v("iframe")]),t._v("的方式去访问，但同时又想让网页保持自动刷新功能，你需要手动往网页中注入代理客户端脚本，往"),a("code",[t._v("index.html")]),t._v("中插入以下标签：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--注入 DevServer 提供的代理客户端脚本，这个服务是 DevServer 内置的--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://localhost:8080/webpack-dev-server.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("给网页注入以上脚本后，独立打开的网页就能自动刷新了。但是要注意在发布到线上时记得删除掉这段用于开发环境的代码。")]),t._v(" "),a("h2",{attrs:{id:"开启模块热替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启模块热替换"}},[t._v("#")]),t._v(" 开启模块热替换")]),t._v(" "),a("p",[t._v("要做到实时预览，除了使用自动刷新刷新整个网页外，DevServer还支持一种叫做模块热替换("),a("code",[t._v("Hot Module Replacement")]),t._v(")的技术可在不刷新整个网页的情况下做到超灵敏的实时预览。 原理是当一个源码发生变化时，只重新编译发生变化的模块，再用新输出的模块替换掉浏览器中对应的老模块。\n模块热替换技术的优势有：")]),t._v(" "),a("ul",[a("li",[t._v("实时预览反应更快，等待时间更短。")]),t._v(" "),a("li",[t._v("不刷新浏览器能保留当前网页的运行状态，例如在使用Redux来管理数据的应用中搭配模块热替换能做到代码更新时Redux中的数据还保持不变。")])]),t._v(" "),a("p",[t._v("总的来说模块热替换技术很大程度上的提高了开发效率和体验。")]),t._v(" "),a("h4",{attrs:{id:"模块热替换的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块热替换的原理"}},[t._v("#")]),t._v(" 模块热替换的原理")]),t._v(" "),a("p",[t._v("模块热替换的原理和自动刷新原理类似，都需要往要开发的网页中注入一个代理客户端用于连接DevServer和网页， 不同在于模块热替换独特的模块替换机制。\nDevServer默认不会开启模块热替换模式，要开启该模式，只需在启动时带上参数"),a("code",[t._v("--hot")]),t._v("，完整命令是"),a("code",[t._v("webpack-dev-server --hot")]),t._v("。\n除了通过在启动时带上"),a("code",[t._v("--hot")]),t._v("参数，还可以通过接入"),a("code",[t._v("Plugin")]),t._v("实现，相关代码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HotModuleReplacementPlugin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack/lib/HotModuleReplacementPlugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为每个入口都注入代理客户端")]),t._v("\n    main"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-dev-server/client?http://localhost:8080/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack/hot/dev-server'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该插件的作用就是实现模块热替换，实际上当启动时带上 `--hot` 参数，会注入该插件，生成 .hot-update.json 文件。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HotModuleReplacementPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 告诉 DevServer 要开启模块热替换模式")]),t._v("\n    hot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在启动Webpack时带上参数"),a("code",[t._v("--hot")]),t._v("其实就是自动为你完成以上配置。")])])}),[],!1,null,null,null);s.default=n.exports}}]);