(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{409:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_3-setstate-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-setstate-hooks"}},[t._v("#")]),t._v(" 3. setState Hooks")]),t._v(" "),s("h3",{attrs:{id:"setstate更新状态的2种写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate更新状态的2种写法"}},[t._v("#")]),t._v(" setState更新状态的2种写法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t(1). setState(stateChange, [callback])------对象式的setState\n            1.stateChange为状态改变对象(该对象可以体现出状态的更改)\n            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用\n\t\t\t\t\t\n\t(2). setState(updater, [callback])------函数式的setState\n            1.updater为返回stateChange对象的函数。\n            2.updater可以接收到state和props。\n            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。\n总结:\n\t\t1.对象式的setState是函数式的setState的简写方式(语法糖)\n\t\t2.使用原则：\n\t\t\t\t(1).如果新状态不依赖于原状态 ===> 使用对象方式\n\t\t\t\t(2).如果新状态依赖于原状态 ===> 使用函数方式\n\t\t\t\t(3).如果需要在setState()执行后获取最新的状态数据, \n\t\t\t\t\t要在第二个callback函数中读取\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_2-lazyload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-lazyload"}},[t._v("#")]),t._v(" 2. lazyLoad")]),t._v(" "),s("h3",{attrs:{id:"路由组件的lazyload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由组件的lazyload"}},[t._v("#")]),t._v(" 路由组件的lazyLoad")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Login "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lazy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/pages/Login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Suspense fallback"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("loading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Switch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Route path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/xxx"')]),t._v(" component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Xxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Redirect to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Switch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Suspense"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_3-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-hooks"}},[t._v("#")]),t._v(" 3. Hooks")]),t._v(" "),s("h4",{attrs:{id:"_1-react-hook-hooks是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-react-hook-hooks是什么"}},[t._v("#")]),t._v(" 1. React Hook/Hooks是什么?")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(1). Hook是React 16.8.0版本增加的新特性/新语法\n(2). 可以让你在函数组件中使用 state 以及其他的 React 特性\n")])])]),s("h4",{attrs:{id:"_2-三个常用的hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-三个常用的hook"}},[t._v("#")]),t._v(" 2. 三个常用的Hook")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(1). State Hook: React.useState()\n(2). Effect Hook: React.useEffect()\n(3). Ref Hook: React.useRef()\n")])])]),s("h4",{attrs:{id:"_3-state-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-state-hook"}},[t._v("#")]),t._v(" 3. State Hook")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作\n(2). 语法: const [xxx, setXxx] = React.useState(initValue)  \n(3). useState()说明:\n        参数: 第一次初始化指定的值在内部作缓存\n        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数\n(4). setXxx()2种写法:\n        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值\n        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值\n")])])]),s("h4",{attrs:{id:"_4-effect-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-effect-hook"}},[t._v("#")]),t._v(" 4. Effect Hook")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)\n(2). React中的副作用操作:\n        发ajax请求数据获取\n        设置订阅 / 启动定时器\n        手动更改真实DOM\n(3). 语法和说明: \n        useEffect(() => { \n          // 在此可以执行任何带副作用操作\n          return () => { // 在组件卸载前执行\n            // 在此做一些收尾工作, 比如清除定时器/取消订阅等\n          }\n        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行\n    \n(4). 可以把 useEffect Hook 看做如下三个函数的组合\n        componentDidMount()\n        componentDidUpdate()\n    \tcomponentWillUnmount() \n")])])]),s("h4",{attrs:{id:"_5-ref-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-ref-hook"}},[t._v("#")]),t._v(" 5. Ref Hook")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据\n(2). 语法: const refContainer = useRef()\n(3). 作用:保存标签对象,功能与React.createRef()一样\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_4-fragment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-fragment"}},[t._v("#")]),t._v(" 4. Fragment")]),t._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("<Fragment><Fragment>\n<></>\n")])])]),s("h3",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("blockquote",[s("p",[t._v("可以不用必须有一个真实的DOM根标签了")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_5-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-context"}},[t._v("#")]),t._v(" 5. Context")]),t._v(" "),s("h3",{attrs:{id:"理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[t._v("#")]),t._v(" 理解")]),t._v(" "),s("blockquote",[s("p",[t._v("一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信")])]),t._v(" "),s("h3",{attrs:{id:"使用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 创建Context容器对象：\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" XxxContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\t\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 渲染子组时，外面包裹xxxContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 通过value属性给后代组件传递数据：\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("xxxContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("数据"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t子组件\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 后代组件读取数据：\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一种方式:仅适用于类组件 ")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" contextType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxxContext  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明接收context")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取context中的value数据")]),t._v("\n\t  \n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二种方式: 函数组件与类组件都可以")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("xxxContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value就是context中的value数据")]),t._v("\n\t        要显示的内容\n\t      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("在应用开发中一般不用context, 一般都它的封装react插件\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_6-组件优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-组件优化"}},[t._v("#")]),t._v(" 6. 组件优化")]),t._v(" "),s("h3",{attrs:{id:"component的2个问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component的2个问题"}},[t._v("#")]),t._v(" Component的2个问题")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[t._v("只要执行setState(),即使不改变状态数据, 组件也会重新render()")])]),t._v(" "),s("li",[s("p",[t._v("只当前组件重新render(), 就会自动重新render子组件 ==> 效率低")])])])]),t._v(" "),s("h3",{attrs:{id:"效率高的做法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效率高的做法"}},[t._v("#")]),t._v(" 效率高的做法")]),t._v(" "),s("blockquote",[s("p",[t._v("只有当组件的state或props数据发生改变时才重新render()")])]),t._v(" "),s("h3",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),s("blockquote",[s("p",[t._v("Component中的shouldComponentUpdate()总是返回true")])]),t._v(" "),s("h3",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("办法1: \n\t重写shouldComponentUpdate()方法\n\t比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false\n办法2:  \n\t使用PureComponent\n\tPureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true\n\t注意: \n\t\t只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  \n\t\t不要直接修改state数据, 而是要产生新数据\n项目中一般使用PureComponent来优化\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_7-render-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-render-props"}},[t._v("#")]),t._v(" 7. render props")]),t._v(" "),s("h3",{attrs:{id:"如何向组件内部动态传入带内容的结构-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何向组件内部动态传入带内容的结构-标签"}},[t._v("#")]),t._v(" 如何向组件内部动态传入带内容的结构(标签)?")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Vue中: \n\t使用slot技术, 也就是通过组件标签体传入结构  <AA><BB/></AA>\nReact中:\n\t使用children props: 通过组件标签体传入结构\n\t使用render props: 通过组件标签属性传入结构, 一般用render函数属性\n")])])]),s("h3",{attrs:{id:"children-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#children-props"}},[t._v("#")]),t._v(" children props")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("<A>\n  <B>xxxx</B>\n</A>\n{this.props.children}\n问题: 如果B组件需要A组件内的数据, ==> 做不到 \n")])])]),s("h3",{attrs:{id:"render-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render-props"}},[t._v("#")]),t._v(" render props")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("<A render={(data) => <C data={data}></C>}></A>\nA组件: {this.props.render(内部state数据)}\nC组件: 读取A组件传入的数据显示 {this.props.data} \n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"_8-错误边界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-错误边界"}},[t._v("#")]),t._v(" 8. 错误边界")]),t._v(" "),s("h4",{attrs:{id:"理解-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解-2"}},[t._v("#")]),t._v(" 理解：")]),t._v(" "),s("p",[t._v("错误边界：用来捕获后代组件错误，渲染出备用页面")]),t._v(" "),s("h4",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点：")]),t._v(" "),s("p",[t._v("只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误")]),t._v(" "),s("h5",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式：")]),t._v(" "),s("p",[t._v("getDerivedStateFromError配合componentDidCatch")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期函数，一旦后台组件报错，就会触发")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDerivedStateFromError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在render之前触发")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回新的state")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        hasError"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidCatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 统计页面的错误。发送请求发送到后台去")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_9-组件通信方式总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-组件通信方式总结"}},[t._v("#")]),t._v(" 9. 组件通信方式总结")]),t._v(" "),s("h4",{attrs:{id:"方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式"}},[t._v("#")]),t._v(" 方式：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tprops：\n\t\t(1).children props\n\t\t(2).render props\n\t消息订阅-发布：\n\t\tpubs-sub、event等等\n\t集中式管理：\n\t\tredux、dva等等\n\tconText:\n\t\t生产者-消费者模式\n")])])]),s("h4",{attrs:{id:"组件间的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件间的关系"}},[t._v("#")]),t._v(" 组件间的关系")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t父子组件：props\n\t兄弟组件(非嵌套组件)：消息订阅-发布、集中式管理\n\t祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(用的少)\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);