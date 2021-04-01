# HTML 深入理解

## link
The HTML External Resource Link element ( `<link>` ) specifies relationships between the current document and an external resource. The element is most commonly used to link to stylesheets, but is also used to establish site icon among other things.

### 属性
- as
- crossorigin
- disabled
- href
- importance
- integrity
- media
- rel
- sizes
- title
- type

HTML 外部资源 `<link>` 元素指定当前文档和一个外部资源的关系。此元素最常被用来连接一个样式表，也会被用来设置站点图标。
```html
<link rel="stylesheet" href="./index.css">
<link rel="icon" href="favicon.ico">
<link rel="apple-touch-icon-precomposed" href="apple.png" type="image/png">
```
`type` 属性包含了被链接资源的 MIME 类型值，为浏览器选择最恰当的文件提供了有用的指示（hints）。

`media` 提供一个媒体类型或者媒体查询。这些资源在媒体条件成立的情况下会被加载。
```html
<link rel="stylesheet" href="print.css" media="print">
<link rel="stylesheet" href="mobile.css" media="screen and (max-width: 600px)">
```
一些新的特性和安全特性已经被加入到 `<link>` 元素中。比如
```html
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```
rel 值为 `preload` ，指浏览器应该提前加载这个资源，`as` 属性指定特定类型的内容被加载到 link 元素中。

## main
- The `main` element is used to wrap the main content, and there should be only one per page.
- The `main` tag also has an embedded landmark feature that assistive technology can use to quickly navigate to the main content. (If you’ve ever seen a “Jump to Main Content” link at the top of a page, using a main tag automatically gives assistive devices that functionality.)

## article
`article` is a sectioning element, and is used to wrap independent, self-contained content.

**Note**: Determining whether content can stand alone is usually a judgement call, but there are a couple simple tests you can use. Ask yourself if you removed all surrounding context, would that content still make senses? 

**Note:**
- `<div>` - groups content
- `<section>` - groups related content, represents a standalone section. Typically, but not always, sections have a heading.
- `<article>` - groups independent, self-container content

## section
The HTML `<section>` element represents a standalone section — which doesn't have a more specific semantic element to represent it. Typically, but not always, sections have a heading.

### usage notes
- Each `<section>` should be identified, typically by including a heading (`<h1>`-`<h6>`) as a child of the `<section>` element.
- if it makes sense to separately syndicate the content of a `<section>` element, use a `<article>` element instead.
- Do not use the `<section>` element as a normal/generic container; this is what <div> is for, especially when the sectioning is only for styling purpose. A rule of thumb is that a section should logically appear in the outline of a document.

## h1 through h6
**The headings element are commonly used as a navigation aid.**

The font size of header tag (h1 through h6) should usually be larger than the font size of paragraph tags.

A common navigation technique for users of screen reading software is jumping from heading to heading to quickly determine the content of the page. Because of this, it's important to not skip one or more heading level.

## 文本格式化标签

- `b` 粗体
- `i` 斜体字，技术术语
- `em` 强调文字，斜体显示
- `strong` 强调文字，粗体显示
- `sub` 下标字
- `sup` 上标字
- `del` 删除字
- `ins` 插入字

### strong
`<strong>` 元素表示内容的重要性、严肃或者紧急性。
```html
<p><strong>Important:</strong> blablabla...</p>
<p><strong>Warning:</strong> blablabla...</p> 
```
### em
`<em>` 改变句子或者词语的语气，起强调作用。

### b
`<b>` 元素被用来让内容吸引注意力。

### s
Use the `<s>` tag element to represent things that are no longer relevant or no longer accurate.

### del
Use the `<del>` element **represents a range of text** that has been deleted from a document. 

This can be used that when rendering "track changes" or source code diff information, for example. The `<ins>` element **can be used for the opposite purpose:** **to indicate text** that has been added to the document.

## 引用和术语定义
- `abbr` 缩写或首字母缩写
- `address` 定义地址
- `blockquote` 长引用
- `q` 短引用
- `bdo` 定义文字方向
- `cite` 著作标题

### blockquote
The HTML element indicates that the enclosed text is an extended quotation. A URL for the source of the quotation may be given using the the **cite** attribute, while a text representation of the source can be given using the `<cite>` element.

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>
```

## 格式化输出标签
当页面显示时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。

- `code` 定义计算机代码，不保留多余的空格和换行
- `pre` 定义预格式文本,保留多余的空格和换行
- `var` 数学变量

## line-height
This can be used to change the height of each line in a block of text.
- On block—level element, it specifies the minimum height of line boxes within the element.
- On non-replaced inline element, it specifies the height  that is used to calculate line box height.

## figure
`figure` element along with the related `figcaption` ,these items wrap a visual representation (like images, diagram, or chart) along with its caption.

**Note:** Another challenge covers how to move a table version of the chart's data off-screen (using CSS) for screen reader users.

## form
### label
The next several challenges cover some important scenarios using attributes in forms.

Don't place interactive elements such as **anchors** or **buttons** inside a label. Doing so makes it difficult for people to activate the form input associated with the `label`.

An `<input>` element with a `type="button"` declaration and a valid value attribute does not need a label associated with it. Doing so may actually **interfere** with how assistive technology parses the button input. The same applies for the `<button>` element.

### input
The `<input>` HTML element is used to create interactive controls for web-based in order to accept user data from the user.

The `<input>` element is one of the most powerful and complex element in all of HTML due to the sheer number of combinations of input types and attributes.

### select
The `<select>` element represents a controls that provides a menu of options.

Each menu option is defined by an `<option>` element nested inside the `<selected>` .

```html
<label for="pet-select">Choose a pet:</label>
<select name="pets" id="pet-select">
	<option value selected disabled>Please choose an option</option>
	<option value="dog">dog</option>
	<option value="cat">cat</option>
