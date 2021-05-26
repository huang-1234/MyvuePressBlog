(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{613:function(s,t,a){"use strict";a.r(t);var r=a(6),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"script属性详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script属性详解"}},[s._v("#")]),s._v(" script属性详解")]),s._v(" "),a("p",[s._v("html元素及其属性，相信大家都很熟悉，但是script的属性，未必熟悉，故而整理总结，以待查阅。")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到script标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，则先去下载脚本，再执行脚本，等到执行完脚本，再继续向下渲染。")]),s._v(" "),a("h2",{attrs:{id:"script标签的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script标签的属性"}},[s._v("#")]),s._v(" script标签的属性")]),s._v(" "),a("h3",{attrs:{id:"_1、src"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、src"}},[s._v("#")]),s._v(" 1、src")]),s._v(" "),a("blockquote",[a("p",[s._v("定义引用外部脚本的URI，这可以用来代替直接在文档中嵌入脚本。指定了 src 属性的script元素标签内不应该再有嵌入的脚本。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2、type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、type"}},[s._v("#")]),s._v(" 2、type")]),s._v(" "),a("blockquote",[a("p",[s._v("该属性定义script元素包含或src引用的脚本语言。属性的值为MIME类型;")])]),s._v(" "),a("p",[s._v("只能是下面几种方式:")]),s._v(" "),a("ul",[a("li",[s._v("text/javascript（默认）")]),s._v(" "),a("li",[s._v("text/ecmascript")]),s._v(" "),a("li",[s._v("application/javascript")]),s._v(" "),a("li",[s._v("application/ecmascript")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo.js"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("除了上面以上4中，还有一种")]),s._v(" "),a("ul",[a("li",[s._v("module")])]),s._v(" "),a("p",[s._v("即代码会被当作JavaScript模块处理。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("addTextToBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./utils.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTextToBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Modules are pretty cool.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("type为module时缺省为defer方式。")]),s._v(" "),a("h3",{attrs:{id:"_3、async"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、async"}},[s._v("#")]),s._v(" 3、async")]),s._v(" "),a("blockquote",[a("p",[s._v("该属性指示浏览器是否在允许的情况下异步执行该脚本。该属性对于没有src属性的脚本不起作用。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file.js"')]),s._v(" async"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("等同于下面")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nscript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从脚本中创建的脚本默认为异步。")]),s._v("\n")])])]),a("p",[s._v("浏览器支持： chrome，firfox，safari，IE10+都已经实现。")]),s._v(" "),a("h3",{attrs:{id:"_4、defer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、defer"}},[s._v("#")]),s._v(" 4、defer")]),s._v(" "),a("blockquote",[a("p",[s._v("这个属性被设定用来通知浏览器“该脚本将在文档完成解析后，触发 DOMContentLoaded 事件前执行”。如果无src，则不起作用。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demo.js"')]),s._v(" defer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("精髓就是一句话： "),a("strong",[s._v("不管这段脚本放在html的何处(即使head中)，都会等待dom解析完成后再去加载。")]),s._v("\n如果将script标签放在整个html文件的最后，那就不需要defer了，画蛇添足。")]),s._v(" "),a("p",[s._v("浏览器支持： chrome，firfox，safari，IE10+都已经实现。")]),s._v(" "),a("p",[s._v("async和defer的区别:\ndefer要等到整个页面正常渲染结束，才会执行；\nasync是在渲染html时发现 脚本已经异步下载完，就去执行，执行完了，再继续往下渲染html")]),s._v(" "),a("h3",{attrs:{id:"_5、crossorigin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、crossorigin"}},[s._v("#")]),s._v(" 5、crossorigin")]),s._v(" "),a("blockquote",[a("p",[s._v("使用本属性来使那些将静态资源放在另外一个域名的站点打印错误信息。")])]),s._v(" "),a("p",[s._v("what??? 这个官方的解释让人很懵逼，别急。\n由于使用普通的方式加载script，即下面这种")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v('如果src中的跨站js文件，出现了错误。我们是无法通过监听window.onerror来将错误准确的打印出来。只能打印出来"Script error"（当然浏览器控制台可能会出来详细错误，但我们无法在代码中捕获，并作出处理）')]),s._v(" "),a("p",[s._v("所以我们要添加crossorigin属性来获取跨站文件的错误信息。\n首先，服务器要允许跨站获取文件")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("access"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("control"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])])]),a("p",[s._v("其次，在js中添加crossorigin")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script\n      src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"')]),s._v("\n      crossorigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("crossorigin的值为:\nanonymous 采用普通方式设置对此元素的CORS请求\nuse-credentials 采用凭证的方式设置对此元素的CORS请求")]),s._v(" "),a("p",[s._v("浏览器支持： 只有IE未实现，其他均实现。")]),s._v(" "),a("h3",{attrs:{id:"_6、integrity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、integrity"}},[s._v("#")]),s._v(" 6、integrity")]),s._v(" "),a("blockquote",[a("p",[s._v("提供hash值，来验证览器获得的资源（例如从 CDN 获得的）是否被篡改。")])]),s._v(" "),a("p",[s._v("首先需要服务器开启内容安全策略，即 Content-Security-Policy")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Security"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" require"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sri"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//加载script时需要进行校验")]),s._v("\n")])])]),a("p",[s._v("第二步，加入integrity值")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"')]),s._v(" \n   integrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha384-9u9lzb/hr8e14GLHe5TEOrTiH3Qtw5DX2Zw9X/g7cqj81W2McEMx5CKOszxdb8jg"')]),s._v(" crossorigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("integrity的值为src文件进行base64编码的值，可通过SRI"),a("a",{attrs:{href:"https://sri.beetool.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("在线生成工具"),a("OutboundLink")],1),s._v("生成。")]),s._v(" "),a("p",[s._v("如果integrity和src文件的hash值不匹配，则浏览器会报错。")]),s._v(" "),a("p",[s._v("除了对script进行校验外，同样还可对style进行校验")]),s._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Security-Policy:")]),s._v(" require-sri-for style;\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stylesheet"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"')]),s._v(" \n  integrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha384-xyZLiqnBEFn1hDkS8VeG/YHoqOjS/ucimT8TI6GDr9+ZP1UNbZr6d/q0ldMi/xvL"')]),s._v(" crossorigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("浏览器支持： 只有chrome，firfox实现，safari，IE都未实现。")])])}),[],!1,null,null,null);t.default=e.exports}}]);