(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{585:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fetch新一代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch新一代"}},[t._v("#")]),t._v(" Fetch新一代")]),t._v(" "),a("blockquote",[a("p",[t._v("前段时间看到一句话，Ajax已死，Fetch永生。当然只是一句玩笑话啦！！！")])]),t._v(" "),a("p",[t._v("上面这句话就表明了ajax和Fetch的历史渊源。实际上Fetch和XMLHttpRequest同级，都是浏览器的内置API，不过Fetch是基于Promise对http请求进行了封装。")]),t._v(" "),a("p",[t._v("ajax实际上是对XHR的封装，使其API更好用。而axios则是在基于es6的Promise对ajax再一次封装，现在你应该能理解ajax和Fetch的关系了吧。")]),t._v(" "),a("p",[t._v("下面我们来学习Fetch")]),t._v(" "),a("blockquote",[a("p",[t._v("先来看看MDN是怎么定义Fetch的吧")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("位于 WorkerOrGlobalScope 这一个 mixin 中的 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法用于发起获取资源的请求。它返回一个 promise，\n这个 promise 会在请求响应后被 resolve，并传回 Response 对象。\n\nWindow 和 WorkerGlobalScope 都实现了 WorkerOrGlobalScope。 ——这意味着基本在任何场景下只要你想获取资源，\n都可以使用 位于 WorkerOrGlobalScope 中的 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法。\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("当遇到网络错误时，fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 返回的 promise 会被 reject，并传回 TypeError，虽然这也可能因为权限或其它问题导致。\n成功的 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 检查不仅要包括 promise 被 resolve，还要包括 Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ok 属性为 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("。"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" 状态并不被认为是网络错误。\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法由 Content Security Policy 的 connect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("src指令控制，而不是它请求的资源。\n")])])]),a("p",[t._v("fetch的参数以及返回值")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("参数\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("input\n定义要获取的资源。这可能是：\n一个 USVString 字符串，包含要获取资源的 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v("。一些浏览器会接受 blob"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 和 data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 作为 schemes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n一个 Request 对象。\ninit 可选\n一个配置项对象，包括所有对请求的设置。可选的参数有：\nmethod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 请求使用的方法，如 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v("。\nheaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 请求的头信息，形式为 Headers 的对象或包含 ByteString 值的对象字面量。\nbody"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 请求的 body 信息：可能是一个 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Blob、BufferSource")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("US")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("、FormData、URLSearchParams 或者 USVString 对象。注意 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" 或 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" 方法的请求不能包含 body 信息。\nmode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 请求的模式，如 cors、 no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cors 或者 same"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("origin。\ncredentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 请求的 credentials，如 omit、same"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项， 从 Chrome "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" 开始， 这个属性也可以接受 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FederatedCredential")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("US")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 实例或是一个 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PasswordCredential")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("US")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 实例。\ncache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  请求的 cache 模式"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("、 no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("store、 reload 、 no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache 、 force"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache 或者 only"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cached 。\nredirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可用的 redirect 模式"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("follow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("自动重定向"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("如果产生重定向将自动终止并且抛出一个错误）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 或者 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("manual")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("手动处理重定向"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 在Chrome中默认使用follow（Chrome "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("47")]),t._v("之前的默认值是manual）。\nreferrer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 一个 USVString 可以是 no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("referrer、client或一个 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v("。默认是 client。\nreferrerPolicy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 指定了"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v("头部referer字段的值。可能为以下值之一： no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("referrer、 no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("referrer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("when"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("downgrade、 origin、 origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("when"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cross"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("origin、 unsafe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("url 。\nintegrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 包括请求的  subresource integrity 值 （ 例如： sha256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("）。\n返回值\n一个 Promise，resolve 时回传 Response 对象。\n")])])]),a("blockquote",[a("p",[t._v("init* 可选")])]),t._v(" "),a("p",[t._v("一个配置项对象，包括所有对请求的设置。可选的参数有：")]),t._v(" "),a("p",[a("code",[t._v("method")]),t._v(": 请求使用的方法，如 `GET、"),a("code",[t._v("POST。")])]),t._v(" "),a("p",[a("code",[t._v("headers")]),t._v(": 请求的头信息，形式为 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Headers",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Headers")]),a("OutboundLink")],1),t._v(" 的对象或包含 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ByteString",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ByteString")]),a("OutboundLink")],1),t._v(" 值的对象字面量。")]),t._v(" "),a("p",[a("code",[t._v("body")]),t._v(": 请求的 body 信息：可能是一个 "),a("code",[t._v("Blob")]),t._v("、"),a("code",[t._v("BufferSource")]),t._v(" (en-US)、"),a("code",[t._v("FormData")]),t._v("、"),a("code",[t._v("URLSearchParams")]),t._v("或者 ["),a("code",[t._v("USVString")]),t._v(" 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。")]),t._v(" "),a("p",[a("code",[t._v("mode")]),t._v(": 请求的模式，如 "),a("code",[t._v("cors、")]),t._v(" "),a("code",[t._v("no-cors 或者")]),t._v(" "),a("code",[t._v("same-origin。")])]),t._v(" "),a("p",[a("code",[t._v("credentials")]),t._v(": 请求的 credentials，如 "),a("code",[t._v("omit、``same-origin 或者")]),t._v(" "),a("code",[t._v("include")]),t._v("。为了在当前域名内自动发送 cookie ， 必须提供这个选项， 从 Chrome 50 开始， 这个属性也可以接受 ["),a("code",[t._v("FederatedCredential")]),t._v("实例或是一个 ["),a("code",[t._v("PasswordCredential")]),t._v("  实例。")]),t._v(" "),a("p",[a("code",[t._v("cache")]),t._v(":  请求的 cache 模式: "),a("code",[t._v("default")]),t._v("、 "),a("code",[t._v("no-store")]),t._v("、 "),a("code",[t._v("reload")]),t._v(" 、 "),a("code",[t._v("no-cache")]),t._v("、 "),a("code",[t._v("force-cache")]),t._v("或者 "),a("code",[t._v("only-if-cached")]),t._v(" 。")]),t._v(" "),a("p",[a("code",[t._v("redirect")]),t._v(": 可用的 redirect 模式: "),a("code",[t._v("follow")]),t._v(" (自动重定向), "),a("code",[t._v("error")]),t._v(" (如果产生重定向将自动终止并且抛出一个错误）, 或者 "),a("code",[t._v("manual")]),t._v(" (手动处理重定向). 在Chrome中默认使用"),a("code",[t._v("follow（")]),t._v("Chrome 47之前的默认值是"),a("code",[t._v("manual")]),t._v("）。")]),t._v(" "),a("p",[a("code",[t._v("referrer")]),t._v(": 一个 ["),a("code",[t._v("USVString")]),t._v("可以是 "),a("code",[t._v("no-referrer、``client")]),t._v("或一个 URL。默认是 "),a("code",[t._v("client。")])]),t._v(" "),a("p",[a("code",[t._v("referrerPolicy")]),t._v(": 指定了HTTP头部referer字段的值。可能为以下值之一： "),a("code",[t._v("no-referrer、")]),t._v(" "),a("code",[t._v("no-referrer-when-downgrade、")]),t._v(" "),a("code",[t._v("origin、")]),t._v(" "),a("code",[t._v("origin-when-cross-origin、")]),t._v(" "),a("code",[t._v("unsafe-url 。")])]),t._v(" "),a("p",[t._v("``integrity"),a("code",[t._v(": 包括请求的 subresource integrity值 （ 例如：")]),t._v("sha256BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）。`")]),t._v(" "),a("blockquote",[a("p",[t._v("返回值")])]),t._v(" "),a("p",[t._v("Ajax和Fetch都是浏览器端向服务器端发送数据请求的http封装。只不过Fetch是基于Promise的。")]),t._v(" "),a("h2",{attrs:{id:"fetch接收的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch接收的参数"}},[t._v("#")]),t._v(" Fetch接收的参数")]),t._v(" "),a("p",[t._v("第一个参数url")]),t._v(" "),a("p",[t._v("第二个参数：可以控制不同配置的init对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("最好使用符合内容安全策略")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CSP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("US")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("的链接而不是使用直接指向资源地址的方式来进行Fetch的请求。\n\n支持的请求参数\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 接受第二个可选参数，一个可以控制不同配置的 init 对象：\n\n参考 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，查看所有可选的配置和更多描述。\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example POST method implementation:")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/answer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("answer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JSON from `response.json()` call")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Default options are marked with *")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// must match 'Content-Type' header")]),t._v("\n    cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-cache'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *default, no-cache, reload, force-cache, only-if-cached")]),t._v("\n    credentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'same-origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// include, same-origin, *omit")]),t._v("\n    headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user-agent'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/4.0 MDN Example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *GET, POST, PUT, DELETE, etc.")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no-cors, cors, *same-origin")]),t._v("\n    redirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'follow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// manual, *follow, error")]),t._v("\n    referrer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-referrer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// *client, no-referrer")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parses response to JSON")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("init 对象要按照下表中的键/值进行填充。")])])}),[],!1,null,null,null);s.default=e.exports}}]);