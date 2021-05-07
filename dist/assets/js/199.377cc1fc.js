(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{705:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css格式化上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css格式化上下文"}},[t._v("#")]),t._v(" CSS格式化上下文")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("空盒子的垂直margin直接相邻，也会发生合并。")])]),t._v(" "),s("li",[s("p",[t._v("BFC内盒子的左外边缘都会接触包含块的左边缘(如果从右到左进行排版，那么右边发生接触)，即使存在浮动盒子也是如此。")])]),t._v(" "),s("li",[s("p",[t._v("BFC的内容不会与浮动元素发生重叠，且浮动元素也会参与BFC的高度计算。")])]),t._v(" "),s("li",[s("p",[t._v("BFC是一个隔离的独立容器，容器里面的子元素不会影响外面的元素，反过来也一样。")])])]),t._v(" "),s("h2",{attrs:{id:"如何触发bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何触发bfc"}},[t._v("#")]),t._v(" 如何触发BFC")]),t._v(" "),s("ol",[s("li",[t._v("根元素"),s("code",[t._v("<html>")])]),t._v(" "),s("li",[t._v("浮动元素(float不为none)")]),t._v(" "),s("li",[t._v("绝对定位元素(position为absolute或fixed)")]),t._v(" "),s("li",[t._v("overflow不为visible的块元素")]),t._v(" "),s("li",[t._v("内联块元素、表格单元格、表格标题(display为inline-block/table-cell/table-caption)")]),t._v(" "),s("li",[t._v("弹性元素(display为flex或inline-flex元素的直接子元素)")])]),t._v(" "),s("p",[t._v("满足上述任一条件即可在其内部产生BFC。(更多详细的可参考MDN文档)")]),t._v(" "),s("h4",{attrs:{id:"防止外边距合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防止外边距合并"}},[t._v("#")]),t._v(" 防止外边距合并")]),t._v(" "),s("p",[s("strong",[t._v("根据BFC布局规则：")]),t._v(" 同一个BFC内相邻盒子之间的外边距会发生合并。")]),t._v(" "),s("p",[t._v("创建新的BFC，不属于同一个BFC的盒子不会出现外边距合并。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--创建新的BFC--\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token style-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"ifc-内联格式化上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ifc-内联格式化上下文"}},[t._v("#")]),t._v(" IFC 内联格式化上下文")]),t._v(" "),s("p",[t._v("只有inline-level元素参与的渲染区域，IFC规定并管理inline-level元素的布局方式。")]),t._v(" "),s("h3",{attrs:{id:"布局规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局规则"}},[t._v("#")]),t._v(" 布局规则")]),t._v(" "),s("ol",[s("li",[t._v("盒子沿着水平方向逐个排列。")]),t._v(" "),s("li",[t._v("只会计算盒子水平方向上的margin、border和padding，而不会计算垂直方向上的。")]),t._v(" "),s("li",[t._v("在垂直方向上，盒子有多种对齐方式(vertical-align)：可以top对齐，或者bottom对齐，也可以通过文本基线(baseline)对齐。")]),t._v(" "),s("li",[t._v("能把一行的盒子完全包含进去的方形区域，被称为"),s("strong",[t._v("行框(line box)")]),t._v("。")]),t._v(" "),s("li",[t._v("行框的高度由CSS行高计算规则确定，而且同个IFC内的行框高度一般不同(行框内最高元素的高度可能不同)。")]),t._v(" "),s("li",[t._v("行框通常是左右边紧贴包含块，但会因为浮动元素的存在而发生变化。行框的宽由包含块和存在的浮动元素决定，浮动元素可能导致行框宽度变小。如果行框内所有盒子的总宽度小于行框的宽度，那行框内盒子的水平分布方式由text-align属性决定(如果这个属性是justify，那浏览器会对inline元素内的文本和空格进行拉伸，注意不是inline-table和inline-block)。")]),t._v(" "),s("li",[t._v("如果一个行框无法容纳多个inline元素，那他们会被分布到两个或多个垂直堆叠的行框内。")]),t._v(" "),s("li",[t._v("如果一个inline元素的宽度超过行框能容纳的宽度，那它会被切割成若干盒子然后跨行框分布，而且被切割处margins, borders, 和padding均不生效(e.g.段落)。如果这个inline元素不能被分割(e.g.单个单词work breaking规则被禁用受行框内white-space为nowrap或pre的影响)，那么这个inline元素会直接溢出行框。")])]),t._v(" "),s("h3",{attrs:{id:"用途"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),s("h4",{attrs:{id:"水平居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),s("p",[s("strong",[t._v("根据IFC的布局规则：")]),t._v(" 水平方向上，通过text-align改变对齐方式。")]),t._v(" "),s("h4",{attrs:{id:"垂直居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),s("p",[s("strong",[t._v("根据IFC的布局规则：")]),t._v(" 垂直方向上，通过vertical-align改变对齐方式。")]),t._v(" "),s("h2",{attrs:{id:"gfc-网格布局格式化上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gfc-网格布局格式化上下文"}},[t._v("#")]),t._v(" GFC 网格布局格式化上下文")]),t._v(" "),s("p",[t._v("声明display:grid/inline-grid能创建一个网格容器，网格容器会为其内容产生GFC。")]),t._v(" "),s("p",[t._v("网格布局引入了二维网格布局系统，通过一组相交的水平线和垂直线来定义网格的列和行，网格元素被布局到这些行和列相关的位置上。")]),t._v(" "),s("h3",{attrs:{id:"布局规则-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局规则-2"}},[t._v("#")]),t._v(" 布局规则")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("网格布局"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"ffc-弹性格式化上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffc-弹性格式化上下文"}},[t._v("#")]),t._v(" FFC 弹性格式化上下文")]),t._v(" "),s("p",[t._v("声明display:flex/inline-flex能创建一个弹性容器，弹性容器会为其内容产生FFC。")]),t._v(" "),s("h3",{attrs:{id:"布局规则-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局规则-3"}},[t._v("#")]),t._v(" 布局规则")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("弹性布局"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("参考链接：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN: Block_formatting_context"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.w3.org/TR/CSS2/visuren.html#block-formatting",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C: block-formatting"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);