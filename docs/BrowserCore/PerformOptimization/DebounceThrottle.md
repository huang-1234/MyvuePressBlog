# 防抖和节流

啥叫防抖，啥叫节流？第一次听说是不是感觉不知道是啥玩意。

如果你用过window.onscroll事件，那这个对你来说就容易理解多了，话不多说，下文介绍。

`防抖` 与 `节流` 是前端在优化性能问题上，经常使用的两种技术手段。比如 `input`，`scroll`，`resize`，`mousemove` 等事件，如果不加以控制，频繁的触发，无疑将会带来额外的性能开销，极端情况下，可能造成死机卡死现象。

所以简单来说就是防抖就相当于事件等待用户停止操作，节流就是冷却时间结束，执行业务函数。

先说一个常见的功能，很多网站会提供这么一个按钮：用于返回顶部。这个功能我写在了<a href="/JS">JS首页</a>

这个按钮只会在滚动到距离顶部一定位置之后才出现，那么我们现在抽象出这个功能需求-- **监听浏览器滚动事件，返回当前滚条与顶部的距离**

```js
function showScrollTop() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  console.log('滚动条的位置：' + scrollTop);
}
window.onscroll  = showScrollTop
```

执行一下，你会发现，就稍微滑动一下，这个函数就掉用了十几次。如果这个函数是一段请求数据的业务代码，你想一想，得请求多少次，极其浪费浏览器性能！！！

## 防抖(debounce)

基于上述场景，首先提出第一种思路：**在第一次触发事件时，不立即执行函数，而是给出一个期限值比如300ms**，然后：

- 如果在300ms内没有再次触发滚动事件，那么就执行函数
- 如果在300ms内再次触发滚动事件，那么当前的计时取消，重新开始计时

**效果**：如果短时间内大量触发同一事件，只会执行一次函数。

**实现**：既然前面都提到了计时，那实现的关键就在于`setTimeout`这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现：

```html
<script>
  function debounce(fn, delay) { // 延迟执行fn，fn就是我们的业务代码
    let timeId = null // 用来取消定时器的，也就是意味着下一次滑动会重新延迟调用业务函数fn
    return function () {
      if (timeId) {
        // 我们把下面的取消定时器的代码注释掉，会发现，虽然fn延迟调用，但是确实一瞬间吊用了十几次
        clearTimeout(timeId);
      }
      timeId = setTimeout(fn, delay)
    }
  }
  function showScrollTop() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('防抖后滚动条的位置：' + scrollTop);
  }
  // 当我们一直滚动，浏览器会一直帮我们调用，下面的函数，所以我们要在debounce里面传递业务函数和延迟
  // delay的话，就需要在debounce函数内返回一个函数，
  // 这个函数的目的就在于无论里滑动多少次都不会立即调用，而是会延迟delay毫秒
  window.onscroll = debounce(showScrollTop, 1000)
</script>
```

此时会发现，必须在停止滚动1秒以后，才会打印出滚动条位置。

到这里，已经把**防抖**实现了，现在给出定义：

- 对于**短时间内连续触发**的事件（上面的滚动事件），**防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次。**

## 节流(throttle)

继续思考，使用上面的防抖方案来处理问题的结果是：

- 如果在限定时间段内，不断触发滚动事件（比如某个用户闲着无聊，按住滚动不断的拖来拖去），只要不停止触发，理论上就永远不会输出当前距离顶部的距离。

**但是如果产品同学的期望处理方案是：即使用户不断拖动滚动条，也能在某个时间间隔之后给出反馈呢？**

我们可以设计一种**类似控制阀门一样定期开放的函数，也就是让函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活**

**效果**：如果短时间内大量触发同一事件，那么**在函数执行一次之后，该函数在指定的时间期限内不再工作**，直至过了这段时间才重新生效。

**实现** 这里借助`setTimeout`来做一个简单的实现，加上一个状态位`valid`来表示当前函数是否处于工作状态：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      #box1 {
        height: 800vh;
        width: 50%;
        background-color: aqua;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
    <script>
      function showScrollTop() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log('节流后滚动条的位置：' + scrollTop);
      }
      // 当我们一直滚动，浏览器会一直帮我们调用，下面的函数，所以我们要在延迟函数里面传递业务函数和延迟
      // delay的话，就需要在debounce函数内返回一个函数，
      // 这个函数的目的就在于无论里滑动多少次都不会立即调用，而是会延迟delay毫秒
      function throttle(fn, delay) {
        let valve = true;
        return function () {
          if (!valve) {
            return false;// 时间delay未到，不执行fn
          } else {
            // 如果不设置微false，在下一个定时执行fn的时间内会大量的激活onscroll事件，
            //也就是执行throttle函数
            valve = false;
            setTimeout(() => {
              fn();
              //fn执行完以后，就相当于技能用完以后，开启冷却倒计时
              // valve = fales 就相当于在王者荣耀里面技能已经好了，你还没使用，一旦使用，就设置valve=true
              valve = true;
            })
          }
        }
      }
      window.onscroll = throttle(showScrollTop, 600)
    </script>
  </body>
</html>
```

## throttle 应用场景

函数节流有哪些应用场景？哪些时候我们需要间隔一定时间触发回调来控制函数调用频率？

- DOM 元素的拖拽功能实现（mousemove）
- 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
- 计算鼠标移动的距离（mousemove）
- Canvas 模拟画板功能（mousemove）
- 搜索联想（keyup）
- 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次 [#21 (comment)](https://github.com/lessfish/underscore-analysis/issues/21#issuecomment-252802650)

## debounce 应用场景

函数去抖有哪些应用场景？哪些时候对于连续的事件响应我们只需要执行一次回调？

- 每次 resize/scroll 触发统计事件
- 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

## 小结

函数节流和函数去抖的核心其实就是限制某一个方法被频繁触发，而一个方法之所以会被频繁触发，大多数情况下是因为 DOM 事件的监听回调，而这也是函数节流以及去抖多数情况下的应用场景。至于函数节流和去抖方法的具体代码实现以及调用方式

## 联想

上面的防抖的思想，也让我在写项目当中想到了，因为在项目启动时添加修改，但是敲击一次键盘都会出现无效的更新，能不能写个插件使得这个更新可以在我们自定义的时间之后更新，这样再加上热更新，就能使我们很好的调试我们的代码了！！！





