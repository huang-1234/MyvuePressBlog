(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{307:function(e,t,a){"use strict";function r(e,t,a,r,n,s,o,c){var l,v="function"==typeof e?e.options:e;if(t&&(v.render=t,v.staticRenderFns=a,v._compiled=!0),r&&(v.functional=!0),s&&(v._scopeId="data-v-"+s),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},v._ssrRegister=l):n&&(l=c?function(){n.call(this,(v.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(v.functional){v._injectStyles=l;var _=v.render;v.render=function(e,t){return l.call(t),_(e,t)}}else{var i=v.beforeCreate;v.beforeCreate=i?[].concat(i,l):[l]}return{exports:e,options:v}}a.d(t,"a",(function(){return r}))},450:function(e,t,a){"use strict";a.r(t);var r=a(307),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_2-理解jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-理解jsx"}},[e._v("#")]),e._v(" 2. 理解JSX")]),e._v(" "),a("p",[e._v("考虑如下变量声明：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const element = <h1>Hello, world!</h1>;\n")])])]),a("p",[e._v("这个有趣的标签语法既不是字符串也不是 HTML。")]),e._v(" "),a("p",[e._v("它被称为 JSX，是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。")]),e._v(" "),a("p",[e._v("JSX 可以生成 React “元素”。我们将在"),a("a",{attrs:{href:"https://react.docschina.org/docs/rendering-elements.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下一章节"),a("OutboundLink")],1),e._v("中探讨如何将这些元素渲染为 DOM。下面我们看下学习 JSX 所需的基础知识。")]),e._v(" "),a("h3",{attrs:{id:"为什么使用-jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-jsx"}},[e._v("#")]),e._v(" 为什么使用 JSX？")]),e._v(" "),a("p",[e._v("React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。")]),e._v(" "),a("p",[e._v("React 并没有采用将"),a("em",[e._v("标记与逻辑进行分离到不同文件")]),e._v("这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("关注点分离")]),a("OutboundLink")],1),e._v("。我们将在"),a("a",{attrs:{href:"https://react.docschina.org/docs/components-and-props.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("后面章节"),a("OutboundLink")],1),e._v("中深入学习组件。如果你还没有适应在 JS 中使用标记语言，这个"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=x7cQ3mrcKaY",target:"_blank",rel:"noopener noreferrer"}},[e._v("会议讨论"),a("OutboundLink")],1),e._v("应该可以说服你。")]),e._v(" "),a("p",[e._v("React "),a("a",{attrs:{href:"https://react.docschina.org/docs/react-without-jsx.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("不强制要求"),a("OutboundLink")],1),e._v("使用 JSX，但是大多数人发现，在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。")]),e._v(" "),a("p",[e._v("搞清楚这个问题后，我们就开始学习 JSX 吧！")]),e._v(" "),a("h3",{attrs:{id:"在-jsx-中嵌入表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-jsx-中嵌入表达式"}},[e._v("#")]),e._v(" 在 JSX 中嵌入表达式")]),e._v(" "),a("p",[e._v("在下面的例子中，我们声明了一个名为 "),a("code",[e._v("name")]),e._v(" 的变量，然后在 JSX 中使用它，并将它包裹在大括号中：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);\n")])])]),a("p",[e._v("在 JSX 语法中，你可以在大括号内放置任何有效的 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 表达式"),a("OutboundLink")],1),e._v("。例如，"),a("code",[e._v("2 + 2")]),e._v("，"),a("code",[e._v("user.firstName")]),e._v(" 或 "),a("code",[e._v("formatName(user)")]),e._v(" 都是有效的 JavaScript 表达式。")]),e._v(" "),a("p",[e._v("在下面的示例中，我们将调用 JavaScript 函数 "),a("code",[e._v("formatName(user)")]),e._v(" 的结果，并将结果嵌入到 "),a("code",[e._v("<h1>")]),e._v(" 元素中。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function formatName(user) {\n  return user.firstName + ' ' + user.lastName;\n}\n\nconst user = {\n  firstName: 'Harper',\n  lastName: 'Perez'\n};\n\nconst element = (\n  <h1>\n    Hello, {formatName(user)}!  </h1>\n);\n\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);\n")])])]),a("p",[a("a",{attrs:{href:"https://react.docschina.org/redirect-to-codepen/introducing-jsx",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("在 CodePen 上尝试")]),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("为了便于阅读，我们会将 JSX 拆分为多行。同时，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到"),a("a",{attrs:{href:"http://stackoverflow.com/q/2846283",target:"_blank",rel:"noopener noreferrer"}},[e._v("自动插入分号"),a("OutboundLink")],1),e._v("陷阱。")]),e._v(" "),a("h3",{attrs:{id:"jsx-也是一个表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-也是一个表达式"}},[e._v("#")]),e._v(" JSX 也是一个表达式")]),e._v(" "),a("p",[e._v("在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。")]),e._v(" "),a("p",[e._v("也就是说，你可以在 "),a("code",[e._v("if")]),e._v(" 语句和 "),a("code",[e._v("for")]),e._v(" 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function getGreeting(user) {\n  if (user) {\n    return <h1>Hello, {formatName(user)}!</h1>;  }\n  return <h1>Hello, Stranger.</h1>;}\n")])])]),a("h3",{attrs:{id:"jsx-特定属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-特定属性"}},[e._v("#")]),e._v(" JSX 特定属性")]),e._v(" "),a("p",[e._v("你可以通过使用引号，来将属性值指定为字符串字面量：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const element = <div tabIndex="0"></div>;\n')])])]),a("p",[e._v("也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const element = <img src={user.avatarUrl}></img>;\n")])])]),a("p",[e._v("在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。")]),e._v(" "),a("blockquote",[a("p",[e._v("因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 "),a("code",[e._v("camelCase")]),e._v("（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。")]),e._v(" "),a("p",[e._v("例如，JSX 里的 "),a("code",[e._v("class")]),e._v(" 变成了 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/className",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("className")]),a("OutboundLink")],1),e._v("，而 "),a("code",[e._v("tabindex")]),e._v(" 则变为 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("tabIndex")]),a("OutboundLink")],1),e._v("。")])]),e._v(" "),a("h3",{attrs:{id:"使用-jsx-指定子元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsx-指定子元素"}},[e._v("#")]),e._v(" 使用 JSX 指定子元素")]),e._v(" "),a("p",[e._v("假如一个标签里面没有内容，你可以使用 "),a("code",[e._v("/>")]),e._v(" 来闭合标签，就像 XML 语法一样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const element = <img src={user.avatarUrl} />;\n")])])]),a("p",[e._v("JSX 标签里能够包含很多子元素:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const element = (\n  <div>\n    <h1>Hello!</h1>\n    <h2>Good to see you here.</h2>\n  </div>\n);\n")])])]),a("h3",{attrs:{id:"jsx-防止注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-防止注入攻击"}},[e._v("#")]),e._v(" JSX 防止注入攻击")]),e._v(" "),a("p",[e._v("你可以安全地在 JSX 当中插入用户输入内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const title = response.potentiallyMaliciousInput;\n// 直接使用是安全的：\nconst element = <h1>{title}</h1>;\n")])])]),a("p",[e._v("React DOM 在渲染所有输入内容之前，默认会进行"),a("a",{attrs:{href:"https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html",target:"_blank",rel:"noopener noreferrer"}},[e._v("转义"),a("OutboundLink")],1),e._v("。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"}},[e._v("XSS（cross-site-scripting, 跨站脚本）"),a("OutboundLink")],1),e._v("攻击。")]),e._v(" "),a("h3",{attrs:{id:"jsx-表示对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-表示对象"}},[e._v("#")]),e._v(" JSX 表示对象")]),e._v(" "),a("p",[e._v("Babel 会把 JSX 转译成一个名为 "),a("code",[e._v("React.createElement()")]),e._v(" 函数调用。")]),e._v(" "),a("p",[e._v("以下两种示例代码完全等效：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const element = (\n  <h1 className=\"greeting\">\n    Hello, world!\n  </h1>\n);\nconst element = React.createElement(\n  'h1',\n  {className: 'greeting'},\n  'Hello, world!'\n);\n")])])]),a("p",[a("code",[e._v("React.createElement()")]),e._v(" 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 注意：这是简化过的结构\nconst element = {\n  type: 'h1',\n  props: {\n    className: 'greeting',\n    children: 'Hello, world!'\n  }\n};\n")])])]),a("p",[e._v("这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。")]),e._v(" "),a("p",[e._v("探讨如何将 React 元素渲染为 DOM。")])])}),[],!1,null,null,null);t.default=n.exports}}]);