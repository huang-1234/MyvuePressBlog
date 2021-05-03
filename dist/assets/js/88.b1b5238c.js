(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{446:function(t,e,l){"use strict";l.r(e);var a=l(45),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"attribute"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#attribute"}},[t._v("#")]),t._v(" attribute")]),t._v(" "),l("p",[t._v("在 W3C DOM Core 中，Attr (attribute) 对象从 Node 对象继承所有属性和方法。")]),t._v(" "),l("p",[t._v("在 DOM 4 中，Attr 对象不再从 Node 继承。")]),t._v(" "),l("p",[t._v("为了保证未来的代码安全，您应该避免在属性对象上使用节点对象的属性和方法：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性 / 方法")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("避免的理由")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.appendChild()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.attributes")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有属性。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.baseURI")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用 document.baseURI 代替。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.childNodes")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.cloneNode()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用 attr.value 代替。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.firstChild")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.hasAttributes()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有属性。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.hasChildNodes")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.insertBefore()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.isEqualNode()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("没有意义。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.isSameNode()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("没有意义。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.isSupported()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("始终为 true。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.lastChild")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.nextSibling")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有同级节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.nodeName")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用 attr.name 代替。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.nodeType")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("始终为 2 (ATTRIBUTE_NODE)。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.nodeValue")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用 attr.value 代替。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.normalize()")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性无法被正常化。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.ownerDocument")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("始终是您的 HTML 文档。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.ownerElement")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("这是您用来访问该属性的 HTML 元素。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.parentNode")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("这是您用来访问该属性的 HTML 元素。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.previousSibling")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有同级节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.removeChild")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.replaceChild")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("属性没有子节点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("attr.textContent")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用 attr.value 代替。")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);