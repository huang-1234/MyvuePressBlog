(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{695:function(t,n,a){"use strict";a.r(n);var e=a(6),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("p",[t._v("一个函数和对其周围状态（"),a("strong",[t._v("lexical environment，词法环境")]),t._v("）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是"),a("strong",[t._v("闭包")]),t._v("（"),a("strong",[t._v("closure")]),t._v("）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。")]),t._v(" "),a("h2",{attrs:{id:"词法作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域"}},[t._v("#")]),t._v(" 词法作用域")]),t._v(" "),a("p",[t._v("现在来考虑以下例子 ：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('function makeFunc() {\n    var name = "Mozilla";\n    function displayName() {\n        alert(name);\n    }\n    return displayName;\n}\n\nvar myFunc = makeFunc();\nmyFunc();\n')])])]),a("p",[t._v("运行这段代码的效果和之前 "),a("code",[t._v("init()")]),t._v(" 函数的示例完全一样。其中不同的地方（也是有意思的地方）在于内部函数 "),a("code",[t._v("displayName()")]),t._v(" "),a("em",[t._v("在执行前")]),t._v("，从外部函数返回。")]),t._v(" "),a("p",[t._v("第一眼看上去，也许不能直观地看出这段代码能够正常运行。在一些编程语言中，一个函数中的局部变量仅存在于此函数的执行期间。一旦 "),a("code",[t._v("makeFunc()")]),t._v(" 执行完毕，你可能会认为 "),a("code",[t._v("name")]),t._v(" 变量将不能再被访问。然而，因为代码仍按预期运行，所以在 JavaScript 中情况显然与此不同。")]),t._v(" "),a("p",[t._v("原因在于，JavaScript中的函数会形成了闭包。 "),a("em",[t._v("闭包")]),t._v("是由函数以及声明该函数的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。在本例子中，"),a("code",[t._v("myFunc")]),t._v(" 是执行 "),a("code",[t._v("makeFunc")]),t._v(" 时创建的 "),a("code",[t._v("displayName")]),t._v(" 函数实例的引用。"),a("code",[t._v("displayName")]),t._v(" 的实例维持了一个对它的词法环境（变量 "),a("code",[t._v("name")]),t._v(" 存在于其中）的引用。因此，当 "),a("code",[t._v("myFunc")]),t._v(" 被调用时，变量 "),a("code",[t._v("name")]),t._v(" 仍然可用，其值 "),a("code",[t._v("Mozilla")]),t._v(" 就被传递到"),a("code",[t._v("alert")]),t._v("中。")]),t._v(" "),a("p",[t._v("下面是一个更有意思的示例 — 一个 "),a("code",[t._v("makeAdder")]),t._v(" 函数：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function makeAdder(x) {\n  return function(y) {\n    return x + y;\n  };\n}\n\nvar add5 = makeAdder(5);\nvar add10 = makeAdder(10);\n\nconsole.log(add5(2));  // 7\nconsole.log(add10(2)); // 12\n")])])]),a("p",[t._v("在这个示例中，我们定义了 "),a("code",[t._v("makeAdder(x)")]),t._v(" 函数，它接受一个参数 "),a("code",[t._v("x")]),t._v(" ，并返回一个新的函数。返回的函数接受一个参数 "),a("code",[t._v("y")]),t._v("，并返回"),a("code",[t._v("x+y")]),t._v("的值。")]),t._v(" "),a("p",[t._v("从本质上讲，"),a("code",[t._v("makeAdder")]),t._v(" 是一个函数工厂 — 他创建了将指定的值和它的参数相加求和的函数。在上面的示例中，我们使用函数工厂创建了两个新函数 — 一个将其参数和 5 求和，另一个和 10 求和。")]),t._v(" "),a("p",[a("code",[t._v("add5")]),t._v(" 和 "),a("code",[t._v("add10")]),t._v(" 都是闭包。它们共享相同的函数定义，但是保存了不同的词法环境。在 "),a("code",[t._v("add5")]),t._v(" 的环境中，"),a("code",[t._v("x")]),t._v(" 为 5。而在 "),a("code",[t._v("add10")]),t._v(" 中，"),a("code",[t._v("x")]),t._v(" 则为 10。")]),t._v(" "),a("h2",{attrs:{id:"实用的闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实用的闭包"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures#practical_closures",target:"_blank",rel:"noopener noreferrer"}},[t._v("实用的闭包"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来。这显然类似于面向对象编程。在面向对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。")]),t._v(" "),a("p",[t._v("因此，通常你使用只有一个方法的对象的地方，都可以使用闭包。")]),t._v(" "),a("p",[t._v("在 Web 中，你想要这样做的情况特别常见。大部分我们所写的 JavaScript 代码都是基于事件的 — 定义某种行为，然后将其添加到用户触发的事件之上（比如点击或者按键）。我们的代码通常作为回调：为响应事件而执行的函数。")]),t._v(" "),a("p",[t._v("假如，我们想在页面上添加一些可以调整字号的按钮。一种方法是以像素为单位指定 "),a("code",[t._v("body")]),t._v(" 元素的 "),a("code",[t._v("font-size")]),t._v("，然后通过相对的 "),a("code",[t._v("em")]),t._v(" 单位设置页面中其它元素（例如"),a("code",[t._v("header")]),t._v("）的字号：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("body {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 12px;\n}\n\nh1 {\n  font-size: 1.5em;\n}\n\nh2 {\n  font-size: 1.2em;\n}\n")])])]),a("p",[t._v("我们的文本尺寸调整按钮可以修改 "),a("code",[t._v("body")]),t._v(" 元素的 "),a("code",[t._v("font-size")]),t._v(" 属性，由于我们使用相对单位，页面中的其它元素也会相应地调整。")]),t._v(" "),a("p",[t._v("以下是 JavaScript：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function makeSizer(size) {\n  return function() {\n    document.body.style.fontSize = size + 'px';\n  };\n}\n\nvar size12 = makeSizer(12);\nvar size14 = makeSizer(14);\nvar size16 = makeSizer(16);\n")])])]),a("p",[a("code",[t._v("size12")]),t._v("，"),a("code",[t._v("size14")]),t._v(" 和 "),a("code",[t._v("size16")]),t._v(" 三个函数将分别把 "),a("code",[t._v("body")]),t._v(" 文本调整为 12，14，16 像素。我们可以将它们分别添加到按钮的点击事件上。如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('document.getElementById(\'size-12\').onclick = size12;\ndocument.getElementById(\'size-14\').onclick = size14;\ndocument.getElementById(\'size-16\').onclick = size16;\n<a href="#" id="size-12">12</a>\n<a href="#" id="size-14">14</a>\n<a href="#" id="size-16">16</a>\n')])])]),a("h2",{attrs:{id:"使用闭包模拟私有方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用闭包模拟私有方法"}},[t._v("#")]),t._v(" 使用闭包模拟私有方法")]),t._v(" "),a("p",[t._v("编程语言中，比如 Java，是支持将方法声明为私有的，即它们只能被同一个类中的其它方法所调用。")]),t._v(" "),a("p",[t._v("而 JavaScript 没有这种原生支持，但我们可以使用闭包来模拟私有方法。私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。")]),t._v(" "),a("p",[t._v("下面的示例展现了如何使用闭包来定义公共函数，并令其可以访问私有函数和变量。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" privateCounter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    privateCounter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("decrement")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" privateCounter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logs 0 */")]),t._v("\nCounter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCounter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logs 2 */")]),t._v("\nCounter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* logs 1 */")]),t._v("\n")])])]),a("p",[t._v("在之前的示例中，每个闭包都有它自己的词法环境；而这次我们只创建了一个词法环境，为三个函数所共享："),a("code",[t._v("Counter.increment，``Counter.decrement")]),t._v(" 和 "),a("code",[t._v("Counter.value")]),t._v("。")]),t._v(" "),a("p",[t._v("该共享环境创建于一个立即执行的匿名函数体内。这个环境中包含两个私有项：名为 "),a("code",[t._v("privateCounter")]),t._v(" 的变量和名为 "),a("code",[t._v("changeBy")]),t._v(" 的函数。这两项都无法在这个匿名函数外部直接访问。必须通过匿名函数返回的三个公共函数访问。")]),t._v(" "),a("p",[t._v("这三个公共函数是共享同一个环境的闭包。多亏 JavaScript 的词法作用域，它们都可以访问 "),a("code",[t._v("privateCounter")]),t._v(" 变量和 "),a("code",[t._v("changeBy")]),t._v(" 函数。")]),t._v(" "),a("p",[t._v("你应该注意到我们定义了一个匿名函数，用于创建一个计数器。我们立即执行了这个匿名函数，并将他的值赋给了变量"),a("code",[t._v("Counter")]),t._v("。我们可以把这个函数储存在另外一个变量"),a("code",[t._v("makeCounter")]),t._v("中，并用他来创建多个计数器。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var makeCounter = function() {\n  var privateCounter = 0;\n  function changeBy(val) {\n    privateCounter += val;\n  }\n  return {\n    increment: function() {\n      changeBy(1);\n    },\n    decrement: function() {\n      changeBy(-1);\n    },\n    value: function() {\n      return privateCounter;\n    }\n  }\n};\n\nvar Counter1 = makeCounter();\nvar Counter2 = makeCounter();\nconsole.log(Counter1.value()); /* logs 0 */\nCounter1.increment();\nCounter1.increment();\nconsole.log(Counter1.value()); /* logs 2 */\nCounter1.decrement();\nconsole.log(Counter1.value()); /* logs 1 */\nconsole.log(Counter2.value()); /* logs 0 */\n")])])]),a("p",[t._v("请注意两个计数器 "),a("code",[t._v("Counter1")]),t._v(" 和 "),a("code",[t._v("Counter2")]),t._v(" 是如何维护它们各自的独立性的。每个闭包都是引用自己词法作用域内的变量 "),a("code",[t._v("privateCounter")]),t._v(" 。")]),t._v(" "),a("p",[t._v("每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。")]),t._v(" "),a("p",[t._v("以这种方式使用闭包，提供了许多与面向对象编程相关的好处 —— 特别是数据隐藏和封装。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解更多闭包特性"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);