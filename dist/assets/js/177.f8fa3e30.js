(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{683:function(e,t,s){"use strict";s.r(t);var a=s(6),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"fiber架构的由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber架构的由来"}},[e._v("#")]),e._v(" Fiber架构的由来")]),e._v(" "),s("h2",{attrs:{id:"react理念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react理念"}},[e._v("#")]),e._v(" React理念")]),e._v(" "),s("p",[e._v("React 是用 JavaScript 构建"),s("strong",[e._v("快速响应")]),e._v("的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。")]),e._v(" "),s("p",[e._v("可见，关键是实现"),s("code",[e._v("快速响应")]),e._v("。那么制约"),s("code",[e._v("快速响应")]),e._v("的因素是什么呢？")]),e._v(" "),s("p",[e._v("我们日常使用App，浏览网页时，有两类场景会制约"),s("code",[e._v("快速响应")]),e._v("：")]),e._v(" "),s("ul",[s("li",[e._v("当遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿。")]),e._v(" "),s("li",[e._v("发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应。")])]),e._v(" "),s("p",[e._v("这两类场景可以概括为：")]),e._v(" "),s("ul",[s("li",[e._v("CPU的瓶颈")]),e._v(" "),s("li",[e._v("IO的瓶颈")])]),e._v(" "),s("p",[s("code",[e._v("React")]),e._v("是如何解决这两个瓶颈的呢？")]),e._v(" "),s("h2",{attrs:{id:"cpu的瓶颈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu的瓶颈"}},[e._v("#")]),e._v(" CPU的瓶颈")]),e._v(" "),s("p",[e._v("当项目变得庞大、组件数量繁多时，就容易遇到CPU的瓶颈。")]),e._v(" "),s("p",[e._v("考虑如下Demo，我们向视图中渲染3000个"),s("code",[e._v("li")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[e._v("function App() {\n  const len = 3000;\n  return (\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n      {Array(len).fill(0).map((_, i) => "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("{i}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(")}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v('\n  );\n}\nconst rootEl = document.querySelector("#root");\nReactDOM.render('),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v(", rootEl);  \n")])])]),s("p",[e._v("主流浏览器刷新频率为60Hz，即每（1000ms / 60Hz）16.6ms浏览器刷新一次。")]),e._v(" "),s("p",[e._v("我们知道，JS可以操作DOM，"),s("code",[e._v("GUI渲染线程")]),e._v("与"),s("code",[e._v("JS线程")]),e._v("是互斥的。所以"),s("strong",[e._v("JS脚本执行")]),e._v("和"),s("strong",[e._v("浏览器布局、绘制")]),e._v("不能同时执行。")]),e._v(" "),s("p",[e._v("在每16.6ms时间内，需要完成如下工作：")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("JS脚本执行 -----  样式布局 ----- 样式绘制\n")])])]),s("p",[e._v("当JS执行时间过长，超出了16.6ms，这次刷新就没有时间执行"),s("strong",[e._v("样式布局")]),e._v("和"),s("strong",[e._v("样式绘制")]),e._v("了。")]),e._v(" "),s("p",[e._v("在Demo中，由于组件数量繁多（3000个），JS脚本执行时间过长，页面掉帧，造成卡顿。")]),e._v(" "),s("h2",{attrs:{id:"react15架构的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react15架构的缺点"}},[e._v("#")]),e._v(" React15架构的缺点")]),e._v(" "),s("p",[e._v("在"),s("strong",[e._v("Reconciler")]),e._v("中，"),s("code",[e._v("mount")]),e._v("的组件会调用"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L498",target:"_blank",rel:"noopener noreferrer"}},[e._v("mountComponent (opens new window)"),s("OutboundLink")],1),e._v("，"),s("code",[e._v("update")]),e._v("的组件会调用"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/ReactDOMComponent.js#L877",target:"_blank",rel:"noopener noreferrer"}},[e._v("updateComponent (opens new window)"),s("OutboundLink")],1),e._v("。这两个方法都会递归更新子组件。")]),e._v(" "),s("h3",{attrs:{id:"递归更新的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归更新的缺点"}},[e._v("#")]),e._v(" 递归更新的缺点")]),e._v(" "),s("p",[e._v("由于递归执行，所以更新一旦开始，中途就无法中断。当层级很深时，递归更新时间超过了16ms，用户交互就会卡顿。")]),e._v(" "),s("p",[e._v("在上一节中，我们已经提出了解决办法——用"),s("strong",[e._v("可中断的异步更新")]),e._v("代替"),s("strong",[e._v("同步的更新")]),e._v("。那么React15的架构支持异步更新么？")]),e._v(" "),s("h2",{attrs:{id:"react16架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react16架构"}},[e._v("#")]),e._v(" React16架构")]),e._v(" "),s("p",[e._v("React16架构可以分为三层：")]),e._v(" "),s("ul",[s("li",[e._v("Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入"),s("strong",[e._v("Reconciler")])]),e._v(" "),s("li",[e._v("Reconciler（协调器）—— 负责找出变化的组件")]),e._v(" "),s("li",[e._v("Renderer（渲染器）—— 负责将变化的组件渲染到页面上")])]),e._v(" "),s("p",[e._v("可以看到，相较于React15，React16中新增了"),s("strong",[e._v("Scheduler（调度器）")]),e._v("，让我们来了解下他。")]),e._v(" "),s("h3",{attrs:{id:"scheduler-调度器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduler-调度器"}},[e._v("#")]),e._v(" Scheduler（调度器）")]),e._v(" "),s("p",[e._v("既然我们以浏览器是否有剩余时间作为任务中断的标准，那么我们需要一种机制，当浏览器有剩余时间时通知我们。")]),e._v(" "),s("p",[e._v("其实部分浏览器已经实现了这个API，这就是"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestIdleCallback (opens new window)"),s("OutboundLink")],1),e._v("。但是由于以下因素，"),s("code",[e._v("React")]),e._v("放弃使用：")]),e._v(" "),s("ul",[s("li",[e._v("浏览器兼容性")]),e._v(" "),s("li",[e._v("触发频率不稳定，受很多因素影响。比如当我们的浏览器切换tab后，之前tab注册的"),s("code",[e._v("requestIdleCallback")]),e._v("触发的频率会变得很低")])]),e._v(" "),s("p",[e._v("基于以上原因，"),s("code",[e._v("React")]),e._v("实现了功能更完备的"),s("code",[e._v("requestIdleCallback")]),e._v("polyfill，这就是"),s("strong",[e._v("Scheduler")]),e._v("。除了在空闲时触发回调的功能外，"),s("strong",[e._v("Scheduler")]),e._v("还提供了多种调度优先级供任务设置。")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/scheduler/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scheduler (opens new window)"),s("OutboundLink")],1),e._v("是独立于"),s("code",[e._v("React")]),e._v("的库")])]),e._v(" "),s("h3",{attrs:{id:"reconciler-协调器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reconciler-协调器"}},[e._v("#")]),e._v(" Reconciler（协调器）")]),e._v(" "),s("p",[e._v("我们知道，在React15中"),s("strong",[e._v("Reconciler")]),e._v("是递归处理虚拟DOM的。让我们看看"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L1673",target:"_blank",rel:"noopener noreferrer"}},[e._v("React16的Reconciler (opens new window)"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("p",[e._v("我们可以看见，更新工作从递归变成了可以中断的循环过程。每次循环都会调用"),s("code",[e._v("shouldYield")]),e._v("判断当前是否有剩余时间。")]),e._v(" "),s("p",[e._v("在React16架构中整个更新流程为：")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/React/ReactExtends/Fiber/Fiber.assets/process.png",alt:"更新流程"}})]),e._v(" "),s("p",[e._v("其中红框中的步骤随时可能由于以下原因被中断：")]),e._v(" "),s("ul",[s("li",[e._v("有其他更高优任务需要先更新")]),e._v(" "),s("li",[e._v("当前帧没有剩余时间")])]),e._v(" "),s("p",[e._v("由于红框中的工作都在内存中进行，不会更新页面上的DOM，所以即使反复中断，用户也不会看见更新不完全的DOM（即上一节演示的情况）。")]),e._v(" "),s("blockquote",[s("p",[e._v("实际上，由于"),s("strong",[e._v("Scheduler")]),e._v("和"),s("strong",[e._v("Reconciler")]),e._v("都是平台无关的，所以"),s("code",[e._v("React")]),e._v("为他们单独发了一个包"),s("a",{attrs:{href:"https://www.npmjs.com/package/react-reconciler",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-Reconciler (opens new window)"),s("OutboundLink")],1),e._v("。你可以用这个包自己实现一个"),s("code",[e._v("ReactDOM")]),e._v("，具体见"),s("strong",[e._v("参考资料")])])]),e._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("通过本节我们知道了"),s("code",[e._v("React16")]),e._v("采用新的"),s("code",[e._v("Reconciler")]),e._v("。")]),e._v(" "),s("p",[s("code",[e._v("Reconciler")]),e._v("内部采用了"),s("code",[e._v("Fiber")]),e._v("的架构。")]),e._v(" "),s("h2",{attrs:{id:"代数效应与generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代数效应与generator"}},[e._v("#")]),e._v(" 代数效应与Generator")]),e._v(" "),s("p",[e._v("从"),s("code",[e._v("React15")]),e._v("到"),s("code",[e._v("React16")]),e._v("，协调器（"),s("code",[e._v("Reconciler")]),e._v("）重构的一大目的是：将老的"),s("code",[e._v("同步更新")]),e._v("的架构变为"),s("code",[e._v("异步可中断更新")]),e._v("。")]),e._v(" "),s("p",[s("code",[e._v("异步可中断更新")]),e._v("可以理解为："),s("code",[e._v("更新")]),e._v("在执行过程中可能会被打断（浏览器时间分片用尽或有更高优任务插队），当可以继续执行时恢复之前执行的中间状态。")]),e._v(" "),s("p",[e._v("这就是"),s("code",[e._v("代数效应")]),e._v("中"),s("code",[e._v("try...handle")]),e._v("的作用。")]),e._v(" "),s("p",[e._v("其实，浏览器原生就支持类似的实现，这就是"),s("code",[e._v("Generator")]),e._v("。")]),e._v(" "),s("p",[e._v("但是"),s("code",[e._v("Generator")]),e._v("的一些缺陷使"),s("code",[e._v("React")]),e._v("团队放弃了他：")]),e._v(" "),s("ul",[s("li",[e._v("类似"),s("code",[e._v("async")]),e._v("，"),s("code",[e._v("Generator")]),e._v("也是"),s("code",[e._v("传染性")]),e._v("的，使用了"),s("code",[e._v("Generator")]),e._v("则上下文的其他函数也需要作出改变。这样心智负担比较重。")]),e._v(" "),s("li",[s("code",[e._v("Generator")]),e._v("执行的"),s("code",[e._v("中间状态")]),e._v("是上下文关联的。")])]),e._v(" "),s("p",[e._v("考虑如下例子：")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("doWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("C")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("doExpensiveWorkA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("yield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("doExpensiveWorkB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("yield")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" z "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("doExpensiveWorkC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("每当浏览器有空闲时间都会依次执行其中一个"),s("code",[e._v("doExpensiveWork")]),e._v("，当时间用尽则会中断，当再次恢复时会从中断位置继续执行。")]),e._v(" "),s("p",[e._v("只考虑“单一优先级任务的中断与继续”情况下"),s("code",[e._v("Generator")]),e._v("可以很好的实现"),s("code",[e._v("异步可中断更新")]),e._v("。")]),e._v(" "),s("p",[e._v("但是当我们考虑“高优先级任务插队”的情况，如果此时已经完成"),s("code",[e._v("doExpensiveWorkA")]),e._v("与"),s("code",[e._v("doExpensiveWorkB")]),e._v("计算出"),s("code",[e._v("x")]),e._v("与"),s("code",[e._v("y")]),e._v("。")]),e._v(" "),s("p",[e._v("此时"),s("code",[e._v("B")]),e._v("组件接收到一个"),s("code",[e._v("高优更新")]),e._v("，由于"),s("code",[e._v("Generator")]),e._v("执行的"),s("code",[e._v("中间状态")]),e._v("是上下文关联的，所以计算"),s("code",[e._v("y")]),e._v("时无法复用之前已经计算出的"),s("code",[e._v("x")]),e._v("，需要重新计算。")]),e._v(" "),s("p",[e._v("如果通过"),s("code",[e._v("全局变量")]),e._v("保存之前执行的"),s("code",[e._v("中间状态")]),e._v("，又会引入新的复杂度。")]),e._v(" "),s("blockquote",[s("p",[e._v("更详细的解释可以参考"),s("a",{attrs:{href:"https://github.com/facebook/react/issues/7942#issuecomment-254987818",target:"_blank",rel:"noopener noreferrer"}},[e._v("这个issue(opens new window)"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("基于这些原因，"),s("code",[e._v("React")]),e._v("没有采用"),s("code",[e._v("Generator")]),e._v("实现"),s("code",[e._v("协调器")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"代数效应与fiber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代数效应与fiber"}},[e._v("#")]),e._v(" 代数效应与Fiber")]),e._v(" "),s("p",[s("code",[e._v("Fiber")]),e._v("并不是计算机术语中的新名词，他的中文翻译叫做"),s("code",[e._v("纤程")]),e._v("，与进程（Process）、线程（Thread）、协程（Coroutine）同为程序执行过程。")]),e._v(" "),s("p",[e._v("在很多文章中将"),s("code",[e._v("纤程")]),e._v("理解为"),s("code",[e._v("协程")]),e._v("的一种实现。在"),s("code",[e._v("JS")]),e._v("中，"),s("code",[e._v("协程")]),e._v("的实现便是"),s("code",[e._v("Generator")]),e._v("。")]),e._v(" "),s("p",[e._v("所以，我们可以将"),s("code",[e._v("纤程")]),e._v("(Fiber)、"),s("code",[e._v("协程")]),e._v("(Generator)理解为"),s("code",[e._v("代数效应")]),e._v("思想在"),s("code",[e._v("JS")]),e._v("中的体现。")]),e._v(" "),s("p",[s("code",[e._v("React Fiber")]),e._v("可以理解为：")]),e._v(" "),s("p",[s("code",[e._v("React")]),e._v("内部实现的一套状态更新机制。支持任务不同"),s("code",[e._v("优先级")]),e._v("，可中断与恢复，并且恢复后可以复用之前的"),s("code",[e._v("中间状态")]),e._v("。")]),e._v(" "),s("p",[e._v("其中每个任务更新单元为"),s("code",[e._v("React Element")]),e._v("对应的"),s("code",[e._v("Fiber节点")]),e._v("。")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("React15")]),e._v("及以前，"),s("code",[e._v("Reconciler")]),e._v("采用递归的方式创建虚拟DOM，递归过程是不能中断的。如果组件树的层级很深，递归会占用线程很多时间，造成卡顿。")]),e._v(" "),s("p",[e._v("为了解决这个问题，"),s("code",[e._v("React16")]),e._v("将"),s("strong",[e._v("递归的无法中断的更新")]),e._v("重构为"),s("strong",[e._v("异步的可中断更新")]),e._v("，由于曾经用于递归的"),s("strong",[e._v("虚拟DOM")]),e._v("数据结构已经无法满足需要。于是，全新的"),s("code",[e._v("Fiber")]),e._v("架构应运而生。")]),e._v(" "),s("h2",{attrs:{id:"fiber的含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber的含义"}},[e._v("#")]),e._v(" Fiber的含义")]),e._v(" "),s("p",[s("code",[e._v("Fiber")]),e._v("包含三层含义：")]),e._v(" "),s("ol",[s("li",[e._v("作为架构来说，之前"),s("code",[e._v("React15")]),e._v("的"),s("code",[e._v("Reconciler")]),e._v("采用递归的方式执行，数据保存在递归调用栈中，所以被称为"),s("code",[e._v("stack Reconciler")]),e._v("。"),s("code",[e._v("React16")]),e._v("的"),s("code",[e._v("Reconciler")]),e._v("基于"),s("code",[e._v("Fiber节点")]),e._v("实现，被称为"),s("code",[e._v("Fiber Reconciler")]),e._v("。")]),e._v(" "),s("li",[e._v("作为静态的数据结构来说，每个"),s("code",[e._v("Fiber节点")]),e._v("对应一个"),s("code",[e._v("React element")]),e._v("，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息。")]),e._v(" "),s("li",[e._v("作为动态的工作单元来说，每个"),s("code",[e._v("Fiber节点")]),e._v("保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...）。")])]),e._v(" "),s("h2",{attrs:{id:"fiber的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber的结构"}},[e._v("#")]),e._v(" Fiber的结构")]),e._v(" "),s("p",[e._v("你可以从这里看到"),s("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiber.new.js#L117",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fiber节点的属性定义 (opens new window)"),s("OutboundLink")],1),e._v("。虽然属性很多，但我们可以按三层含义将他们分类来看")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("FiberNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" WorkTag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  pendingProps"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" mixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" TypeOfMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 作为静态数据结构的属性")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("key "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("elementType "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("stateNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 用于连接其他Fiber节点形成Fiber树")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("return "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("child "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sibling "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ref "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 作为动态的工作单元的属性")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pendingProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" pendingProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("memoizedProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("memoizedState "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("dependencies "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("mode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("effectTag "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" NoEffect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("nextEffect "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("firstEffect "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("lastEffect "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 调度优先级相关")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("lanes "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" NoLanes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("childLanes "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" NoLanes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向该fiber在另一次更新时对应的fiber")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alternate "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h3",{attrs:{id:"作为架构来说"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作为架构来说"}},[e._v("#")]),e._v(" 作为架构来说")]),e._v(" "),s("p",[e._v("每个Fiber节点有个对应的"),s("code",[e._v("React element")]),e._v("，多个"),s("code",[e._v("Fiber节点")]),e._v("是如何连接形成树呢？靠如下三个属性：")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向父级Fiber节点")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("return "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向子Fiber节点")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("child "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指向右边第一个兄弟Fiber节点")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sibling "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h1",{attrs:{id:"fiber架构的工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fiber架构的工作原理"}},[e._v("#")]),e._v(" Fiber架构的工作原理")]),e._v(" "),s("p",[e._v("通过上一节的学习，我们了解了"),s("code",[e._v("Fiber")]),e._v("是什么，知道"),s("code",[e._v("Fiber节点")]),e._v("可以保存对应的"),s("code",[e._v("DOM节点")]),e._v("。")]),e._v(" "),s("p",[e._v("相应的，"),s("code",[e._v("Fiber节点")]),e._v("构成的"),s("code",[e._v("Fiber树")]),e._v("就对应"),s("code",[e._v("DOM树")]),e._v("。")]),e._v(" "),s("p",[e._v("那么如何更新"),s("code",[e._v("DOM")]),e._v("呢？这需要用到被称为“双缓存”的技术。")]),e._v(" "),s("h2",{attrs:{id:"什么是-双缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-双缓存"}},[e._v("#")]),e._v(" 什么是“双缓存”")]),e._v(" "),s("p",[e._v("当我们用"),s("code",[e._v("canvas")]),e._v("绘制动画，每一帧绘制前都会调用"),s("code",[e._v("ctx.clearRect")]),e._v("清除上一帧的画面。")]),e._v(" "),s("p",[e._v("如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。")]),e._v(" "),s("p",[e._v("为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。")]),e._v(" "),s("p",[e._v("这种"),s("strong",[e._v("在内存中构建并直接替换")]),e._v("的技术叫做"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8F%8C%E7%BC%93%E5%86%B2",target:"_blank",rel:"noopener noreferrer"}},[e._v("双缓存 (opens new window)"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("p",[s("code",[e._v("React")]),e._v("使用“双缓存”来完成"),s("code",[e._v("Fiber树")]),e._v("的构建与替换——对应着"),s("code",[e._v("DOM树")]),e._v("的创建与更新。")]),e._v(" "),s("h2",{attrs:{id:"双缓存fiber树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双缓存fiber树"}},[e._v("#")]),e._v(" 双缓存Fiber树")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("React")]),e._v("中最多会同时存在两棵"),s("code",[e._v("Fiber树")]),e._v("。当前屏幕上显示内容对应的"),s("code",[e._v("Fiber树")]),e._v("称为"),s("code",[e._v("current Fiber树")]),e._v("，正在内存中构建的"),s("code",[e._v("Fiber树")]),e._v("称为"),s("code",[e._v("workInProgress Fiber树")]),e._v("。")]),e._v(" "),s("p",[s("code",[e._v("current Fiber树")]),e._v("中的"),s("code",[e._v("Fiber节点")]),e._v("被称为"),s("code",[e._v("current fiber")]),e._v("，"),s("code",[e._v("workInProgress Fiber树")]),e._v("中的"),s("code",[e._v("Fiber节点")]),e._v("被称为"),s("code",[e._v("workInProgress fiber")]),e._v("，他们通过"),s("code",[e._v("alternate")]),e._v("属性连接。")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("currentFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alternate "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" workInProgressFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nworkInProgressFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alternate "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" currentFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[s("code",[e._v("React")]),e._v("应用的根节点通过使"),s("code",[e._v("current")]),e._v("指针在不同"),s("code",[e._v("Fiber树")]),e._v("的"),s("code",[e._v("rootFiber")]),e._v("间切换来完成"),s("code",[e._v("current Fiber")]),e._v("树指向的切换。")]),e._v(" "),s("p",[e._v("即当"),s("code",[e._v("workInProgress Fiber树")]),e._v("构建完成交给"),s("code",[e._v("Renderer")]),e._v("渲染在页面上后，应用根节点的"),s("code",[e._v("current")]),e._v("指针指向"),s("code",[e._v("workInProgress Fiber树")]),e._v("，此时"),s("code",[e._v("workInProgress Fiber树")]),e._v("就变为"),s("code",[e._v("current Fiber树")]),e._v("。")]),e._v(" "),s("p",[e._v("每次状态更新都会产生新的"),s("code",[e._v("workInProgress Fiber树")]),e._v("，通过"),s("code",[e._v("current")]),e._v("与"),s("code",[e._v("workInProgress")]),e._v("的替换，完成"),s("code",[e._v("DOM")]),e._v("更新。")]),e._v(" "),s("p",[e._v("接下来我们以具体例子讲解"),s("code",[e._v("mount时")]),e._v("、"),s("code",[e._v("update时")]),e._v("的构建/替换流程。")]),e._v(" "),s("h2",{attrs:{id:"mount时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mount时"}},[e._v("#")]),e._v(" mount时")]),e._v(" "),s("p",[e._v("考虑如下例子：")]),e._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[e._v("function App() {\n  const [num, add] = useState(0);\n  return (\n    <p onClick={() => add(num + 1)}>{num}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  )\n}\nReactDOM.render("),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v(", document.getElementById('root'));\n")])])]),s("ol",[s("li",[e._v("首次执行"),s("code",[e._v("ReactDOM.render")]),e._v("会创建"),s("code",[e._v("fiberRootNode")]),e._v("（源码中叫"),s("code",[e._v("fiberRoot")]),e._v("）和"),s("code",[e._v("rootFiber")]),e._v("。其中"),s("code",[e._v("fiberRootNode")]),e._v("是整个应用的根节点，"),s("code",[e._v("rootFiber")]),e._v("是"),s("code",[e._v("<App/>")]),e._v("所在组件树的根节点。")])]),e._v(" "),s("p",[e._v("之所以要区分"),s("code",[e._v("fiberRootNode")]),e._v("与"),s("code",[e._v("rootFiber")]),e._v("，是因为在应用中我们可以多次调用"),s("code",[e._v("ReactDOM.render")]),e._v("渲染不同的组件树，他们会拥有不同的"),s("code",[e._v("rootFiber")]),e._v("。但是整个应用的根节点只有一个，那就是"),s("code",[e._v("fiberRootNode")]),e._v("。")]),e._v(" "),s("p",[s("code",[e._v("fiberRootNode")]),e._v("的"),s("code",[e._v("current")]),e._v("会指向当前页面上已渲染内容对应"),s("code",[e._v("Fiber树")]),e._v("，即"),s("code",[e._v("current Fiber树")]),e._v("。")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/React/ReactExtends/Fiber/Fiber.assets/rootfiber.png",alt:"rootFiber"}})]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("fiberRootNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" rootFiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("由于是首屏渲染，页面中还没有挂载任何"),s("code",[e._v("DOM")]),e._v("，所以"),s("code",[e._v("fiberRootNode.current")]),e._v("指向的"),s("code",[e._v("rootFiber")]),e._v("没有任何"),s("code",[e._v("子Fiber节点")]),e._v("（即"),s("code",[e._v("current Fiber树")]),e._v("为空）。")]),e._v(" "),s("ol",[s("li",[e._v("接下来进入"),s("code",[e._v("render阶段")]),e._v("，根据组件返回的"),s("code",[e._v("JSX")]),e._v("在内存中依次创建"),s("code",[e._v("Fiber节点")]),e._v("并连接在一起构建"),s("code",[e._v("Fiber树")]),e._v("，被称为"),s("code",[e._v("workInProgress Fiber树")]),e._v("。（下图中右侧为内存中构建的树，左侧为页面显示的树）")])]),e._v(" "),s("p",[e._v("在构建"),s("code",[e._v("workInProgress Fiber树")]),e._v("时会尝试复用"),s("code",[e._v("current Fiber树")]),e._v("中已有的"),s("code",[e._v("Fiber节点")]),e._v("内的属性，在"),s("code",[e._v("首屏渲染")]),e._v("时只有"),s("code",[e._v("rootFiber")]),e._v("存在对应的"),s("code",[e._v("current fiber")]),e._v("（即"),s("code",[e._v("rootFiber.alternate")]),e._v("）。")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/React/ReactExtends/Fiber/Fiber.assets/workInProgressFiber.png",alt:"workInProgressFiber"}})]),e._v(" "),s("ol",[s("li",[e._v("图中右侧已构建完的"),s("code",[e._v("workInProgress Fiber树")]),e._v("在"),s("code",[e._v("commit阶段")]),e._v("渲染到页面。")])]),e._v(" "),s("p",[e._v("此时"),s("code",[e._v("DOM")]),e._v("更新为右侧树对应的样子。"),s("code",[e._v("fiberRootNode")]),e._v("的"),s("code",[e._v("current")]),e._v("指针指向"),s("code",[e._v("workInProgress Fiber树")]),e._v("使其变为"),s("code",[e._v("current Fiber 树")]),e._v("。")]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/React/ReactExtends/Fiber/Fiber.assets/wipTreeFinish.png",alt:"workInProgressFiberFinish"}})]),e._v(" "),s("h2",{attrs:{id:"update时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update时"}},[e._v("#")]),e._v(" update时")]),e._v(" "),s("ol",[s("li",[e._v("接下来我们点击"),s("code",[e._v("p节点")]),e._v("触发状态改变，这会开启一次新的"),s("code",[e._v("render阶段")]),e._v("并构建一棵新的"),s("code",[e._v("workInProgress Fiber 树")]),e._v("。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/React/ReactExtends/Fiber/Fiber.assets/wipTreeUpdate.png",alt:"wipTreeUpdate"}})]),e._v(" "),s("p",[e._v("和"),s("code",[e._v("mount")]),e._v("时一样，"),s("code",[e._v("workInProgress fiber")]),e._v("的创建可以复用"),s("code",[e._v("current Fiber树")]),e._v("对应的节点数据。")]),e._v(" "),s("blockquote",[s("p",[e._v("这个决定是否复用的过程就是Diff算法，后面章节会详细讲解")])]),e._v(" "),s("ol",[s("li",[s("code",[e._v("workInProgress Fiber 树")]),e._v("在"),s("code",[e._v("render阶段")]),e._v("完成构建后进入"),s("code",[e._v("commit阶段")]),e._v("渲染到页面上。渲染完毕后，"),s("code",[e._v("workInProgress Fiber 树")]),e._v("变为"),s("code",[e._v("current Fiber 树")]),e._v("。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"/images/React/ReactExtends/Fiber/Fiber.assets/currentTreeUpdate.png",alt:"currentTreeUpdate"}})]),e._v(" "),s("h2",{attrs:{id:"总结-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("本文介绍了"),s("code",[e._v("Fiber树")]),e._v("的构建与替换过程，这个过程伴随着"),s("code",[e._v("DOM")]),e._v("的更新。")]),e._v(" "),s("p",[e._v("那么在构建过程中每个"),s("code",[e._v("Fiber节点")]),e._v("具体是如何创建的呢？我们会在"),s("code",[e._v("架构篇")]),e._v("的"),s("RouterLink",{attrs:{to:"/React/ReactExtends/Fiber/Architecture.html"}},[e._v("render阶段")]),e._v("讲解。")],1),e._v(" "),s("p",[e._v("通过本章的学习，我们了解了"),s("code",[e._v("React")]),e._v("的"),s("code",[e._v("Scheduler-Reconciler-Renderer")]),e._v("架构体系，在结束本章前，我想介绍几个源码内的术语：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Reconciler")]),e._v("工作的阶段被称为"),s("code",[e._v("render")]),e._v("阶段。因为在该阶段会调用组件的"),s("code",[e._v("render")]),e._v("方法。")]),e._v(" "),s("li",[s("code",[e._v("Renderer")]),e._v("工作的阶段被称为"),s("code",[e._v("commit")]),e._v("阶段。就像你完成一个需求的编码后执行"),s("code",[e._v("git commit")]),e._v("提交代码。"),s("code",[e._v("commit")]),e._v("阶段会把"),s("code",[e._v("render")]),e._v("阶段提交的信息渲染在页面上。")]),e._v(" "),s("li",[s("code",[e._v("render")]),e._v("与"),s("code",[e._v("commit")]),e._v("阶段统称为"),s("code",[e._v("work")]),e._v("，即"),s("code",[e._v("React")]),e._v("在工作中。相对应的，如果任务正在"),s("code",[e._v("Scheduler")]),e._v("内调度，就不属于"),s("code",[e._v("work")]),e._v("。")])]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("架构篇")]),e._v("我们会分别讲解"),s("code",[e._v("Reconciler")]),e._v("和"),s("code",[e._v("Renderer")]),e._v("的工作流程，所以章节名分别为"),s("code",[e._v("render阶段")]),e._v("和"),s("code",[e._v("commit阶段")]),e._v("。")])])}),[],!1,null,null,null);t.default=r.exports}}]);