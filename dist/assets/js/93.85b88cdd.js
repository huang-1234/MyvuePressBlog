(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{603:function(v,_,t){"use strict";t.r(_);var r=t(6),n=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"lr-分析法与构造-lr-1-分析表的步骤-例题解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lr-分析法与构造-lr-1-分析表的步骤-例题解析"}},[v._v("#")]),v._v(" LR 分析法与构造 LR(1) 分析表的步骤 - 例题解析")]),v._v(" "),t("p",[v._v("直接做题是有一些特定步骤，有技巧。但也必须先了解一些基本概念，本篇会通过例题形式解释概念，会容易理解和记忆，以及解决类似问题。")]),v._v(" "),t("p",[v._v("如果只想做题可以直接下拉至习题部分。")]),v._v(" "),t("h4",{attrs:{id:"一-关于状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-关于状态"}},[v._v("#")]),v._v(" （一）关于状态")]),v._v(" "),t("p",[v._v("对于产生式 A→aBcD，就可以分解为下面几个不同的识别状态：")]),v._v(" "),t("blockquote",[t("p",[v._v("（1）A→.aBcD\n（2）A→a.BcD\n（3）A→aB.cD\n（4）A→aBc.D\n（5）A→aBcD.")])]),v._v(" "),t("p",[t("strong",[v._v("“.” 的左部符号表示已被识别出来的那部分句柄符号")])]),v._v(" "),t("p",[v._v("状态（1）表示：处于句柄的头\n状态（2）表示：已经识别出字符 a，"),t("strong",[v._v("等待")]),v._v(" 形成以 B 为产生式左部的右部\n状态（3）表示：刚刚进行了一次规约，即把关于 B 的产生式右部规约成 B\n状态（4）表示：已经识别出字符 c，"),t("strong",[v._v("等待")]),v._v(" 形成以 D 为产生式左部的右部\n状态（5）表示：已经到达句柄的尾巴，可以把 aBcD 规约为产生式左部的符号 A")]),v._v(" "),t("h4",{attrs:{id:"二-什么是-lr-k-分析法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-什么是-lr-k-分析法"}},[v._v("#")]),v._v(" （二）什么是 LR(k) 分析法？")]),v._v(" "),t("p",[v._v("字面意思理解：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("字符")]),v._v(" "),t("th",[v._v("含义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("L")]),v._v(" "),t("td",[v._v("表示 "),t("strong",[v._v("从左到右")]),v._v(" 扫描输入串")])]),v._v(" "),t("tr",[t("td",[v._v("R")]),v._v(" "),t("td",[v._v("表示利用 "),t("strong",[v._v("最右分析方法")]),v._v(" 来识别句子，即构造一个 "),t("strong",[v._v("最右推导的逆过程")])])]),v._v(" "),t("tr",[t("td",[v._v("k")]),v._v(" "),t("td",[v._v("表示向右查看输入串符号的个数")])])])]),v._v(" "),t("p",[v._v("LR 分析过程是规范归约的过程")]),v._v(" "),t("p",[v._v("规范规约是最右推导的逆过程，最右推导是规范推导，所以 "),t("strong",[v._v("最左规约是规范规约。")])]),v._v(" "),t("p",[v._v("LR 分析法根据当前分析栈中的符号串和向右顺序查看输入串的 k 个符号就可以唯一确定分析器的动作是移进还是归约、利用那个产生式进行归约。")]),v._v(" "),t("p",[v._v("当没有指明 k 是几的时候，默认为 1")]),v._v(" "),t("h4",{attrs:{id:"三-文法的拓广"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-文法的拓广"}},[v._v("#")]),v._v(" （三）文法的拓广？")]),v._v(" "),t("p",[v._v("文法的拓广是对现有文法，添加一个 S'，并对文法进行展开。")]),v._v(" "),t("p",[t("strong",[v._v("例如：")])]),v._v(" "),t("blockquote",[t("p",[v._v("对于文法 G[E]:\nE → E+T|T\nT → T*F|F\nF → i|(E)")])]),v._v(" "),t("p",[v._v("可以把它拓广为")]),v._v(" "),t("blockquote",[t("p",[v._v("文法 G[E']:\nE' → E\nE → E+T|T\nT → T*F|F\nF → i|(E)")])]),v._v(" "),t("p",[t("strong",[v._v("此时可能会有疑问，不就是加了个开始符号，有什么意义呢？为什么要再加个开始符号呢？")])]),v._v(" "),t("p",[v._v("加开始符号是为了状态的表示，这样原来的 S 会成为右部，可以表示 .S 和 S.")]),v._v(" "),t("p",[t("strong",[v._v("那同一非终结符的右部有多种情况为什么不展开呢？")])]),v._v(" "),t("p",[v._v("这里是说拓广文法，是添加开始符号，可以展开可以不展开，但是一般默认要展开，一般一道题不会只让求拓广文法，而是为了后面。一般题目中是说 “"),t("strong",[v._v("求该文法的拓广文法并编号")]),v._v("”，此时请一定要展开。展开后应该是这样：")]),v._v(" "),t("blockquote",[t("p",[v._v("1.E'→E\n2.E → E+T\n3.E → T\n4.T → T*F\n5.T → F\n6.F → i\n7.F → (E)")])]),v._v(" "),t("h4",{attrs:{id:"四-什么是项目-项目有哪些分类-等价状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-什么是项目-项目有哪些分类-等价状态"}},[v._v("#")]),v._v(" （四）什么是项目？项目有哪些分类？等价状态？")]),v._v(" "),t("p",[v._v("上面提到拓广文法，展开，以及编号。")]),v._v(" "),t("p",[t("strong",[v._v("先看例题：")])]),v._v(" "),t("blockquote",[t("p",[v._v("对于文法 G[S]:\nS → vI:T\nI → I,i\nI → i\nT → r")])]),v._v(" "),t("p",[t("strong",[v._v("可以把它拓广并编号，如下：")])]),v._v(" "),t("blockquote",[t("p",[v._v("文法 G[S']:\n1.S' → S\n2.S → vI:T\n3.I → I,i\n4.I → i\n5.T → r")])]),v._v(" "),t("p",[t("strong",[v._v("它的全部 LR(0) 项目，如下：")])]),v._v(" "),t("blockquote",[t("p",[v._v("1.S' → .S\n2.S' → S.\n3.S → .vI:T\n4.S → v.I:T\n5.S → vI.:T\n6.S → vI:.T\n7.S → vI:T.\n8.I → .I,i\n9.I → I.,i\n10.I → I,.i\n11.I → I,i.\n12.I → .i\n13.I → i.\n14.T → .r\n15.T → r.")])]),v._v(" "),t("p",[t("strong",[v._v("对上面 LR(0) 项目进行分类")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("包含")]),v._v(" "),t("th",[v._v("特点")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("规约项目")]),v._v(" "),t("td",[v._v("2, 7, 11, 13, 15")]),v._v(" "),t("td",[v._v(". 在右部的末尾")])]),v._v(" "),t("tr",[t("td",[v._v("接收项目")]),v._v(" "),t("td",[v._v("2")]),v._v(" "),t("td",[v._v(". 在开始符号的末尾")])]),v._v(" "),t("tr",[t("td",[v._v("移进项目")]),v._v(" "),t("td",[v._v("3, 5, 9, 10, 12, 14")]),v._v(" "),t("td",[v._v(". 后面跟着终结符，表移进")])]),v._v(" "),t("tr",[t("td",[v._v("待约项目")]),v._v(" "),t("td",[v._v("1, 4, 6, 8")]),v._v(" "),t("td",[v._v(". 后面跟着非终结符，表等待后面非终结符的规约，简称待约")])])])]),v._v(" "),t("p",[t("strong",[v._v("谁和谁是等价状态？")])]),v._v(" "),t("p",[t("strong",[v._v("例如：")])]),v._v(" "),t("p",[v._v("待约项目 4 即 S→v.I:T 它的含义是等待栈顶规约出 I，但尚未识别对应 I 的那些句柄的任何符号；")]),v._v(" "),t("p",[v._v("项目 8 即 I→.I,i 和项目 12 即 I→.i 的含义也是期待栈顶形成 I 的句柄，所以这三个项目的含义是一样的，即 4, 8, 12 三个状态是等价的。")]),v._v(" "),t("p",[v._v("同理：项目 6 即 S → vI:.T 和项目 14 即 T → .r 也是等价的")]),v._v(" "),t("p",[t("strong",[v._v("为什么它们是等价状态？怎么判断等价状态？")])]),v._v(" "),t("p",[v._v("上面有说因为他们表示的含义是一样的，并且会发现等价肯定涉及至少一个待约项目，以及一个 . 在最左端的移进项目。")]),v._v(" "),t("p",[v._v("这是因为，待约项目是 . 后面跟非终结符，这个 . 是在非终结符的前面；当存在该非终结符的产生式时，且 . 在最左端的时候。因为 . 在最左端，其实也是相当于在该非终结符的前面。所以是一个等价的状态。")]),v._v(" "),t("h4",{attrs:{id:"五-lr-分析表介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-lr-分析表介绍"}},[v._v("#")]),v._v(" （五）LR 分析表介绍")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("LR 分析器的关键部分是 分析表的构造。分析表有以下几种：")])])]),v._v(" "),t("p",[t("strong",[v._v("规范的 LR 分析表：")])]),v._v(" "),t("ul",[t("li",[v._v("LR(0)，能力最弱，局限性较大，但理论上最重要。")]),v._v(" "),t("li",[v._v("LR(1)，它功能最强，但代价也最大。")])]),v._v(" "),t("p",[t("strong",[v._v("简单的 LR 分析表：")])]),v._v(" "),t("ul",[t("li",[v._v("简称 SLR ，最容易实现，但功能最弱。")])]),v._v(" "),t("p",[t("strong",[v._v("向前看的 LR 分析表：")])]),v._v(" "),t("ul",[t("li",[v._v("简称 LALR，功能和代价处于前两者之间，适用于绝大多数程序语言的文法")])]),v._v(" "),t("p",[t("strong",[v._v("总结：")]),v._v(" LR(0) 功能最弱，功能弱是说当文法中产生式比较复杂，出现某些问题时，无法解决。这些问题一部分可以由 SLR 分析法解决。但还有一部分 SLR 解决不了，可以用 LR(1) 来解决。")]),v._v(" "),t("h4",{attrs:{id:"六-关于-展望"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-关于-展望"}},[v._v("#")]),v._v(" （六）关于 “"),t("strong",[v._v("展望")]),v._v("”")]),v._v(" "),t("p",[v._v("在规范归约过程中，一方面记住已移进和归约出的整个符号串，即记住 “"),t("strong",[v._v("历史")]),v._v("”，另一方面根据所用的产生式推测未来可能碰到的输入符号，即对未来进行 “"),t("strong",[v._v("展望")]),v._v("”。")]),v._v(" "),t("p",[v._v("当一串貌似句柄的符号串呈现于分析栈的顶端时，根据所记载的 “历史” 和 “展望” 材料，来确定栈顶的符号串是否构成句柄。")]),v._v(" "),t("p",[t("strong",[v._v("为了记住分析的 “历史” 和汇集 “展望” 的信息，LR 分析法这样处理：")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("将归约过程的 “历史” 和 “展望” 材料综合抽象成某些状态，存放在一个状态栈中，栈中每个状态都概括了从分析开始直到某一归约阶段的全部“历史”和“展望”材料。")])])]),v._v(" "),t("p",[t("strong",[v._v("LR(1) 分析法这样处理：")])]),v._v(" "),t("p",[v._v("首先，明白了在 LR(1) 分析法中展望是为了解决其他分析法解决不了的问题。简单的说就是，状态会出现冲突，我们不能只通过后 1 个输入串符号，直接确定选用哪个产生式，这是严重的错误。")]),v._v(" "),t("p",[v._v("所以 "),t("strong",[v._v("展望（向前搜索符）")]),v._v(" 是通过展望后面的内容，所以展望对应的终结符，应该 "),t("strong",[v._v("属于该非终结符的 FOLLOW 集（确切的说，属于 FOLLOW 集中的具体哪个个终结符，应该根据产生式的推导过程确定，通过语法树来分析，是比较直观的方法。也可以直接通过求该非终结符后的 FIRST 集来确定，但要注意是对谁求 FIRST 集，可表示为 FIRST(βa)，例题中会提到）")]),v._v("，来帮助唯一确定选择产生式。")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("拓展注：这里提到的 FOLLOW 集和 FIRST 集不是冲突的，因为我们要求的向前搜索符时 FOLLOW 集的子集，有时候不能确定，所以用 FIRST(βa)， β 表示由谁哪个非终结符推导的，这个非终结符的后面的剩余串，a 表示它上一个状态中的向前搜索符。它俩拼接起来的串，对该串求 FIRST 集。\n那么可能会有疑问，利用上一个状态？那第一个状态呢？第一个状态是固定的 S'→S,#\n其实 # 就是 S 的 FOLLOW 集中的唯一的元素，它也是开始符号的向前搜索符\n所以说 FOLLOW 集和 FIRST(βa) 是都可以求的，FIRST(βa) 是准确的向前搜索符，它是 FOLLOW 集的一部分")])])]),v._v(" "),t("p",[v._v("在 LR(1) 中，用")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("状态, 终结符")]),v._v("\n例如：S' → # （#表示开始符号FOLLOW集会提到那个符号，有的地方用 $，是一样的 ）")])]),v._v(" "),t("p",[v._v("这种形式是表式展望，终结符就是展望的后面的终结符，具体的下面例题中还会提到。")]),v._v(" "),t("h4",{attrs:{id:"七-终极例题-lr-1-分析表的构造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七-终极例题-lr-1-分析表的构造"}},[v._v("#")]),v._v(" （七）终极例题 - LR(1) 分析表的构造")]),v._v(" "),t("p",[t("strong",[v._v("给定文法 G[S]：")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("S→L=R | R\nL→*R | id\nR→L")])])]),v._v(" "),t("p",[t("strong",[v._v("回答以下问题：")])]),v._v(" "),t("p",[v._v("（1）文法的拓广并编号\n（2）LR(1) 项目集规范族所对应的识别活前缀的 DFA\n（3）构造 LR(1) 分析表")]),v._v(" "),t("p",[t("strong",[v._v("解析：")])]),v._v(" "),t("h5",{attrs:{id:"_1-文法的拓广并编号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-文法的拓广并编号"}},[v._v("#")]),v._v(" 1）文法的拓广并编号：")]),v._v(" "),t("p",[v._v("拓广文法 G[S']：")]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("（0）S'→S\n（1）S→L=R\n（2）S→R\n（3）L→*R\n（4）L→id\n（5）R→L")])])]),v._v(" "),t("h5",{attrs:{id:"_2-lr-1-项目集规范族所对应的识别活前缀的-dfa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-lr-1-项目集规范族所对应的识别活前缀的-dfa"}},[v._v("#")]),v._v(" 2）LR(1) 项目集规范族所对应的识别活前缀的 DFA*")]),v._v(" "),t("p",[v._v("这里就涉及到 “展望” 这个知识点了")]),v._v(" "),t("p",[t("strong",[v._v("向前搜索符的 FIRST 集求法：")])]),v._v(" "),t("p",[v._v("求法 FIRST(βa)")]),v._v(" "),t("ul",[t("li",[v._v("β 表示由谁哪个非终结符推导的，这个非终结符的后面的剩余串")]),v._v(" "),t("li",[v._v("a 表示它上一个状态中的向前搜索符。")])]),v._v(" "),t("p",[v._v("对于 I0 ：\n首先 S' → .S, # 这个是固定的，就是第一个状态的核心项目\n下面对 S 求向前所有符都没问题，都是 #\n到了 L→.*R，这里，求向前搜索符，使用 FIRST(βa)\n应该是求 FIRST(=R#) 所以就是 = 了")]),v._v(" "),t("p",[t("strong",[v._v("为什么是 =R#?")])]),v._v(" "),t("p",[v._v("因为 β 表示由谁哪个非终结符推导的，这里就是上面状态【S→.L=R, #】这个非终结符 L 的后面的剩余串是 =R，a 表示它上一个状态中的向前搜索符，就是 #，拼接起来就是 =R#。")]),v._v(" "),t("p",[t("img",{attrs:{src:"LR.assets/LR1Automata.png",alt:"img"}})]),v._v(" "),t("p",[v._v("（图片来源：中国大学慕课 -《编译原理》哈尔滨工业大学 陈老师）")]),v._v(" "),t("p",[t("strong",[v._v("该 DFA 有穷自动机的解释：")])]),v._v(" "),t("p",[v._v("（1）这样表示形式就是自动机，每个方框表示一个状态，从 I0 到 I13 所以共有 14 个状态。\n（2）每个状态中包含的多个项目，都是等价的。\n（3）每个项目中逗号后面的终结符或者 # 表示展望的终结符。\n（4）关于画出 DFA 的步骤：")]),v._v(" "),t("ul",[t("li",[v._v("以 I0 为例，首先对于 0 号产生式 S' → S，可知应该有 S' → .S 和 S' → S. 两个状态，因为 S' 是开始符号，展望是属于 FOLLOW 集的，展望应该是 #，可以得出 S' → .S, #")]),v._v(" "),t("li",[v._v("因为 .S 表示等待规约出 S 的状态。并且 S→L=R，所以 .S 和 .L=R 是两个等价的状态。但需要注意的是此时的 FOLLOW 集应该 S 的 FOLLOW 集，而不是 L 的，也不 R 的")]),v._v(" "),t("li",[v._v("同理，因为有 S→R，则 .S 和 .R 是两个等价的状态。")]),v._v(" "),t("li",[v._v("有了 .R，应该继续去找 R 为左部的产生式，因为有 R→L，所以 .S 和 .L 是两个等价的状态。")]),v._v(" "),t("li",[t("strong",[v._v("注意：")]),v._v(" 在找 R 的展望终结符时，"),t("strong",[v._v("展望")]),v._v(" 是通过展望后面的内容，所以展望对应的终结符，应该 "),t("strong",[v._v("属于该非终结符的 FOLLOW 集（确切的说，属于 FOLLOW 集中的具体哪个个终结符，应该根据产生式的推导过程确定，通过语法树来分析，是最直观的方法）")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"LR.assets/syntaxTree.png",alt:"img"}}),v._v("\n（图片来源：中国大学慕课 -《编译原理》哈尔滨工业大学 陈老师）")]),v._v(" "),t("p",[v._v("可以看出来 R 的展望应该有两种情况，一个是 =，一种是 #")]),v._v(" "),t("p",[t("strong",[v._v("但此时，我们通过 S → R 找到的 R，所以应该是 #")])]),v._v(" "),t("p",[v._v("不断循环通过，将 . 后移，判断下一个状态，找出等价状态，直到判断完成。")]),v._v(" "),t("h5",{attrs:{id:"_3-构造-lr-1-分析表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造-lr-1-分析表"}},[v._v("#")]),v._v(" 3）构造 LR(1) 分析表")]),v._v(" "),t("p",[v._v("根据自动机即可构造 LL(1) 分析表：")]),v._v(" "),t("p",[t("img",{attrs:{src:"LR.assets/analysisTable.png",alt:"img"}}),v._v("\n（图片来源：中国大学慕课 -《编译原理》哈尔滨工业大学 陈老师）")]),v._v(" "),t("p",[t("strong",[v._v("LL(1) 分析表解释补充：")])]),v._v(" "),t("p",[v._v("（1）内容 LL(1) 分析表 = 动作表 (ACTION) + 状态转移表(GOTO)")]),v._v(" "),t("p",[v._v("（2）"),t("strong",[v._v("动作表")]),v._v(" 中的每一个元素 ACTION[S,a] 规定了当 "),t("strong",[v._v("栈顶状态")]),v._v(" 为 S，且面临输入符号 a 时应采取的动作。根据自动机中的终结符边可判断。")]),v._v(" "),t("p",[v._v("（3）"),t("strong",[v._v("状态转换表")]),v._v(" 中的每一个元素 GOTO[S,x] 规定了当状态 S 面对文法符号位 x 时的下一个状态。根据自动机中的非终结符边可判断。")]),v._v(" "),t("p",[v._v("（4）"),t("strong",[v._v("动作表")]),v._v(" 的列对应所有终结符加上 #")]),v._v(" "),t("p",[v._v("（5）"),t("strong",[v._v("状态转换表")]),v._v(" 的列对应所有非终结符，不包括 S'，因为 S 就是开始符号，S' 是为了使 “"),t("strong",[v._v("接收状态")]),v._v("” 易于识别，所引入的。")]),v._v(" "),t("p",[v._v("（6）"),t("strong",[v._v("动作表")]),v._v(" 中例如：")]),v._v(" "),t("ul",[t("li",[v._v("ACTION[0, *] 的 "),t("strong",[v._v("S4 表示移进，入栈，就是当前状态为 0，当输入串为 *，则将状态 4 移进状态栈，将 * 移进文法符号栈")])]),v._v(" "),t("li",[v._v("ACTION[5, =] 的 "),t("strong",[v._v("r4 表示符合产生式 4，将栈顶符号 id 规约为产生式左部")])]),v._v(" "),t("li",[v._v("acc 表示接收")])]),v._v(" "),t("p",[v._v("（7）"),t("strong",[v._v("状态转换表")]),v._v(" 中例如：")]),v._v(" "),t("ul",[t("li",[v._v("GOTO[0, S] 的 "),t("strong",[v._v("数字为 1 表示转入 1 状态，置当前文法符号栈顶为 S，栈顶状态为 1")])])]),v._v(" "),t("p",[v._v("（8）"),t("strong",[v._v("构造 LL(1) 分析表的步骤，重要 ！！！：")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("确定对应行")]),v._v(" ，行就是所有状态")]),v._v(" "),t("li",[t("strong",[v._v("确定对应列")]),v._v(" ，列有两部分 ACTION 表和 GOTO 表，"),t("strong",[v._v("ACTION 表中列是所有终结符，以及 #。 GOTO 表的对是所有非终结符，不包括 S'")])]),v._v(" "),t("li",[t("strong",[v._v("!!!GOTO 表的构造：判断当前输入串，如果存在自动机的边，且边为非终结符就把状态编号填入 GOTO 表")])]),v._v(" "),t("li",[t("strong",[v._v("!!!ACTION 表的构造：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("查找该状态中是否有 . 在最后的状态，如果有先根据向前搜索符确定哪一列，再用 rn，填入表示，r 的含义是规约，n 表示的是产生式的序号；如果没有则说明没有没有 r")])]),v._v(" "),t("li",[t("strong",[v._v("判断是否存在该状态输出的边，如果存在则用 Sn 表示，S 表示移进，入栈，n 表示下一个状态的序号")])])])])]),v._v(" "),t("p",[v._v("（9）上面也更深入的了解了展望的意义，首先，"),t("strong",[v._v("展望是存在一个状态中的，终结符，对应的应该为是当前等价的状态，操作也就应该是移进。如果是自动机的边，就是说不是当前状态了，所以对应的是规约。")])]),v._v(" "),t("hr"),v._v(" "),t("h5",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[t("strong",[v._v("易错点：")])]),v._v(" "),t("ul",[t("li",[v._v("求 "),t("strong",[v._v("展望对应的终结符")]),v._v(" 是通过展望后面的内容，所以展望对应的终结符，应该 "),t("strong",[v._v("属于该非终结符的 FOLLOW 集（确切的说，属于 FOLLOW 集中的具体哪个个终结符，应该根据产生式的推导过程确定，通过语法树来分析，是最直观的方法）")])]),v._v(" "),t("li",[v._v("各教材描述可能存在差异，但思想是相同的\n"),t("ul",[t("li",[v._v("比如 $ 和 #")]),v._v(" "),t("li",[v._v("比如展望终结的表示方法，有的分开写，有的直接用或")])])])])])}),[],!1,null,null,null);_.default=n.exports}}]);