(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{566:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"mysql-root密码忘记重置密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-root密码忘记重置密码"}},[s._v("#")]),s._v(" mysql root密码忘记重置密码")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("【摘要】因为每个系统mysql 的配置文件位置不同，我们只需要修改mysql的配置文件my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cnf即可实现免密登录 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、修改mysql配置文件 在mysql的配置文件里面添加skip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("grant"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tables保存即可 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bind"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" skip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("grant"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tables    #添加此行代码即可 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、重启mysql服务 servier  mys"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])]),a("p",[s._v("因为每个系统mysql 的配置文件位置不同，我们只需要修改mysql的配置文件my.cnf即可实现免密登录")]),s._v(" "),a("p",[s._v("1、修改mysql配置文件")]),s._v(" "),a("p",[s._v("在mysql的配置文件里面添加skip-grant-tables保存即可")]),s._v(" "),a("p",[s._v("[mysqld]\nbind-address = 0.0.0.0\nskip-grant-tables #添加此行代码即可")]),s._v(" "),a("p",[s._v("2、重启mysql服务")]),s._v(" "),a("p",[s._v("servier mysqld restart")]),s._v(" "),a("p",[s._v("3、进入mysql数据库")]),s._v(" "),a("p",[s._v("注意：mysql数据库的user表中没有password这个字段会报错，只有authentication_string这个字段，")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# mysql\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" update user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*****"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERROR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1054")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("S22"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Unknown column "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'field list'")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" update user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" authentication_string"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*****"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warning")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRows matched"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Changed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Warnings"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   # 立即生效\nQuery "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("affected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.02")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);