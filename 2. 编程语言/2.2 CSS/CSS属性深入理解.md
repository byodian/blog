## 无宽度和宽度分离原则
对于块状元素，如果 `width: auto` ,则元素宽度就会自适应占据整个容器。

宽度分离原则：CSS 中的 `width` 属性不与影响宽度的 `padding/border` 属性共存。使用包裹元素 width 独占一层标签，`padding`、`border`、`margin` 利用流动性在内部自适应呈现。

    .container {
    	width: 100px;
    }
    .item {
    	margin: 0 20px;
    	padding: 20px;
    	border: 1px solid;
    }

### box-sizing

    input, textarea, img, video, object {
    	box-sizing: border;
    }

## inline elements vs. block-level elements

- In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block.
- In a block formatting context, each box's left outer edge touches the left edge of a containing block.
- In an inline formatting context, boxes are laid out horizontally, one after the other, beginning the top of a containing block.

## non-replaced inline elements vs. replaced inline elements

## 盒模型

### width

`width` 默认值为 `auto` 。auto 作为默认值会出现至少四种不同的宽度表现

- 充分利用可用空间，`<div>` `<p>` 这些元素的宽度默认是父元素宽度的 100%
- 收缩与包裹 (shrink-to-fit) ，浮动、绝对定位、inline-block 元素或者 table 元素。

## height

height 不会运用于行内非替换元素，内容区域的高度应该基于字体

### height: 100% 无法生效的原因

> Specifies a percentage height. The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the used height is calculated as if 'auto' was specified. A percentage height on the root element is relative to the initial containing block.

规范指出，如果包含块的高度没有显示指定 (高度由内容决定)，并且该元素不是绝对定位，则计算值为 auto。这里，auto 和百分比数值无法计算。

> For absolutely positioned elements whose containing block is based on a block-level element, the percentage is calculated with respect to the height of the *padding box* of that element. This is a change from CSS1, where the percentage was always calculated with respect to the *content box* of the parent element.

绝对定位元素高度百分数值基于包含块的 `padding box` 计算，非绝对定位元素基于包含块的 `content-box` 计算。

### height: 100% 生效的方法

绝对定位的宽高比计算是相对于 padding-box 的，而非绝对定位元素则是相对于 content-box 计算。

- 包含块元素有一个确定的高度值。
- 元素绝对定位
- 元素的父元素为 flex-item，且父级元素在纵轴方向上对齐方式为 stretch

### padding

An element's padding area is the space between its content and its border. 

一个元素的内边距是它的内容和边框之间的空间。

### 内联元素的垂直 padding 同样会影响布局

内联元素的 `padding` 在垂直方向同样会影响布局，影响视觉效果。只是内联元素没有可视高度和可视宽度的说法（clientHeight 和 clientWidth 永远为 0），视觉上没有改变上下行的间距，给人的的感觉是垂直 `padding` 没有作用。

我们给内联元素加一个背景或者边框，设置垂直 `padding` ，就可以看到内联元素的尺寸空间确实受到了影响，但是不会影响其他元素的布局。

    a {
    	padding: .5rem 1rem;
    	background-color: red;
    }

### 垂直 padding 增加内联元素的点击区域

利用垂直 `padding` 只影响内联元素的视觉效果，不影响其他元素的布局，可以用来**增加链接或按钮的点击区域大小**。默认情况下，链接的点击区域的高度受 `font-size` 的字体大小控制，和 `line-height` 无关

    a {
    	padding: 1rem 0;
    }

内联元素垂直方向上的行为完全受 `line-height` 和 `vertical-align` 的影响。

### padding 实现自适应的等比例矩形效果

padding 的百分数值相对于包含块的宽度计算。利用这种特性，可以实现等比例缩放的布局效果。

    <div class="container">
    	<img src="#" alt="hero">
    </div>

    .container{
    	padding: 10% 50%;
    	position: relative;
    }
    
    .container img {
    	position: absolute;
    	width: 100%;
    	height: 100%;
    	left: 0; top: 0;
    }

### padding 与图形绘制

padding 属性和 background-clip 属性配合，可以实现一些图像绘制效果。

    /* menu icon*/
    .icon-menu {
    	display: inline-block;
    	width: 14px; height: 1px;
    	padding: 3px 0;
    	border-top: 1px solid;
    	border-bottom: 1px solid;
    	background-color: currentColor;
    	background-clip: content-box;
    }
    
    /* dot icon */
    .icon-dot {
    	display: inline-block;
    	width: 10px; height: 10px;
    	padding: 1px;
    	border-top: 1px solid;
    	border-radius: 50%;
    	background-color: currentColor;
    	background-clip: content-box;
    }

