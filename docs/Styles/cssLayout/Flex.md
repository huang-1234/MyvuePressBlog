# 4. flex布局

来源：布局的传统解决方案，基于[盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖 [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 属性 + [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)属性 + [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)属性。它对于那些特殊布局非常不方便，比如，[垂直居中](https://css-tricks.com/centering-css-complete-guide/)就不容易实现。2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

>  display:flex

## 一、任何一个容器都可以指定为 Flex 布局。

> ```css
> .box{
>   	display: flex;
> }
> ```

行内元素也可以使用 Flex 布局。

> ```css
> .box{
>   	display: inline-flex;
> }
> ```

Webkit 内核的浏览器，必须加上`-webkit`前缀。

> ```css
> .box{
>     display: -webkit-flex; /* Safari */
>     display: flex;
> }
> ```

注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

## 二、基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 三、容器的属性

<font color=red>以下6个属性设置在容器上。</font>

> - flex-direction  |主轴方向，取值：row | row-reverse | column | column-reverse;
> - flex-wrap        | 是否换行，默认不换：nowrap | wrap | wrap-reverse;
> - flex-flow    | flex-direction || flex-wrap;  默认值为`row nowrap`
> - justify-content  |  项目在主轴上的对齐方式:flex-start | flex-end | center | space-between | space-around;
> - align-items    | 项目在交叉轴上如何对齐:flex-start | flex-end | center | baseline | stretch;
> - align-content |多根轴线的对齐方式:flex-start | flex-end | center | space-between | space-around | stretch;

### 3.1 flex-direction属性

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

> ```css
> .box {
>   	flex-direction: row | row-reverse | column | column-reverse;
> }
> // 
> row（默认值）：主轴为水平方向，起点在左端。
> row-reverse：主轴为水平方向，起点在右端。
> column：主轴为垂直方向，起点在上沿。
> column-reverse：主轴为垂直方向，起点在下沿。
> ```

### 3.2 flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
} // nowrap 不换行(默认)  wrap 换行，第一行在上，wrap-reverse 第一行在下
```

### 3.3 flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

> ```css
> .box {
>   	flex-flow: flex-direction || flex-wrap;
> }
> ```

### 3.4 justify-content属性

`justify-content`属性定义了项目在主轴上的对齐方式。

> ```css
> .box {
> 	justify-content: flex-start | flex-end | center | space-between | space-around;
> }
> // 它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。
> flex-start（默认值）：左对齐
> flex-end：右对齐
> center： 居中
> space-between：两端对齐，项目之间的间隔都相等。
> space-around：每个项目两侧的间隔相等。所以，<font color=red>项目之间的间隔比项目与边框的间隔大一倍。</font>
> ```

### 3.5 align-items属性

`align-items`属性定义项目在交叉轴上如何对齐。

> ```css
> .box {
>   	align-items: flex-start | flex-end | center | baseline | stretch;
> }
> // 它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。
> flex-start：交叉轴的起点对齐。
> flex-end：交叉轴的终点对齐。
> center：交叉轴的中点对齐。
> baseline: 项目的第一行文字的基线对齐。
> stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
> ```

### 3.6 align-content属性 

<font color=red>// align-content: space-around;要想起作用。 必须得有flex-wrap!=nowrap</font>

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

> ```css
> .box {
>   	align-content: flex-start | flex-end | center | space-between | space-around | stretch;
> }
> // 该属性可能取6个值。
> flex-start：与交叉轴的起点对齐。
> flex-end：与交叉轴的终点对齐。
> center：与交叉轴的中点对齐。
> space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
> space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
> stretch（默认值）：轴线占满整个交叉轴。
> ```

## 四、项目的属性

以下6个属性设置在项目上。

> - `order`  |排列顺序。数值越小，排列越靠前，默认为0。
> - `flex-grow`  |项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大
> - `flex-shrink`  |项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
> - `flex-basis`   |length | auto; /* default auto */
> - `flex`  |flex属性是flex-grow, flex-shrink和 flex-basis的简写，默认值为`0 1 auto`
> - `align-self`  |auto | flex-start | flex-end | center | baseline | stretch;

### 4.1 order属性

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

> ```css
> .item {
>   	order: <integer>;
> }
> ```

### 4.2 flex-grow属性

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

> ```css
> .item {
>   	flex-grow: <number>; /* default 0 */
> }
> ```

### 4.3 flex-shrink属性

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

> ```css
> .item {
>   	flex-shrink: <number>; /* default 1 */
> }
> //如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
> ```

### 4.4 flex-basis属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

> ```css
> .item {
>   	flex-basis: length | auto; /* default auto */
> }
> ```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

### 4.5 flex属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

> ```css
> .item {
>   	flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
> }
> ```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### 4.6 align-self属性

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

> ```css
> .item {
>   	align-self: auto | flex-start | flex-end | center | baseline | stretch;
> }
> ```

## 实战演练

> 上图

![image-20210328115054582](/images/CSS/display.assets/image-20210328115054582.png)

> html

```html
<div class="container">
    <div class="box1">
      <div class="item"></div>
      <div class="item" id=item2></div>
      <div class="item" id=item3></div>
      
<!--       <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div> -->
    </div>
  </div>
```

> less

```less
.container {
  display:flex;
  justify-content: center;
  margin-top: 100px;
  .box1 {
    @box-width:200px;
    @box-height:200px;
    @item-margin:5px; // 点item的外边距
    width: @box-width;
    height: @box-height;
    // background-color: aquamarine;
    border: 1px solid green;
    border-radius: 20px;
    display: flex;
    flex-flow: row wrap;
    // 下面两句话让只有一点的骰子放在最中间
/*     justify-content: center;
    align-items: center; */
    justify-content: space-between;
    .item {
      width: 0.25*@box-height;
      height: 0.25*@box-height;
      background-color: black;
      // box-sizing: border-box; //可用可不用
      border-radius: 25px;
      margin: @item-margin;
    }
     #item2{
      align-self: center;
    }
     #item3{
      align-self: flex-end;
    }
  }
}
```

