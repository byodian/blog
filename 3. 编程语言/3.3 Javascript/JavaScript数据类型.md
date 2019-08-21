[TOC]
 ## 编写数字的方法

 JavaScript 中的所有数字都以 64 位格式 IEEE-754 存储，也称“双精度”。

 - 长数字 `e 表示法`
 - 十六进制、八进制和二进制数字

 ### toString(base)

 ### 四舍五入

 - Math.floor 向下舍入
 - Math.ceil 向上舍入
 - math.round 四舍五入
 - Math.trunc 删除小数点后的内容而不舍入


 ### 不精确计算

 使用分数会损失精度，精度缺失可能会导致数字的增加和减小。除以2的幂的分数在二进制系统中被精确地表示。


数字在四舍五入之前，我们应该把它接近整数：

```js
alert(6.35.toFixed(1)); // 结果为 6.3 ，精度缺失
alert(6.35.toFixed(20)); // 6.34999999999999964473 , 精度缺失

// 围绕除以 2 的
```

 ### isFinite、isNaN 和 Object.is 

 - Infinite 和 -infinite
 - NaN 代表一个错误

它们属于**数字** 类型，但不是 **普通** 数字，因此有特殊函数可以检查它们。

 ### parseInt 和 parseFloat

 提取字符串中的数值。parseInt 返回一个整数，parseFloat 返回一个浮点数。

使用加号 + 或 Number() 的数字转换是严格的。如果一个值不完全是一个数字，就会失败。
```js
console.log(+'100px'); // NaN
```

parseInt(str, radix) 的第二个参数，指定数字系统的基础，因此 parseInt 可以解析其他进制数字。

```js
parseInt('0xff', 16) // 255
```

### 其他函数对象

内置对象 Math 