### margin

外边距折叠只发生在常规文本流中块级盒子的垂直方向上，不同的**具有 BFC 特性**的元素之间不会发生折叠。比如：行内盒子、浮动盒子、绝对定位盒子、flex 或者 grid 盒子，这些元素之间不会发生外边距折叠。

顶部和底部外边距对非替换的行内元素无影响。

### margin: auto 深入理解

水平填充规则：

- 如果一侧 auto ，则 auto 为剩余空间大小
- 如果两侧均是 auto ，则平均分配空间。

    <div class="container">
    	<div class="item"></div>
    </div>

    .container {
    	width: 200px;
    }
    
    .item {
    	width: 100px;
    	height: 100px;
    	margin-right: auto; /* item 左对齐 */
    }

![https://raw.githubusercontent.com/byodian/logpic/master/margin-left.png](https://raw.githubusercontent.com/byodian/logpic/master/margin-left.png)

    <div class="container">
    	<div class="item"></div>
    </div>

    .container {
    	width: 300px;
    }
    
    .item {
    	width: 100px;
    	height: 100px;
    	margin: auto; /* item 左对齐 */
    }

![https://raw.githubusercontent.com/byodian/logpic/master/margin.png](https://raw.githubusercontent.com/byodian/logpic/master/margin.png)

`margin` 属性的 auto 计算控制块级元素的左右对齐，而 `text-align` 控制行内元素的左右对齐。

### margin: auto 无法实现垂直居中的原因

> If 'margin-top', or 'margin-bottom' are auto, their used value is 0. — w[3.org](https://www.w3.org/TR/CSS2/visudet.html#normal-block)

- 在正常文档流中，`margin: auto` 在垂直方向的距离为零。
- 触发 `margin: auto` 计算的一个前提条件，就是 `width` 或 `height` 为 auto 时，元素具有对应方向的自动填充特性。

### margin: auto 实现垂直居中方法

- `position: absolute`
- `display: flex`，Flexbox 中各项的自动外边距会扩展填充相应方向的空间。

### margin 负值

元素的尺寸：border-box 的尺寸，包括 padding 和 border ，原生 DOM API 中写作 offsetWidth 和 offsetHeight

元素的可视（内部）尺寸：padding-box 的尺寸，原生 DOM API 中写作 clientWidth 和 clientHeight

元素的外部尺寸：margin-box 的尺寸，包括 padding 和 border 以及 margin。

元素在充分利用可用空间的状态下，margin 可以改变元素的可视尺寸。

## CSS 流体布局下的宽度分离原则

CSS 中的 `width` 属性不与影响宽度的 `padding/border`属性共存。这样做的目的是将影响宽度的因素降到最低。

方法：嵌套一层标签，外部父元素设置 `width` 值，内部子元素设置 `padding/border` 。

## 文本属性

### text-align
- 只应用于块级元素
- 只对行内元素起作用。

### line-height
设置 inline 元素的高度，常用来设置文本行之间的距离。

### vertical-align
垂直对齐的属性值相对于它的父元素。对齐同一包含块中的元素。

## ::selection
应用样式到用户选定的那一部分文档。支持的属性有：

- color
- background-color
- cursor
- caret-color - 插入光标的颜色
- outline
- text-decoration
- text-shadow
- text-emphasis-color

## 包含块 - containing blocks

In CSS 2.2, many box positions and sizes are calculated **with respect to** the edges of a rectangular box called a containing block.

在 CSS 2.2 中，许多的盒子的定位和大小的计算与一个叫做包含块的正方形的盒子有关。

# 正常流 (Normal flow)

## Block formatting contexts

> It's the region in which the layout of block boxes occurs and in which floats interact with other elements.

它是块级盒子布局过程产生，也是浮动元素与其他元素交互的区域。

> Block formatting contexts are important for the positioning (see float) and clearing (see clear) of floats. The rules for positioning and clearing of floats apply only to things within the same block formatting context. Floats don't affect the layout of the content inside other block formatting contexts and clear only clears past floats in the same block formatting context. Margin collapsing also occurs only between blocks that belong to the same block formatting context.

BFC 对于浮动元素的定位和清除是重要的。浮动元素的定位和清除仅仅应用于同一个 BFC 元素。浮动元素不会影响其他具有 BFC 元素的布局，清除浮动也只应用在同一 BFC 元素中之前浮动的元素。外边距合并也只发生在同一 BFC 元素中。

### BFC 特性

- 一个块级格式化上下文的元素会包含它内部所有的后代元素
- 不同的 BFC 元素之间不会发生折叠
- 具有 BFC 的元素可消除浮动元素的影响。 (忽略自己的边界必须接触自己的包含块边界的规则，此时该元素会收缩到适当大小)
- 具有 BFC 特性的元素，其内部的子元素无论怎么布局都不会影响到外面元素的布局和定位，也不会受到外面元素的影响，其表现就像一个独立封闭的容器，无论内部子元素如何定位布局，都不会干扰外面的元素。
- 实现更健壮和更智能的自适应布局。

### 触发 BFC 条件

> Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that ** are not blocked boxes,** and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

- 根元素（`<html>`）
- `float` 值不为 none
- `position` 值不为 relative 和 static
- `overflow` 值为 auto、hidden 或者 scroll
- `table` 和 `table captions` 元素
- `display` 的值为 inline-block 的元素
- `display` 的值为 table、table-cell、table-row、table-caption、table-row-group、table-header、table-footer-group 的匿名 table 元素
- `display` 值为 flow-root
- Flex items
- Grid items

### 举例

浮动元素和 BFC 元素实现自动填充的自适应布局。

HTML 代码

    <div class="media-container">
          <img class="media-picture" src="xx.png" >
          <div class="media-body">
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </div>

CSS 代码

    /* .media-container 元素避免高度塌陷, 具有 BFC 特性的元素会包含所有的子元素*/
        /* .media-body clear float */
        .media-container, .media-body {
        	overflow: hidden;
        }
        
        .media-picture {
        	float: float;
        	margin-right: 10px;
        }

## 层叠上下文（stacking context）

HTML 元素的一个三维概念，指具有层叠上下文的元素在显示器与用户相对的 z 轴上可以优先显示。

### 层叠水平（stacking level）

决定了同一层叠上下文中元素在 z 轴上的显示顺序，所有的元素都具有层叠水平，只是层叠水平各有差异。另外， z-index 只能影响定位元素、flex 容器的子元素以及 grid 容器子元素的层叠水平。

### 层叠上下文特性

- 具有层叠上下文的元素层叠水平比普通元素高
- 层叠上下文可以阻断元素的混合模式
- 层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的“层叠上下文”，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的顺序中。
- 每个层叠上下文和兄弟元素独立。当进行层叠变化或渲染的时候，只需要考虑后代元素。

### 层叠上下文的创建

- 根元素
- `position` 值为 **absolute** 或者 **relative** ，且 `z-index` 值不为 **auto**
- `position` 值为 **fixed** 或者 **sticky** 的定位元素
- `flex`容器的子代元素，且 `z-index` 值不为 **auto**
- `grid` 容器的子代元素，且 `z-index` 值不为 **auto**
- `opacity` 值小于 1 的元素
- `mix-blend-mode` 值不为 **normal**
- 下面属性的值不为 **none**
    - `transform`
    - `filter`
    - `perspective`
    - `clip-path`
    - `mask` `mask-image` `mask-border`

### 层叠原则
当元素发生层叠的时候，其覆盖关系遵循两条规则：

1. 当元素层叠水平和层叠顺序相同的时候，在 DOM 流中处于后面元素会覆盖前面的元素。
2. 当具有明显的层叠水平标识的时候，如生效的 `z-index` 属性值，在同一层叠上下文领域，层叠水平值大的会覆盖层叠水平小的元素

### 层叠顺序

普通元素具有层叠上下文，其层叠顺序就会变高。

- 如果层叠上下文元素不依赖 `z-index` 的数值，则其层叠顺序是 `z-index: auto` 的级别。
- 如果层叠上下文元素依赖 `z-index` 的数值，则其层叠顺序由 `z-index` 的值决定。
- 元素一旦成为定位元素，其 `z-index` 就会自动生效，此时 `z-index`的值为 **auto**，其层叠水平跟不支持 `z-index` 的层叠上下文处于同一个级别。

层叠顺序依次增大：

1. 层叠上下文 background/border
2. 负 `z-index`
3. block 块状水平盒子
4. float 浮动盒子
5. inline 水平盒子
6. `z-index: auto` 可看成 `z-index: 0` 和不依赖 `z-index` 的层叠上下文
7. 正 `z-index`

## float
浮动元素的本质：**实现文字环绕效果。**

浮动元素的包含块：最近的块级元素

- 浮动元素具有包裹性，会使父元素高度塌陷 (不是 bug，而是标准，为了实现文字环绕效果)，其宽度自适应，但最大宽度不会超过其包含块的宽度。
- float 会触发 BFC
- 设置为 **float** 的元素会脱离文档流（但任为文档流的一部分），并且会被移动，直到触碰到包含块或者另一个浮动元素的边缘。因此，浮动元素之间不会相互重叠。
- 浮动元素不会超出其包含块元素的边缘，因此浮动元素水平方向排列过多并超出包含块的宽度时，超出的浮动元素会显示在下一行。
- 浮动元素会上升的尽可能高 (不能比之前所有浮动元素或者块级元素的顶端更高)，左右尽可能远。
- 浮动元素会延伸，会包含其所有的后代浮动元素。(触发 BFC, 包裹所有子元素)

浮动元素与正常流中的内容发生重叠的情况：

- 行内元素会完全覆盖浮动元素（包括背景、边框和内容等一切，可以实现文字环绕效果）。
- 块元素只是将其内容显示在浮动元素之上。

### clear
clear 属性应用于 block 水平元素

## 定位

### absolute
The absolutely positioned element is positioned relative to its *nearest positioned ancestor*. If a positioned ancestor doesn't exist, it is positioned relative to the *initial containing block,* which the containing block of the document's root element.

absolute 是非常独立的CSS属性值，其样式和行为表现不依赖任何其他CSS属性，就可以完成。

绝对定位的元素默认会待在自己静态定位时的地方，可通过外边距控制偏移位置。

当 absolute 遇到 left/top/right/bottom 属性的时候，absolute元素才真正变成绝对定位元素。

当一个绝对定位元素，其对立定位方向属性同时有具体定位数值的时候，流体特性就发生了。此时宽度表现为格式化宽度，其大小自适应于包含块的 padding-box 的宽度。 

### 绝对定位的流体特性
条件：对立方向同时发生定位偏移的时候。

    <div class="box"></div>
    .box  {
    	position: absolute;
    	left: 0; right: 0; top: 0; bottom: 0;
    }

### absolute 水平垂直居中
利用绝对定位的流体特性和 margin: auto 的自动分配特性实现居中。

    .box {
    	width: 200px;
    	height: 100px;
    	position: absolute;
    	left: 0; right: 0; top: 0; bottom: 0;
    	margin: auto;
    }

## Flexbox

- Flexbox，即 Flexible Box Layout 模块，其有容器 (**弹性容器**，flex container) 和直接子元素 (**弹性项**，flex item) 两类属性。
- Flexbox 属于一维布局方法，弹性项可以填充剩余空间或者缩小到最小的宽度。
- Flexbox 控制弹性项的顺序 (`order`) 、大小 (`flex`)、流动方向 (`flex-direction`)、分布 (`justify-content`) 对齐 (`align-items`)。
- Flexbox 可以沿水平方向排列，也可以沿垂直方向排列。这个排列方向称为**主轴，**该方向上的尺寸被称为**主尺寸**。
- Flexbox 与主轴垂直的方向称为**辅助**，沿这个方向项目可以发生**位移**和**伸缩**。
- 如果不指定大小， 弹性项就会自动收缩 (默认值 `flex-basis: auto`)到内容宽度或内容高度。
- `justify-content`、`align-content`、`align-items` 弹性容器有剩余空间时，这些属性才能生效。
- 属性默认值
    - `justify-content: flex-start`
    - `align-items: stretch`
    - `flex: 0 1 auto`
    - `align-content: stretch`
    - `order: 0`
- **多行 Flexbox 布局中没有办法控制特定的某一行。**解决这个问题，可以给所有的弹性项目设置 `max-width` ，限制可伸缩的范围。
- Flexbox 核心优势：**填充多余空间。**通过综合使用 `flex-grow` 及 `max-width` 和 `min-width`，就能实现智能的多行 Flexbox 布局。
- Flexbox 的**可伸缩性**主要体现在 `flex-basis`、`flex-grow`、`flex-shrink` 三个属性上面。
    - `flex-basis` 设置弹性项目初始的主尺寸大小。默认值为 `auto` ，表示在设置 `width/height` 主尺寸的前提下，将继承 `width/height` 的属性值。否则，将根据内容确定大小。
    - `flex-grow` 在通过 flex-basis 设置弹性项目的尺寸后，如果还有剩余空间，该属性将会起作用。其值是一个数值，表示剩余空间的一个比值，默认值为 `0`。
    - `flex-shrink` 如果空间不够，该属性`值将会决定弹性项目如何`收缩，默认值为 `1`。
    - `flex` 这三个属性的简写形式。在简写形式下，`flex-basis` 的值必须有写单位。
  
## Properties for the flex items

- `flex` There is a shortcut available to set several flex properties at once.

    `flex-shrink`、`flex-grow`、`flex-basis`

- `align-self`

    This is useful since other common adjustment techniques using CSS properties `float`, `clear` and `vertical-align` do not work on flex items.

    This property allows you to adjust each item's alignment individually, instead of setting them all at once.

## Parent element's properties

- flex-wrap
- align-items
- justify-content
- flex-direction

## CSS grid

fr - a fraction of available space

- `grid-template-row` Add some rows to the grid container.

    ```css
    // Give your grid two rows
    .grid {
    	display: grid;
    	grid-template-row: 100px 100px;
    }
    ```

- `grid-template-column` adjust the rows to the grid container.

    ```css
    // Give your grid two columns
    .grid {
    	display: grid;
    	grid-template-column: 100px 100px;
    }
    ```

- `grid-column-gap` Add a gap between the columns.
- `grid-row-gap` Add a gaap between the rows.
- `gird-gap` This is a shorthand property for  `grid-row-gap` and `grid-column-gap` .
- `justify-items` Align all Items Horizontally.
- `align-items` Align all Items Vertically.

## Grid items property

- `grid-column` Control column spacing that consume multiple columns
- `grid-row` Control row spacing that consume multiple rows
- `justify-self` Align an Item Horizontally. `stretch` is the default value of this property.
- `align-self` Align an Item Vertically. The default value of this property is `stretch` .

## Grid areas

- `grid-template-areas` Divide the Grid Into an Area Template.

    you can use a period **(.)** to designate an empty cell in the grid.

    ```css
    grid-template-areas:
          "header header header"
          ". content content"
          "footer footer footer";
    ```

- `grid-area` Place items in grid areas.

    `grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at`

    ```css
    grid-area: 1/1/4/4/;
    ```

- `repeat()` Reduce Repetition

    ```css
    grid-template-columns: repeat(2, 1fr, 50px) 20px;
    /*
    * 'repeat(2, 1fr, 50px) 20px' means:
    * 1fr 50px 1fr 50px 20px
    */
    ```

- `minmax()` Limit item size. The CSS function defines a size range greater than or equal to min and less than or equal to max.

    ```css
    grid-template-columns: 100px minmax(50px, 200px);
    ```

- `auto-fit`
- `auto-fill` Create flexible layouts.

    The only difference is that when the container's size exceeds the size of all the items combined, `auto-fill` keeps inserting empty rows or columns and p**ushes your items to the side**, while `auto-fit` **collapses** those empty rows or columns and **stretches** your items to fit the size of the container.

    ```css
    repeat(auto-fill, minmax(60px, 1fr))
    ```

- Grid units
  - `fr` sets the column or row to a fraction of the available space.
  - `auto` sets the column or row to the width or height of its content automatically
  - `%` Adjusts the column or row to the percent width of the its container.

## Overflow
- 指定 Block-containers, flex containers, and grid containers 的内容溢出是否需要裁剪
- 触发 BFC 特性

## ::after & ::before
- 添加一些特别的符号，比如 / | » “
- 添加图标。使用图标库，比如 fontawesome, 可以将 `content` 设置为 Unicode。
- 添加边框或者三角形。使用 `border` 属性
- `content: ""` 用来清除浮动或者使用 `background-color` 背景图片属性，添加背景。
- 添加计数 `content: counter(...)`
- 提示信息。结合 `content: attr(data-*|其他属性)` 使用

## 单位
**两条简单的规则**:

1. 如果属性缩放根据它的的 `font-size` 变化，则使用 `em`（Size in `em` if the property scales according to its `font-size` ）
2. 其他的尺寸使用 `rem` （Size everything else in `rem`）

## em
- `em` 单位以文档的字号为参照
- 在媒体查询中使用的 `em` 单位始终相对于浏览器偏好中设置的字号，而不是通过 CSS 调整的 HTML 元素的字号。

**设置浏览器默认字体操作步骤：**
1. Chrome 浏览器：设置 -> 外观 -> 字号
2. Firefox 浏览器：选项 -> 常规 -> 语言和外观 ->  字体和颜色

## 参考
[REM vs EM – The Great Debate](https://zellwk.com/blog/rem-vs-em/)
[PX, EM or REM Media Queries?](https://zellwk.com/blog/media-query-units/)