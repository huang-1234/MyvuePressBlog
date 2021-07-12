(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{775:function(e,t,v){"use strict";v.r(t);var _=v(6),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"npm的依赖与版本-full"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#npm的依赖与版本-full"}},[e._v("#")]),e._v(" npm的依赖与版本 Full")]),e._v(" "),v("p",[e._v("在日常开发中我们使用中心化的"),v("code",[e._v("package.json")]),e._v("配置文件来维护项目的配置信息（比如名称、版本、许可证等元数据）以及依赖模块")]),e._v(" "),v("h2",{attrs:{id:"依赖类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖类型"}},[e._v("#")]),e._v(" 依赖类型")]),e._v(" "),v("p",[e._v("目前支持以下5种")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("dependencies")])]),e._v(" "),v("li",[v("code",[e._v("devDependencies")])]),e._v(" "),v("li",[v("code",[e._v("peerDependencies")])]),e._v(" "),v("li",[v("code",[e._v("optionalDependencies")])]),e._v(" "),v("li",[v("code",[e._v("bundledDependencies")]),e._v("/"),v("code",[e._v("bundleDependencies")])])]),e._v(" "),v("p",[e._v("示例")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('{\n  "name": "quanerp-pc-v4",\n  "version": "4.0.0",\n  "private": true,\n  "dependencies": {\n    "react": "^16.13.0",\n    "rxjs": "^6.5.4"\n  },\n  "devDependencies": {\n    "cross-env": "^7.0.2",\n    "eslint": "^6.8.0",\n    "mockjs": "^1.1.0",\n  },\n  "peerDependencies": {},\n  "optionalDependencies": {},\n  "bundledDependencies": [],\n}\n')])])]),v("h3",{attrs:{id:"dependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" dependencies")]),e._v(" "),v("blockquote",[v("p",[e._v("运行项目的依赖，打包发布后执行所需要的")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("npm install packageName --save\n# 或者\nnpm install packageName -S\n")])])]),v("h3",{attrs:{id:"devdependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies"}},[e._v("#")]),e._v(" devDependencies")]),e._v(" "),v("blockquote",[v("p",[e._v("开发模式下的依赖，只应用于开发环境，打包后的文件中不包含")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("npm install packageName --save-dev\n# 或者\nnpm install packageName -D\n")])])]),v("h3",{attrs:{id:"peerdependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#peerdependencies"}},[e._v("#")]),e._v(" peerDependencies")]),e._v(" "),v("blockquote",[v("p",[e._v("同等（同伴）依赖")])]),e._v(" "),v("p",[e._v("第一次见到的时候我也懵懵的，从字面意思上很难理解")]),e._v(" "),v("p",[e._v("它的作用我们来举个栗子说明")]),e._v(" "),v("p",[e._v("我写了个npm包"),v("a",{attrs:{href:"https://www.npmjs.com/package/vue-element-utils",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-element-utils"),v("OutboundLink")],1),e._v("它的作用是对 element-ui 做了一些自定义指定的拓展工具，如果我在没有下载安装 element-ui 之前就使用那么就会报错。")]),e._v(" "),v("p",[e._v("这里我们给"),v("code",[e._v("peerDependencies")]),e._v("加入 element-ui，它在下载时会判断当前依赖中是否有 element-ui 如果没有则"),v("strong",[e._v("将声明的依赖安装进来")]),e._v("，如果有则"),v("strong",[e._v("忽略 peerDependencies 中的声明")])]),e._v(" "),v("p",[e._v("还可以处理核心依赖库被重复下载的问题。")]),e._v(" "),v("p",[e._v("npm v3 中移除了"),v("code",[e._v("peerDependencies")]),e._v("，内部做了优化，将依赖的树形结构做了扁平化处理。")]),e._v(" "),v("p",[e._v("npm v3 中，依赖树的生成会尽量的扁平，相应 "),v("code",[e._v("peerDependencies")]),e._v(" 的行为有所变化。 "),v("code",[e._v("peerDependencies")]),e._v(" 中声明的依赖，如果项目没有显式依赖并安装，则不会被 npm 自动安装，转而输出 warning 日志")]),e._v(" "),v("h3",{attrs:{id:"optionaldependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#optionaldependencies"}},[e._v("#")]),e._v(" optionalDependencies")]),e._v(" "),v("blockquote",[v("p",[e._v("如果一个依赖模块可以被使用， 同时你也希望在该模块找不到或无法获取时npm继续运行，你可以把这个模块依赖放到"),v("code",[e._v("optionalDependencies")]),e._v("配置中。这个配置的写法和"),v("code",[e._v("dependencies")]),e._v("的写法一样，不同的是这里边写的模块安装失败不会导致 npm install 失败。")])]),e._v(" "),v("p",[e._v("注意点："),v("code",[e._v("optionalDependencies")]),e._v("中的配置会覆盖"),v("code",[e._v("dependencies")]),e._v("中的配置，最好只在一个地方写。")]),e._v(" "),v("h3",{attrs:{id:"bundleddependencies-bundledependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bundleddependencies-bundledependencies"}},[e._v("#")]),e._v(" bundledDependencies/bundleDependencies")]),e._v(" "),v("blockquote",[v("p",[e._v("打包依赖，是一个包含依赖包名的数组对象，在发布时会将这个对象中的包打包到最终的发布包里")])]),e._v(" "),v("p",[e._v("执行"),v("code",[e._v("npm pack")]),e._v("时，将数组中的声明打包进目标包中")]),e._v(" "),v("h2",{attrs:{id:"依赖版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖版本"}},[e._v("#")]),e._v(" 依赖版本")]),e._v(" "),v("h3",{attrs:{id:"依赖地狱"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖地狱"}},[e._v("#")]),e._v(" 依赖地狱")]),e._v(" "),v("p",[e._v("通俗而言，“依赖地狱”指开发者安装某个软件包时，发现这个软件包里又依赖不同特定版本的其它软件包。随着系统功能越来越复杂，依赖的软件包越来越多，依赖关系也越来越深，这个时候可能面临版本控制被锁死的风险。")]),e._v(" "),v("p",[e._v("因此，Github 起草了一个具有指导意义的，统一的版本号表示规则，称为"),v("a",{attrs:{href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义化程序版本 Semantic Versioning"),v("OutboundLink")],1),e._v("简称 "),v("code",[e._v("semver")]),e._v("。该规则规定了版本号如何表示，如何增加，如何进行比较，不同的版本号意味着什么")]),e._v(" "),v("h3",{attrs:{id:"先行版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先行版本"}},[e._v("#")]),e._v(" 先行版本")]),e._v(" "),v("ul",[v("li",[e._v("alpha: 内部版本")]),e._v(" "),v("li",[e._v("beta: 公测版本")]),e._v(" "),v("li",[e._v("rc: 即 Release candidate 正式版本的候选版本")])]),e._v(" "),v("h3",{attrs:{id:"node-semver"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-semver"}},[e._v("#")]),e._v(" node-semver")]),e._v(" "),v("p",[e._v("npm 和 yarn 中对于依赖库版本的解析也是遵从语义化程序版本规范的，同时增加了版本解析的灵活度，基于"),v("a",{attrs:{href:"https://github.com/npm/node-semver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-semver"),v("OutboundLink")],1),e._v("引入了"),v("code",[e._v("operator")])]),e._v(" "),v("h4",{attrs:{id:"comparators比较符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#comparators比较符"}},[e._v("#")]),e._v(" Comparators比较符")]),e._v(" "),v("p",[e._v("默认为"),v("code",[e._v("=")])]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[e._v("comparator")]),e._v(" "),v("th",{staticStyle:{"text-align":"center"}},[e._v("description")])])]),e._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[e._v("<")])]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("例如"),v("code",[e._v("<2.0.0")]),e._v("，指向"),v("strong",[e._v("小于")]),v("code",[e._v("2.0.0")]),e._v("的版本")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[e._v("<=")])]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("例如"),v("code",[e._v("<=2.0.0")]),e._v("，指向"),v("strong",[e._v("小于等于")]),v("code",[e._v("2.0.0")]),e._v("的版本")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[e._v(">")])]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("例如"),v("code",[e._v(">2.0.0")]),e._v("，指向"),v("strong",[e._v("大于")]),v("code",[e._v("2.0.0")]),e._v("的版本")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[e._v(">=")])]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("例如"),v("code",[e._v(">=2.0.0")]),e._v("，指向"),v("strong",[e._v("小于等于")]),v("code",[e._v("2.0.0")]),e._v("的版本")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("code",[e._v("=")])]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("例如"),v("code",[e._v("=2.0.0")]),e._v("，指向"),v("strong",[e._v("等于")]),v("code",[e._v("2.0.0")]),e._v("的版本")])])])]),e._v(" "),v("h4",{attrs:{id:"intersections交集符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#intersections交集符"}},[e._v("#")]),e._v(" Intersections交集符")]),e._v(" "),v("p",[e._v("使用空格来连接两个比较符，匹配在交集内的版本号。")]),e._v(" "),v("p",[e._v("例如"),v("code",[e._v("vue:>1.0.0 <=1.2.0")]),e._v("，表示匹配 vue 版本处于区间 (v1.0.0, v1.2.0]（数学表示"),v("code",[e._v("[")]),e._v("包含，"),v("code",[e._v("(")]),e._v("不包含，下面都用这种方式表示）")]),e._v(" "),v("h4",{attrs:{id:"unions并集符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#unions并集符"}},[e._v("#")]),e._v(" Unions并集符")]),e._v(" "),v("p",[e._v("使用"),v("code",[e._v("||")]),e._v("来连接两个比较符，匹配在并集内的版本号。")]),e._v(" "),v("p",[e._v("例如"),v("code",[e._v("vue:<1.0.0 || >=2.0.0")]),e._v("，表示 vue 版本处于区间 [v0.0.0, v1.0.0) 和 [v2.0.0, 正无穷]")]),e._v(" "),v("h4",{attrs:{id:"pre-release-tags先行版本号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pre-release-tags先行版本号"}},[e._v("#")]),e._v(" Pre-release tags先行版本号")]),e._v(" "),v("p",[e._v("当"),v("code",[e._v("comparator")]),e._v("中的版本号包含先行版本号时，无论"),v("code",[e._v("comparator")]),e._v("的类型是什么，"),v("strong",[e._v("只能匹配同 主版本号.此版本号.修订号")])]),e._v(" "),v("p",[e._v("例如"),v("code",[e._v(">=3.1.1-beta.3")]),e._v("只能匹配到区间 [v3.1.1-beta.3, v3.1.2)")]),e._v(" "),v("h4",{attrs:{id:"x-ranges通配符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#x-ranges通配符"}},[e._v("#")]),e._v(" X-Ranges通配符")]),e._v(" "),v("p",[e._v("使用字符"),v("code",[e._v("X")]),e._v("、"),v("code",[e._v("x")]),e._v("、"),v("code",[e._v("*")]),e._v("来取代版本中的数字，表示本段都可以匹配")]),e._v(" "),v("p",[e._v("例如")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("*")]),e._v("等价于"),v("code",[e._v(">=0.0.0")])]),e._v(" "),v("li",[v("code",[e._v("2.x")]),e._v("等价于"),v("code",[e._v(">=2.0.0 <3.0.0")])]),e._v(" "),v("li",[v("code",[e._v("3.1.x")]),e._v("等价于"),v("code",[e._v(">=3.1.0 <3.2.0")])])]),e._v(" "),v("p",[e._v("单独声明版本号时，空白版本段使用"),v("code",[e._v("x")]),e._v("来填充，例如：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("空格")]),e._v(" = "),v("code",[e._v("*")])]),e._v(" "),v("li",[v("code",[e._v("2")]),e._v(" = "),v("code",[e._v("2.x.x")])]),e._v(" "),v("li",[v("code",[e._v("2.1")]),e._v(" = "),v("code",[e._v("2.1.x")])])]),e._v(" "),v("h4",{attrs:{id:"tilde-ranges"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tilde-ranges"}},[e._v("#")]),e._v(" Tilde Ranges~")]),e._v(" "),v("p",[e._v("次版本号不为空时，匹配范围只包含"),v("strong",[e._v("修订号变化")])]),e._v(" "),v("p",[e._v("主版本号不为空，次版本号为空，匹配范围只包含"),v("strong",[e._v("次版本号变化")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("~2.1.1")]),e._v(" = "),v("code",[e._v(">=2.1.1 <2.1.2")])]),e._v(" "),v("li",[v("code",[e._v("~2.1")]),e._v(" = "),v("code",[e._v(">=2.1.0 <2.2.0")])]),e._v(" "),v("li",[v("code",[e._v("~2")]),e._v(" = "),v("code",[e._v(">=2.0.0 <3.0.0")])]),e._v(" "),v("li",[v("code",[e._v("~2.1.1-beta.2")]),e._v(" = "),v("code",[e._v(">=2.1.1-beta.2 <2.1.1")])]),e._v(" "),v("li",[v("code",[e._v("~0")]),e._v(" = "),v("code",[e._v(">=0.0.0 <1.0.0")])])]),e._v(" "),v("h4",{attrs:{id:"caret-ranges"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#caret-ranges"}},[e._v("#")]),e._v(" Caret Ranges^")]),e._v(" "),v("p",[e._v("匹配与声明中第一个非 0 版本段数字相同的版本")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("^3.1.3")]),e._v(" = "),v("code",[e._v(">=3.1.3 <4.0.0")])]),e._v(" "),v("li",[v("code",[e._v("^0.4.2")]),e._v(" = "),v("code",[e._v(">=0.4.2 <0.5.0")])]),e._v(" "),v("li",[v("code",[e._v("^0.0.3")]),e._v(" = "),v("code",[e._v(">=0.0.3 <0.0.4")])])]),e._v(" "),v("h4",{attrs:{id:"其它版本类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它版本类型"}},[e._v("#")]),e._v(" 其它版本类型")]),e._v(" "),v("p",[e._v("npm yarn 还支持扩展的版本号声明来支持 git、github 等：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("http://....")]),e._v(": 指定一个可下载的 url")]),e._v(" "),v("li",[v("code",[e._v("git url")]),e._v(": 指向一个 git 项目路径")]),e._v(" "),v("li",[v("code",[e._v("user/repo")]),e._v(": 指定 github 上某个用户的某个项目")]),e._v(" "),v("li",[v("code",[e._v("tag")]),e._v(": 指向一个 tag commit，建议 tag 名字不要以单词"),v("code",[e._v("v")]),e._v("开头，避免与版本号混淆")]),e._v(" "),v("li",[v("code",[e._v("file:path/to/local/file")]),e._v(": 指向本地环境的文件")])]),e._v(" "),v("p",[e._v("上面的"),v("code",[e._v("git url")]),e._v("，"),v("code",[e._v("user/repo")]),e._v("均支持"),v("strong",[e._v("commit-ish")]),e._v("作为后缀来指向某次提交、某个 tag或某个分支")]),e._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/SamHwang1990/blog/issues/7",target:"_blank",rel:"noopener noreferrer"}},[e._v("浅谈npm 的依赖与版本"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5ad413ba6fb9a028b5485866",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semver(语义化版本号)扫盲"),v("OutboundLink")],1)]),e._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/59d2db006fb9a00a5a32230b",target:"_blank",rel:"noopener noreferrer"}},[e._v("你需要知道的几类npm依赖包管理"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);