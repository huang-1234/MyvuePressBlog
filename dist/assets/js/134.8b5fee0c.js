(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{307:function(t,a,s){"use strict";function n(t,a,s,n,e,r,p,o){var v,c="function"==typeof t?t.options:t;if(a&&(c.render=a,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),p?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(p)},c._ssrRegister=v):e&&(v=o?function(){e.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:e),v)if(c.functional){c._injectStyles=v;var _=c.render;c.render=function(t,a){return v.call(a),_(t,a)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,v):[v]}return{exports:t,options:c}}s.d(a,"a",(function(){return n}))},490:function(t,a,s){"use strict";s.r(a);var n=s(307),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[t._v("#")]),t._v(" template")]),t._v(" "),s("h3",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"}},[t._v("指令"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("指令 (Directives) 是带有 "),s("code",[t._v("v-")]),t._v(" 前缀的特殊 attribute。指令 attribute 的值预期是"),s("strong",[t._v("单个 JavaScript 表达式")]),t._v(" ("),s("code",[t._v("v-for")]),t._v(" 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("seen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("现在你看到我了"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这里，"),s("code",[t._v("v-if")]),t._v(" 指令将根据表达式 "),s("code",[t._v("seen")]),t._v(" 的值的真假来插入/移除 "),s("code",[t._v("<p>")]),t._v(" 元素。")]),t._v(" "),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("参数"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，"),s("code",[t._v("v-bind")]),t._v(" 指令可以用于响应式地更新 HTML attribute：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在这里 "),s("code",[t._v("href")]),t._v(" 是参数，告知 "),s("code",[t._v("v-bind")]),t._v(" 指令将该元素的 "),s("code",[t._v("href")]),t._v(" attribute 与表达式 "),s("code",[t._v("url")]),t._v(" 的值绑定。")]),t._v(" "),s("p",[t._v("另一个例子是 "),s("code",[t._v("v-on")]),t._v(" 指令，它用于监听 DOM 事件：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在这里参数是监听的事件名。我们也会更详细地讨论事件处理。")]),t._v(" "),s("h3",{attrs:{id:"动态参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态参数"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态参数"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("2.6.0 新增")])]),t._v(" "),s("p",[t._v("从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n注意，参数表达式的写法存在一些约束，如之后的“对动态参数表达式的约束”章节所述。\n--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("[attributeName]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这里的 "),s("code",[t._v("attributeName")]),t._v(" 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个 "),s("code",[t._v("data")]),t._v(" property "),s("code",[t._v("attributeName")]),t._v("，其值为 "),s("code",[t._v('"href"')]),t._v("，那么这个绑定将等价于 "),s("code",[t._v("v-bind:href")]),t._v("。")]),t._v(" "),s("p",[t._v("同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("[eventName]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在这个示例中，当 "),s("code",[t._v("eventName")]),t._v(" 的值为 "),s("code",[t._v('"focus"')]),t._v(" 时，"),s("code",[t._v("v-on:[eventName]")]),t._v(" 将等价于 "),s("code",[t._v("v-on:focus")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"对动态参数的值的约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对动态参数的值的约束"}},[t._v("#")]),t._v(" 对动态参数的值的约束")]),t._v(" "),s("p",[t._v("动态参数预期会求出一个字符串，异常情况下值为 "),s("code",[t._v("null")]),t._v("。这个特殊的 "),s("code",[t._v("null")]),t._v(" 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。")]),t._v(" "),s("h3",{attrs:{id:"对动态参数表达式的约束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对动态参数表达式的约束"}},[t._v("#")]),t._v(" 对动态参数表达式的约束")]),t._v(" "),s("p",[t._v("动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的。例如：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这会触发一个编译警告 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("['foo'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bar]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。")]),t._v(" "),s("p",[t._v("在 DOM 中使用模板时 (直接在一个 HTML 文件里撰写模板)，还需要避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。\n除非在实例中有一个名为“someattr”的 property，否则代码不会工作。\n--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("[someAttr]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("修饰符"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("修饰符 (modifier) 是以半角句号 "),s("code",[t._v(".")]),t._v(" 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，"),s("code",[t._v(".prevent")]),t._v(" 修饰符告诉 "),s("code",[t._v("v-on")]),t._v(" 指令对于触发的事件调用 "),s("code",[t._v("event.preventDefault()")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("submit.prevent")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onSubmit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在接下来对 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("v-on")]),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/forms.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("v-for")]),s("OutboundLink")],1),t._v(" 等功能的探索中，你会看到修饰符的其它例子。")]),t._v(" "),s("h3",{attrs:{id:"缩写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缩写"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E7%BC%A9%E5%86%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("缩写"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("v-")]),t._v(" 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，"),s("code",[t._v("v-")]),t._v(" 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Single-page_application",target:"_blank",rel:"noopener noreferrer"}},[t._v("单页面应用程序 (SPA - single page application)"),s("OutboundLink")],1),t._v(" 时，"),s("code",[t._v("v-")]),t._v(" 前缀也变得没那么重要了。因此，Vue 为 "),s("code",[t._v("v-bind")]),t._v(" 和 "),s("code",[t._v("v-on")]),t._v(" 这两个最常用的指令，提供了特定简写：")]),t._v(" "),s("h3",{attrs:{id:"v-bind-缩写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-bind-缩写"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#v-bind-%E7%BC%A9%E5%86%99",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("v-bind")]),t._v(" 缩写"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 完整语法 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 缩写 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 动态参数的缩写 (2.6.0+) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":[key]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"v-on-缩写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-on-缩写"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#v-on-%E7%BC%A9%E5%86%99",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("v-on")]),t._v(" 缩写"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 完整语法 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 缩写 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 动态参数的缩写 (2.6.0+) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@[event]")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("它们看起来可能与普通的 HTML 略有不同，但 "),s("code",[t._v(":")]),t._v(" 与 "),s("code",[t._v("@")]),t._v(" 对于 attribute 名来说都是合法字符，在所有支持 Vue 的浏览器都能被正确地解析。而且，它们不会出现在最终渲染的标记中。缩写语法是完全可选的，但随着你更深入地了解它们的作用，你会庆幸拥有它们。")])])}),[],!1,null,null,null);a.default=e.exports}}]);