##  卡塔兰数

令h(0)=1,h(1)=1，卡塔兰数满足[递归]式：

**h(n)= h(0)\*h(n-1) + h(1)\*h(n-2) + ... + h(n-1)h(0) (其中n>=2),这是n阶****[递推]****关系;**

**还可以化简为1阶递推关系: 如h(n)=(4n-2)/(n+1)\*h(n-1)(n>1) h(0)=1**

该递推关系的解为：**h(n)=****C(2n,n)/(n+1)=P(2n,n)/(n+1)!=(2n)!/(n!\*(n+1)!)** **(n=1,2,3,...)**

卡塔兰数列的前几项为(sequence A 0 0 0 1 0 8 in OEIS) [注： n = 0, 1, 2, 3, … n]

1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900, 2674440, 9694845, 35357670, 129644790, 477638700, 1767263190, 6564120420, 24466267020, 91482563640, 343059613650, 1289904147324, 4861946401452, …

### 出栈次序问题

一个栈([无穷大])的进栈序列为1,2,3,..n,有多少个不同的出栈序列?

### 关于这个问题的5种变型

**(2).找零钱（找一半）**

有2n个人排成一行进入剧场。入场费5元。其中只有n个人有一张5元钞票，另外n人只有10元钞票，剧院无其它钞票，问有多少种方法使得只要有10元的人买票，售票处就有5元的钞票找零？

**(3).三角网格**

形如这样的直角三角形网格，从左上角开始，只能向右走和向下走，问总共有多少种走法？

**4).括号排列**

矩阵连乘：

![img](kataer.assets/66805a78efb4dd54c1bcae93843bafea.svg)

 ，共有（n+1）项，依据[乘法结合律]，不改变其顺序，只用括号表示成对的乘积，试问有几种括号化的方案？或者说：有n对括号，可以并列或嵌套排列，共有多少种情况？

**(5).球盒问题**

球分两种颜色，黑色和白色分别各有n只，盒子数量和球的个数相同，每个盒子里面只能放一只球，并且必须满足如下限制,即每一个白球必须和一只黑球配对（白球在黑球前，**允许嵌套**）。

例.用0表示白球，1表示黑球，则：

0011，010101，001011合法。

1100，101010，010110不合法。

**(6).最适合理解的模型**

n个0和n个1组成一个2n位的2进制数，要求从左到右扫描时，1的累计数始终都**小于等于**0的累计数，求满足条件的数有多少？

### 理解方式

| 模型 | 事件1     | 事件2      |
| ---- | --------- | ---------- |
| (1)  | 入栈      | 出栈       |
| (2)  | 用5元支付 | 用10元支付 |
| (3)  | 向下走    | 向右走     |
| (4)  | 左括号    | 右括号     |
| (5)  | 0         | 1          |
| (6)  | 0         | 1          |

注：**同列**事件可视为**等价**，且在题目要求中**事件1**的**次数/大小**需要**始终大于事件2**。

观察模型 (6)：在2n位上填入n个0的方案数为



 。而从



 中减去不符合要求的方案数即为所求答案。

在从左往右扫时，必然会在某一个奇数位2p+1上首先出现p+1个1，和p个0

此后的 [2p+2,2n]上的2n−(2p+1)位有n−p个0, n−p−1个1。如若把后面这部分2n−(2p+1)位的1与0互换，使之成为n−p个1，n−p−1个0，结果得1个由n+1个1和n−1个0组成的2n位数，**即一个不合法的方案必定对应着一个由n+1个1和n-1个0组成的一个排列**。

可以倒过来反证：

任意一个由n+1个1和n-1个0组成的一个排列，由于1的个数多了2个，且2n为偶数，所以必定在某个奇数位2p+1上出现1的个数超过0的个数。同样把后面部分1和0互换，成为了由n个0和n个1组成的2n位数。

由此，每一个不合法的方案总是与**唯一一个**由n+1个1和n−1个0组成的排列一一对应。

于是，不合法的方案数就可以写作：



例如 10100101

是由4个0和4个1组成的8位2[进制]数。但从左而右扫描在第5位（显示为红色）出现0的累计数3超过1的累计数2，它对应于由3个1，5个0组成的10100010。

反过来 10100010

对应于 10100101

因而不合要求的2n位数与n+1个0，n－1个1组成的排列一一对应，故有“卡塔兰数”Catalan

### 类似题目

(1).将多边行划分为三角形问题。将一个[凸多边形]区域分成三角形区域的方法数?

(2).有N个节点的二叉树共有多少种情形？

(3).一位大城市的律师在她住所以北n个街区和以东n个街区处工作。每天她走2n个街区去上班。如果他

从不穿越（但可以碰到）从家到办公室的对角线，那么有多少条可能的道路？

(4).在[圆上]选择2n个点,将这些点成对连接起来使得所得到的n条线段不相交的方法数?

(5).与之相关的还有如NOIP2003 栈等题目。

### 简单代码实现(python)

```python
class Solution:
    def numTrees(self, n: int) -> int:
        #初始化一个数组，并将首个元素初始化为1
        s=[0]*(n+1)
        s[0]=1
 
        #开始循环遍历
        for i in range(1,n+1):
            #为节约内存，首先算出i-1的值
            b=i-1
 
            #为节约内存，只遍历一半，并将这个结果乘以2即可
            for j in range(i//2):
                s[i]+=s[j]*s[b-j]
            s[i]*=2
 
            #当i为奇数时，还要将s[i//2]的值加上
            if i%2==1:
                s[i]+=s[i//2]**2
 
        #返回数组最后一个元素
        return s[-1]
```

### 不同的二叉树

```js
/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  let sum = new Array(n+1).fill(0);
  sum[0] = 1, sum[1] = 1;
  for (let i = 2;i <= n;i++){
    for (let j = 1;j <= i;j++){
      sum[i] += sum[j - 1] * sum[i - j];
    }
  }
  return sum[n]
};
```

事实上我们在方法一中推导出的 G(n)*G*(*n*)函数的值在数学上被称为[卡塔兰数](https://baike.baidu.com/item/catalan/7605685?fr=aladdin) C_n*C**n*。卡塔兰数更便于计算的定义如下:

```js
C(0) = 1; 

C(n+1) = 2(2n+1)*C(n)/(n+2)
```



编码实现

```js
const numTrees = function(n) {
    let C = 1;
    for (let i = 0; i < n; ++i) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};
```



