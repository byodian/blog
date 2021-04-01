## Functional programming is a good habit.

- Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation
- Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
- Functions have minimal side effects in the program
1. isolated
2. immutation
3. Pure 

## First Class Function

- can be assigned a variable
- can be passed into another function
- can be returned from another function just like any other normal value

## High Order Function

- Take a function as a argument
- Return a function as a return value

## lambda

- Get passed in a function
- Get returned from another function

## Understand the Hazards of Using Imperative Code

An imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program. Like `for` loop

Functional programming is a form of declarative programming.

## Two distinct principles

1. Don't alter a variable or object - create a new variable or object and return them if need be from a funcion
2. Declare function arguments - any computation inside a function depends only on the arguments, and not no any global object or variable.

## Array method

- `map`
- `filter`
- `reduce`
- `concat`
- `slice`
- `split`
- `join`
- `every`
- `some`

## Sum all num of a range number

```jsx

sumAll([first, last]
step = first- last< 0 ? 1 : -1
first !== last ? first + sum([first + step, last]) : first
```

## 函数是第一类对象

通过字面量创建

```js
function ninjaFunction () {}
```

赋值给变量，数组项或其他对象的属性

```js
var ninjaFunction = function () {};
ninjaArray.push(function () {});
ninja.data = function () {};
```

作为函数的参数传递

```js
function call (ninjaFunction){
  ninjaFunction();
}

call(function () {});
```

作为函数的返回值

```js
function returnNewNinjaFunction() {
  return function () {};
}
```

具有动态创建和分配的属性

```js
var ninjaFunction = function() {};
ninjaFunction.ninja = 'Hanzo';
```

## 回调函数

函数作为参数传递给另一个函数，传入函数会在应用程序执行的未来某个时间点才执行。

```js
function useless(ninjaCallback) {
  testApp.report('In useless function')
  return ninjaCallback()
}

function getText() {
  testApp.report('In getText function');
  return 'text';
}

useless(getText)
```

- 回调函数可以被用在异步调用或者正常的调用。
- 事件回调函数为异步调用。
- `sort` 排序回调函数

如果传入值的顺序需要调换，返回正数；不需要调换，返回负数；两个值相等，返回 0。

## 为函数添加属性

- 在函数属性中存储另一个函数用于之后的引用和调用。
- 记忆函数，记住上次计算得到值，避免重复计算。

### 存储函数

1. 如何判断新函数？
2. 如何排除重复函数？

**方法一**

把所有函数存入一个数组，通过循环该数组来检查重复函数。缺点是性能较差。

**方法二**

使用函数，存储唯一的 ID 属性。(操作合集的更好技术，`set`)

```js
var store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }

    return false;
  }
}

function ninja(){};
testApp.assert(store.add(ninja), 'Function was safely added.');
testApp.assert(store.add(ninja), 'But it was only added once.');
```

## 自记忆函数

当函数计算得到结果时请将该结果按照参数存储起来。采用这种方式时，如果另外一个调用也使用相同的参数，我们则可以直接返回上次存储的结果而不用再计算一遍。

避免重复又复杂的计算可以显著提高性能。

适用场景：

动画中的计算、搜索不经常变化的数据

```js
function isPrime(value) {
  if (!isPrime.answer) {
    isPrime.answer = {};
  }

  if (isPrime.answer[value] !== undefined) {
    return isPrime.answer[value];
  }

  var prime = value !== 0 && value !== 1;
  for (i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }

  return isPrime.answer[value] = prime;
}
```

## 函数声明和函数表达式

对于函数声明来说，函数名是强制的，因为它们是独立语句。一个函数的基本要求是它必须能够被调用，所以他必须具有一种被引用的方式。

## 函数的实参和形参

实参：argument，调用函数时所传递给函数的值。

形参：parameter，定义函数时所列举的变量。

当函数被调用时，实参会按照形参在函数中定义的顺序被赋值给形参。

- 如果实参的数量大于形参，调用函数时并不会报错
- 如果实参的数量小于形参的数量，则没有被赋值的形参会被设为 `undefined`

## 剩余参数

## 默认参数

## 理解函数调用

隐式的函数参数 `this` 和 `arguments` 。

