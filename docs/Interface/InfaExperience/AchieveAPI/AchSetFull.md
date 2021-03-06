# 数组去重Full

## 1. ES6中的new Set()方法

```js
function dRemoval(arr){return Array.from(new Set(arr));}
```

Set是ES6中一种新的数据类型，类似于数组，但是其成员都是唯一的，没有重复值。
通过new Set()将数组转化为没有重复值的Set类型；然后通过Array.from将Set类型转回数组类型。

## 2. indexOf()方法

```js
function dRemoval(arr){
	let newArr = [];
	for (let i in arr){
		if(newArr.indexOf(arr[i]) === -1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
```

对原数组进行遍历，若新数组找不到原数组的成员，则indexOf()方法的值为-1，接着用push将其加入新的数组中。

## 3. filter()方法

```js
function dRemoval(arr){
	let newArr = arr.filter((item, index, arr)=>
arr.indexOf(item) === index);
	return newArr;
}
```

filter()是数组的遍历方法，参数为一个函数，返回一个参数函数返回值为true的成员组成的数组。即只有原数组中的成员满足arr.indexOf(item) === index才将其加入到新的数组中。

## 4. includes()方法

```js
function duRemoval(arr){
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (! newArr.includes(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}	
```

类似indexOf()方法，只是通过数组的includes()方法判断成员是否在新数组中存在。

## 5. 双重遍历方法

```js
function duplicateRemoval4(arr){
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if(arr[i] === arr[j]){
				arr.splice(j, 1);
				j--;
			}
		}
	}
	return arr;
}
```

# 从数组去重中学习新知识

这是前端面试题系列的第 8 篇，你可能错过了前面的篇章，可以在这里找到：

