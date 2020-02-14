# JavaScript 深入理解

### Three Pillars of JS

- Types / Coercion
- Scope / Closures
- this / Prototype

### 防抖与节流

防抖：防抖就是将一段时间内连续的多次触发转化为一次触发, 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。

节流：指定时间间隔内只会执行一次任务。

防抖和节流的目的都是为了减少不必要的计算，不浪费资源，只在适合的时候再进行触发计算。

### 重绘与回流

### 浏览器解析 URL

### DNS 域名解析

### TCP 三次握手与四次挥手

### 浏览器渲染页面

## HTTP 与 HTTPS 区别

- HTTP 明文传输，数据都是未加密的，安全性差， HTTPS 数据传输过程是加密的，安全性较好。
- 使用 HTTPS 协议需要到 CA （Certificate Authority, 数字证书认证机构）申请证书，免费证书较少，需要一定的费用。
- HTTP 页面响应速度比 HTTPS 快，主要因为 HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而 HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所以一共是 12 个包。
- http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
- HTTPS 其实就是建构在 SSL/TLS 之上的 HTTP 协议，所以，要比较 HTTPS 比 HTTP 要更耗费服务器资源。

# 元素的大小和滚动

## offsetParent

在大多数情况下，我们可以使用 `offsetParent` 来获取最近的 CSS 定位祖先元素。

## offsetLeft, offsetTop

元素左上角的坐标。

## offsetWidth, offsetHeight

元素本身相关，提供元素的外部高度和宽度，包括元素完整的边框大小。

几何属性仅为显示出来的元素计算。

如果元素（或其任何祖先）在文档中显示为 `display:none` 或本身不在文档中，则所有几何属性都是 0 或者值为 `null`，这取决于它是什么。

例如，`offsetParent` 为 `null`，并且 `offsetWidth`，`offsetHeight` 为 `0`。

## clientTop, clientLeft

测量边框的长度，确切地说，它们不是边框，而是内侧与外侧的相对坐标。

## clientWidth, clientHeight

只考虑元素的可见部分。

这些属性提供元素边框内区域的大小 ，包含内容宽度和内填充宽度，但不包括滚动条宽度。

如果没有内间距，那么 clientWidth/Height 就是代表内容的宽度，这里的内容指的是内间距和滚动条以内 (如果还有其他的)。

## scrollWidth, scrollHeight

不仅考虑元素的可见部分，还包括滚动（隐藏）部分。

`scrollHeight`  - 内容区域的完整内部高度，包括滚动部分。

`scrollWidth` - 完整的内部宽度，等于 `clientWidth`  

## scrollLeft, scrollTop

元素隐藏、滚动部分的宽度 / 高度。

大多数几何属性时只读的，但是 `scrollLeft/scrollTop` 可以改变。

## 不要从 CSS 中获取宽高

`getComputedStyle(element)` 获取 CSS 的计算值。不同的浏览器返回值可能不同，比如元素的 `width` ，在桌面 Windows 操作系统上，Firefox、Chrome、Edgy 都为滚动条保留空间，但 Firefox 显示 300px，而 Chrome 和 Edgy 显示较少。这是因为 Firefox 返回 CSS 宽度，其他浏览器返回 “真实” 宽度。

# Window 的大小和尺寸

文档的根节点：`document.documentElement`

## 窗口的宽度和高度

`document.documentElement`的 `clientWidth/clientHeight`

## 文档的宽度/高度

`document.documentElement` 的`clientWidth/clientHeight`

## 得到当前的滚动

常规元素的滚动状态：`elem.scrollLeft/scrolTop`

文档滚动：`document.documentElement.scrollLeft/scrollTop`

但是，Chrome/Safari/Opera 存在 bugs，（像 157855，106133）, 我们应该用 `document.body` 代替 `document.documentElement`

此外还有特殊属性 `window.pageXOffset/pageYOffset` 

## scrolling: scrollTo, scrollBy, scrollIntoVIew

- `scrollBy(x, y)` 滚动页面至相对于现代位置。例如 scrollBy(0, 10) 页面向下滚动 `10px`
- `scrollTo(pageX, pageY)` 滚动页面至相对于文档的左上角的 (pageX, pageY) 位置。回到顶部，`scrollTo(0,0)`

## 总结

- 文档可视范围的宽度 / 高度（内容区域的宽高）：`document.documentElement.clientWidth/Height`
- 整个文档的宽度 / 高度，包括滚动区域外的部分：

        let scrollHeight = Math.max( 
        
        document.body.scrollHeight, document.documentElement.scrollHeight, 
        document.body.offsetHeight, document.documentElement.offsetHeight, 
        document.body.clientHeight, document.documentElement.clientHeight
        );

滚动：

- 读取当前的滚动：`window.pageYOffset/pageXOffset`
- 改变当前的滚动：
    - `window.scrollTo(pageX,pageY)` — 绝对定位
    - `window.scrollBy(x,y)` — 相对当前位置的滚动
    - `elem.scrollIntoView(top)` — 滚动到正好 `elem` 可视的位置（`elem` 与窗口的顶部 / 底部对齐）

## 鼠标事件

### pageY

相对于目标元素并以内边距为界限的 Y 方向的偏移量

### pageY

相对于整个文档的 Y 方向的偏移量

### clientY

相对于客户端窗口 （application's client area） Y 方向的偏移量

## localStorage JavaScript limitations

- 不储存敏感用户数据
- 不能替代数据服务器
- 限于 5 MB 数据大小
- 十分不安全，没有数据保护
- 同步。调用操作一个接一个的执行