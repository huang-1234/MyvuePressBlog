(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{518:function(n,i,t){"use strict";t.r(i);var a=t(6),r=Object(a.a)({},(function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[n._v("#")]),n._v(" 算法")]),n._v(" "),t("h2",{attrs:{id:"一、定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、定义"}},[n._v("#")]),n._v(" 一、定义")]),n._v(" "),t("p",[n._v("每次决策依赖于当前状态，又随即引起状态的转移。一个决策序列就是在变化的状态中产生出来的，所以，这种多阶段最优化决策解决问题的过程就称为动态规划。")]),n._v(" "),t("h2",{attrs:{id:"二、思想与策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、思想与策略"}},[n._v("#")]),n._v(" 二、思想与策略")]),n._v(" "),t("p",[n._v("基本思想与分治法类似，也是将待求的问题分解为若干个子问题，按顺序求子问题的解。前一子问题的解，为后一子问题提供有用信息，在求解任意一子问题时，列出所有可能的局部解，通过决策保留那些有可能达到最优的局部解，丢弃其他局部解。依次解决各个子问题，最后一个子问题就是初始问题的解。")]),n._v(" "),t("p",[n._v("由于动态规划的问题多数有重叠子问题这个特点，为减少计算，对每一个子问题，只解一次，将不同阶段的不同状态保存在一个二维数组中")]),n._v(" "),t("p",[n._v("思路：将以复杂问题分解为多个子问题，无论该子问题是否被用到，只要它被计算过，就将其填入表中。")]),n._v(" "),t("h2",{attrs:{id:"三、与分治法的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、与分治法的区别"}},[n._v("#")]),n._v(" 三、与分治法的区别")]),n._v(" "),t("p",[n._v("分治法产生的子问题之间相互独立，而动态规划算法产生的子问题之间不是相互独立的，即下一个子阶段的求解是在上一子阶段的求解的基础上，进一步求解")]),n._v(" "),t("h2",{attrs:{id:"四、适用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、适用情况"}},[n._v("#")]),n._v(" 四、适用情况")]),n._v(" "),t("p",[n._v("1、最优化原理：如果问题的最优解所包含的子问题也是最优的，就称该问题具有最优子结构，即满足最优化原理。")]),n._v(" "),t("p",[n._v("2、无后效性：即某阶段状态一旦确定，就不受这个状态以后决策的影响。也就是说，某状态以后的过程不会影响以前的状态，只与当前状态有关。")]),n._v(" "),t("p",[n._v("3、有重叠子问题：即子问题之间是不独立的，一个子问题在下一阶段决策中可能被多次使用到。（该性质并不是动态规划适用的必要条件，但是如果没有这条性质，动态规划算法同其他算法相比就不具备优势）")]),n._v(" "),t("h2",{attrs:{id:"五、基本步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、基本步骤"}},[n._v("#")]),n._v(" 五、基本步骤")]),n._v(" "),t("p",[n._v("初始状态→│决策1│→│决策2│→…→│决策n│→结束状态")]),n._v(" "),t("p",[n._v("1、划分：按照问题的特征，把问题分为若干阶段。注意：划分后的阶段一定是有序的或者可排序的")]),n._v(" "),t("p",[n._v("2、确定状态和状态变量：将问题发展到各个阶段时所处的各种不同的客观情况表现出来。状态的选择要满足无后续性")]),n._v(" "),t("p",[n._v("3、确定决策并写出状态转移方程：状态转移就是根据上一阶段的决策和状态来导出本阶段的状态。根据相邻两个阶段状态之间的联系来确定决策方法和状态转移方程")]),n._v(" "),t("p",[n._v("4、边界条件：状态转移方程是一个递推式，因此需要找到递推终止的条件")]),n._v(" "),t("h2",{attrs:{id:"六、算法实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、算法实现"}},[n._v("#")]),n._v(" 六、算法实现")]),n._v(" "),t("p",[n._v("动态规划三要素：")]),n._v(" "),t("p",[n._v("1、问题的阶段")]),n._v(" "),t("p",[n._v("2、每个阶段的状态")]),n._v(" "),t("p",[n._v("3、相邻两个阶段之间的递推关系")]),n._v(" "),t("p",[n._v("整个求解过程可以用一张最优决策表来描述，最优决策表是一张二维表（行：决策阶段，列：问题的状态）表格需要填写的数据一般对应此问题的在某个阶段某个状态下的最优值（如最短路径，最长公共子序列，最大价值等），填表的过程就是根据递推关系，最后根据整个表格的数据通过简单的取舍或者运算求得问题的最优解。")]),n._v(" "),t("p",[n._v("例如：")]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("f(n,m)=max{f(n-1,m), f(n-1,m-w[n])+P(n,m)}\n")])])]),t("h2",{attrs:{id:"七、基本框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、基本框架"}},[n._v("#")]),n._v(" 七、基本框架")]),n._v(" "),t("p",[n._v("代码")]),n._v(" "),t("div",{staticClass:"language-C++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("for(j=1; j<=m; j=j+1) // 第一个阶段\n  xn[j] = 初始值;\n\n for(i=n-1; i>=1; i=i-1)// 其他n-1个阶段\n  for(j=1; j>=f(i); j=j+1)//f(i)与i有关的表达式\n  xi[j]=j=max（或min）{g(xi-1[j1:j2]), ......, g(xi-1[jk:jk+1])};\n\nt = g(x1[j1:j2]); // 由子问题的最优解求解整个问题的最优解的方案\n\nprint(x1[j1]);\n\nfor(i=2; i<=n-1; i=i+1）\n{ \n  t = t-xi-1[ji];\n\n  for(j=1; j>=f(i); j=j+1)\n    if(t=xi[ji])\n      break;\n}\n")])])]),t("p",[n._v("八、例题")]),n._v(" "),t("p",[n._v("度度熊与邪恶大魔王")]),n._v(" "),t("p",[n._v("度度熊为了拯救可爱的公主，于是与邪恶大魔王战斗起来。邪恶大魔王的麾下有n个怪兽，每个怪兽有a[i]的生命值，以及b[i]的防御力。度度熊一共拥有m种攻击方式，第i种攻击方式，需要消耗k[i]的晶石，造成p[i]点伤害。当然，如果度度熊使用第i个技能打在第j个怪兽上面的话，会使得第j个怪兽的生命值减少p[i]-b[j]，当然如果伤害小于防御，那么攻击就不会奏效。如果怪兽的生命值降为0或以下，那么怪兽就会被消灭。当然每个技能都可以使用无限次。请问度度熊最少携带多少晶石，就可以消灭所有的怪兽。")]),n._v(" "),t("p",[n._v("代码：")]),n._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('#include "iostream"\n#include "algorithm"\nusing namespace std;\n#define INF 1e18\nint main()\n{\n  long long n,m;\n  int k[1001],p[1001],a[100001],b[100001];\n  long long dp[11][1001];     //dp[j][i]为防御力为 i ,打出 j点伤害以上时所需的最少晶石。\n  while(cin>>n>>m)\n  {\n    for(int i=1;i<=n;i++)\n      cin>>a[i]>>b[i];\n    for(int i=1;i<=m;i++)\n      cin>>k[i]>>p[i];\n    for(int i=0;i<=10;i++)\n    {\n      for(int j=1;j<=1000;j++)\n        dp[i][j]=INF;\n      dp[i][0]=0;     //血量为0的怪物不需要晶石\n      for(int j=1;j<=m;j++)\n      {\n        if(p[j]<=i)    //打不过，继续下一次循环\n          continue;\n        for(int q=1;q<=1000;q++) \n        {\n          int w=q-p[j]+i>0?q-p[j]+i:0; //实际造成的伤害效果\n          dp[i][q]=min((long long)dp[i][w]+k[j],dp[i][q]); //选择消耗最少的技能\n        }\n      }\n    }\n    long long num=0;\n    for(int i=1;i<=n;i++)\n     num+=dp[b[i]][a[i]];\n    if(num>=INF)\n     cout<<-1<<endl;\n    else\n     cout<<num<<endl;\n  }\n  return 0;\n}\n')])])])])}),[],!1,null,null,null);i.default=r.exports}}]);