(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{453:function(t,e,r){"use strict";r.r(e);var n=r(45),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"vite-2-0-发布了"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vite-2-0-发布了"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/351147547",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vite 2.0 发布了"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("作者：尤雨溪\n链接：https://zhuanlan.zhihu.com/p/351147547\n来源：知乎\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),t._v(" "),r("p",[t._v("下一代前端开发与构建工具Vite")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cn.vitejs.dev/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("开始"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cn.vitejs.dev/guide/why",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解更多"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Vite 2.0 正式发布了！")]),t._v(" "),r("p",[t._v("Vite（法语意思是 “快”，发音为 /vit/，类似 veet）是一种全新的前端构建工具。你可以把它理解为一个开箱即用的开发服务器 + 打包工具的组合，但是更轻更快。Vite 利用浏览器原生的 ES 模块支持和用编译到原生的语言开发的工具（如 esbuild）来提供一个快速且现代的开发体验。")]),t._v(" "),r("p",[t._v("Vite 有多快？在 "),r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//Repl.it",target:"_blank",rel:"noopener noreferrer"}},[t._v("Repl.it"),r("OutboundLink")],1),t._v(" 上从零启动一个基于 Vite 的 React 应用，浏览器页面加载完毕的时候，CRA（create-react-app）甚至还没有装完依赖。")]),t._v(" "),r("p",[t._v("如果你还没听说过 Vite 到底是什么，可以到"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//cn.vitejs.dev/guide/why.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v("了解一下项目的设计初衷。如果你想要了解 Vite 跟其它一些类似的工具有什么区别，可以参考这里的"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//cn.vitejs.dev/guide/comparisons.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("对比"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"_2-0-带来了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-带来了什么"}},[t._v("#")]),t._v(" 2.0 带来了什么")]),t._v(" "),r("p",[t._v("Vite 1.0 虽然之前进入了 RC 阶段，但在发布之前我们决定进行一次彻底的重构来解决一些设计缺陷。所以 Vite 2.0 其实是 Vite 的第一个稳定版本。2.0 带来了大量的改进：")]),t._v(" "),r("p",[r("strong",[t._v("多框架支持")])]),t._v(" "),r("p",[t._v("Vite 一开始主要注重于 Vue 的单文件组件支持，但 2.0 基于之前的经验提供了一个更稳定灵活的内部架构，从而可以完全通过插件机制来支持任意框架。现在 Vite 提供官方的 Vue, React, Preact, Lit Element 项目模版，而 Svelte 社区也在开发 Vite 整合方案。")]),t._v(" "),r("p",[r("strong",[t._v("全新插件机制和 API")])]),t._v(" "),r("p",[t._v("Vite 2.0 受 "),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/preactjs/wmr",target:"_blank",rel:"noopener noreferrer"}},[t._v("WMR"),r("OutboundLink")],1),t._v(" 的启发采用了基于 Rollup 插件 API 的设计。"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//vite-rollup-plugins.patak.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("很多 Rollup 插件可以跟 Vite 直接兼容"),r("OutboundLink")],1),t._v("。插件可以在使用 Rollup 插件钩子之外使用一些额外的 Vite 特有的 API 来处理一些打包中不存在的需求，比如区分开发 vs 打包，或是自定义的热更新处理。")]),t._v(" "),r("p",[t._v("Vite 的 "),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//cn.vitejs.dev/guide/api-javascript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS API"),r("OutboundLink")],1),t._v(" 也得到了大幅改进 - 已经有不少用户在开发基于 Vite 的上层框架，Nuxt 团队也已经在 Nuxt 3 中验证了初步整合的可行性。")]),t._v(" "),r("p",[r("strong",[t._v("基于 esbuild 的依赖预打包")])]),t._v(" "),r("p",[t._v("由于 Vite 是一个基于原生 ESM 的开发服务器，在启动时我们需要通过依赖预打包来达成两个目的：1. 减少模块/请求数量； 2. 支持 CommonJS 依赖。预打包只有在依赖变动时才需要执行，但在有大量依赖的项目中，每次执行还是可能会需要很长时间。Vite 之前是使用 Rollup 来执行这个过程，在 2.0 中我们切换到了 esbuild，使这个过程加快了几十倍。冷启动一个之前需要将近 30 秒预打包的项目现在只需要不到两秒！从 webpack 或其它打包工具迁移到 Vite 应该也会有类似的速度改善。")]),t._v(" "),r("p",[r("strong",[t._v("更好的 CSS 支持")])]),t._v(" "),r("p",[t._v("Vite 将 CSS 看作模块系统中的一等公民，并且内置了一下支持：")]),t._v(" "),r("ul",[r("li",[t._v("强化路径解析：CSS 中的 @import 和 url() 路径都通过 Vite 的路径解析器来解析，从而支持 alias 和 npm 依赖。")]),t._v(" "),r("li",[t._v("自动 URL 改写：所有 url() 路径都会被自动改写从而确保在开发和构建中都指向正确的文件路径。")]),t._v(" "),r("li",[t._v("CSS 代码分割：构建时每一个被分割的 JS 文件都会自动生成一个对应的 CSS 文件，并且两个文件会被自动并行按需加载。")])]),t._v(" "),r("p",[t._v("**\n服务端渲染 (SSR) 支持**")]),t._v(" "),r("p",[t._v("Vite 2.0 提供"),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//cn.vitejs.dev/guide/ssr.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("实验性的 SSR 支持"),r("OutboundLink")],1),t._v("。Vite 提供一个灵活的 API 来在 Node.js 中高效率地直接加载 ESM 源码（并且同样有精准的更新而不需要打包）。提供 CommonJS 版本的依赖会在 SSR 时自动被跳过转换直接加载。生产环境下，服务器可以和 Vite 完全解耦。基于 Vite SSR 的架构也可以很方便的做静态预渲染（SSG)。")]),t._v(" "),r("p",[r("strong",[t._v("旧浏览器支持")])]),t._v(" "),r("p",[t._v("Vite 默认只支持原生支持 ESM 的现代浏览器，但可以通过官方的 "),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/vitejs/vite/tree/main/packages/plugin-legacy",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vitejs/plugin-legacy"),r("OutboundLink")],1),t._v(" 来支持旧浏览器。legacy 插件会自动额外生成一个针对旧浏览器的包，并且在 html 中插入根据浏览器 ESM 支持来选择性加载对应包的代码（类似 vue-cli 的 modern mode）。")]),t._v(" "),r("p",[r("strong",[t._v("尝试一下！")])]),t._v(" "),r("p",[t._v("功能很多，但是试一下其实很简单。只需要一分钟，用以下命令就可以迅速搭起一个基于 vite 的项目（确保你的 Node.js 版本 >=12）：")]),t._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("npm init @vitejs/app\n")])])]),r("ul",[r("li",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//twitter.com/vite_js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//chat.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);