参考文档：[doc for the Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

### 小结

所有数字函数（包括 isFinite）中的空字符串或空格字符串均被视为 0。

## 字符串

所有的字符串都使用 UTF-16 编码。即：每个字符都有相应的数字代码。有特殊的方法可以获取代码的字符并返回。

str.codePointAt(pos)

String.fromCodePoint(code)

### 引号

字符串可以包含在单引号、双引号或反引号中。单引号和双引号没有本质区别，但反引号允许我们将表达式嵌入到字符串中，还允许字符串跨行。。

```js
function sum (a, b) {
    return a + b;
}

alert(`${sum(2, 3)}`); // 字符串嵌入表达式

let name = `John
* Bob
* Jimmy
` ;
```

### 特殊字符

转义字符 \

| 字符         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| \b           | Backsapce                                                    |
| \f           | Form feed                                                    |
| \n           | New line                                                     |
| \r           | Carriage return                                              |
| \t           | Tab                                                          |
| \uNNNN       | 16 进制的 NNNN 的unicode 符号，例如 \u00A9—— 是版权符号的 unicode ©。它必须是 4 个16 进制数字。 |
| \u{NNNNNNNN} | 一些罕见字符使用两个 unicode 符号进行编码，最多占用 4 个字节。这个长的 unicode 需要它周围的括号。 |

```js
let str = 'hello\nword'; 
```

### 字符串长度

length 属性

```js
let str = 'what\n';
alert(str.length); // 5 ,\n 是一个单独的“特殊”字符
```

### 访问字符串

在 x 位置获取一个字符串，可以使用**方括号 [x] 或者 str.charAt(x) 方法**。方括号是获取字符的一种现代化方法，而 charAt 是历史原因才存在的。

**区别**：如果没有找到字符，[] 返回 undefined，而 charAt 返回一个空字符串

```js
let str = 'Hello World';
alert(str[0]); // H
alert(str.charAt(0));  // H
```

还可以使用 for...of 遍历字符

```JS
for(let char of 'Hello') {
    alert(char); //  H ,e, l, l, o
}
```

### 字符串不可以改变

### 改变大小写

`toLowerCase()` 、`toUpperCase()`

### 查找子字符串

- `str.indexOf(substr, pos)`

The bitwise NOT trick

这里使用的一个老技巧是 bitwise NOT ~ 运算符。它将该数字转换为 32-bit 整数（如果存在，则删除小数部分），然后反转其二进制表示中的所有位.

人们用它来简写 indexOf 检查

```js
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // works}
```
bitwise NOT ~ 运算符

```js

 9 (base 10) = 00000000000000000000000000001001 (base 2)
 
 ~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

**因此 ~x = -（x+1）**

### 获取子字符串

slice、substring、substr

[参考](https://zh.javascript.info/string#huo-qu-zi-zi-fu-chuan)

### 比较字符串

### 内部，Unicode

## 数组

[数组方法](https://zh.javascript.info/array-methods)

- 存储有序的集合。
- 数组可以存储任何类型的元素。

### 添加/移除数组元素

**arr.splice(str)** 

数组界的瑞士军刀，功能：添加、删除和插入元素。

语法： ` arr.splice(index[, deleteCount, elem1, ..., elemN])` 

从 index 开始：删除 deleteCount 元素并在当前位置插入 elem1, ..., elemN。最后返回已删除元素的数组。

 ```js
let arr = ['I', 'study', 'JavaScript'];

// 从位置 0 删除 3 个元素，并在它们的位置添加元素
let removed = arr.splice(0, 3, 'Let us', 'dance');

alert(removed) // 返回被删除元素数组。'I', 'study', 'JavaScript'

alert(arr) //  [''Let us, ''dance, ''right, 'now' ]
 ```

将 deleteCount 设置为 0，splice 方法就能够插入元素而不用删除：

```js
let arr = ["I", "study", "JavaScript"];

// from index 2// delete 0// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```

在这里和其他数组方法中，负向索引是允许的。它们从数组末尾计算位置，如下所示

```js
let arr = [1, 2, 5];

// from index -1 (one step from the end)// delete 0 elements,// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
```

**arr.slice()**

语法：`arr.slice(start, end)`

它从所有元素的开始索引 "start" 复制到 "end" (不包括 "end") 返回一个新的数组。start 和 end 都可以是负数，在这种情况下，从末尾计算索引。

**concat**

### 查询数组

**indexOf/lastindexOf 和 includes**

- `arr.indexOf(item, from)` 从索引 from 查询 item，如果找到返回索引，否则返回 -1。
- `arr.includes(item, from)` — 从索引 from 查询 item，如果找到则返回 true。

这些方法使用 `===`  比较

对象数组，找到具有特定条件的对象。

**find 和 findIndex** [arr.find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```js
let result = arr.find(function(item, index, array) {
  // 如果查询到返回 true});
```
如果它返回true，则查询停止，返回 item。如果没有查询到，则返回 undefined。

find 方法查询的是使函数返回 true 的第一个元素。

**filter**

语法与 find 大致相同，可以匹配很多元素，返回所有匹配元素组成的数组。

### 转换数组


转换或重新排序数组的方法。

**map**

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。(arr.map 方法是最有用和经常使用的方法之一)

```js
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

**sort**

比较函数

**split** 、**join**

str.split(delim) 通过给定的分隔符 delim 将字符串分割成一个数组。

arr.join(str) 与 split 相反，它会创建一个字符串。


**reduce** **resduceRight**  用于根据数组计算单个值。

- 需要遍历一个数组时 — 我们可以使用 **forEach**。
- 需要迭代并返回每个元素的数据时 — 我们可以使用 **map**。

**forEach** 迭代

arr.forEach 方法允许为数组的每个元素运行一个函数。

```js
// 这显示了数组的每个元素
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
  });
