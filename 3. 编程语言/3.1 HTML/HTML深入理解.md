# HTML 深入理解

## link

The HTML External Resource Link element ( `<link>` ) specifies relationships between the current document and an external resource. The element is most commonly used to link to stylesheets, but is also used to establish site icon among other things.

HTML 外部资源 `<link>` 元素指定当前文档和一个外部资源的关系。此元素最常被用来连接一个样式表，也会被用来设置站点图标。

    <link rel="stylesheet" href="./index.css">
    <link rel="icon" href="favicon.ico">
    <link rel="apple-touch-icon-precomposed" href="apple.png" type="image/png">

`type` 属性包含了被链接资源的 MIME 类型值，为浏览器选择最恰当的文件提供了有用的指示（hints）。

`media` 提供一个媒体类型或者媒体查询。这些资源在媒体条件成立的情况下会被加载。

    <link rel="stylesheet" href="print.css" media="print">
    <link rel="stylesheet" href="mobile.css" media="screen and (max-width: 600px)">

一些新的特性和安全特性已经被加入到 `<link>` 元素中。比如

    <link rel="preload" href="myFont.woff2" as="font"
          type="font/woff2" crossorigin="anonymous">

rel 值为 `preload` ，指示浏览器应该提前加载这个资源，`as` 属性指定特定类型的内容被加载到 link 元素中。

### 属性

- as
- `crossorigin`
- disabled
- href
- importance
- integrity
- media
- rel
- sizes
- title
- type

## strong

`<strong>` 元素表示内容的重要性、严肃或者紧急性。

    <p><strong>Important:</strong> blablabla...</p>
    <p><strong>Warning:</strong> blablabla...</p> 

## em

`<em>` 改变句子或者词语的语气，起强调作用。

## b

`<b>` 元素被用来让内容吸引注意力。

## table

### 属性

- `border-collapse` 表格边框模型，分为分离型 (separate) 和折叠型 (collapse)。
- `table-layout`

如果不设置表格宽度，则表格会 “收缩适应” 到内容宽度。

表格行中每一列的宽度有两种算法：

- 默认情况下，根据自身单元格内容所需的宽度来决定整个表格的宽度。
- 固定表格布局。使用 `table-layout:fixed` ，表格单元格的宽度**由表格首行的单元格决定**，或者基于 `col` 和 `colgroup` 元素的宽度来确定。第一行中声明的列宽具有决定性，后续行如果遇到内容较多的情况，只能折行或者溢出(
- 溢出需要表格有一个明确的宽度)。

利用表格显示模式来创建布局的缺点：

- 表格单元元素无法应用外边距
- 表格单元应用定位时行为无法预料
- 不支持发生折行的内容
- 内部的元素无法重新排序