(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{307:function(n,t,e){"use strict";function a(n,t,e,a,o,r,_,s){var v,i="function"==typeof n?n.options:n;if(t&&(i.render=t,i.staticRenderFns=e,i._compiled=!0),a&&(i.functional=!0),r&&(i._scopeId="data-v-"+r),_?(v=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(_)},i._ssrRegister=v):o&&(v=s?function(){o.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:o),v)if(i.functional){i._injectStyles=v;var c=i.render;i.render=function(n,t){return v.call(t),c(n,t)}}else{var u=i.beforeCreate;i.beforeCreate=u?[].concat(u,v):[v]}return{exports:n,options:i}}e.d(t,"a",(function(){return a}))},426:function(n,t,e){"use strict";e.r(t);var a=e(307),o=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_2-变量作用域-闭包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-变量作用域-闭包"}},[n._v("#")]),n._v(" 2. 变量作用域&&闭包")]),n._v(" "),e("blockquote",[e("p",[n._v("梳理一下关于js作用域和闭包的问题")])]),n._v(" "),e("blockquote",[e("p",[e("font",{attrs:{color:"red"}},[n._v("闭包的一个来源其实为了解决前端工作团队中每个人为变量起名而不重名的的问题")])],1)]),n._v(" "),e("p",[n._v("闭包的定义：在Javascript语言中，只有函数中的子函数才能引用函数中的变量，简单来说，闭包就是定义在函数中的函数，是函数内外部连接的桥梁")]),n._v(" "),e("p",[n._v("闭包的意义：（1）当前作用域总是能够访问外部作用域中的变量；（2）函数是唯一拥有自身作用域的结构，所以闭包的创建依赖于函数")]),n._v(" "),e("p",[n._v("变量的作用域：全局变量、局部变量是变量的作用域仅有的两种形态；一般来说，全局变量可以在任意作用域中引用，而局部变量则只能在当前作用域中引用。如：")]),n._v(" "),e("p",[n._v("这是一个全局变量，在函数内部可以读取全局变量的例子：")]),n._v(" "),e("p",[n._v("var a = 1;\nvar Get_a = function (){\nconsole.log(a);\n};\nGet_a();//1\n这是一个局部变量，无法在外部作用域中引用该变量；注意：局部变量的声明必须使用var表达式，否则运行该函数后相当于声明了一个全局变量")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("var Get_a = function (){\n\tvar a = 1;\n};\nconsole.log(a);//a is not defined\n")])])]),e("p",[n._v("这里实际上是定义全局变量：")]),n._v(" "),e("p",[n._v("var Get_a= function ()\n{\na = 1;\n};\nGet_a();\nconsole.log(a);\n一般情况，局部变量只能在函数中引用：子函数可以引用当前作用域中的变量，这实际上是JavaScript语言中的一个特色结构——作用域链,")]),n._v(" "),e("p",[n._v("var Get_a = function ()\n{\nvar a = 1;\nvar Out_a = function ()\n{\nconsole.log(a ++);//1\n};\nOut_a();\n};\nGet_a();\n继续运行r()，输出值会递增——2、3、4、5，这个值被存储于内存中，这个Out_a子函数正是我们要讨论的闭包:")]),n._v(" "),e("p",[n._v("var Get_a = function ()\n{\nvar a = 1;\nvar Out_a = function ()\n{\nconsole.log(a ++);//1\n};\nreturn Out_a;\n};\nvar r = Get_a();\nr();\n闭包的两大作用：（1）内部function会访问外部函数的参数、变量、函数，（2）将函数中的变量的值存储于内存中（不会被垃圾回收机制回收）")]),n._v(" "),e("p",[n._v("f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收：")]),n._v(" "),e("p",[n._v("function f1(){\nvar n=999;\nnAdd=function(){n+=1}\nfunction f2(){\nalert(n);\n}\nreturn f2;\n}\nvar result=f1();\nresult(); // 999\nnAdd();\nresult(); // 1000")]),n._v(" "),e("blockquote",[e("p",[n._v("使用闭包的注意点：")])]),n._v(" "),e("p",[n._v("由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。\n闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。")])])}),[],!1,null,null,null);t.default=o.exports}}]);