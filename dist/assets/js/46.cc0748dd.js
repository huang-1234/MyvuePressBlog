(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{557:function(t,a,s){"use strict";s.r(a);var r=s(6),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1"}},[t._v("#")]),t._v(" HTTP 1")]),t._v(" "),s("p",[t._v("在了解 HTTP 1.0 之前，我们先来了解下 HTTP 0.9.")]),t._v(" "),s("h2",{attrs:{id:"http-0-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-0-9"}},[t._v("#")]),t._v(" HTTP 0.9")]),t._v(" "),s("p",[t._v("TTP/0.9 是于 1991 年提出的，主要用于学术交流，需求很简单——用来在网络之间传递 HTML 超文本的内容，所以被称为超文本传输协议。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/Browser/HTTP/http101.png"),alt:"http101"}}),t._v(" "),s("ul",[s("li",[t._v("HTTP 都是基于 TCP 协议的，客户端先要根据 IP 地址、端口和服务器建立 TCP 连接，而建立连接的过程就是 TCP 协议三次握手的过程。")]),t._v(" "),s("li",[t._v("建立好连接之后，会发送一个 GET 请求行的信息，如GET /index.html用来获取 index.html。")]),t._v(" "),s("li",[t._v("服务器接收请求信息之后，读取对应的 HTML 文件，并将数据以 ASCII 字符流返回给客户端。")]),t._v(" "),s("li",[t._v("HTML 文档传输完成后，断开连接。")])]),t._v(" "),s("p",[t._v("由于当时的需求十分的小，所以他就有了以下三个特点：")]),t._v(" "),s("ul",[s("li",[t._v("只有一个请求行，并没有 HTTP 请求头和请求体，因为只需要一个请求行就可以完整表达客户端的需求了。")]),t._v(" "),s("li",[t._v("服务器也没有返回头信息，这是因为服务器端并不需要告诉客户端太多信息，只需要返回数据就可以了。")]),t._v(" "),s("li",[t._v("返回的文件内容是以 ASCII 字符流来传输的，因为都是 HTML 格式的文件，所以使用 ASCII 字节码来传输是最合适的。")])]),t._v(" "),s("p",[t._v("为什么 HTTP0.9 会被淘汰呢，原因在于支持多种类型的文件下载。")]),t._v(" "),s("h2",{attrs:{id:"http1-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-0"}},[t._v("#")]),t._v(" HTTP1.0")]),t._v(" "),s("p",[t._v("那么该如何实现多种类型文件的下载呢？")]),t._v(" "),s("p",[t._v("很明显简单的GET无法满足需求，为了让客户端和服务器能更深入地交流，HTTP/1.0 引入了请求头和响应头，它们都是以为 Key-Value 形式保存的，在 HTTP 发送请求时，会带上请求头信息，服务器返回数据时，会先返回响应头信息。")]),t._v(" "),s("p",[t._v("HTTP/1.0 是怎么通过请求头和响应头来支持多种不同类型的数据呢？")]),t._v(" "),s("p",[t._v("有几个问题需要解决：")]),t._v(" "),s("ul",[s("li",[t._v("浏览器需要知道数据是什么类型， 然后浏览器才能根据不同的数据类型做针对性的处理。")]),t._v(" "),s("li",[t._v("由于万维网所支持的应用变得越来越广，所以单个文件的数据量也变得越来越大。为了减轻传输性能，服务器会对数据进行压缩后再传输，所以浏览器需要知道服务器压缩的方法。")]),t._v(" "),s("li",[t._v("由于万维网是支持全球范围的，所以需要提供国际化的支持，服务器需要对不同的地区提供不同的语言版本，这就需要浏览器告诉服务器它想要什么语言版本的页面。")]),t._v(" "),s("li",[t._v("由于增加了各种不同类型的文件，而每种文件的编码形式又可能不一样，为了能够准确地读取文件，浏览器需要知道文件的编码类型。")])]),t._v(" "),s("p",[t._v("HTTP/1.0 的方案是通过请求头和响应头来进行协商，在发起请求时候会通过 HTTP 请求头告诉服务器它期待服务器返回什么类型的文件、采取什么形式的压缩、提供什么语言的文件以及文件的具体编码。")]),t._v(" "),s("p",[t._v("举例如下：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("accept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 html 类型")]),t._v("\naccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" br "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 期望服务器可以采用 gzip、deflate 或者 br 其中的一种压缩方式")]),t._v("\naccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 期望返回的文件编码是 UTF-8")]),t._v("\naccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("CN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("zh "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 期望页面的优先语言是中文")]),t._v("\n")])])]),s("p",[t._v("服务器接收到浏览器发送过来的请求头信息之后，会根据请求头的信息来准备响应数据。不过有时候会有一些意外情况发生，比如浏览器请求的压缩类型是 gzip，但是服务器不支持 gzip，只支持 br 压缩，那么它会通过响应头中的 content-encoding 字段告诉浏览器最终的压缩类型，也就是说最终浏览器需要根据响应头的信息来处理数据。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" br "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器采用了 br 的压缩方法")]),t._v("\ncontent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTF"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器返回的是 html 文件，并且该文件的编码类型是 UTF-8。")]),t._v("\n")])])]),s("p",[t._v("有了响应头的信息，浏览器就会使用 br 方法来解压文件，再按照 UTF-8 的编码格式来处理原始文件，最后按照 HTML 的方式来解析该文件。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/http102.png"),alt:"http102"}}),t._v(" "),s("p",[t._v("其实 HTTP1.0 除了解决上述问题，还引入了许多特性：")]),t._v(" "),s("ul",[s("li",[t._v("有的请求服务器可能无法处理，或者处理出错，这时候就需要告诉浏览器服务器最终处理该请求的情况，这就引入了"),s("strong",[t._v("状态码")]),t._v("。状态码是通过响应行的方式来通知浏览器的。")]),t._v(" "),s("li",[t._v("为了减轻服务器的压力，在 HTTP/1.0 中提供了 "),s("strong",[t._v("Cache 机制")]),t._v("，用来缓存已经下载过的数据。")]),t._v(" "),s("li",[t._v("服务器需要统计客户端的基础信息，比如 Windows 和 macOS 的用户数量分别是多少，所以 HTTP/1.0 的请求头中还加入了"),s("strong",[t._v("用户代理")]),t._v("的字段。")])]),t._v(" "),s("h2",{attrs:{id:"http-1-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1"}},[t._v("#")]),t._v(" HTTP 1.1")]),t._v(" "),s("p",[t._v("那么 HTTP 1.1 做了那些改进呢？")]),t._v(" "),s("h3",{attrs:{id:"持久连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久连接"}},[t._v("#")]),t._v(" 持久连接")]),t._v(" "),s("p",[t._v("HTTP/1.0 每进行一次 HTTP 通信，都需要经历建立 TCP 连接、传输 HTTP 数据和断开 TCP 连接三个阶段。")]),t._v(" "),s("p",[t._v("当时由于通信的文件比较小，而且每个页面的引用也不多，所以这种传输形式没什么大问题。")]),t._v(" "),s("p",[t._v("而现在一个页面可能包含了几百个外部引用的资源文件，如果在下载每个文件的时候，都需要经历建立 TCP 连接、传输数据和断开连接这样的步骤，无疑会增加大量无谓的开销。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/http103.png"),alt:"http103"}}),t._v(" "),s("p",[s("strong",[t._v("HTTP/1.1 中增加了持久连接的方法，它的特点是在一个 TCP 连接上可以传输多个 HTTP 请求，只要浏览器或者服务器没有明确断开连接，那么该 TCP 连接会一直保持。")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/http104.png"),alt:"http104"}}),t._v(" "),s("p",[t._v("可以看出，HTTP 的持久连接可以有效减少 TCP 建立连接和断开连接的次数，这样的好处是减少了服务器额外的负担，并提升整体 HTTP 的请求时长。目前浏览器中对于同一个域名，默认允许同时建立 6 个 TCP 持久连接。")]),t._v(" "),s("h3",{attrs:{id:"不成熟的-http-管线化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不成熟的-http-管线化"}},[t._v("#")]),t._v(" 不成熟的 HTTP 管线化")]),t._v(" "),s("p",[t._v("持久连接虽然能减少 TCP 的建立和断开次数，但是它需要等待前面的请求返回之后，才能进行下一次请求。如果 TCP 通道中的某个请求因为某些原因没有及时返回，那么就会阻塞后面的所有请求，这就是著名的"),s("strong",[t._v("队头阻塞")]),t._v("的问题。")]),t._v(" "),s("p",[t._v("HTTP/1.1 中试图通过管线化的技术来解决队头阻塞的问题。HTTP/1.1 中的管线化是指将多个 HTTP 请求整批提交给服务器的技术，虽然可以整批发送请求，不过服务器依然需要根据请求顺序来回复浏览器的请求。")]),t._v(" "),s("h3",{attrs:{id:"提供虚拟主机的支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提供虚拟主机的支持"}},[t._v("#")]),t._v(" 提供虚拟主机的支持")]),t._v(" "),s("p",[t._v("在 HTTP/1.0 中，每个域名绑定了一个唯一的 IP 地址，因此一个服务器只能支持一个域名。但是随着虚拟主机技术的发展，需要实现在一台物理主机上绑定多个虚拟主机，每个虚拟主机都有自己的单独的域名，这些单独的域名都公用同一个 IP 地址。")]),t._v(" "),s("p",[t._v("HTTP/1.1 的请求头中增加了 Host 字段，用来表示当前的域名地址，这样服务器就可以根据不同的 Host 值做不同的处理。")]),t._v(" "),s("h3",{attrs:{id:"对动态生成的内容提供了完美支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对动态生成的内容提供了完美支持"}},[t._v("#")]),t._v(" 对动态生成的内容提供了完美支持")]),t._v(" "),s("p",[t._v("在 HTTP/1.0 ，需要在响应头中设置完整的数据大小，如Content-Length: 901，这样浏览器就可以根据设置的数据大小来接收数据。不过随着服务器端的技术发展，很多页面的内容都是动态生成的，因此在传输数据之前并不知道最终的数据大小，这就导致了浏览器不知道何时会接收完所有的文件数据。")]),t._v(" "),s("p",[t._v("HTTP/1.1 通过引入 Chunk transfer 机制来解决这个问题，服务器会将数据分割成若干个任意大小的数据块，每个数据块发送时会附上上个数据块的长度，最后使用一个零长度的块作为发送数据完成的标志。这样就提供了对动态内容的支持。")]),t._v(" "),s("h3",{attrs:{id:"客户端-cookie、安全机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端-cookie、安全机制"}},[t._v("#")]),t._v(" 客户端 Cookie、安全机制")]),t._v(" "),s("p",[t._v("HTTP/1.1 还引入了客户端 Cookie 机制和安全机制。")])])}),[],!1,null,null,null);a.default=v.exports}}]);