```

该函数的结果（如果它返回的话）被抛弃并被忽略。

**Array.isArray** 判断数组

### 任务

[参考](https://zh.javascript.info/array#tasks)

[TOC]

## 对象

对象用来存放键值对和更复杂的实体。对象属性键只能是 String 类型或 Symbol 类型。

对象可通过两种语法来创建：

```js
let person = new Object(); //"构造函数"的语法
let person = {};               // "字面量"的语法
```

### 存在值检查

访问对象一个不存在的属性会返回 `undefined` 

```js
// 获取对象属性值与 undefined 作比较
let user = {}；
console.log(user.name === undefined); // true 表示不存在这个属性

"key" in object // in 操作符
```

### for...in 循环

```js
for (let key in obj) {
    // code
}
```

**排序**

遍历一个对象，我们会按照下面的顺序获得属性：

整数属性有顺序，其他按照创建的顺序排序。这里的“整数属性”术语指的是一个字符串，可以在不改变的情况下对整数进行转换。

[整数属性](https://zh.javascript.info/object#forin-xun-huan)

### 引用复制

对象的复制按照引用即内存地址复制。

```js
let user ={
    name: 'John';
}
```
- 变量存储的不是对象本身，而是对象的“内存地址”，是对象的引用。
- 当对象被复制的时候——引用被复制了一份，对象并没有被复制。

**深拷贝**

`Object.assign`  或者` _.cloneDeep(obj)`

Object.assign(dest[, src1, src2, src3...])

参数 dest 和 src1, ..., srcN（可以有很多个）是对象。这个方法复制了 src1, ..., srcN 的所有对象到 dest。

```js
let user = {
name: 'John',
age: 36
}

let user1 = { gender: male }
let user2 = { height: 160 }

// 将 user1 和 user2 复制给 user
Object.assign(user, user1, user2) //（1）
// （1）：user = { name: 'John', age: 36, gender: male, height: 160 }

```

### 比较引用

- 当两个引用指向同一个对象的时候它们相等。

## 垃圾回收

## symbol

## 对象方法和 this

对象属性的函数称为对象方法。

在 JavaScript 中，this 是『自由』的，它的值是在调用时进行求值的，它的值并不取决于方法声明的位置，而是（取决）于在『点之前』的是什么对象。


通常在没有对象的情况下使用 this 的函数调用是不常见的，会（导致）编程错误。如果函数中有 this，那么通常意味着它是在对象上下文环境中被调用的。

[深入学习](https://zh.javascript.info/object-methods#nei-bu-yin-yong-lei-xing)

## 可迭代对象

- Symbol.iterator
- 字符串可迭代
- 显式调用迭代器
- 可迭代对象和类数组对象
- Array.from

## Map、Set、WeakMap 和 WeakSet

我们已经学习了下面的比较复杂的数据结构：
- 对象：存储键值对的集合。
- 数组：存储有序集合。

但是，实际应用时还是不够。这就是 Map 和 Set 存在的原因。

**Map**

Map 是一个键值对集合，很像 Object。主要区别是，Map 允许所有数据类型作为键，Object 键类型只能是字符串，如果键不是字符串类型，它将把所有的键转化为字符串类型。

**Set**

Set 是一个值的集合，这个集合中所有的值仅出现一次。

- WeakMap —— Map 的一个变体，仅允许对象作为键，并且当对象由于其他原因不可引用的时候将其删除。
    - 它不支持整体的操作：没有 size 属性，没有 clear() 方法，没有迭代器。
    
- WeakSet —— 是 Set 的一个变体，仅存储对象，并且当对象由于其他原因不可引用的时候将其删除。
    - 同样不支持 size/clear() 和迭代器。WeakMap 和 WeakSet 被用作主要对象存储的次要数据结构补充。一旦对象从存储移除，那么存在于 WeakMap/WeakSet 的数据将会被自动清除。

[参考](https://zh.javascript.info/map-set-weakmap-weakset#weakmap-he-weakset)

## 对象的键、值、项


- Object.keys(obj) —— 返回一个包含该对象全部的键的数组。
- Object.values(obj) —— 返回一个包含该对象全部的值的数组。
- Object.entries(obj) —— 返回一个包含该对象全部 [key, value] 键值对的数组。