- `this` 是 JavaScript 面向对象编程的基本要素之一
- `arguments` 允许访问函数调用过程中传递的实际参数。

### this

`this` 表示函数的上下文，与函数调用相关联的对象。函数上下文是面向对象语言的一个概念，这里的 `this` 通常指向定义当前方法的类的实例。

`this` 的指向不仅是由定义函数的方式和位置决定，同时还严重受到函数调用方式的影响。

## 函数调用

this参数以及函数上下文是如何建立的？

### 直接调用函数

### 作为对象的方法调用

### 作为构造函数调用（创建和初始化对象实例的函数）注意与函数的构造器之间的区别。

构造函数的目的是创建一个新对象。

```js
function Ninja() {
	this.skulk = function() {
		return this;
	}
}

var nina1 = new Ninja(); 
```

调用构造函数会发生下列动作：

- 创建一个新的空对象（实例化）
- 该对象作为 `this` 参数传递给构造函数，从而成为构造函数的函数上下文
- **新的构造函数对象**作为 `new` 运算符的返回值。

**构造函数返回值**

构造函数有返回值时会发生什么结果？

- 如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的this 将被丢弃。
- 但是，如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象。

## 使用 apply 和 call 方法调用

改变函数的上下文。

## 作为事件的回调函数

函数作为回调函数，函数上下文 this 指向事件所注册的对象，如果使用 `bind` 函数会改变函数上下文的指向。

```js
<button id="test"></button>
var button = {
  clicked: false,
  click: function() {
    console.log(this);
    this.clicked = true;
    console.log(button.clicked);
    testApp.assert(button.clicked, "The button has been clicked");
    testApp.assert(this === window, 'In arrow function this === window');
    testApp.assert(window.clicked, "clicked is stored in window");
  }
}

var elem = document.getElementById('test');
// elem.addEventListener('click', button.click); this -> <button>
elem.addEventListener('click', button.click.bind(button));
// this -> {
//	clicked: false,
//	click: f
// }
```

## 解决函数上下文问题

### 箭头函数

使用箭头函数解决函数的上下文与预期不符的问题。

调用箭头函数时，不会隐式传入 this 参数，而是从定义时的函数继承上下文。

**箭头函数和对象字面量**

```js
<button id="test">Click Me!</button>
testApp.assert(this === window, 'this === window');

var button = {
  clicked: false,
  click: () => {
    this.clicked = true;
    testApp.assert(button.clicked, "The button has been clicked");
    testApp.assert(this === window, 'In arrow function this === window');
    testApp.assert(window.clicked, "clicked is stored in window");
  }
}

var elem = document.getElementById('test');
elem.addEventListener('click', button.click);
```

### 使用 bind 方法

使用 bind 方法创建的新函数与原始函数体相同，新函数被绑定到指定的对象上。

## [闭包](https://zh.javascript.info/closure)

使用闭包可以减少代码数量和复杂度来添加高级特性。

事件处理和动画等包含回调函数的任务，都属于闭包。

使用闭包可以实现私有变量。

JavaScript 语言的蓝图，以及我们编码的方式，都是由闭包塑造的。

闭包是纯函数式编程语言的特性之一。

**面试时，正确的回答：**

- 闭包的定义：闭包是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在外部函数被返回了之后。
- 为什么 JavaScript 中的所有函数都是闭包，`new Function` 语法除外？
  JavaScript 中的函数会自动通过隐藏的 [[Environment]] 属性记住创建它们的位置，所以它们都可以访问外部变量。
- 关于 [[Environment]] 属性和词法环境原理的技术细节

### JavaScript 的作用域是如何工作的？

- 一个变量或方法有几种不同的作用域？这些作用域分别是什么？
- 如何定位标识及其值？
- 什么是可变变量？如何在 JavaScript 中定义可变变量？

### 闭包理解

当在外部函数中声明内部函数时，不仅定义了函数的声明，而且还创建了一个闭包。该闭包不仅包含了函数的声明，还包含了在函数声明时该作用域中的所有变量。

每一个通过闭包访问变量的函数都具有一个作用域链，作用域链包含闭包的全部信息。这些信息不能被直接看见，存储和引用这些信息会直接影响性能。

