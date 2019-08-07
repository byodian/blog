## 什么是 DOM API

一个完整的 JavaScript 实现应该由核心（ECMAScript）、DOM 和 BOM 组成。Web 浏览器作为 ECMAScript 实现的宿主环境之一，不仅提供了基本的 ECMAScript 实现，同时也提供了核心语言之外的平台特定对象和功能。

*JavaScript 在 web 浏览器运行的鸟瞰图*

![JavaScript 在 web 浏览器运行的鸟瞰图](https://raw.githubusercontent.com/byodian/logpic/master/javascript%E5%9C%A8web%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84%E9%B8%9F%E7%9E%B0%E5%9B%BE.png)

文档对象模型由浏览器 API 提供是用来描述 HTML 和 XML 文档的一个程序接口，同时**使用对象和节点描述文档**，可以用来改变文档的结构、样式和内容。

## DOM 和 JavaScript 语言的关系

JavaScript 通过 DOM 进入和控制文档，而 DOM 利用 Javascript 提供的核心类型和语法实现更多的功能。

## DOM 树

HTML 文档是由标签嵌套而成的树形结构，因此 DOM 可以将任何 HTML 描述成一个由多层节点构成的树形结构。**根据文档对象模型（DOM），每个 HTML 标签都是一个对象。**

节点类型有 12 种，但通常使用最多的只有以下四种节点：

1. `document` - 文档的根节点
2. 元素节点 - HTML 标签元素
3. 文本节点 - 包含文本
4. 注释 - 不会显示，可以读取

## 遍历 DOM

我们在使用 DOM 操作文档元素之前，需要先获取对应的 DOM 对象，把这个对象赋予一个变量，从而方便后续操作。

所有的 DOM 操作都是从 `document` 对象开始，这是 DOM 的主要入口，利用它可以进入任何节点。

### documentElement 和 body

顶部的树节点可以通过 `document` 属性来使用

> &lt;html&gt; = document.documentElement
> 
> &lt;body&gt; = document.body
> 
> &lt;head&gt; = document.head

### 子元素
- `childNodes`
- `firstChild`
- `lastChild`

firstChild 和 lastfirst 属性是访问第一个和最后一个子元素的快捷方式。

`childNodes` 是一个具有 `length` 属性，类似数组的可迭代对象，可使用 `for .. of` 语法或者 `forEach(..)` 方法来迭代它。

```js
// for..of 语法
for (let node of document.body.childNodes) {
  console.log(node);
}

// forEach(..) 方法
document.body.childNodes.forEach(el => console.log(el));
```

**注意：**DOM 集合是只读的，修改节点信息有其他的方法；DOM 集合是实时变化的。

### 兄弟节点和父节点
- 兄弟节点 `nextSibling`、`previousSibling`
- 父节点 `parentNode`

### 在元素中遍历

上面介绍的 `childNodes` 、`firstChild` 、`lastChild` 、`nextSibling` 、`previousSibling` 属性遍历的是所有的节点，包括文本节点、元素节点和注释节点。

而对于很多任务来说，我们只需要操作元素节点，使用下面的属性可以制作元素节点中导航。

- `children` - 元素节点的子节点
- `firstElementChild`、`lastElementChild` - 第一个和最后一个元素节点
- `previousElementSibling`、`nextElementSibling` - 兄弟元素
- `parentElement` - 父元素

parentNode 和 parentElement 都获取元素的父节点，但有一个例外：

```js
document.documentElement.parentNode; // document
document.documentElement.parentElement; // null
```

![不同结果](https://raw.githubusercontent.com/byodian/logpic/master/parentNode%26parentElement.png)

不同结果的原因：`parentNode` 获取的是任何类型的父节点，`parentElement` 获取的是父元素节点，而 `document` 形式上作为 &lt;html&gt; 的父节点，其并不是一个元素节点，因此才会出现不同的结果。









