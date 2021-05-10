(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{582:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"c-字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-字符串"}},[t._v("#")]),t._v(" C++ 字符串")]),t._v(" "),a("p",[t._v("C++ 提供了以下两种类型的字符串表示形式：")]),t._v(" "),a("ul",[a("li",[t._v("C 风格字符串")]),t._v(" "),a("li",[t._v("C++ 引入的 string 类类型")])]),t._v(" "),a("h2",{attrs:{id:"c-风格字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-风格字符串"}},[t._v("#")]),t._v(" C 风格字符串")]),t._v(" "),a("p",[t._v("C 风格的字符串起源于 C 语言，并在 C++ 中继续得到支持。字符串实际上是使用 "),a("strong",[t._v("null")]),t._v(" 字符 "),a("strong",[t._v("\\0")]),t._v(" 终止的一维字符数组。因此，一个以 null 结尾的字符串，包含了组成字符串的字符。")]),t._v(" "),a("p",[t._v("C++ 中有大量的函数用来操作以 null 结尾的字符串:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("序号")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("函数 & 目的")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("strcpy(s1, s2);")]),t._v(" 复制字符串 s2 到字符串 s1。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("strcat(s1, s2);")]),t._v(" 连接字符串 s2 到字符串 s1 的末尾。连接字符串也可以用 "),a("strong",[t._v("+")]),t._v(" 号，例如: "),a("code",[t._v('string str1 = "runoob"; string str2 = "google"; string str = str1 + str2;')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("strlen(s1);")]),t._v(" 返回字符串 s1 的长度。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("strcmp(s1, s2);")]),t._v(" 如果 s1 和 s2 是相同的，则返回 0；如果 s1<s2 则返回值小于 0；如果 s1>s2 则返回值大于 0。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("strchr(s1, ch);")]),t._v(" 返回一个指针，指向字符串 s1 中字符 ch 的第一次出现的位置。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("strstr(s1, s2);")]),t._v(" 返回一个指针，指向字符串 s1 中字符串 s2 的第一次出现的位置。")])])])]),t._v(" "),a("p",[t._v("下面的实例使用了上述的一些函数：")]),t._v(" "),a("h2",{attrs:{id:"cstring-字符串函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cstring-字符串函数"}},[t._v("#")]),t._v(" "),a("code",[t._v("<cstring>")]),t._v("字符串函数")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #include <string>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cstring>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"huangshuiqing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"google"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strlen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strlen:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strlen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcpy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strcat(str1,str2):"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strlen(str1):"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strlen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当上面的代码被编译和执行时，它会产生下列结果：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("strcpy( str3, str1) : runoob\nstrcat( str1, str2): runoobgoogle\nstrlen(str1) : 12\n")])])]),a("h2",{attrs:{id:"c-中的-string-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-中的-string-类"}},[t._v("#")]),t._v(" C++ 中的 String 类")]),t._v(" "),a("p",[t._v("C++ 标准库提供了 "),a("strong",[t._v("string")]),t._v(" 类类型，支持上述所有的操作，另外还增加了其他更多的功能。我们将学习 C++ 标准库中的这个类，现在让我们先来看看下面这个实例：")]),t._v(" "),a("p",[t._v("现在您可能还无法透彻地理解这个实例，因为到目前为止我们还没有讨论类和对象。所以现在您可以只是粗略地看下这个实例，等理解了面向对象的概念之后再回头来理解这个实例。")]),t._v(" "),a("h2",{attrs:{id:"string类的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string类的方法"}},[t._v("#")]),t._v(" String类的方法")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<string>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    string str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"huangshuiqing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    string str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"google"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    string str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复制 str1 到 str3")]),t._v("\n    str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str3 : "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接 str1 和 str2")]),t._v("\n    str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str1 + str2 : "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接后，str3 的总长度")]),t._v("\n    len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str3.size() :  "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//str3 : huangshuiqing")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//str1 + str2 : huangshuiqinggoogle")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//str3.size() :  19")]),t._v("\n")])])]),a("p",[t._v("当上面的代码被编译和执行时，它会产生下列结果：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("str3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runoob\nstr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" str2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" runoobgoogle\nstr3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);