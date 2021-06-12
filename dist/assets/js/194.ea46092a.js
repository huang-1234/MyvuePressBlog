(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{709:function(t,e,a){"use strict";a.r(e);var n=a(6),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一行代码实现时间戳转时间格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一行代码实现时间戳转时间格式"}},[t._v("#")]),t._v(" 一行代码实现时间戳转时间格式")]),t._v(" "),a("p",[t._v("前端开发过程中，常常需要将时间戳转化为标准时间格式供用户浏览。不借助方法库的情况下，如何又快又好的实现呢？下面介绍两种方法。")]),t._v(" "),a("h2",{attrs:{id:"老方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#老方法"}},[t._v("#")]),t._v(" 老方法")]),t._v(" "),a("p",[t._v("平常用的基本是这个方法，用Date方法依次将年月日时分秒一个个算出来，然后拼接成需要的时间格式字符串。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function transformTime(timestamp = +new Date()) {\n    if (timestamp) {\n        var time = new Date(timestamp);\n        var y = time.getFullYear(); //getFullYear方法以四位数字返回年份\n        var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一\n        var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)\n        var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)\n        var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)\n        var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)\n        return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;\n      } else {\n          return '';\n      }\n}\ntransformTime(); // \"2018-8-8 12:9:12\"\n")])])]),a("h2",{attrs:{id:"老方法改进版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#老方法改进版"}},[t._v("#")]),t._v(" 老方法改进版")]),t._v(" "),a("p",[t._v("上面的转换方法，通过将时间戳转换为Date实例，利用Date对应的方法获取对应的年月日时分秒，获取的时间格式是‘2018-8-8 12:9:12’，看着有点别扭。为了转化为我们常用的时间格式，还需要注意对小于10的值，在前面添加字符串‘0’，转换为‘2018-08-08 12:09:12’这种时间格式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function transformTime(timestamp = +new Date()) {\n    if (timestamp) {\n        var time = new Date(timestamp);\n        var y = time.getFullYear();\n        var M = time.getMonth() + 1;\n        var d = time.getDate();\n        var h = time.getHours();\n        var m = time.getMinutes();\n        var s = time.getSeconds();\n        return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);\n      } else {\n          return '';\n      }\n}\nfunction addZero(m) {\n    return m < 10 ? '0' + m : m;\n}\ntransformTime(); // \"2018-08-08 12:09:12\"\n")])])]),a("p",[t._v("对返回小于10的时间数值进行处理，用‘addZero’方法为字符串添加‘0’，这样格式就对称了。")]),t._v(" "),a("h2",{attrs:{id:"新思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新思路"}},[t._v("#")]),t._v(" 新思路")]),t._v(" "),a("p",[t._v("为了将时间戳转换为我们需要的时间格式，我们写了两个函数，加起来十几行。前段时间，部门大佬告知了另外一种方式，一行代码完成时间戳转换为‘YYYY-MM-DD HH:mm:ss’形式的时间格式，顿时代码精简了很多，话不多说，亮出代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function time(time = +new Date()) {\n    var date = new Date(time + 8 * 3600 * 1000); // 增加8小时\n    return date.toJSON().substr(0, 19).replace('T', ' ');\n}\ntime(); // \"2018-08-09 18:25:54\"\n")])])]),a("p",[t._v("Date的‘toJSON’方法返回格林威治时间的JSON格式字符串，实际是使用‘toISOString’方法的结果。字符串形如‘2018-08-09T10:20:54.396Z’，转化为北京时间需要额外增加八个时区，我们需要取字符串前19位，然后把‘T’替换为空格，即是我们需要的时间格式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function time(time = +new Date()) {\n    var date = new Date(time + 8 * 3600 * 1000);\n    return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');\n}\ntime(); // \"2018.08.09 18:25:54\"\n")])])]),a("p",[t._v("把时间格式中的‘-’修改为‘.’或者其他符号都是可以的。对比老方法，这种方法代码量比以前省了不止一星半点的，读起来也简洁多了。如果时间格式需要毫秒数，只需要获取前23位字符串，和上面一样用replace方法替换。")])])}),[],!1,null,null,null);e.default=r.exports}}]);