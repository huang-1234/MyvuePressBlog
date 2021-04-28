(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{536:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"强大的组件插槽-让组件复用可扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强大的组件插槽-让组件复用可扩展"}},[t._v("#")]),t._v(" 强大的组件插槽(让组件复用可扩展)")]),t._v(" "),a("blockquote",[a("p",[t._v("该页面假设你已经阅读过了"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件基础"),a("OutboundLink")],1),t._v("。如果你还对组件不太了解，推荐你先阅读它。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 "),a("code",[t._v("v-slot")]),t._v(" 指令)。它取代了 "),a("code",[t._v("slot")]),t._v(" 和 "),a("code",[t._v("slot-scope")]),t._v(" 这两个目前已被废弃但未被移除且仍在"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档中"),a("OutboundLink")],1),t._v("的 attribute。新语法的由来可查阅这份 "),a("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"插槽内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽内容"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E6%8F%92%E6%A7%BD%E5%86%85%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("插槽内容"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 "),a("a",{attrs:{href:"https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Components 规范草案"),a("OutboundLink")],1),t._v("，将 "),a("code",[t._v("<slot>")]),t._v(" 元素作为承载分发内容的出口。")]),t._v(" "),a("p",[t._v("它允许你像这样合成组件：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigation-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Your Profile\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigation-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("然后你在 "),a("code",[t._v("<navigation-link>")]),t._v(" 的模板中可能会写为：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("cpn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("nav-link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("当组件渲染的时候，"),a("code",[t._v("<slot></slot>")]),t._v(" 将会被替换为“Your Profile”。"),a("font",{attrs:{color:"red"}},[t._v("插槽内可以包含任何模板代码，包括 HTML：")])],1),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigation-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 添加一个 Font Awesome 图标 --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fa fa-user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Your Profile\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigation-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("甚至其它的组件：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigation-link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 添加一个图标的组件 --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("font-awesome-icon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("font-awesome-icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Your Profile\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigation-link")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("如果 "),a("code",[t._v("<navigation-link>")]),t._v(" 的 "),a("code",[t._v("template")]),t._v(" 中"),a("strong",[t._v("没有")]),t._v("包含一个 "),a("code",[t._v("<slot>")]),t._v(" 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。")]),t._v(" "),a("h2",{attrs:{id:"编译作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译作用域"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("编译作用域"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("当你想在一个插槽中使用数据时，例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<navigation-link url="/profile">\n  Logged in as {{ user.name }}\n</navigation-link>\n')])])]),a("p",[t._v("该插槽跟模板的其它地方一样可以访问相同的实例 property (也就是相同的“作用域”)，而"),a("strong",[t._v("不能")]),t._v("访问 "),a("code",[t._v("<navigation-link>")]),t._v(" 的作用域。例如 "),a("code",[t._v("url")]),t._v(" 是访问不到的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<navigation-link url="/profile">\n  Clicking here will send you to: {{ url }}\n  \x3c!--\n  这里的 `url` 会是 undefined，因为其 (指该插槽的) 内容是\n  _传递给_ <navigation-link> 的而不是\n  在 <navigation-link> 组件*内部*定义的。\n  --\x3e\n</navigation-link>\n')])])]),a("p",[t._v("作为一条规则，请记住：")]),t._v(" "),a("blockquote",[a("p",[t._v("父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。")])]),t._v(" "),a("h2",{attrs:{id:"后备内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后备内容"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%90%8E%E5%A4%87%E5%86%85%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("后备内容"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 "),a("code",[t._v("<submit-button>")]),t._v(" 组件中：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<button type="submit">\n  <slot></slot>\n</button>\n')])])]),a("p",[t._v("我们可能希望这个 "),a("code",[t._v("<button>")]),t._v(" 内绝大多数情况下都渲染文本“Submit”。为了将“Submit”作为后备内容，我们可以将它放在 "),a("code",[t._v("<slot>")]),t._v(" 标签内：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<button type="submit">\n  <slot>Submit</slot>\n</button>\n')])])]),a("p",[t._v("现在当我在一个父级组件中使用 "),a("code",[t._v("<submit-button>")]),t._v(" 并且不提供任何插槽内容时：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<submit-button></submit-button>\n")])])]),a("p",[t._v("后备内容“Submit”将会被渲染：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<button type="submit">\n  Submit\n</button>\n')])])]),a("p",[t._v("但是如果我们提供内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<submit-button>\n  Save\n</submit-button>\n")])])]),a("p",[t._v("则这个提供的内容将会被渲染从而取代后备内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<button type="submit">\n  Save\n</button>\n')])])]),a("h2",{attrs:{id:"具名插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具名插槽"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("具名插槽"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("自 2.6.0 起有所更新。已废弃的使用 "),a("code",[t._v("slot")]),t._v(" attribute 的语法在"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("有时我们需要多个插槽。例如对于一个带有如下模板的 "),a("code",[t._v("<base-layout>")]),t._v(" 组件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div class="container">\n  <header>\n    \x3c!-- 我们希望把页头放这里 --\x3e\n  </header>\n  <main>\n    \x3c!-- 我们希望把主要内容放这里 --\x3e\n  </main>\n  <footer>\n    \x3c!-- 我们希望把页脚放这里 --\x3e\n  </footer>\n</div>\n')])])]),a("p",[t._v("对于这样的情况，"),a("code",[t._v("<slot>")]),t._v(" 元素有一个特殊的 attribute："),a("code",[t._v("name")]),t._v("。这个 attribute 可以用来定义额外的插槽：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div class="container">\n  <header>\n    <slot name="header"></slot>\n  </header>\n  <main>\n    <slot></slot>\n  </main>\n  <footer>\n    <slot name="footer"></slot>\n  </footer>\n</div>\n')])])]),a("p",[t._v("一个不带 "),a("code",[t._v("name")]),t._v(" 的 "),a("code",[t._v("<slot>")]),t._v(" 出口会带有隐含的名字“default”。")]),t._v(" "),a("p",[t._v("在向具名插槽提供内容的时候，我们可以在一个 "),a("code",[t._v("<template>")]),t._v(" 元素上使用 "),a("code",[t._v("v-slot")]),t._v(" 指令，并以 "),a("code",[t._v("v-slot")]),t._v(" 的参数的形式提供其名称：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<base-layout>\n  <template v-slot:header>\n    <h1>Here might be a page title</h1>\n  </template>\n\n  <p>A paragraph for the main content.</p>\n  <p>And another one.</p>\n\n  <template v-slot:footer>\n    <p>Here's some contact info</p>\n  </template>\n</base-layout>\n")])])]),a("p",[t._v("现在 "),a("code",[t._v("<template>")]),t._v(" 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 "),a("code",[t._v("v-slot")]),t._v(" 的 "),a("code",[t._v("<template>")]),t._v(" 中的内容都会被视为默认插槽的内容。")]),t._v(" "),a("p",[t._v("然而，如果你希望更明确一些，仍然可以在一个 "),a("code",[t._v("<template>")]),t._v(" 中包裹默认插槽的内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<base-layout>\n  <template v-slot:header>\n    <h1>Here might be a page title</h1>\n  </template>\n\n  <template v-slot:default>\n    <p>A paragraph for the main content.</p>\n    <p>And another one.</p>\n  </template>\n\n  <template v-slot:footer>\n    <p>Here's some contact info</p>\n  </template>\n</base-layout>\n")])])]),a("p",[t._v("任何一种写法都会渲染出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div class="container">\n  <header>\n    <h1>Here might be a page title</h1>\n  </header>\n  <main>\n    <p>A paragraph for the main content.</p>\n    <p>And another one.</p>\n  </main>\n  <footer>\n    <p>Here\'s some contact info</p>\n  </footer>\n</div>\n')])])]),a("p",[t._v("注意 "),a("strong",[a("code",[t._v("v-slot")]),t._v(" 只能添加在 "),a("code",[t._v("<template>")]),t._v(" 上")]),t._v(" (只有"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("一种例外情况"),a("OutboundLink")],1),t._v(")，这一点和已经废弃的 "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("slot")]),t._v(" attribute"),a("OutboundLink")],1),t._v(" 不同。")]),t._v(" "),a("h2",{attrs:{id:"作用域插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域插槽"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("作用域插槽"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("自 2.6.0 起有所更新。已废弃的使用 "),a("code",[t._v("slot-scope")]),t._v(" attribute 的语法在"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("有时让插槽内容能够访问子组件中才有的数据是很有用的。例如，设想一个带有如下模板的 "),a("code",[t._v("<current-user>")]),t._v(" 组件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<span>\n  <slot>{{ user.lastName }}</slot>\n</span>\n")])])]),a("p",[t._v("我们可能想换掉备用内容，用名而非姓来显示。如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<current-user>\n  {{ user.firstName }}\n</current-user>\n")])])]),a("p",[t._v("然而上述代码不会正常工作，因为只有 "),a("code",[t._v("<current-user>")]),t._v(" 组件可以访问到 "),a("code",[t._v("user")]),t._v(" 而我们提供的内容是在父级渲染的。")]),t._v(" "),a("p",[t._v("为了让 "),a("code",[t._v("user")]),t._v(" 在父级的插槽内容中可用，我们可以将 "),a("code",[t._v("user")]),t._v(" 作为 "),a("code",[t._v("<slot>")]),t._v(" 元素的一个 attribute 绑定上去：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<span>\n  <slot v-bind:user="user">\n    {{ user.lastName }}\n  </slot>\n</span>\n')])])]),a("p",[t._v("绑定在 "),a("code",[t._v("<slot>")]),t._v(" 元素上的 attribute 被称为"),a("strong",[t._v("插槽 prop")]),t._v("。现在在父级作用域中，我们可以使用带值的 "),a("code",[t._v("v-slot")]),t._v(" 来定义我们提供的插槽 prop 的名字：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<current-user>\n  <template v-slot:default="slotProps">\n    {{ slotProps.user.firstName }}\n  </template>\n</current-user>\n')])])]),a("p",[t._v("在这个例子中，我们选择将包含所有插槽 prop 的对象命名为 "),a("code",[t._v("slotProps")]),t._v("，但你也可以使用任意你喜欢的名字。")]),t._v(" "),a("h3",{attrs:{id:"独占默认插槽的缩写语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独占默认插槽的缩写语法"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("独占默认插槽的缩写语法"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在上述情况下，当被提供的内容"),a("em",[t._v("只有")]),t._v("默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 "),a("code",[t._v("v-slot")]),t._v(" 直接用在组件上：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<current-user v-slot:default="slotProps">\n  {{ slotProps.user.firstName }}\n</current-user>\n')])])]),a("p",[t._v("这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 "),a("code",[t._v("v-slot")]),t._v(" 被假定对应默认插槽：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<current-user v-slot="slotProps">\n  {{ slotProps.user.firstName }}\n</current-user>\n')])])]),a("p",[t._v("注意默认插槽的缩写语法"),a("strong",[t._v("不能")]),t._v("和具名插槽混用，因为它会导致作用域不明确：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- 无效，会导致警告 --\x3e\n<current-user v-slot="slotProps">\n  {{ slotProps.user.firstName }}\n  <template v-slot:other="otherSlotProps">\n    slotProps is NOT available here\n  </template>\n</current-user>\n')])])]),a("p",[t._v("只要出现多个插槽，请始终为"),a("em",[t._v("所有的")]),t._v("插槽使用完整的基于 "),a("code",[t._v("<template>")]),t._v(" 的语法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<current-user>\n  <template v-slot:default="slotProps">\n    {{ slotProps.user.firstName }}\n  </template>\n\n  <template v-slot:other="otherSlotProps">\n    ...\n  </template>\n</current-user>\n')])])]),a("h3",{attrs:{id:"解构插槽-prop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解构插槽-prop"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E8%A7%A3%E6%9E%84%E6%8F%92%E6%A7%BD-Prop",target:"_blank",rel:"noopener noreferrer"}},[t._v("解构插槽 Prop"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function (slotProps) {\n  // 插槽内容\n}\n")])])]),a("p",[t._v("这意味着 "),a("code",[t._v("v-slot")]),t._v(" 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 ("),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("单文件组件"),a("OutboundLink")],1),t._v("或"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代浏览器"),a("OutboundLink")],1),t._v(")，你也可以使用 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES2015 解构"),a("OutboundLink")],1),t._v("来传入具体的插槽 prop，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<current-user v-slot="{ user }">\n  {{ user.firstName }}\n</current-user>\n')])])]),a("p",[t._v("这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 "),a("code",[t._v("user")]),t._v(" 重命名为 "),a("code",[t._v("person")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<current-user v-slot="{ user: person }">\n  {{ person.firstName }}\n</current-user>\n')])])]),a("p",[t._v("你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<current-user v-slot=\"{ user = { firstName: 'Guest' } }\">\n  {{ user.firstName }}\n</current-user>\n")])])]),a("h2",{attrs:{id:"动态插槽名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态插槽名"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态插槽名"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("2.6.0 新增")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态指令参数"),a("OutboundLink")],1),t._v("也可以用在 "),a("code",[t._v("v-slot")]),t._v(" 上，来定义动态的插槽名：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<base-layout>\n  <template v-slot:[dynamicSlotName]>\n    ...\n  </template>\n</base-layout>\n")])])]),a("h2",{attrs:{id:"具名插槽的缩写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具名插槽的缩写"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("具名插槽的缩写"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("2.6.0 新增")])]),t._v(" "),a("p",[t._v("跟 "),a("code",[t._v("v-on")]),t._v(" 和 "),a("code",[t._v("v-bind")]),t._v(" 一样，"),a("code",[t._v("v-slot")]),t._v(" 也有缩写，即把参数之前的所有内容 ("),a("code",[t._v("v-slot:")]),t._v(") 替换为字符 "),a("code",[t._v("#")]),t._v("。例如 "),a("code",[t._v("v-slot:header")]),t._v(" 可以被重写为 "),a("code",[t._v("#header")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<base-layout>\n  <template #header>\n    <h1>Here might be a page title</h1>\n  </template>\n\n  <p>A paragraph for the main content.</p>\n  <p>And another one.</p>\n\n  <template #footer>\n    <p>Here's some contact info</p>\n  </template>\n</base-layout>\n")])])]),a("p",[t._v("然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- 这样会触发一个警告 --\x3e\n<current-user #="{ user }">\n  {{ user.firstName }}\n</current-user>\n')])])]),a("p",[t._v("如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<current-user #default="{ user }">\n  {{ user.firstName }}\n</current-user>\n')])])]),a("h2",{attrs:{id:"其它示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它示例"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B6%E5%AE%83%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它示例"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("**插槽 prop 允许我们将插槽转换为可复用的模板，这些模板可以基于输入的 prop 渲染出不同的内容。**这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。")]),t._v(" "),a("p",[t._v("例如，我们要实现一个 "),a("code",[t._v("<todo-list>")]),t._v(" 组件，它是一个列表且包含布局和过滤逻辑：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<ul>\n  <li\n    v-for="todo in filteredTodos"\n    v-bind:key="todo.id"\n  >\n    {{ todo.text }}\n  </li>\n</ul>\n')])])]),a("p",[t._v("我们可以将每个 todo 作为父级组件的插槽，以此通过父级组件对其进行控制，然后将 "),a("code",[t._v("todo")]),t._v(" 作为一个插槽 prop 进行绑定：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<ul>\n  <li\n    v-for="todo in filteredTodos"\n    v-bind:key="todo.id"\n  >\n    \x3c!--\n    我们为每个 todo 准备了一个插槽，\n    将 `todo` 对象作为一个插槽的 prop 传入。\n    --\x3e\n    <slot name="todo" v-bind:todo="todo">\n      \x3c!-- 后备内容 --\x3e\n      {{ todo.text }}\n    </slot>\n  </li>\n</ul>\n')])])]),a("p",[t._v("现在当我们使用 "),a("code",[t._v("<todo-list>")]),t._v(" 组件的时候，我们可以选择为 todo 定义一个不一样的 "),a("code",[t._v("<template>")]),t._v(" 作为替代方案，并且可以从子组件获取数据：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<todo-list v-bind:todos="todos">\n  <template v-slot:todo="{ todo }">\n    <span v-if="todo.isComplete">✓</span>\n    {{ todo.text }}\n  </template>\n</todo-list>\n')])])]),a("p",[t._v("这只是作用域插槽用武之地的冰山一角。想了解更多现实生活中的作用域插槽的用法，我们推荐浏览诸如 "),a("a",{attrs:{href:"https://github.com/Akryum/vue-virtual-scroller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Virtual Scroller"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://github.com/posva/vue-promised",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Promised"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://github.com/LinusBorg/portal-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Portal Vue"),a("OutboundLink")],1),t._v(" 等库。")]),t._v(" "),a("h2",{attrs:{id:"废弃了的语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#废弃了的语法"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("废弃了的语法"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("v-slot")]),t._v(" 指令自 Vue 2.6.0 起被引入，提供更好的支持 "),a("code",[t._v("slot")]),t._v(" 和 "),a("code",[t._v("slot-scope")]),t._v(" attribute 的 API 替代方案。"),a("code",[t._v("v-slot")]),t._v(" 完整的由来参见这份 "),a("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC"),a("OutboundLink")],1),t._v("。在接下来所有的 2.x 版本中 "),a("code",[t._v("slot")]),t._v(" 和 "),a("code",[t._v("slot-scope")]),t._v(" attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。")])]),t._v(" "),a("h3",{attrs:{id:"带有-slot-attribute-的具名插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带有-slot-attribute-的具名插槽"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%B8%A6%E6%9C%89-slot-attribute-%E7%9A%84%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("带有 "),a("code",[t._v("slot")]),t._v(" attribute 的具名插槽"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("自 2.6.0 起被废弃。新推荐的语法请查阅"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("<template>")]),t._v(" 上使用特殊的 "),a("code",[t._v("slot")]),t._v(" attribute，可以将内容从父级传给具名插槽 (把"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("提到过的 "),a("code",[t._v("<base-layout>")]),t._v(" 组件作为示例)：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<base-layout>\n  <template slot="header">\n    <h1>Here might be a page title</h1>\n  </template>\n\n  <p>A paragraph for the main content.</p>\n  <p>And another one.</p>\n\n  <template slot="footer">\n    <p>Here\'s some contact info</p>\n  </template>\n</base-layout>\n')])])]),a("p",[t._v("或者直接把 "),a("code",[t._v("slot")]),t._v(" attribute 用在一个普通元素上：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<base-layout>\n  <h1 slot="header">Here might be a page title</h1>\n\n  <p>A paragraph for the main content.</p>\n  <p>And another one.</p>\n\n  <p slot="footer">Here\'s some contact info</p>\n</base-layout>\n')])])]),a("p",[t._v("这里其实还有一个未命名插槽，也就是"),a("strong",[t._v("默认插槽")]),t._v("，捕获所有未被匹配的内容。上述两个示例的 HTML 渲染结果均为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div class="container">\n  <header>\n    <h1>Here might be a page title</h1>\n  </header>\n  <main>\n    <p>A paragraph for the main content.</p>\n    <p>And another one.</p>\n  </main>\n  <footer>\n    <p>Here\'s some contact info</p>\n  </footer>\n</div>\n')])])]),a("h3",{attrs:{id:"带有-slot-scope-attribute-的作用域插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带有-slot-scope-attribute-的作用域插槽"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%B8%A6%E6%9C%89-slot-scope-attribute-%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("带有 "),a("code",[t._v("slot-scope")]),t._v(" attribute 的作用域插槽"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("自 2.6.0 起被废弃。新推荐的语法请查阅"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("<template>")]),t._v(" 上使用特殊的 "),a("code",[t._v("slot-scope")]),t._v(" attribute，可以接收传递给插槽的 prop (把"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("提到过的 "),a("code",[t._v("<slot-example>")]),t._v(" 组件作为示例)：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<slot-example>\n  <template slot="default" slot-scope="slotProps">\n    {{ slotProps.msg }}\n  </template>\n</slot-example>\n')])])]),a("p",[t._v("这里的 "),a("code",[t._v("slot-scope")]),t._v(" 声明了被接收的 prop 对象会作为 "),a("code",[t._v("slotProps")]),t._v(" 变量存在于 "),a("code",[t._v("<template>")]),t._v(" 作用域中。你可以像命名 JavaScript 函数参数一样随意命名 "),a("code",[t._v("slotProps")]),t._v("。")]),t._v(" "),a("p",[t._v("这里的 "),a("code",[t._v('slot="default"')]),t._v(" 可以被忽略为隐性写法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<slot-example>\n  <template slot-scope="slotProps">\n    {{ slotProps.msg }}\n  </template>\n</slot-example>\n')])])]),a("p",[a("code",[t._v("slot-scope")]),t._v(" attribute 也可以直接用于非 "),a("code",[t._v("<template>")]),t._v(" 元素 (包括组件)：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<slot-example>\n  <span slot-scope="slotProps">\n    {{ slotProps.msg }}\n  </span>\n</slot-example>\n')])])]),a("p",[a("code",[t._v("slot-scope")]),t._v(" 的值可以接收任何有效的可以出现在函数定义的参数位置上的 JavaScript 表达式。这意味着在支持的环境下 ("),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("单文件组件"),a("OutboundLink")],1),t._v("或"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代浏览器"),a("OutboundLink")],1),t._v(")，你也可以在表达式中使用 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E8%A7%A3%E6%9E%84%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES2015 解构"),a("OutboundLink")],1),t._v("，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<slot-example>\n  <span slot-scope="{ msg }">\n    {{ msg }}\n  </span>\n</slot-example>\n')])])]),a("p",[t._v("使用"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B6%E5%AE%83%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("描述过的 "),a("code",[t._v("<todo-list>")]),t._v(" 作为示例，与它等价的使用 "),a("code",[t._v("slot-scope")]),t._v(" 的代码是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<todo-list v-bind:todos="todos">\n  <template slot="todo" slot-scope="{ todo }">\n    <span v-if="todo.isComplete">✓</span>\n    {{ todo.text }}\n  </template>\n</todo-list>\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);