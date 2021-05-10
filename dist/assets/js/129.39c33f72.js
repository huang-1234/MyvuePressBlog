(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{634:function(e,n,a){"use strict";a.r(n);var t=a(6),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"利用object-keys遍历-foreach-map-对象数组-合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用object-keys遍历-foreach-map-对象数组-合并"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000014497376",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用Object.keys遍历(forEach/map)对象数组，合并"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("js中几种遍历对象的方法，包括for..of、for..in、Object.keys、Object.getOwnProperty,它们在使用场景方面各有不同。")]),e._v(" "),a("p",[e._v("js对象的属性中可直接用、可访问到的属性分为数据属性和访问器属性。")]),e._v(" "),a("h2",{attrs:{id:"数据属性-实际存储属性值的属性-的四大特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据属性-实际存储属性值的属性-的四大特性"}},[e._v("#")]),e._v(" 数据属性（实际存储属性值的属性）的四大特性：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{    \n    value: 属性值,    \n    writable: true/false,  //控制是否可修改    \n    enumerable: true/false, //控制是否可被for in遍历    \n    configurable: true/false, //1. 控制是否可删除 2. 控制是否可修改前两个特性  3.一旦改为false不可逆                                                       \n}\n")])])]),a("h2",{attrs:{id:"访问器属性-不实际存储数据-专门提供对其它数据-变量的保护-的四大特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问器属性-不实际存储数据-专门提供对其它数据-变量的保护-的四大特性"}},[e._v("#")]),e._v(" 访问器属性（不实际存储数据，专门提供对其它数据/变量的保护）的四大特性：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n    get:function(){return this.隐藏属性;},\n    set:function(val){\n        //如果val符合条件\n            this.隐藏属性=val\n        //否则\n            报错\n    },\n    enumerable, configurable\n}\n")])])]),a("h2",{attrs:{id:"for-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-in"}},[e._v("#")]),e._v(" for..in")]),e._v(" "),a("p",[e._v("返回的是所有能够通过对象访问的、可枚举的属性，既包括存在于实例中的属性，也包括存在于原型中的实例,不能保证属性按对象原来的顺序输出。（可枚举-自身-原型）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var obj = {a:1, b:2, c:3};\n    \nfor (var prop in obj) {\n  console.log("obj." + prop + " = " + obj[prop]);\n}\n// Output:\n// "obj.a = 1"\n// "obj.b = 2"\n// "obj.c = 3"\n')])])]),a("h2",{attrs:{id:"object-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-keys"}},[e._v("#")]),e._v(" Object.keys")]),e._v(" "),a("p",[e._v("用于获取对象自身所有的可枚举的属性值，但不包括原型中的属性，然后返回一个由属性名组成的数组。注意它同for..in一样不能保证属性按对象原来的顺序输出。（可枚举-自身）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 数组\nvar arr = ['a', 'b', 'c'];\nconsole.log(Object.keys(arr)); // console: ['0', '1', '2']\n\n// 类数组对象\nvar obj = { 0: 'a', 1: 'b', 2: 'c' };\nconsole.log(Object.keys(obj)); // console: ['0', '1', '2']\n\n// 类数组对象-随机下标\nvar anObj = { 100: 'a', 2: 'b', 7: 'c' };\nconsole.log(Object.keys(anObj)); // console: ['2', '7', '100']\n\n// 不可枚举属性getFoo\nvar myObj = Object.create({}, {\n  getFoo: {\n    value: function () { return this.foo; }\n  } \n});\nmyObj.foo = 1;\nconsole.log(Object.keys(myObj)); // console: ['foo']\n")])])]),a("h2",{attrs:{id:"object-getownproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-getownproperty"}},[e._v("#")]),e._v(" Object.getOwnProperty")]),e._v(" "),a("p",[e._v("如果你想获取一个对象的所有属性，甚至包括不可枚举的，则可用该方法。其返回对象的所有自身属性的属性名组成的数组，但不会获取原型链上的属性。（可枚举&不可枚举-自身）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//获取不可枚举属性\nvar my_obj = Object.create({}, {\n  getFoo: {\n    value: function() { return this.foo; },\n    enumerable: false\n  }\n});\nmy_obj.foo = 1;\n\nconsole.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]\n')])])]),a("p",[e._v("下面的例子演示了该方法不会获取到原型链上的属性：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function ParentClass() {}\nParentClass.prototype.inheritedMethod = function() {};\n\nfunction ChildClass() {\n  this.prop = 5;\n  this.method = function() {};\n}\n\nChildClass.prototype = new ParentClass;\nChildClass.prototype.prototypeMethod = function() {};\n\nconsole.log(\n  Object.getOwnPropertyNames(\n    new ChildClass()  // ["prop", "method"]\n  )\n);\n')])])]),a("h2",{attrs:{id:"for-of"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-of"}},[e._v("#")]),e._v(" for..of")]),e._v(" "),a("p",[e._v("es6新增方法，主要来遍历可迭代的对象（包括Array, Map, Set, arguments等），它主要用来获取对象value值，而for..in主要获取对象key值。\n另外：可以由break, continue, throw 或return终止。在这些情况下，迭代器关闭。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let iterable = [10, 20, 30];\nfor (let value of iterable) {\n    value += 1;\n    console.log(value);\n}\n// 11\n// 21\n// 31\n")])])]),a("p",[e._v("与for..in循环之间的区别：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Object.prototype.objCustom = function() {}; \nArray.prototype.arrCustom = function() {};\n\nlet iterable = [3, 5, 7];\niterable.foo = \'hello\';\n\nfor (let i in iterable) {\n  console.log(i); //  0, 1, 2, "foo", "arrCustom", "objCustom"\n}\n\nfor (let i in iterable) {\n  if (iterable.hasOwnProperty(i)) {\n    console.log(i); //  0, 1, 2, "foo"\n  }\n}\n\nfor (let i of iterable) {\n  console.log(i); //  3, 5, 7\n}\n')])])]),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),a("p",[e._v("其实这几个方法之间的差异主要在属性是否可可枚举，是来自原型，还是实例。")]),e._v(" "),a("h2",{attrs:{id:"开发中的实际应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发中的实际应用"}},[e._v("#")]),e._v(" 开发中的实际应用")]),e._v(" "),a("p",[e._v("需求：将如下两个从后台不同端口获取的json对象数组整合处理成如下注释部分的json对象")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('var goodsSpecJSON = [{\n                "SpecA": "颜色"\n            }, {\n                "SpecB": "容量"\n            }, {\n                "SpecC": "大小"\n            }, {\n                "SpecD": "尺寸"\n            }, {\n                "SpecE": "套餐"\n            }];\nvar goodsSpecList = [{\n    c_id: 3133,\n    costPrice: 0,\n    discountPrice: 0,\n    earn: 0,\n    etime: null,\n    flag: 0,\n    goodsDetailCount: 199,\n    goodsDetailId: "100PgQ2xy08121409mY27",\n    goodsDetailInventory: 199,\n    goodsDetailOff: 0,\n    goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",\n    goodsDetailPrice: 188,\n    goodsDetailSpec: "",\n    goodsId: "00Y1kR4r1029X822731o0",\n    isHost: 0,\n    managerEarn: 0,\n    postage: 10,\n    profit: 0,\n    specA: "红色",\n    specB: "32G",\n    specC: "小",\n    specD: "4.7寸",\n    specE: "套餐一",\n    unionEarn: 0,\n    vipPrice: 0\n}, {\n    c_id: 3134,\n    costPrice: 0,\n    discountPrice: 0,\n    earn: 0,\n    etime: null,\n    flag: 0,\n    goodsDetailCount: 199,\n    goodsDetailId: "100PgQ2xy08121409mY27",\n    goodsDetailInventory: 199,\n    goodsDetailOff: 0,\n    goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",\n    goodsDetailPrice: 188,\n    goodsDetailSpec: "",\n    goodsId: "00Y1kR4r1029X822731o0",\n    isHost: 0,\n    managerEarn: 0,\n    postage: 10,\n    profit: 0,\n    specA: "白色",\n    specB: "64G",\n    specC: "小",\n    specD: "5寸",\n    specE: "套餐二",\n    unionEarn: 0,\n    vipPrice: 0\n}, {\n    c_id: 3135,\n    costPrice: 0,\n    discountPrice: 0,\n    earn: 0,\n    etime: null,\n    flag: 0,\n    goodsDetailCount: 199,\n    goodsDetailId: "100PgQ2xy08121409mY27",\n    goodsDetailInventory: 199,\n    goodsDetailOff: 0,\n    goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",\n    goodsDetailPrice: 188,\n    goodsDetailSpec: "",\n    goodsId: "00Y1kR4r1029X822731o0",\n    isHost: 0,\n    managerEarn: 0,\n    postage: 10,\n    profit: 0,\n    specA: "黑色",\n    specB: "128G",\n    specC: "小",\n    specD: "4.7寸",\n    specE: "套餐一",\n    unionEarn: 0,\n    vipPrice: 0\n}, {\n    c_id: 3136,\n    costPrice: 0,\n    discountPrice: 0,\n    earn: 0,\n    etime: null,\n    flag: 0,\n    goodsDetailCount: 199,\n    goodsDetailId: "100PgQ2xy08121409mY27",\n    goodsDetailInventory: 199,\n    goodsDetailOff: 0,\n    goodsDetailPic: "/upload/messageImage/1523281057461_Personal.jpg,/upload/messageImage/1523282906972_Personal.jpg,/upload/messageImage/1523283570897_Personal.jpg",\n    goodsDetailPrice: 188,\n    goodsDetailSpec: "",\n    goodsId: "00Y1kR4r1029X822731o0",\n    isHost: 0,\n    managerEarn: 0,\n    postage: 10,\n    profit: 0,\n    specA: "蓝色",\n    specB: "64GG",\n    specC: "大",\n    specD: "4.5寸",\n    specE: "套餐二",\n    unionEarn: 0,\n    vipPrice: 0\n}];\n\n// var keys = {\n//     \'颜色\': [\'红色\', \'白色\'],\n//     \'容量\': [\'8g\', \'16g\', \'32g\', \'64g\'],\n//     \'尺寸\': [\'大\', \'小\', \'大\'],\n//     \'套餐\': [\'套餐一\', \'套餐二\', \'套餐三\']\n// };\n// //SKU，Stock Keeping Uint(库存量单位)    \n// var sku_list = [{\n//     \'attrs\': \'红色|16g|big|套餐二\',\n//     \'price\': 120\n// }, {\n//     \'attrs\': \'红色|8g|big|套餐一\',\n//     \'price\': 10\n// }, {\n//     \'attrs\': \'白色|16g|big|套餐二\',\n//     \'price\': 28\n// }, {\n//     \'attrs\': \'红色|64g|small|套餐三\',\n//     \'price\': 220\n// }, {\n//     \'attrs\': \'白色|32g|middle|套餐二\',\n//     \'price\': 130\n// }, {\n//     \'attrs\': \'红色|32g|big|套餐一\',\n//     \'price\': 120\n// }, ];\n')])])]),a("p",[e._v("实现：主要利用Object.keys方法获取对象的key,value值，配上forEach循环实现最终想要的结果。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var keys = {};\nvar sku_list = [];\n//原数据转换小写\ngoodsSpecJSON = goodsSpecJSON.map(function (keyo) {\n    var key = Object.keys(keyo)[0];\n    var newkey = key.substring(0, 1).toLowerCase() + key.substring(1);\n    var dic = {};\n    dic[newkey] = keyo[key];\n    return dic\n});\n//生成keys\ngoodsSpecJSON.forEach(function (keyo) {\n    var key = Object.keys(keyo)[0]; //['specA']\n    var val = keyo[key]; //颜色\n    if (!keys.hasOwnProperty(val)) {\n        keys[val] = [];\n    }\n    var hash = {};\n    goodsSpecList.forEach(function (item, i) {\n        if (hash[item[key]] === undefined) {\n            hash[item[key]] = true;\n            keys[val].push(item[key]);\n        }\n        // if (keys[val].indexOf(item[key]) === -1) {\n        //     keys[val].push(item[key]);\n        // }\n    });\n});\nconsole.log(keys)\n//生成sku_list\ngoodsSpecList.forEach(function (item) {\n    var dic = {\n        attrs: ''\n    };\n    goodsSpecJSON.forEach(function (keyo, j) {\n        var key = Object.keys(keyo)[0];\n        dic.attrs += item[key] + (j === goodsSpecJSON.length - 1 ? '' : '|');\n        dic.price = item.goodsDetailPrice;\n        dic.goodsDetailCount = item.goodsDetailCount;\n        dic.goodsDetailId = item.goodsDetailId;\n    });\n    sku_list.push(dic);\n});\nconsole.log(sku_list)\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);