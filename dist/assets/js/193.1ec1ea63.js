(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{706:function(t,n,a){"use strict";a.r(n);var s=a(6),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jquery的-when-done-这个知识点-很少见到-做个记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery的-when-done-这个知识点-很少见到-做个记录"}},[t._v("#")]),t._v(" jQUery的$.when（）.done() 这个知识点，很少见到，做个记录")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deferreds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n参数deferreds，一个或多个延时对象或"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v("对象，我们初略的认为它就是一个或多个异步请求。\n例如：\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" view plain copy\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"page1.php"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"page2.php"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数常常和done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数、fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数、then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("函数联合使用：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 当deferreds中的处理都完成的时候执行Function回调函数\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 当deferreds中有一个处理失败的时候执行Function回调函数\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Function func1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Function func2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 结合了done和fail函数，当都成功执行func1，当有一个失败执行func2\n")])])]),a("h1",{attrs:{id:"jquery的-when"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery的-when"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/baiyuhong/p/5758147.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery的 $when()"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("某天看jQuey的deffered对象的时候，突然想起了曾经面试的一个关于ajax的问题，就是同时发送三个ajax请求，当三个请求都成功的时候输出1，当时不知道jQuery的$.when（）,所以以为是一个请求结束的时候去判断另一个，现在想起来好傻。")]),t._v(" "),a("p",[t._v("$.when()  1.5版本以后添加的")]),t._v(" "),a("p",[t._v("参数：零个或多个延迟对象（deferred对象），或者普通的JavaScript对象。")]),t._v(" "),a("p",[t._v("用处：文档描述提供一种方法来执行零个或多个对象的回调函数，我所理解的是用来同时执行多个异步对象，当这几个异步对象都执行成功后调用done函数，若有一个失败则执行fail函数。")]),t._v(" "),a("p",[t._v("主要考虑三种参数情况")]),t._v(" "),a("p",[t._v("1.接收一个非延迟对象的参数或者不接收任何参数，则默认为一个状态为resolve的延迟对象。只会执行done函数。")]),t._v(" "),a("p",[t._v("2.接收一个延迟对象，会返回他的一个promise对象，可以继续绑定延迟对象的其他方法，同时也会相应的执行resolve或reject")]),t._v(" "),a("p",[t._v("3.接收多个延迟对象，会根据一个集成的延迟对象，这个对象集合所有延迟对象的状态，当全部成功则resolve，失败则reject")]),t._v(" "),a("p",[t._v("所以ajax的那个问题可以这样解决。")]),t._v(" "),a("p",[t._v("$.when(ajax1,ajax2,ajax3).done(function(){alert(1)}).")]),t._v(" "),a("p",[t._v("调用$.when()以后继续执行的done，fail，then等方法，都是延迟对象的方法。")]),t._v(" "),a("p",[t._v("关于延迟对象deferred对象可以参考阮一峰的http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html")]),t._v(" "),a("p",[t._v("deferred对象和promise对象的区别")]),t._v(" "),a("p",[t._v("$.ajax()返回的是一个延迟对象？")]),t._v(" "),a("p",[t._v("不是，从 jQuery 1.5 开始，"),a("code",[t._v("$.ajax()")]),t._v("返回的jqXHR对象 实现了 Promise 接口, 使它拥有了 Promise 的所有属性，方法和行为。")])])}),[],!1,null,null,null);n.default=e.exports}}]);