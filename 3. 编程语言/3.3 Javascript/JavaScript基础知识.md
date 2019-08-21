[TOC]
## 代码结构

语句、分号、注释

## 变量

let、contst

## 数据类型

七种基本的数据类型

- number 类型
    - 数值
    - 特殊数值
        - infinity
        - NaN
- string 类型
- boolean 类型
- null 值
- undefined 值
- object 类型和 symbol 类型
- typeof 运算符

## 类型转换 

大多数情况下，运算符和函数会自动转换将值转换为正确的类型。称之为“类型转换”。[参考链接](
https://zh.javascript.info/type-conversions)

- ToString
- ToNumber
- ToBoolean

### ToString

转换为 string 类型的值往往是可预见的。false 变成 "false"，null 变成 "null" 等。

### ToNumber

| 值              | 变成...                                                      |
| --------------- | ------------------------------------------------------------ |
| `undefined`     | `NaN`                                                        |
| `null `         | `0`                                                          |
| `true 和 false` | `1 and 0 `                                                   |
| `string`        | `字符串开始和末尾的空白会被移除，剩下的如果是空字符串，结果为 0，否则 —— 从字符串中读出数字。错误返回 NaN。` |


几乎所有的算术运算符都将值转换为数字，加号 + 是个例外。如果其中一个运算元是字符串，则另一个也会转换为字符串，然后连接两者。

```js

alert( 1 + '2' ); // '12' (字符串在加号右边)
alert( '1' + 2 ); // '12' (字符串在加号左边)
```

### ToBoolean

| 值                                    | 变成... |
| ------------------------------------- | ------- |
| `0`, `null`, `undefined`, `NaN`,` ""` | `false` |
| ` "0" 、'' ''`                        | `true`  |

### 小结

- `undefined` 进行 `ToNumber` 时变成 `NaN`，而非 `0`。
- `"0"`  和只有空格的字符串(比如：`" "` )在进行 `ToBoolean`  变成 `true`。


## 运算符

请注意逗号运算符的优先级非常低，比 = 还要低

## 值的比较

- 比较结果为 Boolean 类型
- 字符间的比较
- 不同类型间的比较
- 严格相等
- 涉及 null 和 undefined 的比较 [参考](
https://zh.javascript.info/comparison#she-ji-null-he-undefined-de-bi-jiao)

不同类型的值作比较时，它们先被转换为数字，再做比较，最后，值的结果为  `Boolean`  类型。


严格相等操作符 `===`在进行比较时不会做任何的类型转换。

##  交互

所有这些函数都会产生模态框，它们会暂停代码执行并阻止访问者与页面交互，直到用户输入内容。

- alert 显示信息
- prompt
- confirm 

### alert

对 alert 的调用没有返回值。或者说返回的是 undefined。

### prompt

-  显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 null。
-  将空字符串输入，prompt 会获取到一个空字符串 ''。Prompt 运行过程中，按下 ESC 键会得到 null。

### confirm

显示信息等待用户点击确定或取消。点击确定返回 true，点击取消或 Esc 键返回 false

```js
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert(  userName ); // Alice
alert(  isTeaWanted ); // true
```

## 条件运算符

## 逻辑运算符

- || 或
- && 与
- ! 非

### || 逻辑或

- 操作输是**布尔值**，如果参与运算的一个参数为 true，结果将返回 true，否则返回 false。
- 如果操作数不是布尔值，那么它将会被转化为布尔值来参与运算。

**或运算寻找第一个真值**

```js
result = value1 || value2 || value3;
```

或运算符 || 做了如下的事情：

- 从左到右依次计算操作数。将每一个操作数转化为布尔值。
- 如果结果是 true，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 false），返回最后一个操作数。


### && 与运算

**与运算寻找第一个假值**

**与运算 `&&` 在或操作符 `||` 之前执行**

## 循环

- while 
- do...while 
- for

### while

while(...) {...}

### do...while

do(...) while(...)

循环体至少执行一次，很少使用。

### for 

在 for(let...) 循环中声明的变量只在循环中可见。但是我们也可以省略 let 并重用现有的变量。

for 循环的任何部分都可以被跳过。

```js
for (;;) {
  // 无限循环}
```

### break

跳出循环

"无限循环 + break" 的组合非常适用于不必在循环开始/结束时检查条件，但在中间甚至是主体的多个位置进行检查的情况。

### contimue 

继续下一次迭代，continue 指令是 break 的“轻量版”。这并不能阻止整个循环。相反，它将停止当前的迭代，并强制启动新一轮循环（如果条件允许的话）。

### break/continue label

[参考](
https://zh.javascript.info/while-for#breakcontinue-biao-qian)

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // 如果是空字符串或已取消，则中断这两个循环。
    if (!input) break outer; // (*)
    // 做些有价值的事
  }}alert('Done!');
```
### 小结

- 通常使用 while(true) 来构造“无限”循环。这样的循环就像任何其他循环一样，可以通过 break 指令来终止。
- 如果我们不想在当前迭代中做任何事，并且想要转移至下一次迭代，那么 continue 指令就会执行它。
- break/continue 支持循环前的标签。标签是 break/continue 避免嵌套并转到外部循环的唯一方法。
- 只有在循环内部才能调用 break/continue，并且标签必须位于指令上方的某个位置。

算法题

[输出素数](https://zh.javascript.info/while-for#shu-chu-su-shu)

## switch 语句

这里的相等是严格相等。被比较的值必须是相同类型的才能匹配。

## 函数

- 函数声明
- 函数表达式
- 箭头函数

### 局部变量

在函数中声明的变量只在该函数内部可见。

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // 局部变量
  alert( message );
}
showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- 错误！变量是函数的局部变量
```

### 全局变量

- 任何函数之外声明的变量，例如上述代码中的外部 userName 都称为全局。
- 全局变量在任意函数中都是可见的(除非被局部变量遮蔽)。通常，函数声明与任务相关的所有变量。
- 全局变量只存储项目级的数据，所以这些变量从任何地方都可以访问是很重要的事情。
- 现代的代码有很少或没有全局变量。大多数变量存在于它们的函数中。

**如果在函数中声明了同名变量，那么它遮蔽外部变量。例如，在如下代码中，函数使用本地的 userName，外部部分被忽略：**

```js

let userName = 'John';
function showMessage() {
  let userName = "Bob"; // 声明一个局部变量
  let message = 'Hello, ' + userName; // Bob
  alert(message);
 }
//  函数会创建并使用它自己的 userNameshowMessage();
alert( userName ); // John，未更改，函数没有访问外部变量。
```

### 函数声明

```js
    function name (parameters, delimited, by, comma) {
        /* code */    
    }
```

- 作为参数传递给函数，值被复制到其局部变量
- 函数可以访问外部变量，函数外部的代码看不到它的局部变量。
- 函数可以返回值。如果没有，则其结果是 undefined。

为了使代码简洁易懂，建议**在函数中主要使用局部变量和参数**，而不是外部变量。


### 函数表达式

### 箭头函数

[深入研究箭头函数](https://zh.javascript.info/arrow-functions)

```js
let sum = (a, b) => a + b;

/* 箭头函数更短：

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

### 函数命名

名称应该清楚地描述函数的功能。

- 当我们在代码中看到一个函数调用时，一个好的名称立即让我们了解它所做的和返回的事情。
- 函数是一种行为，所以函数名通常是动词。
- 有许多优秀的函数前缀，如
    - get... 返回值
    - calc... 计算
    - create... 创建
    - check...检查并返回 boolean 值

```js
showMessage(..)     // 显示信息
getAge(..)          // 返回 age (gets it somehow)
calcSum(..)         // 计算求和并返回结果
createForm(..)      // 创建表格 (通常会返回它)
checkPermission(..) // 检查权限并返回 true/false
```

一个函数，一个功能

- 一个函数应该按照它的名字来做，而不是做更多的和自身无关的功能。
- 常用的函数有时会有非常短的名字，函数名应简明扼要且具有描述性。例如：
    - jQuery 框架定义函数用 $
    - LoDash 库的核心函数命名用 _

[函数](https://zh.javascript.info/function-expressions-arrows#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)

[函数命名](https://zh.javascript.info/function-basics#function-naming)

## JavaScript 的特性

- 代码结构
- 严格模式
- 变量
- 交互
- 运算符
- 循环语句
- switch 语句
- 函数

[参考](https://zh.javascript.info/javascript-specials#dai-ma-jie-gou)

## 代码风格

[参考](https://zh.javascript.info/coding-style)

## 注释

一个好的开发者的标志之一就是他的注释：它们的存在甚至它们的缺席。
好的注释可以使我们更好的维护代码，并且在很长时间之后依然可以更高效地回到代码中和使用其功能。

**注释这些内容**

- 整体架构，高层次的观点。
- 函数的用法。
- 重要的解决方案，特别是在不是很明显时。

**避免注释**

- 阐述“代码如何工作”或“它做了什么”。
- 只有在没有这些就不可能使代码变得如此简单和自我描述的情况下才可以使用它们。
- 注释也被用于一些自动文档工具（比如 JSDoc3）：他们读取注释然后构建出 HTML 文档（或者其他格式的文档）。


## 使用 mocha  进行自动化测试

行为驱动开发（BDD），[wiki](https://en.wikipedia.org/wiki/Behavior-driven_development)