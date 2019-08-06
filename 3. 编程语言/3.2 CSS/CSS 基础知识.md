## 选择器
### 伪类

链接
LVHA顺序：`:link-:visited-:hover-:actived`

`:actived` 匹配被激活的元素，鼠标按下和松开鼠标时，该伪类会激活。

:first-child 代表一组兄弟元素中的第一个元素
:last-child  代表一组兄弟元素中的最后一个元素

`:nth-child()` 匹配那些在`同系列兄弟节点`中的位置与模式 an+b 匹配的元素。
:nth-last-child() 

:first-of-type
:last-of-type 

:only-of-type

:nth-last-of-type()
`:nth-of-type()`  选择器匹配那些在`相同兄弟节点`中的位置与模式 an+b 匹配的相同元素。

### 伪元素

:: before

::after

::first-letter

::first-line

::slection

::backdrop


### css框模型

框的总宽度等于`width`，`paddin-left`，`padding-right`，`border-left`，`borde-right` 属性之和。`box-sizing`可以设置框的模型。属性值有 `border-box`，`content-box`

width、height
内容框的宽度和高度，width 的值可以为长度值或者百分数，height 默认为框内容的的高度，除非指定一个绝对的高度。

padding


border
同样忽略百分比的宽度设置

margin

### 字体

**font-family:** verdana(宋体),Helvetica(黑体);

serif 衬线字体 如 Time New Romans
sans-serif 无衬线字体 如 Arial
monospace  每个字符具有相同宽度的字体，通常用于代码列表
cursive 用于模拟笔迹的字体，具有流动的连接笔画
fantasy 用来装饰的字体



**font-size** 
比如可以设置
HTML {
    font-size: 10px;
}

**font-style** 
normal | italic | oblique

**font-weight**
normal | bold | lighter | bolder | 100-900

**font-transform** 设置要转换的字体
none | uppercase | lowercase | capitalize | full-width 

uppercase 将所有的文本转为大写

lowercase 将所有的文本转为小写

capitalize 转换所有单词，让其首字母大写

**text-decoration**
underline | overline | line-through

- text-decoration  可以一次接受多个值
- text-decoration   是一个缩写形式，它由text-decoration-line,text-decoration-style,text-decoration-color 构成。

**text-shadow**
text-shadow 最多可以接受四个值，可以接受负值。

text-shadow: 4px 4px 4px red;
1. 阴影与原始文本的水平偏移
2. 阴影与原始文本的垂直偏移
3. 模糊半径
4. 阴影的基础颜色

**text-align**
文本对齐用来控制文本如何和它所在的内容盒子对齐

left | right | center | justify

**line-height**
设置文本每行之间的高，也可以设置无单位的值，作为乘数。推荐的行高大约是1.5-2（双倍行距）。

**letter-spacing & word-spacing**

**text-indent**

**white-space**
normal | pre | nowrap | pre-wrap | pre-line

**word-break**

**strong text**

**word-wrap**

### 响应式设计 RWD（Responsive Web Design）

Bootstrap

### 框架

### 背景

### 头部

head title base meta link style script 

### 实体

![实体][1]

  [1]: http://ww1.sinaimg.cn/large/0068As3sgy1ftd7xcasqmj30sh0iuab5.jpg