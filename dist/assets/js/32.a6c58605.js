(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{307:function(t,r,_){"use strict";function a(t,r,_,a,e,s,v,n){var o,i="function"==typeof t?t.options:t;if(r&&(i.render=r,i.staticRenderFns=_,i._compiled=!0),a&&(i.functional=!0),s&&(i._scopeId="data-v-"+s),v?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(v)},i._ssrRegister=o):e&&(o=n?function(){e.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:e),o)if(i.functional){i._injectStyles=o;var p=i.render;i.render=function(t,r){return o.call(r),p(t,r)}}else{var h=i.beforeCreate;i.beforeCreate=h?[].concat(h,o):[o]}return{exports:t,options:i}}_.d(r,"a",(function(){return a}))},388:function(t,r,_){"use strict";_.r(r);var a=_(307),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-tcp-ip协议栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-tcp-ip协议栈"}},[t._v("#")]),t._v(" HTTP&TCP/IP协议栈")]),t._v(" "),_("h2",{attrs:{id:"日常使用-http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日常使用-http"}},[t._v("#")]),t._v(" 日常使用 HTTP")]),t._v(" "),_("p",[t._v("当我们在网页浏览器(Web browser)的地址栏中输入 URL 时，Web 页面是如何呈现的呢？")]),t._v(" "),_("p",[t._v("在浏览器地址栏内输入 URL 时，信息会送往服务器，然后从服务器那里得到答复，内容就显示在了 Web 页面上了。")]),t._v(" "),_("p",[t._v("像这种通过发送请求获取服务器资源的 Web 浏览器等，都可称为客户端(client)。")]),t._v(" "),_("p",[t._v("Web 使用一种名为 HTTP(HyperText Transfer Protocol，超文本传输协议 )的协议作为规范，完成从客户端到服务器端等一系列运作流程。而协议是指规则的约定。可以说，Web 是建立在 HTTP 协议上通信的。")]),t._v(" "),_("h2",{attrs:{id:"基础-tcp-ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础-tcp-ip"}},[t._v("#")]),t._v(" 基础 TCP / IP")]),t._v(" "),_("p",[t._v("通常使用的网络(包括互联网)是在 TCP/IP 协议族的基础上运作的。而 HTTP 属于它内部的一个子集。")]),t._v(" "),_("p",[t._v("把与互联网相关联的协议集合起来总称为 TCP/IP。")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/images/Browser/HTTP/whatHTTP01.png"),alt:"whatHTTP01"}}),t._v(" "),_("h3",{attrs:{id:"分层管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分层管理"}},[t._v("#")]),t._v(" 分层管理")]),t._v(" "),_("p",[t._v("TCP/IP 协议族按层次分别分为以下 4 层："),_("strong",[t._v("应用层、传输层、网络层和数据链路层")]),t._v("。")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/images/Browser/HTTP/whatHTTP02.png"),alt:"whatHTTP02"}}),t._v(" "),_("p",[_("strong",[t._v("应用层")])]),t._v(" "),_("p",[t._v("应用层决定了向用户提供应用服务时通信的活动。")]),t._v(" "),_("p",[t._v("TCP/IP 协议族内预存了各类通用的应用服务。比如FTP(File Transfer Protocol，文件传输协议)和 DNS(Domain Name System，域名系统)服务就是其中两类。HTTP 协议也处于该层。")]),t._v(" "),_("p",[_("strong",[t._v("传输层")])]),t._v(" "),_("p",[t._v("传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输。")]),t._v(" "),_("p",[t._v("在传输层有两个性质不同的协议：TCP(Transmission Control Protocol，传输控制协议)和 UDP(User Data Protocol，用户数据报协议)。")]),t._v(" "),_("p",[_("strong",[t._v("网络层")])]),t._v(" "),_("p",[t._v("网络层用来处理在网络上流动的数据包。数据包是网络传输的最小数据单位。该层规定了通过怎样的路径(所谓的传输路线)到达对方计算机，并把数据包传送给对方。")]),t._v(" "),_("p",[_("strong",[t._v("数据链路层")])]),t._v(" "),_("p",[t._v("用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC(Network Interface Card，网络适配器,即网卡)，及光纤等物理可见部分(还包括连接器等一切传输媒介)。硬件上的范畴均在数据链路层的作用范围之内。")]),t._v(" "),_("h3",{attrs:{id:"数据传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据传输"}},[t._v("#")]),t._v(" 数据传输")]),t._v(" "),_("p",[t._v("首先作为发送端的客户端在应用层 （HTTP 协议）发出一个想看某个 Web 页面的 HTTP 请求。")]),t._v(" "),_("p",[t._v("接着，为了传输方便，在传输层（TCP 协议）把从应用层处收到的数据（HTTP 请求报文）进行分割，并在各个报文上打上标记序号及端口号后转发给网络层。")]),t._v(" "),_("p",[t._v("在网络层（IP 协议），增加作为通信目的地的 MAC 地址后转发给链路层。这样一来，发往网络的通信请求就准备齐全了。")]),t._v(" "),_("p",[t._v("接收端的服务器在链路层接收到数据，按序往上层发送，一直到应用层。当传输到应用层，才能算真正接收到由客户端发送过来的 HTTP 请求。")]),t._v(" "),_("p",[t._v("发送端在层与层之间传输数据时，每经过一层时必定会被打上一个该 层所属的首部信息。反之，接收端在层与层传输数据时，每经过一层时会把对应的首部消去。")]),t._v(" "),_("p",[t._v("这种把数据信息包装起来的做法称为封装（encapsulate）。")]),t._v(" "),_("h2",{attrs:{id:"ip-tcp-dns"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-tcp-dns"}},[t._v("#")]),t._v(" IP TCP DNS")]),t._v(" "),_("h3",{attrs:{id:"负责传输的-ip-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负责传输的-ip-协议"}},[t._v("#")]),t._v(" 负责传输的 "),_("strong",[t._v("IP")]),t._v(" 协议")]),t._v(" "),_("p",[t._v("IP（Internet Protocol）网际协议位于网络层。")]),t._v(" "),_("p",[t._v("IP 协议的作用是把各种数据包传送给对方。而要保证确实传送到对方那里，则需要满足各类条件。其中两个重要的条件是 IP 地址和 MAC 地址")]),t._v(" "),_("p",[t._v("IP 地址指明了节点被分配到的地址，MAC 地址是指网卡所属的固定地址。")]),t._v(" "),_("p",[t._v("使用 "),_("strong",[t._v("ARP")]),t._v(" 协议凭借 "),_("strong",[t._v("MAC")]),t._v(" 地址进行通信。ARP 是一种用以解析地址的协议，根据通信方的 IP 地址就可以反查出对应的 MAC 地址。")]),t._v(" "),_("h3",{attrs:{id:"确保可靠性的-tcp-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#确保可靠性的-tcp-协议"}},[t._v("#")]),t._v(" 确保可靠性的 "),_("strong",[t._v("TCP")]),t._v(" 协议")]),t._v(" "),_("p",[t._v("TCP 位于传输层，提供可靠的字节流服务。")]),t._v(" "),_("p",[t._v("所谓的字节流服务（Byte Stream Service）是指，为了方便传输，将大块数据分割成以报文段（segment）为单位的数据包进行管理。而可靠的传输服务是指，能够把数据准确可靠地传给对方。")]),t._v(" "),_("p",[t._v("为了准确无误地将数据送达目标处，TCP 协议采用了三次握手 （three-way handshaking）策略。用 TCP 协议把数据包送出去后，TCP 不会对传送后的情况置之不理，它一定会向对方确认是否成功送达。")]),t._v(" "),_("p",[t._v("握手过程中使用了 TCP 的标志（flag） —— SYN（synchronize） 和 ACK（acknowledgement）。")]),t._v(" "),_("p",[t._v("若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。")]),t._v(" "),_("h3",{attrs:{id:"负责域名解析的-dns-服务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#负责域名解析的-dns-服务"}},[t._v("#")]),t._v(" 负责域名解析的 "),_("strong",[t._v("DNS")]),t._v(" 服务")]),t._v(" "),_("p",[t._v("DNS（Domain Name System）服务是和 HTTP 协议一样位于应用层的协议。它提供域名到 IP 地址之间的解析服务。")]),t._v(" "),_("p",[t._v("DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名的服务。")]),t._v(" "),_("h2",{attrs:{id:"uri-和-url"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uri-和-url"}},[t._v("#")]),t._v(" "),_("strong",[t._v("URI")]),t._v(" 和 "),_("strong",[t._v("URL")])]),t._v(" "),_("h3",{attrs:{id:"统一资源标识符uri"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#统一资源标识符uri"}},[t._v("#")]),t._v(" 统一资源标识符URI")]),t._v(" "),_("p",[t._v("URI 就是由某个协议方案表示的资源的定位标识符。协议方案是指访问资源所使用的协议类型名称。")]),t._v(" "),_("p",[t._v("URI 用字符串标识某一互联网资源，而 URL表示资源的地点（互联网上所处的位置）。可见 URL是 URI 的子集。")]),t._v(" "),_("h5",{attrs:{id:"绝对-uri-的格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#绝对-uri-的格式"}},[t._v("#")]),t._v(" 绝对 URI 的格式:")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("使用 http: 或 https: 等协议方案名获取访问资源时要指定协议类型。也可使用 data: 或 javascript: 这类指定数据或脚本程序的方案名。")])]),t._v(" "),_("li",[_("p",[t._v("登录信息（认证） ：指定用户名和密码作为从服务器端获取资源时必要的登录信息（身份认证）。此项是可选项。")])]),t._v(" "),_("li",[_("p",[t._v("带层次的文件路径 ：指定服务器上的文件路径来定位特指的资源。")])]),t._v(" "),_("li",[_("p",[t._v("查询字符串 ：针对已指定的文件路径内的资源，可以使用查询字符串传入任意参数。")])]),t._v(" "),_("li",[_("p",[t._v("片段标识符 ：使用片段标识符通常可标记出已获取资源中的子资源（文档内的某个位置）。")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);