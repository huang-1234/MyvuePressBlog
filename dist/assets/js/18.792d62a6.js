(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{522:function(v,_,x){"use strict";x.r(_);var n=x(6),i=Object(n.a)({},(function(){var v=this,_=v.$createElement,x=v._self._c||_;return x("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[x("h1",{attrs:{id:"讲讲kpca"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#讲讲kpca"}},[v._v("#")]),v._v(" 讲讲KPCA")]),v._v(" "),x("h2",{attrs:{id:"kernel-pca-推导"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#kernel-pca-推导"}},[v._v("#")]),v._v(" "),x("a",{attrs:{href:"https://www.cnblogs.com/hainingwyx/p/6834671.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Kernel PCA 推导"),x("OutboundLink")],1)]),v._v(" "),x("h2",{attrs:{id:"算法原理"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#算法原理"}},[v._v("#")]),v._v(" 算法原理")]),v._v(" "),x("p",[v._v("部分数据在低维度线性不可分，但映射到高维度时就可以实现线性划分。通过使用核的技巧就可以实现映射xi→ϕxixi→ϕxi，并在映射得到的新的特征空间进行主成分分析。")]),v._v(" "),x("h3",{attrs:{id:"推导方法1-1"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#推导方法1-1"}},[v._v("#")]),v._v(" 推导方法1[1]")]),v._v(" "),x("p",[v._v("推导建立在PCA的基础上的。需要先掌握PCA。可以参考前一篇"),x("a",{attrs:{href:"http://www.cnblogs.com/hainingwyx/p/6836323.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("博客"),x("OutboundLink")],1)]),v._v(" "),x("p",[v._v("假设在特征空间数据的均值为：")]),v._v(" "),x("p",[v._v("μ=1n∑i=1nϕ(xi)=0μ=1n∑i=1nϕ(xi)=0")]),v._v(" "),x("p",[v._v("有方差：")]),v._v(" "),x("p",[v._v("C=1n∑i=1nϕ(xi)ϕ(xi)TC=1n∑i=1nϕ(xi)ϕ(xi)T")]),v._v(" "),x("p",[v._v("和PCA相类似， 特征向量为：")]),v._v(" "),x("p",[v._v("Cv=λv(1)(1)Cv=λv")]),v._v(" "),x("p",[v._v("因为不知道ϕϕ的形式是怎么样的，并不能直接通过特征分解求vv。")]),v._v(" "),x("p",[v._v("可以证明vv可以表示成高维特征的线性组合")]),v._v(" "),x("p",[v._v("vj=∑i=1nαjiϕ(xi)vj=∑i=1nαjiϕ(xi)")]),v._v(" "),x("p",[v._v("所以求特征向量等价于求因子αjiαji")]),v._v(" "),x("p",[v._v("通过将C,vC,v的表达式代入(1)中可以得到：")]),v._v(" "),x("p",[v._v("Kαj=nλjαj(2)(2)Kαj=nλjαj")]),v._v(" "),x("p",[v._v("其中KK是一个核函数，k(xi,xj)=ϕ(xi)Tϕ(xi),K≠Ck(xi,xj)=ϕ(xi)Tϕ(xi),K≠C对于特定的数据，可认为是已知的。由(2) $\\alpha _j 是是K的特征向量，下面求其约束。注意这里并不是要求其长度为1。特征向量的特征向量，下面求其约束。注意这里并不是要求其长度为1。特征向量v_j$是一个单位向量,\n由")]),v._v(" "),x("p",[v._v("vTjvj=1vjTvj=1")]),v._v(" "),x("p",[v._v("代入vjvj有")]),v._v(" "),x("p",[v._v("∑k=1n∑l=1nαjlαjkϕ(xl)Tϕ(xk)=1∑k=1n∑l=1nαjlαjkϕ(xl)Tϕ(xk)=1")]),v._v(" "),x("p",[v._v("即")]),v._v(" "),x("p",[v._v("αTjKαj=1αjTKαj=1")]),v._v(" "),x("p",[v._v("代入(2)得到")]),v._v(" "),x("p",[v._v("λjnαTjαj=1,∀jλjnαjTαj=1,∀j")]),v._v(" "),x("p",[v._v("以上就是其长度约束。")]),v._v(" "),x("p",[v._v("对于新的数据x，它在主成分的投影坐标为")]),v._v(" "),x("p",[v._v("ϕ(x)Tvj=∑i=1nαjiϕ(x)Tϕ(xi)=∑i=1nαjiK(x,xj)ϕ(x)Tvj=∑i=1nαjiϕ(x)Tϕ(xi)=∑i=1nαjiK(x,xj)")]),v._v(" "),x("p",[v._v("由以上投影坐标可以求。")]),v._v(" "),x("hr"),v._v(" "),x("p",[v._v("一般情况下，特征空间的均值不是0。可以将特征中心化。")]),v._v(" "),x("p",[v._v("ϕ^(xi)=ϕ(xi)−1n∑k=1nϕ(xk)ϕ^(xi)=ϕ(xi)−1n∑k=1nϕ(xk)")]),v._v(" "),x("p",[v._v("相应的核也变成了")]),v._v(" "),x("p",[v._v("K^(xi,xj)=K(xi,xj)−1n∑k=1nK(xi,xk)−1n∑k=1nK(xj,xk)+1n2∑l=1,k=1nK(xl,xk)K^(xi,xj)=K(xi,xj)−1n∑k=1nK(xi,xk)−1n∑k=1nK(xj,xk)+1n2∑l=1,k=1nK(xl,xk)")]),v._v(" "),x("p",[v._v("矩阵形式：")]),v._v(" "),x("p",[v._v("K^(xi,xj)=K−211/nK+11/nK11/nK^(xi,xj)=K−211/nK+11/nK11/n")]),v._v(" "),x("p",[v._v("11/n11/n表示所有元素为1的矩阵。")]),v._v(" "),x("hr"),v._v(" "),x("p",[x("strong",[v._v("KPCA的算法流程")])]),v._v(" "),x("ol",[x("li",[v._v("选择一个核")]),v._v(" "),x("li",[v._v("由(3)建立一个归一化核矩阵")]),v._v(" "),x("li",[v._v("求特征值分解")])]),v._v(" "),x("p",[v._v("K^αi=λiαiK^αi=λiαi")]),v._v(" "),x("ol",[x("li",[v._v("对于新的数据点在主成分的投影为")])]),v._v(" "),x("p",[v._v("yi=∑i=1nαjiK(x,xi),j=1,⋅⋅⋅dyi=∑i=1nαjiK(x,xi),j=1,···d")]),v._v(" "),x("h3",{attrs:{id:"推导方法2-2"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#推导方法2-2"}},[v._v("#")]),v._v(" 推导方法2[2]")]),v._v(" "),x("p",[v._v("假设数据均值为0时，有协方差矩阵，")]),v._v(" "),x("p",[v._v("C=1nXTX=1N[ϕ(x1),...ϕ(xn)]⎡⎣⎢⎢ϕ(x1)T⋮ϕ(xn)T⎤⎦⎥⎥C=1nXTX=1N[ϕ(x1),...ϕ(xn)][ϕ(x1)T⋮ϕ(xn)T]")]),v._v(" "),x("p",[v._v("XX认为是数据在特征空间的表示。因为不知道ϕϕ的形式，所以希望转换成可以用kernel K表示形式")]),v._v(" "),x("p",[v._v("K=XXT=⎡⎣⎢⎢ϕ(x1)Tϕ(x1)⋮ϕ(xn)Tϕ(x1)………ϕ(x1)Tϕ(xn)⋮ϕ(xn)Tϕ(xn)⎤⎦⎥⎥=⎡⎣⎢⎢κ(x1,x1)⋮κ(xn,x1)………κ(x1,xn)⋮κ(xn,xn)⎤⎦⎥⎥K=XXT=[ϕ(x1)Tϕ(x1)…ϕ(x1)Tϕ(xn)⋮…⋮ϕ(xn)Tϕ(x1)…ϕ(xn)Tϕ(xn)]=[κ(x1,x1)…κ(x1,xn)⋮…⋮κ(xn,x1)…κ(xn,xn)]")]),v._v(" "),x("p",[v._v("从kernel矩阵的特征方程(逆向推理)出发：")]),v._v(" "),x("p",[v._v("XXTu=λuXXTu=λu")]),v._v(" "),x("p",[v._v("两边左乘XTXT，整理得到")]),v._v(" "),x("p",[v._v("XTX(XTu)=λ(XTu)XTX(XTu)=λ(XTu)")]),v._v(" "),x("p",[v._v("可以看出XTuXTu是CC的特征向量，因为其受到其为单位向量的约束，有：")]),v._v(" "),x("p",[v._v("v=1||XTu||XTu=1uTXXTu−−−−−−−−√XTu=1uTλu−−−−−√XTu=1λ−−√XTuv=1||XTu||XTu=1uTXXTuXTu=1uTλuXTu=1λXTu")]),v._v(" "),x("p",[v._v("这里令uu也是单位向量。特征向量还是和XX直接相关，仍然是未知的。")]),v._v(" "),x("p",[v._v("直接考虑在特征空间投影之后的坐标(高中向量知识)：")]),v._v(" "),x("p",[v._v("vTϕ(x′)=(1λ−−√XTu)Tϕ(x′)=1λ−−√uTXϕ(x′)=1λ−−√uT⎡⎣⎢⎢ϕ(x1)T⋮ϕ(xn)T⎤⎦⎥⎥ϕ(x′)=1λ−−√uT⎡⎣⎢⎢κ(x1,x′)⋮κ(xn,x′)⎤⎦⎥⎥vTϕ(x′)=(1λXTu)Tϕ(x′)=1λuTXϕ(x′)=1λuT[ϕ(x1)T⋮ϕ(xn)T]ϕ(x′)=1λuT[κ(x1,x′)⋮κ(xn,x′)]")]),v._v(" "),x("p",[v._v("最想要知道的正好是可以计算的。")]),v._v(" "),x("hr"),v._v(" "),x("p",[x("strong",[v._v("题外话")]),v._v("\n特征空间的向量vv可以用特征空间的数据线性表示。因为")]),v._v(" "),x("p",[v._v("v=1λ−−√XTu=1λ−−√[ϕ(x1),...ϕ(xn)]u=1λ−−√∑i=1nuiϕ(xi)=∑i=1nαiϕ(xi)v=1λXTu=1λ[ϕ(x1),...ϕ(xn)]u=1λ∑i=1nuiϕ(xi)=∑i=1nαiϕ(xi)")]),v._v(" "),x("hr"),v._v(" "),x("p",[x("strong",[v._v("KPCA的算法流程")])]),v._v(" "),x("ol",[x("li",[v._v("选择一个核")]),v._v(" "),x("li",[v._v("建立一个归一化核矩阵")]),v._v(" "),x("li",[v._v("求特征值分解")])]),v._v(" "),x("p",[v._v("Ku=λuKu=λu")]),v._v(" "),x("ol",[x("li",[v._v("对于新的数据点在主成分的投影为")])]),v._v(" "),x("p",[v._v("v=1λ−−√uT⎡⎣⎢⎢κ(x1,x′)⋮κ(xn,x′)⎤⎦⎥⎥v=1λuT[κ(x1,x′)⋮κ(xn,x′)]")]),v._v(" "),x("h2",{attrs:{id:"参考文献"}},[x("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),x("p",[v._v("[1]. http://www.cs.haifa.ac.il/~rita/uml_course/lectures/KPCA.pdf\n[2]. https://www.youtube.com/watch?v=G2NRnh7W4NQ")])])}),[],!1,null,null,null);_.default=i.exports}}]);