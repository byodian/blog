## 访问地址
[点击](https://byodian.github.io/blog/5.%20%E7%BC%96%E7%A8%8B%E7%BB%83%E4%B9%A0/4.4%20Javascript/WeatherApp/index.html)

## 知识点

### DOM 操作
1. `document.querySelector(..)`;

### 事件处理

1. 事件注册器 `addEventListener(..)`

### [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) API

`Navigator` 接口代表浏览器的状态和特性，允许使用脚本查询和注册它们进行一些活动。

`Navigator` 对象可以通过只读属性 `window.navigator` 访问。

`Navigator.geolocation`  允许访问设备的位置

### AJAX

[Ajax](https://zh.wikipedia.org/wiki/AJAX) - ajax 优缺点

[Ajax 简介](https://wangdoc.com/javascript/bom/xmlhttprequest.html#%E7%AE%80%E4%BB%8B)

浏览器与服务器之间，采用 HTTP 协议通信。AJAX（Asynchronous JavaScript and XML）指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档并从中提取数据（实际数据格式可以由 JSON 代替），再更新当前网页的对应部分，而不刷新整个网页。

AJAX 步骤：通过原生接口发出 HTTP 请求，得到服务器返回的数据，再进行处理。

运用 `XMLHttpRequest` 或新的 `Fetch API` 与服务器进行异步数据交换；

**AJAX 只能向[同源网址](https://wangdoc.com/javascript/bom/same-origin.html)（协议、域名、端口都相同）发出 HTTP 请求，如果发出跨域请求，就会报错。**

### 跨域请求

同源政策规定，**AJAX 请求只能发给同源的网址**，否则就报错。

除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务器），有三种方法可以做到跨域请求：

- JSONP
- WebSocket
- [CORS](https://wangdoc.com/javascript/bom/cors.html)（Cross-orign resource sharing） 跨域资源共享

### Fetch API

Fetch API 提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。它还提供了一个全局 `fetch()` 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。

### [JSON 对象](http://json.org/json-zh.html)

JSON (JavaScript Object Notation) 格式 是一种用于数据交换的文本格式，目的式取代繁琐笨重的 XML 格式。

JSON 对象就是一个值，可能是一个数组、对象或者原始类型的值。

格式规定：
> 复合类型只能是数组或对象
> 原始类型的值是有四种：字符串、数值（必须是十进制）、布尔值和 `null`
> 字符串和对象的键名必须使用双引号表示
> 数组或对象最后一个成员的后面，不能加逗号。

JSON 对象方法

1. JSON.stringify() 将一个值转为 JSON 字符串
2. JSON.parse() 还原 JSON 格式数据

### 参考
- [网道](https://wangdoc.com/javascript/)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
- [Json.org](http://json.org/json-zh.html)

