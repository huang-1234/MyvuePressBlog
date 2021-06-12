(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{845:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-flex布局"}},[t._v("#")]),t._v(" 4. flex布局")]),t._v(" "),a("p",[t._v("来源：布局的传统解决方案，基于"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("盒状模型"),a("OutboundLink")],1),t._v("，依赖 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("display")]),a("OutboundLink")],1),t._v(" 属性 + "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("position")]),a("OutboundLink")],1),t._v("属性 + "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("float")]),a("OutboundLink")],1),t._v("属性。它对于那些特殊布局非常不方便，比如，"),a("a",{attrs:{href:"https://css-tricks.com/centering-css-complete-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("垂直居中"),a("OutboundLink")],1),t._v("就不容易实现。2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。")]),t._v(" "),a("blockquote",[a("p",[t._v("display:flex")])]),t._v(" "),a("h2",{attrs:{id:"一、任何一个容器都可以指定为-flex-布局。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、任何一个容器都可以指定为-flex-布局。"}},[t._v("#")]),t._v(" 一、任何一个容器都可以指定为 Flex 布局。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("行内元素也可以使用 Flex 布局。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("Webkit 内核的浏览器，必须加上"),a("code",[t._v("-webkit")]),t._v("前缀。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Safari */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("注意，设为 Flex 布局以后，子元素的"),a("code",[t._v("float")]),t._v("、"),a("code",[t._v("clear")]),t._v("和"),a("code",[t._v("vertical-align")]),t._v("属性将失效。")]),t._v(" "),a("h2",{attrs:{id:"二、基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[t._v("#")]),t._v(" 二、基本概念")]),t._v(" "),a("p",[t._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),t._v(" "),a("p",[t._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做"),a("code",[t._v("main start")]),t._v("，结束位置叫做"),a("code",[t._v("main end")]),t._v("；交叉轴的开始位置叫做"),a("code",[t._v("cross start")]),t._v("，结束位置叫做"),a("code",[t._v("cross end")]),t._v("。")]),t._v(" "),a("p",[t._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做"),a("code",[t._v("main size")]),t._v("，占据的交叉轴空间叫做"),a("code",[t._v("cross size")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"三、容器的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、容器的属性"}},[t._v("#")]),t._v(" 三、容器的属性")]),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("以下6个属性设置在容器上。")])],1),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("flex-direction  |主轴方向，取值：row | row-reverse | column | column-reverse;")]),t._v(" "),a("li",[t._v("flex-wrap        | 是否换行，默认不换：nowrap | wrap | wrap-reverse;")]),t._v(" "),a("li",[t._v("flex-flow    | flex-direction || flex-wrap;  默认值为"),a("code",[t._v("row nowrap")])]),t._v(" "),a("li",[t._v("justify-content  |  项目在主轴上的对齐方式:flex-start | flex-end | center | space-between | space-around;")]),t._v(" "),a("li",[t._v("align-items    | 项目在交叉轴上如何对齐:flex-start | flex-end | center | baseline | stretch;")]),t._v(" "),a("li",[t._v("align-content |多根轴线的对齐方式:flex-start | flex-end | center | space-between | space-around | stretch;")])])]),t._v(" "),a("h3",{attrs:{id:"_3-1-flex-direction属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex-direction属性"}},[t._v("#")]),t._v(" 3.1 flex-direction属性")]),t._v(" "),a("p",[a("code",[t._v("flex-direction")]),t._v("属性决定主轴的方向（即项目的排列方向）。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row | row-reverse | column | column-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// \nrow（默认值）：主轴为水平方向，起点在左端。\nrow-reverse：主轴为水平方向，起点在右端。\ncolumn：主轴为垂直方向，起点在上沿。\ncolumn-reverse：主轴为垂直方向，起点在下沿。\n")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-flex-wrap属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flex-wrap属性"}},[t._v("#")]),t._v(" 3.2 flex-wrap属性")]),t._v(" "),a("p",[t._v('默认情况下，项目都排在一条线（又称"轴线"）上。'),a("code",[t._v("flex-wrap")]),t._v("属性定义，如果一条轴线排不下，如何换行。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" // nowrap 不换行"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  wrap 换行，第一行在上，wrap-reverse 第一行在下\n")])])]),a("h3",{attrs:{id:"_3-3-flex-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-flow"}},[t._v("#")]),t._v(" 3.3 flex-flow")]),t._v(" "),a("p",[a("code",[t._v("flex-flow")]),t._v("属性是"),a("code",[t._v("flex-direction")]),t._v("属性和"),a("code",[t._v("flex-wrap")]),t._v("属性的简写形式，默认值为"),a("code",[t._v("row nowrap")]),t._v("。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-direction || flex-wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-justify-content属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-justify-content属性"}},[t._v("#")]),t._v(" 3.4 justify-content属性")]),t._v(" "),a("p",[a("code",[t._v("justify-content")]),t._v("属性定义了项目在主轴上的对齐方式。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// 它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。\nflex-start（默认值）：左对齐\nflex-end：右对齐\ncenter： 居中\nspace-between：两端对齐，项目之间的间隔都相等。\nspace-around：每个项目两侧的间隔相等。所以，<font color=red>项目之间的间隔比项目与边框的间隔大一倍。</font>\n")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-5-align-items属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-align-items属性"}},[t._v("#")]),t._v(" 3.5 align-items属性")]),t._v(" "),a("p",[a("code",[t._v("align-items")]),t._v("属性定义项目在交叉轴上如何对齐。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// 它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。\nflex-start：交叉轴的起点对齐。\nflex-end：交叉轴的终点对齐。\ncenter：交叉轴的中点对齐。\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("baseline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 项目的第一行文字的基线对齐。\nstretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。\n")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-6-align-content属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-content属性"}},[t._v("#")]),t._v(" 3.6 align-content属性")]),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("// align-content: space-around;要想起作用。 必须得有flex-wrap!=nowrap")])],1),t._v(" "),a("p",[a("code",[t._v("align-content")]),t._v("属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// 该属性可能取6个值。\nflex-start：与交叉轴的起点对齐。\nflex-end：与交叉轴的终点对齐。\ncenter：与交叉轴的中点对齐。\nspace-between：与交叉轴两端对齐，轴线之间的间隔平均分布。\nspace-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。\nstretch（默认值）：轴线占满整个交叉轴。\n")])])])]),t._v(" "),a("h2",{attrs:{id:"四、项目的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、项目的属性"}},[t._v("#")]),t._v(" 四、项目的属性")]),t._v(" "),a("p",[t._v("以下6个属性设置在项目上。")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("code",[t._v("order")]),t._v("  |排列顺序。数值越小，排列越靠前，默认为0。")]),t._v(" "),a("li",[a("code",[t._v("flex-grow")]),t._v("  |项目的放大比例，默认为"),a("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大")]),t._v(" "),a("li",[a("code",[t._v("flex-shrink")]),t._v("  |项目的缩小比例，默认为1，即如果空间不足，该项目将缩小")]),t._v(" "),a("li",[a("code",[t._v("flex-basis")]),t._v("   |length | auto; /* default auto */")]),t._v(" "),a("li",[a("code",[t._v("flex")]),t._v("  |flex属性是flex-grow, flex-shrink和 flex-basis的简写，默认值为"),a("code",[t._v("0 1 auto")])]),t._v(" "),a("li",[a("code",[t._v("align-self")]),t._v("  |auto | flex-start | flex-end | center | baseline | stretch;")])])]),t._v(" "),a("h3",{attrs:{id:"_4-1-order属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-order属性"}},[t._v("#")]),t._v(" 4.1 order属性")]),t._v(" "),a("p",[a("code",[t._v("order")]),t._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <integer>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-flex-grow属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-flex-grow属性"}},[t._v("#")]),t._v(" 4.2 flex-grow属性")]),t._v(" "),a("p",[a("code",[t._v("flex-grow")]),t._v("属性定义项目的放大比例，默认为"),a("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 0 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-3-flex-shrink属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-flex-shrink属性"}},[t._v("#")]),t._v(" 4.3 flex-shrink属性")]),t._v(" "),a("p",[a("code",[t._v("flex-shrink")]),t._v("属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 1 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n//如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。\n")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-4-flex-basis属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-flex-basis属性"}},[t._v("#")]),t._v(" 4.4 flex-basis属性")]),t._v(" "),a("p",[a("code",[t._v("flex-basis")]),t._v("属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),a("code",[t._v("auto")]),t._v("，即项目的本来大小。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" length | auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default auto */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("它可以设为跟"),a("code",[t._v("width")]),t._v("或"),a("code",[t._v("height")]),t._v("属性一样的值（比如350px），则项目将占据固定空间。")]),t._v(" "),a("h3",{attrs:{id:"_4-5-flex属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-flex属性"}},[t._v("#")]),t._v(" 4.5 flex属性")]),t._v(" "),a("p",[a("code",[t._v("flex")]),t._v("属性是"),a("code",[t._v("flex-grow")]),t._v(", "),a("code",[t._v("flex-shrink")]),t._v(" 和 "),a("code",[t._v("flex-basis")]),t._v("的简写，默认值为"),a("code",[t._v("0 1 auto")]),t._v("。后两个属性可选。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ <"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-grow'")]),t._v("> <"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-shrink'")]),t._v(">? || <"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-basis'")]),t._v("> ]\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("该属性有两个快捷值："),a("code",[t._v("auto")]),t._v(" ("),a("code",[t._v("1 1 auto")]),t._v(") 和 none ("),a("code",[t._v("0 0 auto")]),t._v(")。")]),t._v(" "),a("p",[t._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),t._v(" "),a("h3",{attrs:{id:"_4-6-align-self属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-align-self属性"}},[t._v("#")]),t._v(" 4.6 align-self属性")]),t._v(" "),a("p",[a("code",[t._v("align-self")]),t._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),a("code",[t._v("align-items")]),t._v("属性。默认值为"),a("code",[t._v("auto")]),t._v("，表示继承父元素的"),a("code",[t._v("align-items")]),t._v("属性，如果没有父元素，则等同于"),a("code",[t._v("stretch")]),t._v("。")]),t._v(" "),a("blockquote",[a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"实战演练"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战演练"}},[t._v("#")]),t._v(" 实战演练")]),t._v(" "),a("blockquote",[a("p",[t._v("上图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/CSS/display.assets/image-20210328115054582.png",alt:"image-20210328115054582"}})]),t._v(" "),a("blockquote",[a("p",[t._v("html")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("item2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("item3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--       <div class="item"></div>\n      <div class="item"></div>\n      <div class="item"></div>\n      <div class="item"></div>\n      <div class="item"></div>\n      <div class="item"></div> --\x3e')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("less")])]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@box-width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@box-height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@item-margin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v("5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点item的外边距")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@box-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@box-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// background-color: aquamarine;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下面两句话让只有一点的骰子放在最中间")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*     justify-content: center;\n    align-items: center; */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" space"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("between"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.25"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@box-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.25"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@box-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// box-sizing: border-box; //可用可不用")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@item-margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#item2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#item3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);