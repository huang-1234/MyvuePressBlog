(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{536:function(v,r,t){"use strict";t.r(r);var _=t(6),a=Object(_.a)({},(function(){var v=this,r=v.$createElement,t=v._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[v._v("#")]),v._v(" HTTPS")]),v._v(" "),t("p",[v._v("由于 HTTP 采用的是明文传递，在传输过程中的每一个环节，数据都有可能被窃取或者篡改。")]),v._v(" "),t("h2",{attrs:{id:"引入安全层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入安全层"}},[v._v("#")]),v._v(" 引入安全层")]),v._v(" "),t("p",[v._v("鉴于 HTTP 的明文传输使得传输过程毫无安全性可言，且制约了网上购物、在线转账等一系列场景应用，于是倒逼着我们要引入加密方案。")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/images/Browser/HTTP/HTTPS01.png"),alt:"HTTPS01"}}),v._v(" "),t("p",[v._v("通常 HTTP 直接和 TCP 通信，HTTPS 则先和安全层通信，然后安全层再和 TCP 层通信。也就是说 HTTPS 所有的安全核心都在安全层，它不会影响到上面的 HTTP 协议，也不会影响到下面的 TCP/IP。")]),v._v(" "),t("p",[v._v("安全层有两个主要的职责："),t("strong",[v._v("对发起 HTTP 请求的数据进行加密操作和对接收到 HTTP 的内容进行解密操作")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"使用对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用对称加密"}},[v._v("#")]),v._v(" 使用对称加密")]),v._v(" "),t("p",[v._v("所谓对称加密是指加密和解密都使用的是相同的密钥。")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/images/Browser/HTTP/HTTPS02.png"),alt:"HTTPS02"}}),v._v(" "),t("p",[v._v("HTTPS 首先要协商加解密方式，这个过程就是 HTTPS 建立安全连接的过程。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("浏览器发送它所支持的加密方法列表和一个随机数 client-random。")])]),v._v(" "),t("li",[t("p",[v._v("服务器从加密方法列表中选取一个方法，然后还会生成一个随机数 service-random，并将 service-random 和加密方法列表返回给浏览器。")])]),v._v(" "),t("li",[t("p",[v._v("最后浏览器和服务器分别返回确认消息。")])])]),v._v(" "),t("p",[v._v("这样浏览器端和服务器端都有相同的 client-random 和 service-random 了，然后它们再使用相同的方法将 client-random 和 service-random 混合起来生成一个密钥 master secret，有了密钥 master secret 和加密方法之后，双方就可以进行数据的加密传输了。")]),v._v(" "),t("p",[v._v("但是其中传输 client-random 和 service-random 的过程却是明文的，所以可能会导致最终的密钥也会被泄露。")]),v._v(" "),t("h2",{attrs:{id:"使用非对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用非对称加密"}},[v._v("#")]),v._v(" 使用非对称加密")]),v._v(" "),t("p",[t("strong",[v._v("非对称加密算法有 A、B 两把密钥，如果你用 A 密钥来加密，那么只能使用 B 密钥来解密；反过来，如果你要 B 密钥来加密，那么只能用 A 密钥来解密。")])]),v._v(" "),t("p",[v._v("服务器会将其中的一个密钥通过明文的形式发送给浏览器，我们把这个密钥称为公钥，服务器自己留下的那个密钥称为私钥。顾名思义，公钥是每个人都能获取到的，而私钥只有服务器才能知道，不对任何人公开。")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/images/Browser/HTTP/HTTPS03.png"),alt:"HTTPS03"}}),v._v(" "),t("p",[v._v("请求流程：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("浏览器发送它所支持的加密方法列表")])]),v._v(" "),t("li",[t("p",[v._v("服务器会选择一个加密方法，将加密方法和公钥发送给浏览器。")])]),v._v(" "),t("li",[t("p",[v._v("最后就是浏览器和服务器返回确认消息。")])])]),v._v(" "),t("p",[v._v("这样浏览器端就有了服务器的公钥，在浏览器端向服务器端发送数据时，就可以使用该公钥来加密数据。由于公钥加密的数据只有私钥才能解密，所以就算泄露了也不会导致数据泄露。")]),v._v(" "),t("p",[v._v("但是这种方式有几个问题")]),v._v(" "),t("ul",[t("li",[v._v("**非对称加密的效率太低。**这会影响到加解密数据的速度，进而影响到用户打开页面的速度。")]),v._v(" "),t("li",[t("strong",[v._v("无法保证服务器发送给浏览器的数据安全")]),v._v("。虽然浏览器端可以使用公钥来加密，但是服务器端只能采用私钥来加密，私钥加密只有公钥能解密。")])]),v._v(" "),t("h2",{attrs:{id:"对称加密和非对称加密搭配使用-折中法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称加密和非对称加密搭配使用-折中法"}},[v._v("#")]),v._v(" 对称加密和非对称加密搭配使用（折中法）")]),v._v(" "),t("p",[v._v("在传输数据阶段依然使用对称加密，但是对称加密的密钥我们采用非对称加密来传输。")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/images/Browser/HTTP/HTTPS04.png"),alt:"HTTPS04"}}),v._v(" "),t("p",[v._v("流程如下：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("浏览器向服务器发送对称加密方法列表、非对称加密方法列表和随机数 client-random；")])]),v._v(" "),t("li",[t("p",[v._v("服务器保存随机数 client-random，选择对称加密和非对称加密的方法，然后生成随机数 service-random，向浏览器发送选择的加密方法、service-random 和公钥；")])]),v._v(" "),t("li",[t("p",[v._v("浏览器保存公钥，并生成随机数 pre-master，然后利用公钥对 pre-master 加密，并向服务器发送加密后的数据；")])]),v._v(" "),t("li",[t("p",[v._v("最后服务器拿出自己的私钥，解密出 pre-master 数据，并返回确认消息。")])])]),v._v(" "),t("p",[v._v("服务器和浏览器就有了共同的 client-random、service-random 和 pre-master，然后服务器和浏览器会使用这三组随机数生成对称密钥。")]),v._v(" "),t("p",[v._v("由于 pre-master 是通过公钥传输的，只能私钥才能解密，于是数据也就不会泄露了。")]),v._v(" "),t("h2",{attrs:{id:"添加数字证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加数字证书"}},[v._v("#")]),v._v(" 添加数字证书")]),v._v(" "),t("p",[v._v("还可能会存在一个问题，黑客通过 DNS 劫持当前网站的 IP 地址替换成了黑客的 IP 地址，这样访问的就是黑客的服务器。黑客就可以在自己的服务器上实现公钥和私钥，而对浏览器来说，它完全不知道现在访问的是个黑客的站点。")]),v._v(" "),t("p",[v._v("那么就需要提供一个证明，证明这个网站就是你想访问的那个网站。")]),v._v(" "),t("p",[v._v("那么需要什么证明呢，答案就是数字证书（CA）。")]),v._v(" "),t("p",[v._v("数字证书有两个作用：一个是通过数字证书向浏览器证明服务器的身份，另一个是数字证书里面包含了服务器公钥。")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/images/Browser/HTTP/HTTPS05.png"),alt:"HTTPS05"}}),v._v(" "),t("p",[v._v("主要做了两点改变：")]),v._v(" "),t("ul",[t("li",[v._v("服务器没有直接返回公钥给浏览器，而是返回了数字证书，而公钥正是包含在数字证书中的；")]),v._v(" "),t("li",[v._v("在浏览器端多了一个证书验证的操作，验证了证书之后，才继续后续流程。")])])])}),[],!1,null,null,null);r.default=a.exports}}]);