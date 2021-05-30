(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{627:function(_,v,e){"use strict";e.r(v);var t=e(6),o=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"三次握手-四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三次握手-四次挥手"}},[_._v("#")]),_._v(" 三次握手，四次挥手")]),_._v(" "),e("p",[_._v("我们都知道TCP是面向连接的，"),e("code",[_._v("三次握手")]),_._v("就是用来建立连接的，"),e("code",[_._v("四次握手")]),_._v("就是用来断开连接的。")]),_._v(" "),e("h1",{attrs:{id:"三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),e("p",[_._v("先上图：")]),_._v(" "),e("p",[e("img",{attrs:{src:"TCPthreefour.assets/b4554ff2ae6f5717d4799195fe7873ca.png",alt:"三次握手"}})]),_._v(" "),e("p",[_._v("我们来看一下三次握手的过程：")]),_._v(" "),e("ul",[e("li",[_._v("一开始，客户端和服务端都处于 "),e("code",[_._v("CLOSED")]),_._v(" 状态。客户端主动打开连接，服务端被动打卡连接，结束"),e("code",[_._v("CLOSED")]),_._v(" z状态，开始监听，进入 "),e("code",[_._v("LISTEN")]),_._v("状态。")])]),_._v(" "),e("p",[e("strong",[_._v("一次握手")])]),_._v(" "),e("ul",[e("li",[_._v("客户端会随机初始化序号（"),e("code",[_._v("client_isn")]),_._v("），将此序号置于 TCP 首部的「序号」字段中，同时把 "),e("code",[_._v("SYN")]),_._v(" 标志位置为 "),e("code",[_._v("1")]),_._v(" ，表示 "),e("code",[_._v("SYN")]),_._v(" 报文。接着把第一个 SYN 报文发送给服务端，表示向服务端发起连接，该报文不包含应用层数据，之后客户端处于 "),e("code",[_._v("SYN-SENT")]),_._v(" 状态。")])]),_._v(" "),e("p",[e("strong",[_._v("二次握手")])]),_._v(" "),e("ul",[e("li",[_._v("服务端收到客户端的 "),e("code",[_._v("SYN")]),_._v(" 报文后，首先服务端也随机初始化自己的序号（"),e("code",[_._v("server_isn")]),_._v("），将此序号填入 TCP 首部的「序号」字段中，其次把 TCP 首部的「确认应答号」字段填入 "),e("code",[_._v("client_isn + 1")]),_._v(", 接着把 "),e("code",[_._v("SYN")]),_._v(" 和 "),e("code",[_._v("ACK")]),_._v(" 标志位置为 "),e("code",[_._v("1")]),_._v("。最后把该报文发给客户端，该报文也不包含应用层数据，之后服务端处于 "),e("code",[_._v("SYN-RCVD")]),_._v(" 状态。")])]),_._v(" "),e("p",[e("strong",[_._v("三次握手")])]),_._v(" "),e("ul",[e("li",[_._v("客户端收到服务端报文后，还要向服务端回应最后一个应答报文，首先该应答报文 TCP 首部 "),e("code",[_._v("ACK")]),_._v(" 标志位置为 "),e("code",[_._v("1")]),_._v(" ，其次「确认应答号」字段填入 "),e("code",[_._v("server_isn + 1")]),_._v(" ，最后把报文发送给服务端，这次报文可以携带客户到服务器的数据，之后客户端处于 "),e("code",[_._v("ESTABLISHED")]),_._v(" 状态。")])]),_._v(" "),e("p",[_._v("好了，经过三次握手的过程，客户端和服务端之间的确定连接正常，接下来进入"),e("code",[_._v("ESTABLISHED")]),_._v("状态，服务端和客户端就可以快乐地通信了。")]),_._v(" "),e("p",[_._v("这里有个动态过程的图示：")]),_._v(" "),e("p",[e("img",{attrs:{src:"TCPthreefour.assets/347d44df026986bb18e29d7fc143abde.gif",alt:"三次握手动图"}})]),_._v(" "),e("p",[_._v("这里有个小细节，第三次握手是可以携带数据的，这是面试常问的点。")]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("那么为什么要三次握手呢？两次不行吗？")])])]),_._v(" "),e("ul",[e("li",[_._v("为了防止服务器端开启一些无用的连接增加服务器开销")]),_._v(" "),e("li",[_._v("防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。")])]),_._v(" "),e("p",[_._v("由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了 SYN=1 的第一次握手。")]),_._v(" "),e("p",[_._v("如果服务器端就直接创建了这个连接并返回包含 SYN、ACK 和 Seq 等内容的数据包给客户端，这个数据包因为网络传输的原因丢失了，丢失之后客户端就一直没有接收到服务器返回的数据包。")]),_._v(" "),e("p",[_._v("如果没有第三次握手告诉服务器端客户端收的到服务器端传输的数据的话，服务器端是不知道客户端有没有接收到服务器端返回的信息的。服务端就认为这个连接是可用的，端口就一直开着，等到客户端因超时重新发出请求时，服务器就会重新开启一个端口连接。")]),_._v(" "),e("p",[_._v("这样一来，就会有很多无效的连接端口白白地开着，导致资源的浪费。")]),_._v(" "),e("p",[_._v("这个过程可理解为：")]),_._v(" "),e("p",[e("img",{attrs:{src:"TCPthreefour.assets/78d0c7c681b9e9646023800f3e13d271.png",alt:"非三次握手-有差错情况"}})]),_._v(" "),e("p",[_._v("还有一种情况是已经失效的客户端发出的请求信息，由于某种原因传输到了服务器端，服务器端以为是客户端发出的有效请求，接收后产生错误。")]),_._v(" "),e("p",[e("img",{attrs:{src:"TCPthreefour.assets/0a75b018f1b1400a3698ad258d157f8d.png",alt:"失效请求"}})]),_._v(" "),e("p",[_._v("所以我们需要“第三次握手”来确认这个过程：")]),_._v(" "),e("p",[_._v("通过第三次握手的数据告诉服务端，客户端有没有收到服务器“第二次握手”时传过去的数据，以及这个连接的序号是不是有效的。若发送的这个数据是“"),e("code",[_._v("收到且没有问题")]),_._v("”的信息，接收后服务器就正常建立 TCP 连接，否则建立 TCP 连接失败，服务器关闭连接端口。由此减少服务器开销和接收到失效请求发生的错误。")]),_._v(" "),e("h1",{attrs:{id:"四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[_._v("#")]),_._v(" 四次挥手")]),_._v(" "),e("p",[_._v("还是先上图：")]),_._v(" "),e("p",[e("img",{attrs:{src:"TCPthreefour.assets/ac17114439ca230974ba3b874eb088a2.png",alt:"四次挥手示意图"}})]),_._v(" "),e("p",[_._v("聚散终有时，TCP 断开连接是通过"),e("strong",[_._v("四次挥手")]),_._v("方式。")]),_._v(" "),e("p",[e("code",[_._v("双方")]),_._v("都可以主动断开连接，断开连接后主机中的「资源」将被释放。")]),_._v(" "),e("p",[_._v("上图是客户端主动关闭连接 ：")]),_._v(" "),e("p",[e("strong",[_._v("一次挥手")])]),_._v(" "),e("ul",[e("li",[_._v("客户端打算关闭连接，此时会发送一个 TCP 首部 "),e("code",[_._v("FIN")]),_._v(" 标志位被置为 "),e("code",[_._v("1")]),_._v(" 的报文，也即 "),e("code",[_._v("FIN")]),_._v(" 报文，之后客户端进入 "),e("code",[_._v("FIN_WAIT_1")]),_._v(" 状态。")])]),_._v(" "),e("p",[e("strong",[_._v("二次挥手")])]),_._v(" "),e("ul",[e("li",[_._v("服务端收到该报文后，就向客户端发送 "),e("code",[_._v("ACK")]),_._v(" 应答报文，接着服务端进入 "),e("code",[_._v("CLOSED_WAIT")]),_._v(" 状态。")])]),_._v(" "),e("p",[e("strong",[_._v("三次挥手")])]),_._v(" "),e("ul",[e("li",[_._v("客户端收到服务端的 "),e("code",[_._v("ACK")]),_._v(" 应答报文后，之后进入 "),e("code",[_._v("FIN_WAIT_2")]),_._v(" 状态。等待服务端处理完数据后，也向客户端发送 "),e("code",[_._v("FIN")]),_._v(" 报文，之后服务端进入 "),e("code",[_._v("LAST_ACK")]),_._v(" 状态。")])]),_._v(" "),e("p",[e("strong",[_._v("四次挥手")])]),_._v(" "),e("ul",[e("li",[_._v("客户端收到服务端的 "),e("code",[_._v("FIN")]),_._v(" 报文后，回一个 "),e("code",[_._v("ACK")]),_._v(" 应答报文，之后进入 "),e("code",[_._v("TIME_WAIT")]),_._v(" 状态")]),_._v(" "),e("li",[_._v("服务器收到了 "),e("code",[_._v("ACK")]),_._v(" 应答报文后，就进入了 "),e("code",[_._v("CLOSED")]),_._v(" 状态，至此服务端已经完成连接的关闭。")]),_._v(" "),e("li",[_._v("客户端在经过 "),e("code",[_._v("2MSL")]),_._v(" 一段时间后，自动进入 "),e("code",[_._v("CLOSED")]),_._v(" 状态，至此客户端也完成连接的关闭。")])]),_._v(" "),e("p",[_._v("你可以看到，每个方向都需要"),e("strong",[_._v("一个 FIN 和一个 ACK")]),_._v("，因此通常被称为"),e("strong",[_._v("四次挥手")]),_._v("。")]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("为什么要挥手四次？")])])]),_._v(" "),e("p",[_._v("再来回顾下四次挥手双方发 "),e("code",[_._v("FIN")]),_._v(" 包的过程，就能理解为什么需要四次了。")]),_._v(" "),e("ul",[e("li",[_._v("关闭连接时，客户端向服务端发送 "),e("code",[_._v("FIN")]),_._v(" 时，仅仅表示客户端不再发送数据了但是还能接收数据。")]),_._v(" "),e("li",[_._v("服务器收到客户端的 "),e("code",[_._v("FIN")]),_._v(" 报文时，先回一个 "),e("code",[_._v("ACK")]),_._v(" 应答报文，而服务端可能还有数据需要处理和发送，等服务端不再发送数据时，才发送 "),e("code",[_._v("FIN")]),_._v(" 报文给客户端来表示同意现在关闭连接。")])]),_._v(" "),e("p",[_._v("从上面过程可知，服务端通常需要等待完成数据的发送和处理，所以服务端的 "),e("code",[_._v("ACK")]),_._v(" 和 "),e("code",[_._v("FIN")]),_._v(" 一般都会分开发送，从而比三次握手导致多了一次。")]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("为什么客户端在TIME-WAIT阶段要等2MSL？")])])]),_._v(" "),e("p",[_._v("为的是确认服务器端是否收到客户端发出的 ACK 确认报文，当客户端发出最后的 ACK 确认报文时，并不能确定服务器端能够收到该段报文。")]),_._v(" "),e("p",[_._v("所以客户端在发送完 ACK 确认报文之后，会设置一个时长为 2MSL 的计时器。")]),_._v(" "),e("p",[_._v("MSL 指的是 Maximum Segment Lifetime：一段 TCP 报文在传输过程中的最大生命周期。")]),_._v(" "),e("p",[_._v("2MSL 即是服务器端发出为 FIN 报文和客户端发出的 ACK 确认报文所能保持有效的最大时长。")]),_._v(" "),e("p",[_._v("服务器端在 1MSL 内没有收到客户端发出的 ACK 确认报文，就会再次向客户端发出 FIN 报文：")]),_._v(" "),e("ul",[e("li",[_._v("如果客户端在 2MSL 内，再次收到了来自服务器端的 FIN 报文，说明服务器端由于各种原因没有接收到客户端发出的 ACK 确认报文。")])]),_._v(" "),e("p",[_._v("客户端再次向服务器端发出 ACK 确认报文，计时器重置，重新开始 2MSL 的计时。")]),_._v(" "),e("ul",[e("li",[_._v("否则客户端在 2MSL 内没有再次收到来自服务器端的 FIN 报文，说明服务器端正常接收了 ACK 确认报文，客户端可以进入 CLOSED 阶段，完成“四次挥手”。")])]),_._v(" "),e("p",[_._v("所以，客户端要经历时长为 2SML 的 TIME-WAIT 阶段;这也是为什么客户端比服务器端晚进入 CLOSED 阶段的原因。")]),_._v(" "),e("p",[_._v("这里同样有个动态过程的图示：")]),_._v(" "),e("p",[e("img",{attrs:{src:"TCPthreefour.assets/7e88e7a8101ff114d1e938761edd3009.gif",alt:"四次挥手动态图示"}})]),_._v(" "),e("p",[_._v("好了，我们的文章到这就……")])])}),[],!1,null,null,null);v.default=o.exports}}]);