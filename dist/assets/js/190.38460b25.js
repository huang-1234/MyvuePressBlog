(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{697:function(e,t,r){"use strict";r.r(t);var s=r(6),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"服务-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务-service"}},[e._v("#")]),e._v(" 服务（Service）")]),e._v(" "),r("h3",{attrs:{id:"属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),r("p",[e._v("每一次用户请求，框架都会实例化对应的 Service 实例，由于它继承于 "),r("code",[e._v("egg.Service")]),e._v("，故拥有下列属性方便我们进行开发：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("this.ctx")]),e._v(": 当前请求的上下文 "),r("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/extend.html#context",target:"_blank",rel:"noopener noreferrer"}},[e._v("Context"),r("OutboundLink")],1),e._v(" 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。")]),e._v(" "),r("li",[r("code",[e._v("this.app")]),e._v(": 当前应用 "),r("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/extend.html#application",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application"),r("OutboundLink")],1),e._v(" 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。")]),e._v(" "),r("li",[r("code",[e._v("this.service")]),e._v("：应用定义的 "),r("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/service.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Service"),r("OutboundLink")],1),e._v("，通过它我们可以访问到其他业务层，等价于 "),r("code",[e._v("this.ctx.service")]),e._v(" 。")]),e._v(" "),r("li",[r("code",[e._v("this.config")]),e._v("：应用运行时的"),r("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置项"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[r("code",[e._v("this.logger")]),e._v("：logger 对象，上面有四个方法（"),r("code",[e._v("debug")]),e._v("，"),r("code",[e._v("info")]),e._v("，"),r("code",[e._v("warn")]),e._v("，"),r("code",[e._v("error")]),e._v("），分别代表打印四个不同级别的日志，使用方法和效果与 "),r("a",{attrs:{href:"https://eggjs.org/zh-cn/core/logger.html#context-logger",target:"_blank",rel:"noopener noreferrer"}},[e._v("context logger"),r("OutboundLink")],1),e._v(" 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。")])]),e._v(" "),r("h3",{attrs:{id:"注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Service 文件必须放在 "),r("code",[e._v("app/service")]),e._v(" 目录，可以支持多级目录，访问的时候可以通过目录名级联访问。")]),e._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[e._v("app"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("service"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("biz"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("user"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("js")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" ctx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("service"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("biz"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("user\napp"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("service"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("sync_user"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("js")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" ctx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("service"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("syncUser\napp"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("service"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("HackerNews"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("js")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" ctx"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("service"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("hackerNews\n")])])])]),e._v(" "),r("li",[r("p",[e._v("一个 Service 文件只能包含一个类， 这个类需要通过 "),r("code",[e._v("module.exports")]),e._v(" 的方式返回。")])]),e._v(" "),r("li",[r("p",[e._v("Service 需要通过 Class 的方式定义，父类必须是 "),r("code",[e._v("egg.Service")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("Service 不是单例，是 "),r("strong",[e._v("请求级别")]),e._v(" 的对象，框架在每次请求中首次访问 "),r("code",[e._v("ctx.service.xx")]),e._v(" 时延迟实例化，所以 Service 中可以通过 this.ctx 获取到当前请求的上下文。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);