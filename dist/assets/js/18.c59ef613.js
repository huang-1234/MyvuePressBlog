(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{527:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"卡塔兰数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡塔兰数"}},[t._v("#")]),t._v(" 卡塔兰数")]),t._v(" "),a("p",[t._v("令h(0)=1,h(1)=1，卡塔兰数满足[递归]式：")]),t._v(" "),a("p",[a("strong",[t._v("h(n)= h(0)*h(n-1) + h(1)*h(n-2) + ... + h(n-1)h(0) (其中n>=2),这是n阶")]),t._v("**[递推]**"),a("strong",[t._v("关系;")])]),t._v(" "),a("p",[a("strong",[t._v("还可以化简为1阶递推关系: 如h(n)=(4n-2)/(n+1)*h(n-1)(n>1) h(0)=1")])]),t._v(" "),a("p",[t._v("该递推关系的解为：**h(n)=**"),a("strong",[t._v("C(2n,n)/(n+1)=P(2n,n)/(n+1)!=(2n)!/(n!*(n+1)!)")]),t._v(" "),a("strong",[t._v("(n=1,2,3,...)")])]),t._v(" "),a("p",[t._v("卡塔兰数列的前几项为(sequence A 0 0 0 1 0 8 in OEIS) [注： n = 0, 1, 2, 3, … n]")]),t._v(" "),a("p",[t._v("1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900, 2674440, 9694845, 35357670, 129644790, 477638700, 1767263190, 6564120420, 24466267020, 91482563640, 343059613650, 1289904147324, 4861946401452, …")]),t._v(" "),a("h3",{attrs:{id:"出栈次序问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出栈次序问题"}},[t._v("#")]),t._v(" 出栈次序问题")]),t._v(" "),a("p",[t._v("一个栈([无穷大])的进栈序列为1,2,3,..n,有多少个不同的出栈序列?")]),t._v(" "),a("h3",{attrs:{id:"关于这个问题的5种变型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于这个问题的5种变型"}},[t._v("#")]),t._v(" 关于这个问题的5种变型")]),t._v(" "),a("p",[a("strong",[t._v("(2).找零钱（找一半）")])]),t._v(" "),a("p",[t._v("有2n个人排成一行进入剧场。入场费5元。其中只有n个人有一张5元钞票，另外n人只有10元钞票，剧院无其它钞票，问有多少种方法使得只要有10元的人买票，售票处就有5元的钞票找零？")]),t._v(" "),a("p",[a("strong",[t._v("(3).三角网格")])]),t._v(" "),a("p",[t._v("形如这样的直角三角形网格，从左上角开始，只能向右走和向下走，问总共有多少种走法？")]),t._v(" "),a("p",[a("strong",[t._v("4).括号排列")])]),t._v(" "),a("p",[t._v("矩阵连乘：")]),t._v(" "),a("p",[a("img",{attrs:{src:"kataer.assets/66805a78efb4dd54c1bcae93843bafea.svg",alt:"img"}})]),t._v(" "),a("p",[t._v("，共有（n+1）项，依据[乘法结合律]，不改变其顺序，只用括号表示成对的乘积，试问有几种括号化的方案？或者说：有n对括号，可以并列或嵌套排列，共有多少种情况？")]),t._v(" "),a("p",[a("strong",[t._v("(5).球盒问题")])]),t._v(" "),a("p",[t._v("球分两种颜色，黑色和白色分别各有n只，盒子数量和球的个数相同，每个盒子里面只能放一只球，并且必须满足如下限制,即每一个白球必须和一只黑球配对（白球在黑球前，"),a("strong",[t._v("允许嵌套")]),t._v("）。")]),t._v(" "),a("p",[t._v("例.用0表示白球，1表示黑球，则：")]),t._v(" "),a("p",[t._v("0011，010101，001011合法。")]),t._v(" "),a("p",[t._v("1100，101010，010110不合法。")]),t._v(" "),a("p",[a("strong",[t._v("(6).最适合理解的模型")])]),t._v(" "),a("p",[t._v("n个0和n个1组成一个2n位的2进制数，要求从左到右扫描时，1的累计数始终都"),a("strong",[t._v("小于等于")]),t._v("0的累计数，求满足条件的数有多少？")]),t._v(" "),a("h3",{attrs:{id:"理解方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解方式"}},[t._v("#")]),t._v(" 理解方式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("模型")]),t._v(" "),a("th",[t._v("事件1")]),t._v(" "),a("th",[t._v("事件2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(1)")]),t._v(" "),a("td",[t._v("入栈")]),t._v(" "),a("td",[t._v("出栈")])]),t._v(" "),a("tr",[a("td",[t._v("(2)")]),t._v(" "),a("td",[t._v("用5元支付")]),t._v(" "),a("td",[t._v("用10元支付")])]),t._v(" "),a("tr",[a("td",[t._v("(3)")]),t._v(" "),a("td",[t._v("向下走")]),t._v(" "),a("td",[t._v("向右走")])]),t._v(" "),a("tr",[a("td",[t._v("(4)")]),t._v(" "),a("td",[t._v("左括号")]),t._v(" "),a("td",[t._v("右括号")])]),t._v(" "),a("tr",[a("td",[t._v("(5)")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("(6)")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[t._v("注："),a("strong",[t._v("同列")]),t._v("事件可视为"),a("strong",[t._v("等价")]),t._v("，且在题目要求中"),a("strong",[t._v("事件1")]),t._v("的"),a("strong",[t._v("次数/大小")]),t._v("需要"),a("strong",[t._v("始终大于事件2")]),t._v("。")]),t._v(" "),a("p",[t._v("观察模型 (6)：在2n位上填入n个0的方案数为")]),t._v(" "),a("p",[t._v("。而从")]),t._v(" "),a("p",[t._v("中减去不符合要求的方案数即为所求答案。")]),t._v(" "),a("p",[t._v("在从左往右扫时，必然会在某一个奇数位2p+1上首先出现p+1个1，和p个0")]),t._v(" "),a("p",[t._v("此后的 [2p+2,2n]上的2n−(2p+1)位有n−p个0, n−p−1个1。如若把后面这部分2n−(2p+1)位的1与0互换，使之成为n−p个1，n−p−1个0，结果得1个由n+1个1和n−1个0组成的2n位数，"),a("strong",[t._v("即一个不合法的方案必定对应着一个由n+1个1和n-1个0组成的一个排列")]),t._v("。")]),t._v(" "),a("p",[t._v("可以倒过来反证：")]),t._v(" "),a("p",[t._v("任意一个由n+1个1和n-1个0组成的一个排列，由于1的个数多了2个，且2n为偶数，所以必定在某个奇数位2p+1上出现1的个数超过0的个数。同样把后面部分1和0互换，成为了由n个0和n个1组成的2n位数。")]),t._v(" "),a("p",[t._v("由此，每一个不合法的方案总是与"),a("strong",[t._v("唯一一个")]),t._v("由n+1个1和n−1个0组成的排列一一对应。")]),t._v(" "),a("p",[t._v("于是，不合法的方案数就可以写作：")]),t._v(" "),a("p",[t._v("例如 10100101")]),t._v(" "),a("p",[t._v("是由4个0和4个1组成的8位2[进制]数。但从左而右扫描在第5位（显示为红色）出现0的累计数3超过1的累计数2，它对应于由3个1，5个0组成的10100010。")]),t._v(" "),a("p",[t._v("反过来 10100010")]),t._v(" "),a("p",[t._v("对应于 10100101")]),t._v(" "),a("p",[t._v("因而不合要求的2n位数与n+1个0，n－1个1组成的排列一一对应，故有“卡塔兰数”Catalan")]),t._v(" "),a("h3",{attrs:{id:"类似题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类似题目"}},[t._v("#")]),t._v(" 类似题目")]),t._v(" "),a("p",[t._v("(1).将多边行划分为三角形问题。将一个[凸多边形]区域分成三角形区域的方法数?")]),t._v(" "),a("p",[t._v("(2).有N个节点的二叉树共有多少种情形？")]),t._v(" "),a("p",[t._v("(3).一位大城市的律师在她住所以北n个街区和以东n个街区处工作。每天她走2n个街区去上班。如果他")]),t._v(" "),a("p",[t._v("从不穿越（但可以碰到）从家到办公室的对角线，那么有多少条可能的道路？")]),t._v(" "),a("p",[t._v("(4).在[圆上]选择2n个点,将这些点成对连接起来使得所得到的n条线段不相交的方法数?")]),t._v(" "),a("p",[t._v("(5).与之相关的还有如NOIP2003 栈等题目。")]),t._v(" "),a("h3",{attrs:{id:"简单代码实现-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单代码实现-python"}},[t._v("#")]),t._v(" 简单代码实现(python)")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numTrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#初始化一个数组，并将首个元素初始化为1")]),t._v("\n        s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开始循环遍历")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为节约内存，首先算出i-1的值")]),t._v("\n            b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为节约内存，只遍历一半，并将这个结果乘以2即可")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#当i为奇数时，还要将s[i//2]的值加上")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#返回数组最后一个元素")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"不同的二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同的二叉树"}},[t._v("#")]),t._v(" 不同的二叉树")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * @lc app=leetcode.cn id=96 lang=javascript\n *\n * [96] 不同的二叉搜索树\n */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @lc code=start")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} n\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("numTrees")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("事实上我们在方法一中推导出的 G(n)"),a("em",[t._v("G")]),t._v("("),a("em",[t._v("n")]),t._v(")函数的值在数学上被称为"),a("a",{attrs:{href:"https://baike.baidu.com/item/catalan/7605685?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("卡塔兰数"),a("OutboundLink")],1),t._v(" C_n"),a("em",[t._v("C**n")]),t._v("。卡塔兰数更便于计算的定义如下:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2n")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("编码实现")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("numTrees")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);