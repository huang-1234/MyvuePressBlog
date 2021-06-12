(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{654:function(t,n,a){"use strict";a.r(n);var s=a(6),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" Location")]),t._v(" "),a("p",[t._v("**"),a("code",[t._v("Location")]),t._v("**接口表示其链接到的对象的位置（URL）。所做的修改反映在与之相关的对象上。 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Document")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Window")]),a("OutboundLink")],1),t._v(" 接口都有这样一个链接的Location，分别通过 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/location",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Document.location")]),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Window.location")]),a("OutboundLink")],1),t._v(" 访问。")]),t._v(" "),a("p",[t._v("来看个例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create anchor element and use href property for the purpose of this example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A more correct alternative is to browse to the URL and use document.location or window.location")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https:")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// developer.mozilla.org")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// developer.mozilla.org")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (blank - https assumes port 443)")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /en-US/search")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ?q=URL")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #search-results-close-container")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://developer.mozilla.org")]),t._v("\n")])])]),a("h2",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h1",{attrs:{id:"document-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-location"}},[t._v("#")]),t._v(" Document.location")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("Document.location")])]),t._v(" 是一个只读属性，返回一个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Location")]),a("OutboundLink")],1),t._v(" 对象，包含有文档的 URL 相关的信息，并提供了改变该 URL 和加载其他 URL 的方法。")]),t._v(" "),a("p",[t._v("尽管 "),a("code",[t._v("Document.location")]),t._v(" 是一个只读的 "),a("code",[t._v("Location")]),t._v(" 对象，你也能够赋给它一个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("DOMString")]),a("OutboundLink")],1),t._v("。这意味着你能够赋给 document.location 字符串，大多数情况下像这样使用："),a("code",[t._v("document.location = 'http://www.example.com'")]),t._v("，也可写为"),a("code",[t._v("document.location.href = 'http://www.example.com'")]),t._v("。")]),t._v(" "),a("p",[t._v("只是想获取字符串形式的 URL，可以使用只读属性 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/URL",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("document.URL")]),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);n.default=e.exports}}]);