</select>
```

Each `<option>` element should have a `value` attribute **containing the data value to submit to the server** when that option is selected. **If no values is included, the defaults value to the text contained inside the element.**

- `autofocus`
- `multiple` The Boolean attribute indicates that multiple options can be selected in the list. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.
- `autocomplete`
- `disabled`
- `name`  The Boolean attribute represents the name of the associated data point submitted to the server.
- `size` If the controls is presented as a scrolling list box, the size represents **the numbers of rows in the list** that should be visible at once.

### fieldset
Wrap radio button in a fieldset element for better accessibility.

**Since radio buttons often come in a group** where the user must choose one, there’s a way to semantically show the choices are part of a set.

```html
<form>
	<fieldset>
		<legend>
			Choose one of these three items:
		</legend>
		<input id="one" type="radio" name="items" value="one">
		<label for="one">Choise One</label>
		<input id="two" type="radio" name="items" value="two">
		<label for="two">Choise Two</label>
	</fieldset>
</form>
```

**Note:** The `fieldset` wrapper and `legend` tag are not necessary when the choices are self-explanatory, like a gender selection. Using a `label` with `for` attribute for each radio button is sufficient.

### name property
A `DOMString` representing the value of the checkbox. **This is never seen on the client-side**, but on the server this is the `value` given to the data submitted with the checkbox's `name`. Take the following example:

```html
<form>
	<div>
		<input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter">
		<label for="subscribeNews">Subscribe to newsletter></label>
	</div>
	<div>
		<button type="submit">Scribute</button>
	</div>
</form>
```

In this example, we've got a name of `subscribe`, and a value of `newsletter`. When the form is submitted, the data name/value pair will be `subscribe=newsletter`.

If the `value` attribute was omitted, the default value for the checkbox is `on`, so the submitted data in that case would be `subscribe=on`.

## table
### 属性
- `border-collapse` 表格边框模型，分为分离型 (separate) 和折叠型 (collapse)。
- `table-layout`
- border="1" 边框
- `colspan="2"` 跨两列
- `rowspan="2"` 跨两行

如果不设置表格宽度，则表格会 “收缩适应” 到内容宽度。

表格行中每一列的宽度有两种算法：
- 默认情况下，根据自身单元格内容所需的宽度来决定整个表格的宽度。
- 固定表格布局。使用 `table-layout:fixed` ，表格单元格的宽度**由表格首行的单元格决定**，或者基于 `col` 和 `colgroup` 元素的宽度来确定。第一行中声明的列宽具有决定性，后续行如果遇到内容较多的情况，只能折行或者溢出(
- 溢出需要表格有一个明确的宽度。

利用表格显示模式来创建布局的缺点：
- 表格单元元素无法应用外边距
- 表格单元应用定位时行为无法预料
- 不支持发生折行的内容
- 内部的元素无法重新排序

### 格式化表格
格式化表格最重要的部分：
- table 元素的宽度默认由表格内容决定，导致表格列的宽度不可控。设置 table 元素 `table-layout` 属性为 `fixed`，可以通过调整表头宽度来灵活控制表格列的宽度。像实例代码展示的那样，设置 `thead th:nth-child(n)` 百分比宽度，整个列的宽度将会等于表头的宽度。
- 设置 `width` 属性值为 `100%`，使表格大小自适应于它的包含块。
- `border-collapse: collapse;` 当设置表格边框的时候，此条规则会合并表格边框线。
- 设置 `text-align`, ` padding`, `background` 等

```css
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}

thead th:nth-child(1) {
  width: 40%;
}

thead th:nth-child(2) {
  width: 30%;
}

thead th:nth-child(3) {
  width: 30%;
}
```

## 替换元素
凡是替换型元素，都是使用 src 属性来引用文件的，链接型元素是使用 href 标签的。
- `img` 
- `picture` 
- `video` 
- `audio`

### img
每一张图片有两个尺寸：`width`  和 `height`。当在 HTML 中插入一张图片的时候，如果你不指定它的尺寸，浏览器将会自动以原大小展示图片。

- `srcset`
- `sizes`

## hr
This can be used to define a change in topic or to visually separate groups of content.

## time
Standardize time with `time` element along with `datetime` attribute. It is a inline element.

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```
