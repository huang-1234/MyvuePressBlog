(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{614:function(v,_,e){"use strict";e.r(_);var t=e(6),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"从浏览器多进程到js单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从浏览器多进程到js单线程"}},[v._v("#")]),v._v(" 从浏览器多进程到JS单线程")]),v._v(" "),e("p",[v._v("见解有限，如有描述不当之处，请帮忙及时指出，如有错误，会及时修正。")]),v._v(" "),e("p",[e("strong",[v._v("----------超长文+多图预警，需要花费不少时间。----------")])]),v._v(" "),e("p",[e("em",[v._v("如果看完本文后，还对进程线程傻傻分不清，不清楚浏览器多进程、浏览器内核多线程、JS单线程、JS运行机制的区别。那么请回复我，一定是我写的还不够清晰，我来改。。。")])]),v._v(" "),e("p",[e("strong",[v._v("----------正文开始----------")])]),v._v(" "),e("p",[v._v("最近发现有不少介绍JS单线程运行机制的文章，但是发现很多都仅仅是介绍某一部分的知识，而且各个地方的说法还不统一，容易造成困惑。\n因此准备梳理这块知识点，结合已有的认知，基于网上的大量参考资料，\n从浏览器多进程到JS单线程，将JS引擎的运行机制系统的梳理一遍。")]),v._v(" "),e("p",[v._v("展现形式：由于是属于系统梳理型，就没有由浅入深了，而是从头到尾的梳理知识体系，\n重点是将关键节点的知识点串联起来，而不是仅仅剖析某一部分知识。")]),v._v(" "),e("p",[v._v("内容是：从浏览器进程，再到浏览器内核运行，再到JS引擎单线程，再到JS事件循环机制，从头到尾系统的梳理一遍，摆脱碎片化，形成一个知识体系")]),v._v(" "),e("p",[v._v("目标是：看完这篇文章后，对浏览器多进程，JS单线程，JS事件循环机制这些都能有一定理解，\n有一个知识体系骨架，而不是似懂非懂的感觉。")]),v._v(" "),e("p",[v._v("另外，本文适合有一定经验的前端人员，"),e("strong",[v._v("新手请规避")]),v._v("，避免受到过多的概念冲击。可以先存起来，有了一定理解后再看，也可以分成多批次观看，避免过度疲劳。")]),v._v(" "),e("h2",{attrs:{id:"大纲"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大纲"}},[v._v("#")]),v._v(" 大纲")]),v._v(" "),e("ul",[e("li",[v._v("区分进程和线程")]),v._v(" "),e("li",[v._v("浏览器是多进程的\n"),e("ul",[e("li",[v._v("浏览器都包含哪些进程？")]),v._v(" "),e("li",[v._v("浏览器多进程的优势")]),v._v(" "),e("li",[v._v("重点是浏览器内核（渲染进程）")]),v._v(" "),e("li",[v._v("Browser进程和浏览器内核（Renderer进程）的通信过程")])])]),v._v(" "),e("li",[v._v("梳理浏览器内核中线程之间的关系\n"),e("ul",[e("li",[v._v("GUI渲染线程与JS引擎线程互斥")]),v._v(" "),e("li",[v._v("JS阻塞页面加载")]),v._v(" "),e("li",[v._v("WebWorker，JS的多线程？")]),v._v(" "),e("li",[v._v("WebWorker与SharedWorker")])])]),v._v(" "),e("li",[v._v("简单梳理下浏览器渲染流程\n"),e("ul",[e("li",[v._v("load事件与DOMContentLoaded事件的先后")]),v._v(" "),e("li",[v._v("css加载是否会阻塞dom树渲染？")]),v._v(" "),e("li",[v._v("普通图层和复合图层")])])]),v._v(" "),e("li",[v._v("从Event Loop谈JS的运行机制\n"),e("ul",[e("li",[v._v("事件循环机制进一步补充")]),v._v(" "),e("li",[v._v("单独说说定时器")]),v._v(" "),e("li",[v._v("setTimeout而不是setInterval")])])]),v._v(" "),e("li",[v._v("事件循环进阶：macrotask与microtask")]),v._v(" "),e("li",[v._v("写在最后的话")])]),v._v(" "),e("h2",{attrs:{id:"区分进程和线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区分进程和线程"}},[v._v("#")]),v._v(" 区分进程和线程")]),v._v(" "),e("p",[v._v("线程和进程区分不清，是很多新手都会犯的错误，没有关系。这很正常。先看看下面这个形象的比喻：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("- 进程是一个工厂，工厂有它的独立资源\n\n- 工厂之间相互独立\n\n- 线程是工厂中的工人，多个工人协作完成任务\n\n- 工厂内有一个或多个工人\n\n- 工人之间共享空间\n")])])]),e("p",[v._v("再完善完善概念：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("- 工厂的资源 -> 系统分配的内存（独立的一块内存）\n\n- 工厂之间的相互独立 -> 进程之间相互独立\n\n- 多个工人协作完成任务 -> 多个线程在进程中协作完成任务\n\n- 工厂内有一个或多个工人 -> 一个进程由一个或多个线程组成\n\n- 工人之间共享空间 -> 同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）\n")])])]),e("p",[v._v("然后再巩固下：")]),v._v(" "),e("p",[v._v("如果是windows电脑中，可以打开任务管理器，可以看到有一个后台进程列表。对，那里就是查看进程的地方，而且可以看到每个进程的内存资源信息以及cpu占有率。")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925877",alt:"img"}})]),v._v(" "),e("p",[v._v("所以，应该更容易理解了："),e("strong",[v._v("进程是cpu资源分配的最小单位（系统会给它分配内存）")])]),v._v(" "),e("p",[v._v("最后，再用较为官方的术语描述一遍：")]),v._v(" "),e("ul",[e("li",[v._v("进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）")]),v._v(" "),e("li",[v._v("线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）")])]),v._v(" "),e("p",[e("strong",[v._v("tips")])]),v._v(" "),e("ul",[e("li",[v._v("不同进程之间也可以通信，不过代价较大")]),v._v(" "),e("li",[v._v("现在，一般通用的叫法："),e("strong",[v._v("单线程与多线程")]),v._v("，都是指"),e("strong",[v._v("在一个进程内")]),v._v("的单和多。（所以核心还是得属于一个进程才行）")])]),v._v(" "),e("h2",{attrs:{id:"浏览器是多进程的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是多进程的"}},[v._v("#")]),v._v(" 浏览器是多进程的")]),v._v(" "),e("p",[v._v("理解了进程与线程了区别后，接下来对浏览器进行一定程度上的认识：（先看下简化理解）")]),v._v(" "),e("ul",[e("li",[v._v("浏览器是多进程的")]),v._v(" "),e("li",[v._v("浏览器之所以能够运行，是因为系统给它的进程分配了资源（cpu、内存）")]),v._v(" "),e("li",[v._v("简单点理解，每打开一个Tab页，就相当于创建了一个独立的浏览器进程。")])]),v._v(" "),e("p",[v._v("关于以上几点的验证，"),e("strong",[v._v("请再第一张图")]),v._v("：")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925878",alt:"img"}})]),v._v(" "),e("p",[v._v("图中打开了"),e("code",[v._v("Chrome")]),v._v("浏览器的多个标签页，然后可以在"),e("code",[v._v("Chrome的任务管理器")]),v._v("中看到有多个进程（分别是每一个Tab页面有一个独立的进程，以及一个主进程）。\n感兴趣的可以自行尝试下，如果再多打开一个Tab页，进程正常会+1以上")]),v._v(" "),e("p",[v._v("**注意：**在这里浏览器应该也有自己的优化机制，有时候打开多个tab页后，可以在Chrome任务管理器中看到，有些进程被合并了\n（所以每一个Tab标签对应一个进程并不一定是绝对的）")]),v._v(" "),e("h3",{attrs:{id:"浏览器都包含哪些进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器都包含哪些进程"}},[v._v("#")]),v._v(" 浏览器都包含哪些进程？")]),v._v(" "),e("p",[v._v("知道了浏览器是多进程后，再来看看它到底包含哪些进程：（为了简化理解，仅列举主要进程）")]),v._v(" "),e("ol",[e("li",[v._v("Browser进程：浏览器的主进程（负责协调、主控），只有一个。作用有\n"),e("ul",[e("li",[v._v("负责浏览器界面显示，与用户交互。如前进，后退等")]),v._v(" "),e("li",[v._v("负责各个页面的管理，创建和销毁其他进程")]),v._v(" "),e("li",[v._v("将Renderer进程得到的内存中的Bitmap，绘制到用户界面上")]),v._v(" "),e("li",[v._v("网络资源的管理，下载等")])])]),v._v(" "),e("li",[v._v("第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建")]),v._v(" "),e("li",[v._v("GPU进程：最多一个，用于3D绘制等")]),v._v(" "),e("li",[v._v("浏览器渲染进程（浏览器内核）（Renderer进程，内部是多线程的）：默认每个Tab页面一个进程，互不影响。主要作用为\n"),e("ul",[e("li",[v._v("页面渲染，脚本执行，事件处理等")])])])]),v._v(" "),e("p",[v._v("强化记忆："),e("strong",[v._v("在浏览器中打开一个网页相当于新起了一个进程（进程内有自己的多线程）")])]),v._v(" "),e("p",[v._v("当然，浏览器有时会将多个进程合并（譬如打开多个空白标签页后，会发现多个空白标签页被合并成了一个进程），如图")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925879",alt:"img"}})]),v._v(" "),e("p",[v._v("另外，可以通过Chrome的"),e("code",[v._v("更多工具 -> 任务管理器")]),v._v("自行验证")]),v._v(" "),e("h3",{attrs:{id:"浏览器多进程的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器多进程的优势"}},[v._v("#")]),v._v(" 浏览器多进程的优势")]),v._v(" "),e("p",[v._v("相比于单进程浏览器，多进程有如下优点：")]),v._v(" "),e("ul",[e("li",[v._v("避免单个page crash影响整个浏览器")]),v._v(" "),e("li",[v._v("避免第三方插件crash影响整个浏览器")]),v._v(" "),e("li",[v._v("多进程充分利用多核优势")]),v._v(" "),e("li",[v._v("方便使用沙盒模型隔离插件等进程，提高浏览器稳定性")])]),v._v(" "),e("p",[v._v("简单点理解："),e("strong",[v._v("如果浏览器是单进程，那么某个Tab页崩溃了，就影响了整个浏览器，体验有多差；同理如果是单进程，插件崩溃了也会影响整个浏览器；而且多进程还有其它的诸多优势。。。")])]),v._v(" "),e("p",[v._v("当然，内存等资源消耗也会更大，有点空间换时间的意思。")]),v._v(" "),e("h3",{attrs:{id:"重点是浏览器内核-渲染进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重点是浏览器内核-渲染进程"}},[v._v("#")]),v._v(" 重点是浏览器内核（渲染进程）")]),v._v(" "),e("p",[v._v("重点来了，我们可以看到，上面提到了这么多的进程，那么，对于普通的前端操作来说，最终要的是什么呢？答案是"),e("strong",[v._v("渲染进程")])]),v._v(" "),e("p",[v._v("可以这样理解，页面的渲染，JS的执行，事件的循环，都在这个进程内进行。接下来重点分析这个进程")]),v._v(" "),e("p",[e("strong",[v._v("请牢记，浏览器的渲染进程是多线程的")]),v._v("（这点如果不理解，"),e("strong",[v._v("请回头看进程和线程的区分")]),v._v("）")]),v._v(" "),e("p",[v._v("终于到了线程这个概念了?，好亲切。那么接下来看看它都包含了哪些线程（列举一些主要常驻线程）：")]),v._v(" "),e("ol",[e("li",[v._v("GUI渲染线程\n"),e("ul",[e("li",[v._v("负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。")]),v._v(" "),e("li",[v._v("当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行")]),v._v(" "),e("li",[v._v("注意，"),e("strong",[v._v("GUI渲染线程与JS引擎线程是互斥的")]),v._v("，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中"),e("strong",[v._v("等到JS引擎空闲时")]),v._v("立即被执行。")])])]),v._v(" "),e("li",[v._v("JS引擎线程\n"),e("ul",[e("li",[v._v("也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）")]),v._v(" "),e("li",[v._v("JS引擎线程负责解析Javascript脚本，运行代码。")]),v._v(" "),e("li",[v._v("JS引擎一直等待着任务队列中任务的到来，然后加以处理，一个Tab页（renderer进程）中无论什么时候都只有一个JS线程在运行JS程序")]),v._v(" "),e("li",[v._v("同样注意，"),e("strong",[v._v("GUI渲染线程与JS引擎线程是互斥的")]),v._v("，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。")])])]),v._v(" "),e("li",[v._v("事件触发线程\n"),e("ul",[e("li",[v._v("归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）")]),v._v(" "),e("li",[v._v("当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中")]),v._v(" "),e("li",[v._v("当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理")]),v._v(" "),e("li",[v._v("注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）")])])]),v._v(" "),e("li",[v._v("定时触发器线程\n"),e("ul",[e("li",[v._v("传说中的"),e("code",[v._v("setInterval")]),v._v("与"),e("code",[v._v("setTimeout")]),v._v("所在线程")]),v._v(" "),e("li",[v._v("浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）")]),v._v(" "),e("li",[v._v("因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）")]),v._v(" "),e("li",[v._v("注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。")])])]),v._v(" "),e("li",[v._v("异步http请求线程\n"),e("ul",[e("li",[v._v("在XMLHttpRequest在连接后是通过浏览器新开一个线程请求")]),v._v(" "),e("li",[v._v("将检测到状态变更时，如果设置有回调函数，异步线程就"),e("strong",[v._v("产生状态变更事件")]),v._v("，将这个回调再放入事件队列中。再由JavaScript引擎执行。")])])])]),v._v(" "),e("p",[v._v("看到这里，如果觉得累了，可以先休息下，这些概念需要被消化，毕竟后续将提到的事件循环机制就是基于"),e("code",[v._v("事件触发线程")]),v._v("的，所以如果仅仅是看某个碎片化知识，\n可能会有一种似懂非懂的感觉。要完成的梳理一遍才能快速沉淀，不易遗忘。放张图巩固下吧：")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925880",alt:"img"}})]),v._v(" "),e("p",[v._v("再说一点，为什么JS引擎是单线程的？额，这个问题其实应该没有标准答案，譬如，可能仅仅是因为由于多线程的复杂性，譬如多线程操作一般要加锁，因此最初设计时选择了单线程。。。")]),v._v(" "),e("h3",{attrs:{id:"browser进程和浏览器内核-renderer进程-的通信过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#browser进程和浏览器内核-renderer进程-的通信过程"}},[v._v("#")]),v._v(" Browser进程和浏览器内核（Renderer进程）的通信过程")]),v._v(" "),e("p",[v._v("看到这里，首先，应该对浏览器内的进程和线程都有一定理解了，那么接下来，再谈谈浏览器的Browser进程（控制进程）是如何和内核通信的，\n这点也理解后，就可以将这部分的知识串联起来，从头到尾有一个完整的概念。")]),v._v(" "),e("p",[v._v("如果自己打开任务管理器，然后打开一个浏览器，就可以看到："),e("strong",[v._v("任务管理器中出现了两个进程（一个是主控进程，一个则是打开Tab页的渲染进程）")]),v._v("，\n然后在这前提下，看下整个的过程：(简化了很多)")]),v._v(" "),e("ul",[e("li",[v._v("Browser进程收到用户请求，首先需要获取页面内容（譬如通过网络下载资源），随后将该任务通过RendererHost接口传递给Render进程")]),v._v(" "),e("li",[v._v("Renderer进程的Renderer接口收到消息，简单解释后，交给渲染线程，然后开始渲染\n"),e("ul",[e("li",[v._v("渲染线程接收请求，加载网页并渲染网页，这其中可能需要Browser进程获取资源和需要GPU进程来帮助渲染")]),v._v(" "),e("li",[v._v("当然可能会有JS线程操作DOM（这样可能会造成回流并重绘）")]),v._v(" "),e("li",[v._v("最后Render进程将结果传递给Browser进程")])])]),v._v(" "),e("li",[v._v("Browser进程接收到结果并将结果绘制出来")])]),v._v(" "),e("p",[v._v("这里绘一张简单的图：（很简化）")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925881",alt:"img"}})]),v._v(" "),e("p",[v._v("看完这一整套流程，应该对浏览器的运作有了一定理解了，这样有了知识架构的基础后，后续就方便往上填充内容。")]),v._v(" "),e("p",[v._v("这块再往深处讲的话就涉及到浏览器内核源码解析了，不属于本文范围。")]),v._v(" "),e("p",[v._v("如果这一块要深挖，建议去读一些浏览器内核源码解析文章，或者可以先看看参考下来源中的第一篇文章，写的不错")]),v._v(" "),e("h2",{attrs:{id:"梳理浏览器内核中线程之间的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#梳理浏览器内核中线程之间的关系"}},[v._v("#")]),v._v(" 梳理浏览器内核中线程之间的关系")]),v._v(" "),e("p",[v._v("到了这里，已经对浏览器的运行有了一个整体的概念，接下来，先简单梳理一些概念")]),v._v(" "),e("h3",{attrs:{id:"gui渲染线程与js引擎线程互斥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui渲染线程与js引擎线程互斥"}},[v._v("#")]),v._v(" GUI渲染线程与JS引擎线程互斥")]),v._v(" "),e("p",[v._v("由于JavaScript是可操纵DOM的，如果在修改这些元素属性同时渲染界面（即JS线程和UI线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。")]),v._v(" "),e("p",[v._v("因此为了防止渲染出现不可预期的结果，浏览器设置GUI渲染线程与JS引擎为互斥的关系，当JS引擎执行时GUI线程会被挂起，\nGUI更新则会被保存在一个队列中等到JS引擎线程空闲时立即被执行。")]),v._v(" "),e("h3",{attrs:{id:"js阻塞页面加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js阻塞页面加载"}},[v._v("#")]),v._v(" JS阻塞页面加载")]),v._v(" "),e("p",[v._v("从上述的互斥关系，可以推导出，JS如果执行时间过长就会阻塞页面。")]),v._v(" "),e("p",[v._v("譬如，假设JS引擎正在进行巨量的计算，此时就算GUI有更新，也会被保存到队列中，等待JS引擎空闲后执行。\n然后，由于巨量计算，所以JS引擎很可能很久很久后才能空闲，自然会感觉到巨卡无比。")]),v._v(" "),e("p",[v._v("所以，要尽量避免JS执行时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。")]),v._v(" "),e("h3",{attrs:{id:"webworker-js的多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webworker-js的多线程"}},[v._v("#")]),v._v(" WebWorker，JS的多线程？")]),v._v(" "),e("p",[v._v("前文中有提到JS引擎是单线程的，而且JS执行时间过长会阻塞页面，那么JS就真的对cpu密集型计算无能为力么？")]),v._v(" "),e("p",[v._v("所以，后来HTML5中支持了"),e("code",[v._v("Web Worker")]),v._v("。")]),v._v(" "),e("p",[v._v("MDN的官方解释是：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("Web Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面\n\n一个worker是使用一个构造函数创建的一个对象(e.g. Worker()) 运行一个命名的JavaScript文件 \n\n这个文件包含将在工作线程中运行的代码; workers 运行在另一个全局上下文中,不同于当前的window\n\n因此，使用 window快捷方式获取当前全局的范围 (而不是self) 在一个 Worker 内将返回错误\n")])])]),e("p",[v._v("这样理解下：")]),v._v(" "),e("ul",[e("li",[v._v("创建Worker时，JS引擎向浏览器申请开一个子线程（子线程是浏览器开的，完全受主线程控制，而且不能操作DOM）")]),v._v(" "),e("li",[v._v("JS引擎线程与worker线程间通过特定的方式通信（postMessage API，需要通过序列化对象来与线程交互特定的数据）")])]),v._v(" "),e("p",[v._v("所以，如果有非常耗时的工作，请单独开一个Worker线程，这样里面不管如何翻天覆地都不会影响JS引擎主线程，\n只待计算出结果后，将结果通信给主线程即可，perfect!")]),v._v(" "),e("p",[v._v("而且注意下，"),e("strong",[v._v("JS引擎是单线程的")]),v._v("，这一点的本质仍然未改变，Worker可以理解是浏览器给JS引擎开的外挂，专门用来解决那些大量计算问题。")]),v._v(" "),e("p",[v._v("其它，关于Worker的详解就不是本文的范畴了，因此不再赘述。")]),v._v(" "),e("h3",{attrs:{id:"webworker与sharedworker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webworker与sharedworker"}},[v._v("#")]),v._v(" WebWorker与SharedWorker")]),v._v(" "),e("p",[v._v("既然都到了这里，就再提一下"),e("code",[v._v("SharedWorker")]),v._v("（避免后续将这两个概念搞混）")]),v._v(" "),e("ul",[e("li",[v._v("WebWorker只属于某个页面，不会和其他页面的Render进程（浏览器内核进程）共享\n"),e("ul",[e("li",[v._v("所以Chrome在Render进程中（每一个Tab页就是一个render进程）创建一个新的线程来运行Worker中的JavaScript程序。")])])]),v._v(" "),e("li",[v._v("SharedWorker是浏览器所有页面共享的，不能采用与Worker同样的方式实现，因为它不隶属于某个Render进程，可以为多个Render进程共享使用\n"),e("ul",[e("li",[v._v("所以Chrome浏览器为SharedWorker单独创建一个进程来运行JavaScript程序，在浏览器中每个相同的JavaScript只存在一个SharedWorker进程，不管它被创建多少次。")])])])]),v._v(" "),e("p",[v._v("看到这里，应该就很容易明白了，本质上就是进程和线程的区别。SharedWorker由独立的进程管理，WebWorker只是属于render进程下的一个线程")]),v._v(" "),e("h2",{attrs:{id:"简单梳理下浏览器渲染流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单梳理下浏览器渲染流程"}},[v._v("#")]),v._v(" 简单梳理下浏览器渲染流程")]),v._v(" "),e("p",[v._v("本来是直接计划开始谈JS运行机制的，但想了想，既然上述都一直在谈浏览器，直接跳到JS可能再突兀，因此，中间再补充下浏览器的渲染流程（简单版本）")]),v._v(" "),e("p",[v._v("为了简化理解，前期工作直接省略成：（要展开的或完全可以写另一篇超长文）")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("- 浏览器输入url，浏览器主进程接管，开一个下载线程，\n然后进行 http请求（略去DNS查询，IP寻址等等操作），然后等待响应，获取内容，\n随后将内容通过RendererHost接口转交给Renderer进程\n\n- 浏览器渲染流程开始\n")])])]),e("p",[v._v("浏览器器内核拿到内容后，渲染大概可以划分成以下几个步骤：")]),v._v(" "),e("ol",[e("li",[v._v("解析html建立dom树")]),v._v(" "),e("li",[v._v("解析css构建render树（将CSS代码解析成树形的数据结构，然后结合DOM合并成render树）")]),v._v(" "),e("li",[v._v("布局render树（Layout/reflow），负责各元素尺寸、位置的计算")]),v._v(" "),e("li",[v._v("绘制render树（paint），绘制页面像素信息")]),v._v(" "),e("li",[v._v("浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上。")])]),v._v(" "),e("p",[v._v("所有详细步骤都已经略去，渲染完毕后就是"),e("code",[v._v("load")]),v._v("事件了，之后就是自己的JS逻辑处理了")]),v._v(" "),e("p",[v._v("既然略去了一些详细的步骤，那么就提一些可能需要注意的细节把。")]),v._v(" "),e("p",[v._v("这里重绘参考来源中的一张图：（参考来源第一篇）")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012934765",alt:"img"}})]),v._v(" "),e("h3",{attrs:{id:"load事件与domcontentloaded事件的先后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load事件与domcontentloaded事件的先后"}},[v._v("#")]),v._v(" load事件与DOMContentLoaded事件的先后")]),v._v(" "),e("p",[v._v("上面提到，渲染完毕后会触发"),e("code",[v._v("load")]),v._v("事件，那么你能分清楚"),e("code",[v._v("load")]),v._v("事件与"),e("code",[v._v("DOMContentLoaded")]),v._v("事件的先后么？")]),v._v(" "),e("p",[v._v("很简单，知道它们的定义就可以了：")]),v._v(" "),e("ul",[e("li",[v._v("当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片。")])]),v._v(" "),e("p",[v._v("(譬如如果有async加载的脚本就不一定完成)")]),v._v(" "),e("ul",[e("li",[v._v("当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片都已经加载完成了。")])]),v._v(" "),e("p",[v._v("（渲染完毕了）")]),v._v(" "),e("p",[v._v("所以，顺序是："),e("code",[v._v("DOMContentLoaded -> load")])]),v._v(" "),e("h3",{attrs:{id:"css加载是否会阻塞dom树渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css加载是否会阻塞dom树渲染"}},[v._v("#")]),v._v(" css加载是否会阻塞dom树渲染？")]),v._v(" "),e("p",[v._v("这里说的是头部引入css的情况")]),v._v(" "),e("p",[v._v("首先，我们都知道："),e("strong",[v._v("css是由单独的下载线程异步下载的。")])]),v._v(" "),e("p",[v._v("然后再说下几个现象：")]),v._v(" "),e("ul",[e("li",[v._v("css加载不会阻塞DOM树解析（异步加载时DOM照常构建）")]),v._v(" "),e("li",[v._v("但会阻塞render树渲染（渲染时需等css加载完毕，因为render树需要css信息）")])]),v._v(" "),e("p",[v._v("这可能也是浏览器的一种优化机制。")]),v._v(" "),e("p",[v._v("因为你加载css的时候，可能会修改下面DOM节点的样式，\n如果css加载不阻塞render树渲染的话，那么当css加载完之后，\nrender树可能又得重新重绘或者回流了，这就造成了一些没有必要的损耗。\n所以干脆就先把DOM树的结构先解析完，把可以做的工作做完，然后等你css加载完之后，\n在根据最终的样式来渲染render树，这种做法性能方面确实会比较好一点。")]),v._v(" "),e("h3",{attrs:{id:"普通图层和复合图层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通图层和复合图层"}},[v._v("#")]),v._v(" 普通图层和复合图层")]),v._v(" "),e("p",[v._v("渲染步骤中就提到了"),e("code",[v._v("composite")]),v._v("概念。")]),v._v(" "),e("p",[v._v("可以简单的这样理解，浏览器渲染的图层一般包含两大类："),e("code",[v._v("普通图层")]),v._v("以及"),e("code",[v._v("复合图层")])]),v._v(" "),e("p",[v._v("首先，普通文档流内可以理解为一个复合图层（这里称为"),e("code",[v._v("默认复合层")]),v._v("，里面不管添加多少元素，其实都是在同一个复合图层中）")]),v._v(" "),e("p",[v._v("其次，absolute布局（fixed也一样），虽然可以脱离普通文档流，但它仍然属于"),e("code",[v._v("默认复合层")]),v._v("。")]),v._v(" "),e("p",[v._v("然后，可以通过"),e("code",[v._v("硬件加速")]),v._v("的方式，声明一个"),e("code",[v._v("新的复合图层")]),v._v("，它会单独分配资源\n（当然也会脱离普通文档流，这样一来，不管这个复合图层中怎么变化，也不会影响"),e("code",[v._v("默认复合层")]),v._v("里的回流重绘）")]),v._v(" "),e("p",[v._v("可以简单理解下："),e("strong",[v._v("GPU中，各个复合图层是单独绘制的，所以互不影响")]),v._v("，这也是为什么某些场景硬件加速效果一级棒")]),v._v(" "),e("p",[v._v("可以"),e("code",[v._v("Chrome源码调试 -> More Tools -> Rendering -> Layer borders")]),v._v("中看到，黄色的就是复合图层信息")]),v._v(" "),e("p",[v._v("如下图。可以验证上述的说法")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925882",alt:"img"}})]),v._v(" "),e("p",[e("strong",[v._v("如何变成复合图层（硬件加速）")])]),v._v(" "),e("p",[v._v("将该元素变成一个复合图层，就是传说中的硬件加速技术")]),v._v(" "),e("ul",[e("li",[v._v("最常用的方式："),e("code",[v._v("translate3d")]),v._v("、"),e("code",[v._v("translateZ")])]),v._v(" "),e("li",[e("code",[v._v("opacity")]),v._v("属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）")]),v._v(" "),e("li",[e("code",[v._v("will-chang")]),v._v("属性（这个比较偏僻），一般配合opacity与translate使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层），")])]),v._v(" "),e("p",[v._v("作用是提前告诉浏览器要变化，这样浏览器会开始做一些优化工作（这个最好用完后就释放）")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("<video><iframe><canvas><webgl>")]),v._v("等元素")]),v._v(" "),e("li",[v._v("其它，譬如以前的flash插件")])]),v._v(" "),e("p",[e("strong",[v._v("absolute和硬件加速的区别")])]),v._v(" "),e("p",[v._v("可以看到，absolute虽然可以脱离普通文档流，但是无法脱离默认复合层。\n所以，就算absolute中信息改变时不会改变普通文档流中render树，\n但是，浏览器最终绘制时，是整个复合层绘制的，所以absolute中信息的改变，仍然会影响整个复合层的绘制。\n（浏览器会重绘它，如果复合层中内容多，absolute带来的绘制信息变化过大，资源消耗是非常严重的）")]),v._v(" "),e("p",[v._v("而硬件加速直接就是在另一个复合层了（另起炉灶），所以它的信息改变不会影响默认复合层\n（当然了，内部肯定会影响属于自己的复合层），仅仅是引发最后的合成（输出视图）")]),v._v(" "),e("p",[e("strong",[v._v("复合图层的作用？")])]),v._v(" "),e("p",[v._v("一般一个元素开启硬件加速后会变成复合图层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能")]),v._v(" "),e("p",[v._v("但是尽量不要大量使用复合图层，否则由于资源消耗过度，页面反而会变的更卡")]),v._v(" "),e("p",[e("strong",[v._v("硬件加速时请使用index")])]),v._v(" "),e("p",[v._v("使用硬件加速时，尽可能的使用index，防止浏览器默认给后续的元素创建复合层渲染")]),v._v(" "),e("p",[v._v("具体的原理时这样的：\n"),e("strong",[v._v("webkit CSS3中，如果这个元素添加了硬件加速，并且index层级比较低，\n那么在这个元素的后面其它元素（层级比这个元素高的，或者相同的，并且releative或absolute属性相同的），\n会默认变为复合层渲染，如果处理不当会极大的影响性能")])]),v._v(" "),e("p",[v._v("简单点理解，其实可以认为是一个隐式合成的概念："),e("strong",[v._v("如果a是一个复合图层，而且b在a上面，那么b也会被隐式转为一个复合图层")]),v._v("，这点需要特别注意")]),v._v(" "),e("p",[v._v("另外，这个问题可以在这个地址看到重现（原作者分析的挺到位的，直接上链接）：")]),v._v(" "),e("p",[v._v("http://web.jobbole.com/83575/")]),v._v(" "),e("h2",{attrs:{id:"从event-loop谈js的运行机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从event-loop谈js的运行机制"}},[v._v("#")]),v._v(" 从Event Loop谈JS的运行机制")]),v._v(" "),e("p",[v._v("到此时，已经是属于浏览器页面初次渲染完毕后的事情，JS引擎的一些运行机制分析。")]),v._v(" "),e("p",[v._v("注意，这里不谈"),e("code",[v._v("可执行上下文")]),v._v("，"),e("code",[v._v("VO")]),v._v("，"),e("code",[v._v("scop chain")]),v._v("等概念（这些完全可以整理成另一篇文章了），这里主要是结合"),e("code",[v._v("Event Loop")]),v._v("来谈JS代码是如何执行的。")]),v._v(" "),e("p",[v._v("读这部分的前提是已经知道了JS引擎是单线程，而且这里会用到上文中的几个概念：（如果不是很理解，可以回头温习）")]),v._v(" "),e("ul",[e("li",[v._v("JS引擎线程")]),v._v(" "),e("li",[v._v("事件触发线程")]),v._v(" "),e("li",[v._v("定时触发器线程")])]),v._v(" "),e("p",[v._v("然后再理解一个概念：")]),v._v(" "),e("ul",[e("li",[v._v("JS分为同步任务和异步任务")]),v._v(" "),e("li",[v._v("同步任务都在主线程上执行，形成一个"),e("code",[v._v("执行栈")])]),v._v(" "),e("li",[v._v("主线程之外，"),e("strong",[v._v("事件触发线程")]),v._v("管理着一个"),e("code",[v._v("任务队列")]),v._v("，只要异步任务有了运行结果，就在"),e("code",[v._v("任务队列")]),v._v("之中放置一个事件。")]),v._v(" "),e("li",[v._v("一旦"),e("code",[v._v("执行栈")]),v._v("中的所有同步任务执行完毕（此时JS引擎空闲），系统就会读取"),e("code",[v._v("任务队列")]),v._v("，将可运行的异步任务添加到可执行栈中，开始执行。")])]),v._v(" "),e("p",[v._v("看图：")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925883",alt:"img"}})]),v._v(" "),e("p",[v._v("看到这里，应该就可以理解了：为什么有时候setTimeout推入的事件不能准时执行？因为可能在它推入到事件列表时，主线程还不空闲，正在执行其它代码，\n所以自然有误差。")]),v._v(" "),e("h3",{attrs:{id:"事件循环机制进一步补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件循环机制进一步补充"}},[v._v("#")]),v._v(" 事件循环机制进一步补充")]),v._v(" "),e("p",[v._v("这里就直接引用一张图片来协助理解：（参考自Philip Roberts的演讲《"),e("a",{attrs:{href:"http://vimeo.com/96425312",target:"_blank",rel:"noopener noreferrer"}},[v._v("Help, I'm stuck in an event-loop"),e("OutboundLink")],1),v._v("》）")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925884",alt:"img"}})]),v._v(" "),e("p",[v._v("上图大致描述就是：")]),v._v(" "),e("ul",[e("li",[v._v("主线程运行时会产生执行栈，")])]),v._v(" "),e("p",[v._v("栈中的代码调用某些api时，它们会在事件队列中添加各种事件（当满足触发条件后，如ajax请求完毕）")]),v._v(" "),e("ul",[e("li",[v._v("而栈中的代码执行完毕，就会读取事件队列中的事件，去执行那些回调")]),v._v(" "),e("li",[v._v("如此循环")]),v._v(" "),e("li",[v._v("注意，总是要等待栈中的代码执行完毕后才会去读取事件队列中的事件")])]),v._v(" "),e("h3",{attrs:{id:"单独说说定时器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单独说说定时器"}},[v._v("#")]),v._v(" 单独说说定时器")]),v._v(" "),e("p",[v._v("上述事件循环机制的核心是：JS引擎线程和事件触发线程")]),v._v(" "),e("p",[v._v("但事件上，里面还有一些隐藏细节，譬如调用"),e("code",[v._v("setTimeout")]),v._v("后，是如何等待特定时间后才添加到事件队列中的？")]),v._v(" "),e("p",[v._v("是JS引擎检测的么？当然不是了。它是由"),e("strong",[v._v("定时器线程")]),v._v("控制（因为JS引擎自己都忙不过来，根本无暇分身）")]),v._v(" "),e("p",[v._v("为什么要单独的定时器线程？因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确，因此很有必要单独开一个线程用来计时。")]),v._v(" "),e("p",[v._v("什么时候会用到定时器线程？"),e("strong",[v._v("当使用"),e("code",[v._v("setTimeout")]),v._v("或"),e("code",[v._v("setInterval")]),v._v("时")]),v._v("，它需要定时器线程计时，计时完成后就会将特定的事件推入事件队列中。")]),v._v(" "),e("p",[v._v("譬如:")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("setTimeout(function(){\n    console.log('hello!');\n}, 1000);\n")])])]),e("p",[v._v("这段代码的作用是当"),e("code",[v._v("1000")]),v._v("毫秒计时完毕后（由定时器线程计时），将回调函数推入事件队列中，等待主线程执行")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("setTimeout(function(){\n    console.log('hello!');\n}, 0);\n\nconsole.log('begin');\n")])])]),e("p",[v._v("这段代码的效果是最快的时间内将回调函数推入事件队列中，等待主线程执行")]),v._v(" "),e("p",[v._v("注意：")]),v._v(" "),e("ul",[e("li",[v._v("执行结果是：先"),e("code",[v._v("begin")]),v._v("后"),e("code",[v._v("hello!")])]),v._v(" "),e("li",[v._v("虽然代码的本意是0毫秒后就推入事件队列，但是W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。")])]),v._v(" "),e("p",[v._v("(不过也有一说是不同浏览器有不同的最小时间设定)")]),v._v(" "),e("ul",[e("li",[v._v("就算不等待4ms，就算假设0毫秒就推入事件队列，也会先执行"),e("code",[v._v("begin")]),v._v("（因为只有可执行栈内空了后才会主动读取事件队列）")])]),v._v(" "),e("h3",{attrs:{id:"settimeout而不是setinterval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settimeout而不是setinterval"}},[v._v("#")]),v._v(" setTimeout而不是setInterval")]),v._v(" "),e("p",[v._v("用setTimeout模拟定期计时和直接用setInterval是有区别的。")]),v._v(" "),e("p",[v._v("因为每次setTimeout计时到后就会去执行，然后执行一段时间后才会继续setTimeout，中间就多了误差\n（误差多少与代码执行时间有关）")]),v._v(" "),e("p",[v._v("而setInterval则是每次都精确的隔一段时间推入一个事件\n（但是，事件的实际执行时间不一定就准确，还有可能是这个事件还没执行完毕，下一个事件就来了）")]),v._v(" "),e("p",[v._v("而且setInterval有一些比较致命的问题就是：")]),v._v(" "),e("ul",[e("li",[v._v("累计效应（上面提到的），如果setInterval代码在（setInterval）再次添加到队列之前还没有完成执行，")])]),v._v(" "),e("p",[v._v("就会导致定时器代码连续运行好几次，而之间没有间隔。\n就算正常间隔执行，多个setInterval的代码执行时间可能会比预期小（因为代码执行需要一定时间）")]),v._v(" "),e("ul",[e("li",[e("s",[v._v("譬如像iOS的webview,或者Safari等浏览器中都有一个特点，"),e("strong",[v._v("在滚动的时候是不执行JS的")]),v._v("，如果使用了setInterval，会发现在滚动结束后会执行多次由于滚动不执行JS积攒回调，如果回调执行时间过长,就会非常容器造成卡顿问题和一些不可知的错误")]),v._v("（这一块后续有补充，setInterval自带的优化，不会重复添加回调）")]),v._v(" "),e("li",[v._v("而且把浏览器最小化显示等操作时，setInterval并不是不执行程序，")])]),v._v(" "),e("p",[v._v("它会把setInterval的回调函数放在队列中，等浏览器窗口再次打开时，一瞬间全部执行时")]),v._v(" "),e("p",[v._v("所以，鉴于这么多但问题，目前一般认为的最佳方案是："),e("strong",[v._v("用setTimeout模拟setInterval，或者特殊场合直接用requestAnimationFrame")])]),v._v(" "),e("p",[e("strong",[v._v("补充：JS高程中有提到，JS引擎会对setInterval进行优化，如果当前事件队列中有setInterval的回调，不会重复添加。不过，仍然是有很多问题。。。")])]),v._v(" "),e("h2",{attrs:{id:"事件循环进阶-macrotask与microtask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件循环进阶-macrotask与microtask"}},[v._v("#")]),v._v(" 事件循环进阶：macrotask与microtask")]),v._v(" "),e("p",[v._v("这段参考了参考来源中的第2篇文章（英文版的），（加了下自己的理解重新描述了下），\n强烈推荐有英文基础的同学直接观看原文，作者描述的很清晰，示例也很不错，如下：")]),v._v(" "),e("p",[v._v("https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/")]),v._v(" "),e("p",[v._v("上文中将JS事件循环机制梳理了一遍，在ES5的情况是够用了，但是在ES6盛行的现在，仍然会遇到一些问题，譬如下面这题：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("console.log('script start');\n\nsetTimeout(function() {\n    console.log('setTimeout');\n}, 0);\n\nPromise.resolve().then(function() {\n    console.log('promise1');\n}).then(function() {\n    console.log('promise2');\n});\n\nconsole.log('script end');\n")])])]),e("p",[v._v("嗯哼，它的正确执行顺序是这样子的：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("script start\nscript end\npromise1\npromise2\nsetTimeout\n")])])]),e("p",[v._v("为什么呢？因为Promise里有了一个一个新的概念："),e("code",[v._v("microtask")])]),v._v(" "),e("p",[v._v("或者，进一步，JS中分为两种任务类型："),e("strong",[e("code",[v._v("macrotask")]),v._v("和"),e("code",[v._v("microtask")])]),v._v("，在ECMAScript中，microtask称为"),e("code",[v._v("jobs")]),v._v("，macrotask可称为"),e("code",[v._v("task")])]),v._v(" "),e("p",[v._v("它们的定义？区别？简单点可以按如下理解：")]),v._v(" "),e("ul",[e("li",[v._v("macrotask（又称之为宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）\n"),e("ul",[e("li",[v._v("每一个task会从头到尾将这个任务执行完毕，不会执行其它")]),v._v(" "),e("li",[v._v("浏览器为了能够使得JS内部task与DOM任务能够有序的执行，会在一个task执行结束后，在下一个 task 执行开始前，对页面进行重新渲染")])])])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("（`task->渲染->task->...`）\n")])])]),e("ul",[e("li",[v._v("microtask（又称为微任务），可以理解是在当前 task 执行结束后立即执行的任务\n"),e("ul",[e("li",[v._v("也就是说，在当前task任务后，下一个task之前，在渲染之前")]),v._v(" "),e("li",[v._v("所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染")]),v._v(" "),e("li",[v._v("也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）")])])])]),v._v(" "),e("p",[v._v("分别很么样的场景会形成macrotask和microtask呢？")]),v._v(" "),e("ul",[e("li",[v._v("macrotask：主代码块，setTimeout，setInterval等（可以看到，事件队列中的每一个事件都是一个macrotask）")]),v._v(" "),e("li",[v._v("microtask：Promise，process.nextTick等")])]),v._v(" "),e("p",[e("strong",[v._v("补充：在node环境下，process.nextTick的优先级高于Promise")]),v._v("，也就是可以简单理解为：在宏任务结束后会先执行微任务队列中的nextTickQueue部分，然后才会执行微任务中的Promise部分。")]),v._v(" "),e("p",[v._v("参考：https://segmentfault.com/q/1010000011914016")]),v._v(" "),e("p",[v._v("再根据线程来理解下：")]),v._v(" "),e("ul",[e("li",[v._v("macrotask中的事件都是放在一个事件队列中的，而这个队列由"),e("strong",[v._v("事件触发线程")]),v._v("维护")]),v._v(" "),e("li",[v._v("microtask中的所有微任务都是添加到微任务队列（Job Queues）中，等待当前macrotask执行完毕后执行，而这个队列由"),e("strong",[v._v("JS引擎线程维护")])])]),v._v(" "),e("p",[v._v("（这点由自己理解+推测得出，因为它是在主线程下无缝执行的）")]),v._v(" "),e("p",[v._v("所以，总结下运行机制：")]),v._v(" "),e("ul",[e("li",[v._v("执行一个宏任务（栈中没有就从事件队列中获取）")]),v._v(" "),e("li",[v._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中")]),v._v(" "),e("li",[v._v("宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）")]),v._v(" "),e("li",[v._v("当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染")]),v._v(" "),e("li",[v._v("渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）")])]),v._v(" "),e("p",[v._v("如图：")]),v._v(" "),e("p",[e("img",{attrs:{src:"fromJStoRender.assets/1460000012925885",alt:"img"}})]),v._v(" "),e("p",[v._v("另外，请注意下"),e("code",[v._v("Promise")]),v._v("的"),e("code",[v._v("polyfill")]),v._v("与官方版本的区别：")]),v._v(" "),e("ul",[e("li",[v._v("官方版本中，是标准的microtask形式")]),v._v(" "),e("li",[v._v("polyfill，一般都是通过setTimeout模拟的，所以是macrotask形式")]),v._v(" "),e("li",[v._v("请特别注意这两点区别")])]),v._v(" "),e("p",[v._v("注意，有一些浏览器执行结果不一样（因为它们可能把microtask当成macrotask来执行了），\n但是为了简单，这里不描述一些不标准的浏览器下的场景（但记住，有些浏览器可能并不标准）")]),v._v(" "),e("p",[e("strong",[v._v("20180126补充：使用MutationObserver实现microtask")])]),v._v(" "),e("p",[v._v("MutationObserver可以用来实现microtask\n（它属于microtask，优先级小于Promise，\n一般是Promise不支持时才会这样做）")]),v._v(" "),e("p",[v._v("它是HTML5中的新特性，作用是：监听一个DOM变动，\n当DOM对象树发生任何变动时，Mutation Observer会得到通知")]),v._v(" "),e("p",[v._v("像以前的Vue源码中就是利用它来模拟nextTick的，\n具体原理是，创建一个TextNode并监听内容变化，\n然后要nextTick的时候去改一下这个节点的文本内容，\n如下：（Vue的源码，未修改）")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("var counter = 1\nvar observer = new MutationObserver(nextTickHandler)\nvar textNode = document.createTextNode(String(counter))\n\nobserver.observe(textNode, {\n    characterData: true\n})\ntimerFunc = () => {\n    counter = (counter + 1) % 2\n    textNode.data = String(counter)\n}\n")])])]),e("p",[e("a",{attrs:{href:"https://github.com/vuejs/vue/blob/9cfd63a7d08c1eba029c8bd7463b3047c3347826/src/core/util/env.js#L86-L95",target:"_blank",rel:"noopener noreferrer"}},[v._v("对应Vue源码链接"),e("OutboundLink")],1)]),v._v(" "),e("p",[v._v("不过，现在的Vue（2.5+）的nextTick实现移除了MutationObserver的方式（据说是兼容性原因），\n取而代之的是使用MessageChannel\n（当然，默认情况仍然是Promise，不支持才兼容的）。")]),v._v(" "),e("p",[v._v("MessageChannel属于宏任务，优先级是："),e("code",[v._v("MessageChannel->setTimeout")]),v._v("，\n所以Vue（2.5+）内部的nextTick与2.4及之前的实现是不一样的，需要注意下。")]),v._v(" "),e("p",[v._v("这里不展开，可以看下https://juejin.im/post/5a1af88f5188254a701ec230")]),v._v(" "),e("h2",{attrs:{id:"写在最后的话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后的话"}},[v._v("#")]),v._v(" 写在最后的话")]),v._v(" "),e("p",[v._v("看到这里，不知道对JS的运行机制是不是更加理解了，从头到尾梳理，而不是就某一个碎片化知识应该是会更清晰的吧？")]),v._v(" "),e("p",[v._v("同时，也应该注意到了JS根本就没有想象的那么简单，前端的知识也是无穷无尽，层出不穷的概念、N多易忘的知识点、各式各样的框架、\n底层原理方面也是可以无限的往下深挖，然后你就会发现，你知道的太少了。。。")]),v._v(" "),e("p",[v._v("另外，本文也打算先告一段落，其它的，如JS词法解析，可执行上下文以及VO等概念就不继续在本文中写了，后续可以考虑另开新的文章。")]),v._v(" "),e("p",[v._v("最后，喜欢的话，就请给个赞吧！")]),v._v(" "),e("h2",{attrs:{id:"附录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[v._v("#")]),v._v(" 附录")]),v._v(" "),e("h3",{attrs:{id:"博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#博客"}},[v._v("#")]),v._v(" 博客")]),v._v(" "),e("p",[v._v("初次发布"),e("code",[v._v("2018.01.21")]),v._v("于我个人博客上面")]),v._v(" "),e("p",[v._v("http://www.dailichun.com/2018/01/21/js_singlethread_eventloop.html")]),v._v(" "),e("h3",{attrs:{id:"招聘软广"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#招聘软广"}},[v._v("#")]),v._v(" 招聘软广")]),v._v(" "),e("p",[v._v("阿里巴巴钉钉商业化团队大量hc，高薪股权。机会好，技术成长空间足，业务也有很大的发挥空间！")]),v._v(" "),e("p",[v._v("还在犹豫什么，来吧！！！")]),v._v(" "),e("h4",{attrs:{id:"社招-p6-p7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#社招-p6-p7"}},[v._v("#")]),v._v(" 社招（P6~P7）")]),v._v(" "),e("p",[v._v("职责和挑战")]),v._v(" "),e("ol",[e("li",[v._v("负责钉钉工作台。工作台是帮助企业实现数字化管理和协同的门户，是拥有亿级用户量的产品。如何保障安全、稳定、性能和体验是对我们的一大挑战。")]),v._v(" "),e("li",[v._v("负责开放能力建设。针对纷繁的业务场景，提供合理的开放方案，既要做到深入用户场景理解并支撑业务发展，满足企业千人千面、千行千面的诉求，又要在技术上保障用户的安全、稳定和体验。需要既要有技术抽象能力、平台架构能力，又要有业务的理解和分析能力。")]),v._v(" "),e("li",[v._v("开放平台基础建设。保障链路的安全和稳定。同时对如何保障用户体验有持续精进的热情和追求。")])]),v._v(" "),e("p",[v._v("职位要求")]),v._v(" "),e("ol",[e("li",[v._v("精通HTML5、CSS3、JS（ES5/ES6）等前端开发技术")]),v._v(" "),e("li",[v._v("掌握主流的JS库和开发框架，并深入理解其设计原理，例如React，Vue等")]),v._v(" "),e("li",[v._v("熟悉模块化、前端编译和构建工具，例如webpack、babel等")]),v._v(" "),e("li",[v._v("（加分项）了解服务端或native移动应用开发，例如nodejs、Java等")]),v._v(" "),e("li",[v._v("对技术有强追求，有良好的沟通能力和团队协同能力，有优秀的分析问题和解决问题的能力。")])]),v._v(" "),e("h4",{attrs:{id:"前端实习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端实习"}},[v._v("#")]),v._v(" 前端实习")]),v._v(" "),e("p",[v._v("面向2021毕业的同学")]),v._v(" "),e("ol",[e("li",[v._v("本科及以上学历，计算机相关专业")]),v._v(" "),e("li",[v._v("熟练掌握HTML5/CSS3/Javascript等web前端技术")]),v._v(" "),e("li",[v._v("熟悉至少一种常用框架，例如React、vue等")]),v._v(" "),e("li",[v._v("关注新事物、新技术，有较强的学习能力，有强烈求知欲和进取心")]),v._v(" "),e("li",[v._v("有半年以上实际项目经验，大厂加分")])]),v._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),e("ul",[e("li",[v._v("https://www.cnblogs.com/lhb25/p/how-browsers-work.html")]),v._v(" "),e("li",[v._v("https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/")]),v._v(" "),e("li",[v._v("https://segmentfault.com/p/1210000012780980")]),v._v(" "),e("li",[v._v("http://blog.csdn.net/u013510838/article/details/55211033")]),v._v(" "),e("li",[v._v("http://blog.csdn.net/Steward2011/article/details/51319298")]),v._v(" "),e("li",[v._v("http://www.imweb.io/topic/58e3bfa845e5c13468f567d5")]),v._v(" "),e("li",[v._v("https://segmentfault.com/a/1190000008015671")]),v._v(" "),e("li",[v._v("https://juejin.im/post/5a4ed917f265da3e317df515")]),v._v(" "),e("li",[v._v("http://www.cnblogs.com/iovec/p/7904416.html")]),v._v(" "),e("li",[v._v("https://www.cnblogs.com/wyaocn/p/5761163.html")]),v._v(" "),e("li",[v._v("http://www.ruanyifeng.com/blog/2014/10/event-loop.html#comment-text")])])])}),[],!1,null,null,null);_.default=r.exports}}]);