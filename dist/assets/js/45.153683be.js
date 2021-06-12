(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{556:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js事件循环-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js事件循环-event-loop"}},[t._v("#")]),t._v(" JS事件循环(Event Loop)")]),t._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("JavaScript 有一个基于事件循环的并发模型，事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。这个模型与其它语言中的模型截然不同，比如 C 和 Java。"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop",target:"_blank",rel:"noopener noreferrer"}},[t._v("（摘自MDN）"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("简单地说，对于 JS 运行中的任务，JS 有一套处理收集，排队，执行的特殊机制，我们把这套处理机制称为事件循环（Event Loop）。")]),t._v(" "),a("p",[t._v("为了更深刻的理解事件循环，我们先了解几个相关概念")]),t._v(" "),a("h4",{attrs:{id:"单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),a("p",[t._v("我们都知道 JS 是单线程的，什么意思呢？")]),t._v(" "),a("p",[t._v("JS 单线程指的是 javascript 引擎（如V8）在同一时刻只能处理一个任务。")]),t._v(" "),a("p",[t._v("有人或许会问，异步任务 ajax 难道不是可以和 JS 代码同时执行么？")]),t._v(" "),a("p",[t._v("答案是可以的，但是这和 JS 单线程并不冲突，前面说过 javascript 引擎（如V8）在同一时刻只能处理一个任务。但这并不是说浏览器在同一个时刻只能处理一件事情，实际上 ajax 等异步任务不是在 JS 引擎上运行的，ajax 在浏览器处理网络的模块中执行，此时不会影响到 JS 引擎的任务处理。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("需要强调的是，同一时刻只能处理一个任务，并不表示此时处理的只有一个函数，\n我们可以有多个正在处理的函数，同时拥有多个执行环境，后面会有分析。\n")])])]),a("h3",{attrs:{id:"执行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行环境"}},[t._v("#")]),t._v(" 执行环境")]),t._v(" "),a("p",[t._v("关于执行环境可以参考")]),t._v(" "),a("p",[t._v("执行环境是 JS 代码语句执行的环境，包括全局执行环境和函数执行环境。")]),t._v(" "),a("ul",[a("li",[t._v("全局执行环境：全局环境是最外围的一个执行环境，根据ECMAScript实现所在的宿主环境不同，表示执行环境的对象也不一样，在web中，全局执行环境被认为是window对象。")]),t._v(" "),a("li",[t._v("函数执行环境：每个函数都有自己的执行环境。")])]),t._v(" "),a("p",[t._v("当一个任务执行时，相应的会对应一个动态变化的执行环境栈，这个执行环境栈包括了不同的执行环境，是一个后进先出的结构。")]),t._v(" "),a("p",[t._v("以下面代码为例，我们看看执行环境栈的动态变化")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fn1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fn2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fn2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当程序执行到此时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fn1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"变量对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量对象"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),a("p",[t._v("每个执行环境都有一个变量对象与之关联（一一对应），变量对象包含了执行环境中定义的所有变量及函数。（在此处可以思考下为什么我们提倡尽量少创建全局变量，答案就是因为全局环境对应的变量对象一直会存在内存中。）")]),t._v(" "),a("h3",{attrs:{id:"事件循环机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制"}},[t._v("#")]),t._v(" 事件循环机制")]),t._v(" "),a("p",[t._v("我们先看看 MDN 上的一张图片\n"),a("img",{attrs:{src:t.$withBase("/images/Browser/jsEventLoop.assets/1027993-20200517201444501-1827901668.png"),alt:"mixureSecure"}})]),t._v(" "),a("p",[t._v("上面这张图很好地展示了 JS 中的事件循环机制，我们可以看到图中主要包括三个部分，Stack，Heap，Queue，下面逐个分析。")]),t._v(" "),a("ul",[a("li",[t._v("Stack 表示计算机的栈结构，此处 Stack 区域表示的是当前 JS 线程正在处理的任务(一个任务)。结合执行环境部分，我们其实可以把这些 Frame 的组合当作当前的执行环境栈。一个 Frame 表示一个执行环境。这里也解释了一个任务下其实可以包含多个相关函数。")]),t._v(" "),a("li",[t._v("Heap 一般用来表示计算机内存，此处 Heap 表示当前任务下相关的数据，结合上面变量对象的概念，我们可以把其中的 Object 标签当作是执行环境对应的变量对象。一个执行环境推入执行环境栈时，创建一个变量对象放入 Heap 区域，当执行环境栈推出这个执行环境时，其相对应的变量对象在 Heap 移除并销毁。如果再深入点，我们可以发现，里面 Object 的集合其实就是我们的作用域链的变量对象集合。")]),t._v(" "),a("li",[t._v("Queue 在计算机中表示队列，是一种先进先出的数据结构。此处 Queue 区表示了当前正在排队的任务集合，我们称之为任务队列。一个 Message 表示一个待执行任务，它们是按顺序排队的。")])]),t._v(" "),a("p",[t._v("分析完图片的不同区域，我们就可以很轻松地分析出这张图中阐释的事件环境机制了")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v(" 线程在同一时间只执行一个任务，期间可能创建多个函数执行环境，对应 Frame。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 在执行任务的时候，随时执行环境栈的动态变化，相对应的变量对象不断创建销毁，对应 Object。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 异步任务 ajax "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("O")]),t._v(" 等得到结果时，会将其回调作为一个任务添加到任务队列，排队等待执行。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 当 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v(" 线程中的任务执行完毕，会读取任务队列 Queue，并将队列中的第一个任务添加到 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v(" 线程中并执行。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" 循环 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" 步，异步任务完成后不断地往任务队列中添加任务，线程空闲时从任务列表读取任务并执行。\n")])])]),a("h3",{attrs:{id:"事件循环下的宏任务与微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环下的宏任务与微任务"}},[t._v("#")]),t._v(" 事件循环下的宏任务与微任务")]),t._v(" "),a("p",[t._v("通常我们把异步任务分为宏任务与微任务，它们的区分在于：")]),t._v(" "),a("ul",[a("li",[t._v("宏任务（macro-task）：一般是 JS 引擎和宿主环境发生通信产生的回调任务，比如 setTimeout，setInterval 是浏览器进行计时的，其中回调函数的执行时间需要浏览器通知到 JS 引擎，网络模块, I/O处理的通信回调也是。包含有 setTimeout，setInterval，DOM事件回调，ajax请求结束后的回调，整体 script 代码，setImmediate。")]),t._v(" "),a("li",[t._v("微任务（micro-task）：一般是宏任务在线程中执行时产生的回调，如 Promise，process.nextTick，Object.observe(已废弃)， MutationObserver（DOM监听），这些都是 JS 引擎自身可以监听到回调。")])]),t._v(" "),a("p",[t._v("上面我们了解了宏任务与微任务的分类，那么为什么我们要将其分为宏任务与微任务呢？主要是因为其添加到事件循环中的任务队列的机制不同。")]),t._v(" "),a("p",[t._v("在事件循环中，任务一般都是由宏任务开始执行的（JS代码的加载执行），在宏任务的执行过程中，可能会产生新的宏任务和微任务，这时候宏任务（如ajax回调）会被添加到任务队列的末尾等待事件循环机制执行，而微任务则会被添加到当前任务队列的前端，也是等待事件循环机制的执行。")]),t._v(" "),a("p",[t._v("其中相同类型的宏任务或微任务会按照回调的先后顺序进行排序，而不同任务类型的任务会有一定的优先级，按照不同类型任务区分")]),t._v(" "),a("p",[t._v("宏任务优先级，主代码块 > setImmediate > MessageChannel > setTimeout / setInterval")]),t._v(" "),a("p",[t._v("微任务优先级，process.nextTick > Promise > MutationObserver\n"),a("img",{attrs:{src:t.$withBase("/images/Browser/jsEventLoop.assets/1027993-20200517201508564-925237420.png"),alt:"mixureSecure"}})]),t._v(" "),a("p",[t._v("举个🌰")]),t._v(" "),a("p",[t._v("我们来分析下面这段代码的打印顺序")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setTimeout1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setTimeout2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我们假设这段代码正在 JS 的线程中执行（script 代码属于宏任务），在执行的时候产生了一些异步任务，setTimeout 和 Promise。其中 setTimeout 为宏任务，Promise 属于微任务。")]),t._v(" "),a("p",[t._v("根据上面的宏任务，微任务的在任务队列的添加机制，我们可以得到在代码执行过程中的任务队列将如下所示\n"),a("img",{attrs:{src:t.$withBase("/images/Browser/jsEventLoop.assets/1027993-20200517201526461-715634913.png"),alt:"mixureSecure"}}),t._v("\n分析出了任务队列后，我们就可以轻松得到打印顺序了")]),t._v(" "),a("p",[t._v("首先执行宏任务，按照从上至下的执行顺序依次打印 4 5 7")]),t._v(" "),a("p",[t._v("接着按照任务队列的先后顺序执行异步任务，依次打印 6 8 1 2 3")]),t._v(" "),a("h3",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("以上便是我对 Event Loop 的理解。JS 的事件循环机制是个很基础的概念，掌握它可以帮助我们理解 JS 中代码的执行顺序及原理。")])])}),[],!1,null,null,null);s.default=e.exports}}]);