### 闭包缺点

使用闭包时，所有的信息都会存储在内存中，直到 JavaScript 引擎确保这些信息不再使用或页面卸载时，才会清理这些信息。因此，过度使用闭包会占用系统内存。

### 封装私有变量

```js
function Ninja() {
	var feints = 0;
	this.getFeints = function() {
		return fenits;
	}
	
	this.feint = function() {
		this.feints++;
	}
}
```

### 回调函数

回调函数指的是需要在将来不确定的某一时刻异步调用的函数。处理回调函数是另一种常见的使用闭包的情景。

在回调函数中，我们经常需要频繁地访问外部数据。

```js
<div id="box1">First Box</div>
function animate(elementId) {
  var elem = document.getElementById(elementId);
  var tick = 0;
  var timer = setInterval(function() {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + 'px';
      tick += 20;
    } else {
      clearInterval(timer);
      assert(tick === 100, 'Tick accessed via a clousure.');
      assert(elem, 'Element also accessed via a clousure.');
      assert(timer, 'Timer reference also obtained via a clousure.');
    }
  }, 10);
}

animate('box1');
```

通过在函数内部定义变量，并基于闭包，使得在计时器的回调函数中可以访问这些变量，每个动画都能够获得属于自己的私有变量。

如果没有闭包，一次性同时做很多事情，例如事件绑定、动画甚至服务器端请求等，都将变得非常困难。

闭包内的函数不仅可以在闭包创建的时刻访问这些变量，而且当闭包内部的函数执行时，还可以更新这些变量的值。闭包不是创建的那一刻的状态的快照，而是一个真实的状态封装。

## 通过执行上下文来跟踪代码

使用执行上下文调用栈，先进先出。

## 使用词法环境跟踪变量的作用域

**函数实现这一点得益于函数是第一类对象的特性。**

词法环境是 JavaScript 引擎内部用来跟踪标识符与特定变量之间的映射关系。

**词法环境中包含了在上下文中定义的标识符的映射表。**

**标识符：变量、函数、属性的名字或函数的参数。**

词法环境是 JavaScript 作用域的内部实现机制，通常称为作用域。

通常来说，词法环境域特定的 JavaScript 代码结构相关联，既可以是一个函数、一段代码片段，也可以是 try-catch 语句。这些代码结构可以具有独立的标识符映射表。

**使用代码嵌套可以实现代码结构包含另一个代码结构。**

无论何时创建函数，都会创建一个与之相关联的词法环境，并存储在名为 `[[Environment]]` 的内部属性上。内部属性无法直接访问或操作。

因为函数可以作为任意对象进行传递，定义函数时的环境与调用函数的环境往往是不同的，

无论何时调用函数，都会创建一个新的执行环境，被推入执行上下文栈。此外，还会创建一个与之相关联的词法环境。

## JavaScript 代码如何执行

执行分两个阶段。

第一阶段：没有执行代码，但是 JavaScript 引擎会**访问并注册**在当前词法环境中所声明的**变量和函数**。

第二阶段：具体如何执行取决与变量的类型以及环境类型（全局环境、函数环境或块级作用域）

具体处理过程如下：

1. 如果是创建一个函数环境，那么创建形参及函数的默认值。如果是非函数，则跳过此步骤。
2. 对于函数声明，将创建函数，并绑定到当前环境与函数名相同的标识符上，不会扫描其他函数的函数体。
3. 扫描当前代码进行变量声明。在函数或全局环境中，找到所有当前函数以及其他函数之外通过 `var` 声明的变量，并找到所有在其他函数或代码之外通过 `let` 或 `const` 定义的变量。在块级作用域中，仅查找当前块中通过 let 或 `const` 定义的变量。

    **对所有查找到的变量，若该标识符不存在，进行注册并初始化为** `undefined`；**若该标识符已经存在，将保留其值。**

### 变量提升

变量和函数的声明并没有实际发生位移，只是在代码执行之前，先在此法环境中进行注册。

## 对象构造器域原型

每个函数都有一个原型对象，该原型对象将被自动设置为通过该函数创建对象的原型。