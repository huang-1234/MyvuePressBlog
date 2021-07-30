(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{750:function(t,e,a){"use strict";a.r(e);var s=a(6),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),a("p",[t._v("除了标准的算术运算符（+， - ，* /），JavaScript还提供了下表中的算术运算符。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Operator")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("求余("),a("code",[t._v("%")]),t._v(")")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("二元运算符. 返回相除之后的余数.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("12 % 5 返回 2。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("自增("),a("code",[t._v("++")]),t._v(")")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一元运算符. 将操作数的值加一. 如果放在操作数前面 ("),a("code",[t._v("++x")]),t._v("), 则返回加一后的值; 如果放在操作数后面 ("),a("code",[t._v("x++")]),t._v("), 则返回操作数原值,然后再将操作数加一.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("var x=3;``console.log(++x); //4``console.log(x); //4``var y=3;``console.log(y++); //3``console.log(y); //4")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("自减("),a("code",[t._v("--")]),t._v(")")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一元运算符. 将操作数的值减一. 前后缀两种用法的返回值类似自增运算符.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("var x=3; console.log(--x); //输入2,x=2var y=3;console.log(y--);//输出3,x=2;")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("一元负值符("),a("code",[t._v("-")]),t._v(")")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一元运算符,返回操作数的负值.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("var x=3; console.log(-x); //输入-3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("一元正值符(+)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一元运算符, 如果操作数在之前不是number，试图将其转换为number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("console.log( +'3' ); // 3``console.log( '3' ); // '3'")]),t._v("console.log(+true); // 1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("指数运算符(**)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("计算 "),a("code",[t._v("base(底数)")]),t._v(" 的 "),a("code",[t._v("exponent(")]),t._v("指数"),a("code",[t._v(")次方")]),t._v(", 表示为"),a("code",[t._v("baseexponent")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("2 ** 3")]),t._v(" returns "),a("code",[t._v("8")]),t._v(". "),a("code",[t._v("10 ** -1")]),t._v(" returns "),a("code",[t._v("0.1")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h3",{attrs:{id:"位运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算符"}},[t._v("#")]),t._v(" 位运算符")]),t._v(" "),a("p",[t._v("位运算符将它的操作数视为32位元的二进制串（0和1组成）而非十进制八进制或十六进制数。例如：十进制数字9用二进制表示为1001，位运算符就是在这个二进制表示上执行运算，但是返回结果是标准的JavaScript数值。")]),t._v(" "),a("p",[t._v("下表总结了 JavaScript 的位运算符。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Operator")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Usage")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("按位与[ AND]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a & b")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在a,b的位表示中，每一个对应的位都为1则返回1， 否则返回0.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("按位或[ OR]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a | b")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在a,b的位表示中，每一个对应的位，只要有一个为1则返回1， 否则返回0.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("按位异或[ XOR]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a ^ b")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在a,b的位表示中，每一个对应的位，两个不相同则返回1，相同则返回0.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("按位非[ NOT]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("~ a")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("反转被操作数的位。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("左移[ shift]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a << b")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将a的二进制串向左移动b位,右边移入0.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("算术右移")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a >> b")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("把a的二进制表示向右移动b位，丢弃被移出的所有位.(译注:算术右移左边空出的位是根据最高位是0和1来进行填充的)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("无符号右移(左边空出位用0填充)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("a >>> b")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("把a的二进制表示向右移动b位，丢弃被移出的所有位，并把左边空出的位都填充为0")])])])]),t._v(" "),a("h4",{attrs:{id:"位逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位逻辑运算符"}},[t._v("#")]),t._v(" 位逻辑运算符")]),t._v(" "),a("p",[t._v("概念上来讲, 位逻辑运算符工作流程如下:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("操作数被转换为32bit整數，以位序列（0和1组成）表示.若超過32bits，則取低位32bit，如下所示：")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Before: 11100110111110100000000000000110000000000001 After: 10100000000000000110000000000001")])])]),t._v(" "),a("li",[a("p",[t._v("第一个操作数的每一位都与第二个操作数的对应位组对: 第一位对应第一位,第二位对应第二位,以此类推.")])]),t._v(" "),a("li",[a("p",[t._v('运算符被应用到每一对"位"上, 最终的运算结果由每一对“位”的运算结果组合起来.')])])]),t._v(" "),a("p",[t._v("例如,十进制数9的二进制表示是1001,十进制数15的二进制表示是1111.因此,当位运算符应用到这两个值时,结果如下:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("表达式")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("结果")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("二进制描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("15 & 9")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("9")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("1111 & 1001 = 1001")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("15 | 9")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("15")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("1111 | 1001 = 1111")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("15 ^ 9")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("6")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("1111 ^ 1001 = 0110")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("~15")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-16")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("~``00000000...``00001111 = ``1111``1111``...``11110000")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("~9")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("-10")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("~``00000000``...``0000``1001 = ``1111``1111``...``1111``0110")])])])])]),t._v(" "),a("p",[t._v("注意位运算符“非”将所有的32位取反，而值的最高位(最左边的一位)为1则表示负数(2-补码表示法)。")]),t._v(" "),a("h4",{attrs:{id:"移位运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移位运算符"}},[t._v("#")]),t._v(" 移位运算符")]),t._v(" "),a("p",[t._v("移位运算符带两个操作数：第一个是待移位的数，第二个是指定第一个数要被移多少位的数。移位的方向由运算符来控制.")]),t._v(" "),a("p",[t._v("移位运算符把操作数转为32bit整数，然后得出一个与待移位数相同种类的值。")]),t._v(" "),a("p",[t._v("移位运算符列表如下。")]),t._v(" "),a("p",[a("strong",[t._v("移位运算符")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("运算符")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("范例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("<<")]),t._v(" (左移位)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将第一个操作数向左移动指定数量的位. 左边移出位被抛弃. 左边移出的几位被丢弃.右边多出的空位由0补齐")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("9<<2产生36，因为1001移位2比特向左变为100100，它是36。")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(">>")]),t._v(" (带符号右移)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将第一个操作数向右移动指定数量的位. 右边移出位被抛弃. 左边多出的空位由原值的最左边数字补齐.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("9>>2产生2，因为1001移位2位向右变为10，其是2。同样，-9>>2产生-3，由于符号被保留。")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v(">>>")]),t._v(" (补零右移)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将第一个操作数向右移动指定数量的位. 右边移出位被抛弃. 左边多出的空位由0补齐.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("19>>>2")]),t._v("产生4，因为10011移位2位向右变为100，它是4。对非负数值，补零右移和带符号右移产生相同结果。")])])])]),t._v(" "),a("h3",{attrs:{id:"逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("逻辑运算符"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("逻辑运算符常用于布尔（逻辑）值之间; 当操作数都是布尔值时，返回值也是布尔值。 不过实际上"),a("code",[t._v("&&")]),t._v("和"),a("code",[t._v("||")]),t._v("返回的是一个特定的操作数的值，所以当它用于非布尔值的时候，返回值就可能是非布尔值。 逻辑运算符的描述如下。")]),t._v(" "),a("p",[a("strong",[t._v("逻辑运算符")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("运算符")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("范例")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑与"),a("code",[t._v("&&")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("expr1 && expr2")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(逻辑与) 如果expr1能被转换为false，那么返回expr1；否则，返回"),a("code",[t._v("expr2")]),t._v("。因此"),a("code",[t._v("，&&")]),t._v("用于布尔值时，当操作数都为true时返回true；否则返回false.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑或 "),a("code",[t._v("||")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("expr1 || expr2")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(逻辑或) 如果expr1能被转换为true，那么返回expr1；否则，返回"),a("code",[t._v("expr2")]),t._v("。因此，||用于布尔值时，当任何一个操作数为true则返回true；如果操作数都是false则返回false。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑非"),a("code",[t._v("(!)")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("!expr")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(逻辑非) 如果操作数能够转换为true则返回false；否则返回true。能被转换为"),a("code",[t._v("false")]),t._v("的值有"),a("code",[t._v("null")]),t._v(", "),a("code",[t._v("0")]),t._v(", "),a("code",[t._v("NaN")]),t._v(', 空字符串("")和'),a("code",[t._v("undefined")]),t._v("。（译者注：也可以称作”falsy“）")])])])]),t._v(" "),a("p",[t._v('下面是&&（逻辑"与"）操作符的示例。')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t && t returns true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t && f returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f && t returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f && f returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cat"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t && t returns Dog")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f && t returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a7 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cat"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t && f returns false")]),t._v("\n")])])]),a("p",[t._v("Copy to Clipboard")]),t._v(" "),a("p",[t._v('下面是||（逻辑"或"）操作符的示例。')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t || t returns true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f || t returns true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t || f returns true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f || f returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cat"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t || t returns Cat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f || t returns Cat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o7 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cat"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// t || f returns Cat")]),t._v("\n")])])]),a("p",[t._v("Copy to Clipboard")]),t._v(" "),a("p",[t._v('下面是！（逻辑"非"）操作符的示例。')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !t returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !f returns true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !t returns false")]),t._v("\n")])])]),a("p",[t._v("Copy to Clipboard")]),t._v(" "),a("h4",{attrs:{id:"短路求值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短路求值"}},[t._v("#")]),t._v(" 短路求值")]),t._v(" "),a("p",[t._v("作为逻辑表达式进行求值是从左到右，它们是为可能的“短路”的出现而使用以下规则进行测试：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("false")]),t._v(" && "),a("em",[t._v("anything")]),t._v("  // 被短路求值为false")]),t._v(" "),a("li",[a("code",[t._v("true")]),t._v(" || "),a("em",[t._v("anything")]),t._v("    // 被短路求值为true")])]),t._v(" "),a("p",[t._v("逻辑的规则，保证这些评估是总是正确的。请注意，上述表达式的"),a("code",[t._v("anything")]),t._v("部分不会被求值，所以这样做不会产生任何副作用。")]),t._v(" "),a("h3",{attrs:{id:"字符串运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串运算符"}},[t._v("#")]),t._v(" 字符串运算符")]),t._v(" "),a("p",[t._v("除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。")])])}),[],!1,null,null,null);e.default=v.exports}}]);