- [JavaScript 中的事件机制（从原生到框架）](https://segmentfault.com/a/1190000018266823)
- [理解函数的柯里化](https://segmentfault.com/a/1190000018180159)
- [ES6 中箭头函数的用法](https://segmentfault.com/a/1190000018119191)
- [this 的原理以及用法](https://segmentfault.com/a/1190000017957307)
- [伪类与伪元素的区别及实战](https://segmentfault.com/a/1190000017784553)
- [如何实现一个圣杯布局？](https://segmentfault.com/a/1190000017540629)
- [今日头条 面试题和思路解析](https://segmentfault.com/a/1190000017480929)

前端面试中经常会问到数组去重的问题。因为在平时的工作中遇到复杂交互的时候，需要知道该如何解决。另外，我在问应聘者这道题的时候，更多的是想考察 2 个点：对 Array 方法的熟悉程度，还有逻辑算法能力。一般我会先让应聘者说出几种方法，然后随机抽取他说的一种，具体地写一下。

这里有一个通用的面试技巧：自己不熟悉的东西，千万别说！我就碰到过几个应聘者，想尽可能地表现自己，就说了不少方法，随机抽了一个，结果就没写出来，很尴尬。

ok，让我们马上开始今天的主题。会介绍 10 种不同类型的方法，一些类似的方法我做了合并，写法从简到繁，其中还会有 loadsh 源码中的方法。

## 10 种去重方法

假设有一个这样的数组： `let originalArray = [1, '1', '1', 2, true, 'true', false, false, null, null, {}, {}, 'abc', 'abc', undefined, undefined, NaN, NaN];`。后面的方法中的源数组，都是指的这个。

## 1、ES6 的 Set 对象

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。

```js
let resultArr = Array.from(new Set(originalArray));

// 或者用扩展运算符
let resultArr = [...new Set(originalArray)];

console.log(resultArr);
// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN]
```

Set 并不是真正的数组，这里的 `Array.from` 和 `...` 都可以将 Set 数据结构，转换成最终的结果数组。

这是最简单快捷的去重方法，但是细心的同学会发现，这里的 `{}` 没有去重。可是又转念一想，2 个空对象的地址并不相同，所以这里并没有问题，结果 ok。

## 2、Map 的 has 方法

把源数组的每一个元素作为 key 存到 Map 中。由于 Map 中不会出现相同的 key 值，所以最终得到的就是去重后的结果。

```js
const resultArr = new Array();

for (let i = 0; i < originalArray.length; i++) {
    // 没有该 key 值
    if (!map.has(originalArray[i])) {
        map.set(originalArray[i], true);
        resultArr.push(originalArray[i]);
    }
}

console.log(resultArr);
// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN]
```

但是它与 Set 的数据结构比较相似，结果 ok。

## 3、indexOf 和 includes

建立一个新的空数组，遍历源数组，往这个空数组里塞值，每次 push 之前，先判断是否已有相同的值。

判断的方法有 2 个：indexOf 和 includes，但它们的结果之间有细微的差别。先看 indexOf。

```js
const resultArr = [];
for (let i = 0; i < originalArray.length; i++) {
    if (resultArr.indexOf(originalArray[i]) < 0) {
        resultArr.push(originalArray[i]);
    }
}
console.log(resultArr);
// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN, NaN]
```

indexOf 并不没处理 `NaN`。

再来看 includes，它是在 ES7 中正式提出的。

```js
const resultArr = [];
for (let i = 0; i < originalArray.length; i++) {
    if (!resultArr.includes(originalArray[i])) {
        resultArr.push(originalArray[i]);
    }
}
console.log(resultArr);
// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN]
```

includes 处理了 `NaN`，结果 ok。

## 4、sort

先将原数组排序，生成新的数组，然后遍历排序后的数组，相邻的两两进行比较，如果不同则存入新数组。

```js
const sortedArr = originalArray.sort();

const resultArr = [sortedArr[0]];

for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] !== resultArr[resultArr.length - 1]) {
        resultArr.push(sortedArr[i]);
    }
}
console.log(resultArr);
// [1, "1", 2, NaN, NaN, {…}, {…}, "abc", false, null, true, "true", undefined]
```

从结果可以看出，对源数组进行了排序。但同样的没有处理 `NaN`。

## 5、双层 for 循环 + splice

双层循环，外层遍历源数组，内层从 i+1 开始遍历比较，相同时删除这个值。

```js
for (let i = 0; i < originalArray.length; i++) {
    for (let j = (i + 1); j < originalArray.length; j++) {
        // 第一个等于第二个，splice去掉第二个
        if (originalArray[i] === originalArray[j]) {
            originalArray.splice(j, 1);
            j--;
        }
    }
}

console.log(originalArray);
// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN, NaN]
```

splice 方法会修改源数组，所以这里我们并没有新开空数组去存储，最终输出的是修改之后的源数组。但同样的没有处理 `NaN`。

## 6、原始去重

定义一个新数组，并存放原数组的第一个元素，然后将源数组一一和新数组的元素对比，若不同则存放在新数组中。

```js
let resultArr = [originalArray[0]];
for(var i = 1; i < originalArray.length; i++){
    var repeat = false;
    for(var j=0; j < resultArr.length; j++){
        if(originalArray[i] === resultArr[j]){
            repeat = true;
            break;
        }
    }

    if(!repeat){
       resultArr.push(originalArray[i]);
    }
}
console.log(resultArr);
// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN, NaN]
```

这是最原始的去重方法，很好理解，但写法繁琐。同样的没有处理 `NaN`。

## 7、ES5 的 reduce

reduce 是 ES5 中方法，常用于值的累加。它的语法：

```js
arr.reduce(callback[, initialValue])
```

reduce 的第一个参数是一个 callback，callback 中的参数分别为： Accumulator(累加器)、currentValue(当前正在处理的元素)、currentIndex(当前正在处理的元素索引，可选)、array(调用 reduce 的数组，可选)。

reduce 的第二个参数，是作为第一次调用 callback 函数时的第一个参数的值。如果没有提供初始值，则将使用数组中的第一个元素。

利用 reduce 的特性，再结合之前的 includes(也可以用 indexOf)，就能得到新的去重方法：

```js
const reducer = (acc, cur) => acc.includes(cur) ? acc : [...acc, cur];

const resultArr = originalArray.reduce(reducer, []);

console.log(resultArr);
// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN]
```

这里的 `[]` 就是初始值(initialValue)。acc 是累加器，在这里的作用是将没有重复的值塞入新数组（它一开始是空的）。 reduce 的写法很简单，但需要多加理解。它可以处理 `NaN`，结果 ok。

## 8、对象的属性

每次取出原数组的元素，然后在对象中访问这个属性，如果存在就说明重复。

```js
const resultArr = [];
const obj = {};
for(let i = 0; i < originalArray.length; i++){
    if(!obj[originalArray[i]]){
        resultArr.push(originalArray[i]);
        obj[originalArray[i]] = 1;
    }
}
console.log(resultArr);
// [1, 2, true, false, null, {…}, "abc", undefined, NaN]
```

但这种方法有缺陷。从结果看，它貌似只关心值，不关注类型。还把 {} 给处理了，但这不是正统的处理办法，所以 **不推荐使用**。

## 9、filter + hasOwnProperty

filter 方法会返回一个新的数组，新数组中的元素，通过 hasOwnProperty 来检查是否为符合条件的元素。

```js
const obj = {};
const resultArr = originalArray.filter(function (item) {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
});

console.log(resultArr);
// [1, "1", 2, true, "true", false, null, {…}, "abc", undefined, NaN]
```

这 `貌似` 是目前看来最完美的解决方案了。这里稍加解释一下：

- hasOwnProperty 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性。
- `typeof item + item` 的写法，是为了保证值相同，但类型不同的元素被保留下来。例如：第一个元素为 number1，第二第三个元素都是 string1，所以第三个元素就被去除了。
- `obj[typeof item + item] = true` 如果 hasOwnProperty 没有找到该属性，则往 obj 里塞键值对进去，以此作为下次循环的判断依据。
- 如果 hasOwnProperty 没有检测到重复的属性，则告诉 filter 方法可以先积攒着，最后一起输出。

`看似` 完美解决了我们源数组的去重问题，但在实际的开发中，一般不会给两个空对象给我们去重。所以稍加改变源数组，给两个空对象中加入键值对。

```js
let originalArray = [1, '1', '1', 2, true, 'true', false, false, null, null, {a: 1}, {a: 2}, 'abc', 'abc', undefined, undefined, NaN, NaN];
```

然后再用 filter + hasOwnProperty 去重。

然而，结果竟然把 `{a: 2}` 给去除了！！！这就不对了。

所以，这种方法有点去重 `过头` 了，也是存在问题的。

## 10、lodash 中的 _.uniq

灵机一动，让我想到了 lodash 的去重方法 _.uniq，那就尝试一把：

```js
  console.log(_.uniq(originalArray));

// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN]
```

用法很简单，可以在实际工作中正确处理去重问题。

然后，我在好奇心促使下，看了它的源码，指向了 baseUniq 文件，它的源码如下：

```js
function baseUniq(array, iteratee, comparator) {
  let index = -1
  let includes = arrayIncludes
  let isCommon = true

  const { length } = array
  const result = []
  let seen = result

  if (comparator) {
    isCommon = false
    includes = arrayIncludesWith
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    const set = iteratee ? null : createSet(array)
    if (set) {
      return setToArray(set)
    }
    isCommon = false
    includes = cacheHas
    seen = new SetCache
  }
  else {
    seen = iteratee ? [] : result
  }
  outer:
  while (++index < length) {
    let value = array[index]
    const computed = iteratee ? iteratee(value) : value

    value = (comparator || value !== 0) ? value : 0
    if (isCommon && computed === computed) {
      let seenIndex = seen.length
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer
        }
      }
      if (iteratee) {
        seen.push(computed)
      }
      result.push(value)
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed)
      }
      result.push(value)
    }
  }
  return result
}
```

有比较多的干扰项，那是为了兼容另外两个方法，_.uniqBy 和 _.uniqWith。去除掉之后，就会更容易发现它是用 while 做了循环。当遇到相同的值得时候，continue outer 再次进入循环进行比较，将没有重复的值塞进 result 里，最终输出。

另外，_.uniqBy 方法可以通过指定 key，来专门去重对象列表。

```js
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

_.uniqWith 方法可以完全地给对象中所有的键值对，进行比较。

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

这两个方法，都还挺实用的。

## 总结

从上述的这些方法来看，ES6 开始出现的方法（如 Set、Map、includes），都能完美地解决我们日常开发中的去重需求，关键它们还都是原生的，写法还更简单。

所以，我们提倡拥抱原生，因为它们真的没有那么难以理解，至少在这里我觉得它比 lodash 里 _.uniq 的源码要好理解得多，关键是还能解决问题。