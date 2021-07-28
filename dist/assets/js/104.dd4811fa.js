(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{613:function(e,t,v){"use strict";v.r(t);var _=v(6),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器工作大体流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器工作大体流程"}},[e._v("#")]),e._v(" 浏览器工作大体流程")]),e._v(" "),v("p",[e._v("浏览器工作流程大体分为如下三部分：")]),e._v(" "),v("h2",{attrs:{id:"_1-浏览器会解析三个东西"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器会解析三个东西"}},[e._v("#")]),e._v(" 1）浏览器会解析三个东西：")]),e._v(" "),v("ul",[v("li",[e._v("一个是HTML/SVG/XHTML，事实上，Webkit有三个C++的类对应这三类文档。解析这三种文件会产生一个DOM Tree。")]),e._v(" "),v("li",[e._v("CSS，解析CSS会产生CSS规则树。")]),e._v(" "),v("li",[e._v("Javascript，脚本，主要是通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree.")])]),e._v(" "),v("h2",{attrs:{id:"_2-解析完成后-浏览器引擎会通过dom-tree-和-css-rule-tree-来构造-rendering-tree。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-解析完成后-浏览器引擎会通过dom-tree-和-css-rule-tree-来构造-rendering-tree。"}},[e._v("#")]),e._v(" 2）解析完成后，浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree。")]),e._v(" "),v("ul",[v("li",[e._v("Rendering Tree 渲染树并不等同于DOM树，因为一些像Header或display:none的东西就没必要放在渲染树中了。")]),e._v(" "),v("li",[e._v("CSS 的 Rule Tree主要是为了完成匹配并把CSS Rule附加上Rendering Tree上的每个Element。也就是DOM结点。也就是所谓的Frame。")]),e._v(" "),v("li",[e._v("然后，计算每个Frame（也就是每个Element）的位置，这又叫layout和reflow过程。")])]),e._v(" "),v("h2",{attrs:{id:"_3-最后通过调用操作系统native-gui的api绘制。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-最后通过调用操作系统native-gui的api绘制。"}},[e._v("#")]),e._v(" 3）最后通过调用操作系统Native GUI的API绘制。")]),e._v(" "),v("blockquote",[v("p",[v("em",[e._v("接下来我们针对这其中所经历的重要步骤，一一详细阐述。")])])]),e._v(" "),v("h2",{attrs:{id:"构建dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建dom"}},[e._v("#")]),e._v(" 构建DOM")]),e._v(" "),v("p",[e._v("浏览器会遵守一套步骤将HTML 文件转换为 DOM 树。宏观上，可以分为几个步骤：")]),e._v(" "),v("ul",[v("li",[e._v("浏览器从磁盘或网络读取HTML的原始字节，并根据文件的指定编码（例如 UTF-8）将它们转换成字符串。")])]),e._v(" "),v("p",[e._v("在网络中传输的内容其实都是 0 和 1 这些字节数据。当浏览器接收到这些字节数据以后，它会将这些字节数据转换为字符串，也就是我们写的代码。")]),e._v(" "),v("ul",[v("li",[e._v("将字符串转换成Token，例如："),v("code",[e._v("<html>")]),e._v("、"),v("code",[e._v("<body>")]),e._v("等。"),v("strong",[e._v("Token中会标识出当前Token是“开始标签”或是“结束标签”亦或是“文本”等信息")]),e._v("。")])]),e._v(" "),v("p",[e._v("这时候你一定会有疑问，节点与节点之间的关系如何维护？")]),e._v(" "),v("p",[e._v("事实上，这就是Token要标识“起始标签”和“结束标签”等标识的作用。例如“title”Token的起始标签和结束标签之间的节点肯定是属于“head”的子节点。")]),e._v(" "),v("p",[e._v("上图给出了节点之间的关系，例如：“Hello”Token位于“title”开始标签与“title”结束标签之间，表明“Hello”Token是“title”Token的子节点。同理“title”Token是“head”Token的子节点。")]),e._v(" "),v("ul",[v("li",[e._v("生成节点对象并构建DOM")])]),e._v(" "),v("p",[e._v("事实上，构建DOM的过程中，不是等所有Token都转换完成后再去生成节点对象，而是一边生成Token一边消耗Token来生成节点对象。换句话说，每个Token被生成后，会立刻消耗这个Token创建出节点对象。"),v("strong",[e._v("注意：带有结束标签标识的Token不会创建节点对象。")])]),e._v(" "),v("h2",{attrs:{id:"构建cssom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建cssom"}},[e._v("#")]),e._v(" 构建CSSOM")]),e._v(" "),v("p",[e._v("DOM会捕获页面的内容，但浏览器还需要知道页面如何展示，所以需要构建CSSOM。")]),e._v(" "),v("p",[e._v("构建CSSOM的过程与构建DOM的过程非常相似，当浏览器接收到一段CSS，浏览器首先要做的是识别出Token，然后构建节点并生成CSSOM。")]),e._v(" "),v("p",[e._v("在这一过程中，浏览器会确定下每一个节点的样式到底是什么，并且这一过程其实是很消耗资源的。因为样式你可以自行设置给某个节点，也可以通过继承获得。在这一过程中，浏览器得递归 CSSOM 树，然后确定具体的元素到底是什么样式。")]),e._v(" "),v("p",[v("strong",[e._v("注意：CSS匹配HTML元素是一个相当复杂和有性能问题的事情。所以，DOM树要小，CSS尽量用id和class，千万不要过渡层叠下去")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"构建渲染树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构建渲染树"}},[e._v("#")]),e._v(" 构建渲染树")]),e._v(" "),v("p",[e._v("当我们生成 DOM 树和 CSSOM 树以后，就需要将这两棵树组合为渲染树。")]),e._v(" "),v("p",[e._v("在这一过程中，不是简单的将两者合并就行了。"),v("strong",[e._v("渲染树只会包括需要显示的节点和这些节点的样式信息")]),e._v("，如果某个节点是 "),v("code",[e._v("display: none")]),e._v("的，那么就不会在渲染树中显示。")]),e._v(" "),v("h2",{attrs:{id:"布局与绘制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布局与绘制"}},[e._v("#")]),e._v(" 布局与绘制")]),e._v(" "),v("p",[e._v("当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。")]),e._v(" "),v("p",[e._v("布局流程的输出是一个“盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸，所有相对测量值都将转换为屏幕上的绝对像素。")]),e._v(" "),v("p",[e._v("布局完成后，浏览器会立即发出“Paint Setup”和“Paint”事件，将渲染树转换成屏幕上的像素。")]),e._v(" "),v("blockquote",[v("p",[v("em",[e._v("以上我们详细介绍了浏览器工作流程中的重要步骤，接下来我们讨论几个相关的问题：")])])]),e._v(" "),v("h2",{attrs:{id:"问题一-渲染过程中遇到js文件怎么处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题一-渲染过程中遇到js文件怎么处理"}},[e._v("#")]),e._v(" 问题一：渲染过程中遇到JS文件怎么处理？")]),e._v(" "),v("p",[e._v("JavaScript的加载、解析与执行会阻塞DOM的构建，也就是说，在构建DOM时，HTML解析器若遇到了JavaScript，那么它会暂停构建DOM，将控制权移交给JavaScript引擎，等JavaScript引擎运行完毕，浏览器再从中断的地方恢复DOM构建。")]),e._v(" "),v("p",[e._v("也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性（下文会介绍这两者的区别）。")]),e._v(" "),v("p",[e._v("JS文件不只是阻塞DOM的构建，它会导致CSSOM也阻塞DOM的构建。")]),e._v(" "),v("p",[e._v("原本DOM和CSSOM的构建是互不影响，井水不犯河水，但是一旦引入了JavaScript，CSSOM也开始阻塞DOM的构建，只有CSSOM构建完毕后，DOM再恢复DOM构建。")]),e._v(" "),v("p",[e._v("这是什么情况？")]),e._v(" "),v("p",[e._v("这是因为JavaScript不只是可以改DOM，它还可以更改样式，也就是它可以更改CSSOM。前面我们介绍，不完整的CSSOM是无法使用的，但JavaScript中想访问CSSOM并更改它，那么在执行JavaScript时，必须要能拿到完整的CSSOM。所以就导致了一个现象，如果浏览器尚未完成CSSOM的下载和构建，而我们却想在此时运行脚本，那么浏览器将延迟脚本执行和DOM构建，直至其完成CSSOM的下载和构建。也就是说，"),v("strong",[e._v("在这种情况下，浏览器会先下载和构建CSSOM，然后再执行JavaScript，最后在继续构建DOM")]),e._v("。")])])}),[],!1,null,null,null);t.default=a.exports}}]);