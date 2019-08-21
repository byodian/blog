[TOC]

## 基础知识

### CSS版本

- CSS 1：包括字体、颜色和外边距等基本属性（ 1996）。
- CSS 2 - CSS 2.1：浮动、定位和新选择符（子选择符、通用选择符以及相邻选择符等）
- CSS 3：一系列级别独立的模块，模块级别的命名取决于规范的模块是否为全新的技术，如果是则命名为 CSS XXX Level 1，反之称之为 CSS XXX Level 3（或者更高的级别）。比如 CSS Color Level 3， CSS Grid Layout Level 3。

### 组织代码

CSS 是随着代码量的增加而最难保持维护的语言之一，因为 CSS 语言没有内置的变量、函数和命名空间等特性，不利于保持代码的结构和模块化。

1. **可维护性**，所有优秀代码最重要的特点。代码要易懂，意图明确，为将来的修改做优化。最大要素：**尽量减少改动时要编辑的地方**。
2. **关注点分离**，分成小块（模块），松散结合。
3. **正确对待 HTML 和 CSS 版本**。知道 HTML 和  CSS 的那些部分已经在浏览器中实现了，以及这些是否稳健。（P5）
4. 为不支持某些特性的浏览器准备好可以接受的后背代码，即处理**向后兼容与未来要好**的代码。（判断 CSS 大师的标准之一）
5. 渐进增强：**首先为最小公分母准备可用内容，然后再为支持新特性的浏览器添加新特效。**厂商前缀，条件规则与检测脚本。

### CSS 编码技巧

保持代码的健壮性、灵活性和 DRY（Don't repeat yourself） 

- **尽量减少代码的重复**，减少代码改动时要编辑的地方。
  - 代码易维护 vs 代码量少
  - currentColor
  - inherit
- 基于视觉的设计
- 响应式网页，避免使用媒体查询。在实现弹性可伸缩的布局下，使用媒体查询的各个断点区间内指定相应的尺寸。
- 合理使用简写
  - 合理使用简写——防卫性编码方式
  - 展开式属性——明确地去覆盖某个具体的展开式属性。

```css
  padding: 10px;
  padding-left: 0;
  
```

- 关于使用预处理器。建议：在每个项目开始使用纯 CSS，只有当代码开始变得无法保持 DRY 时，才切换到预处理器的方案。

### 结构化、语义化 HTML 

**语义标记是优秀 HTML 文档的基础**，语义化标记意味着在正确的地方使用正确的元素。结构良好的标记意味适合机器阅读，也为添加样式提供了方便。

1. ID 和 class 属性
2. 结构化元素
3. div 和 span
4. 重新定义表现性文本元素
5. 扩展 HTML 语义
   1. ARIA 的 role 属性
   2. 微格式
   3. 微数据
6. 验证，HTML 和 CSS 代码验证

**结构化元素**是为了在 HTML 文档中创建逻辑性区块，同时**使用类名作为添加样式的接入点**。从而**解耦文档的语义和为文档添加样式的方式**。比如：

```
<article class="post">
    <header class="post-header">
        <h1></h1>  
    </header>
    <p></p>
</article>
.post {}
.post-header {}
```



HTML 5 新增的结构化元素：section header footer nav article aside main

## 选择器

### 伪类

#### 链接
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


### CSS 盒模型

框的总宽度等于`width`，`paddin-left`，`padding-right`，`border-left`，`borde-right` 属性之和。`box-sizing`可以设置框的模型。属性值有 `border-box`，`content-box`

#### width、height
内容框的宽度和高度，width 的值可以为长度值或者百分数，height 默认为框内容的的高度，除非指定一个绝对的高度。

#### padding

#### border
同样忽略百分比的宽度设置

#### margin

### 包含块

#### 浮动元素

包含块定义为最近的块级祖先元素。

#### 定位元素

“包含块”一词实际应该是定位上下位。

- 根元素包含块，就是 `html` 元素
- 对于非根元素，如果其 `position` 值是 `relative` 或 `static`，包含块则由最近的块级框、表单元格或行内块祖先框的**内容边界**（content box）组成。
- 对于非根元素，如果其 `position` 值是 `absolute` ，包含块则设置为最近的 `position` 值不是 `static` 的祖先元素。

## 属性

### max-width

设置一个元素的最大宽度值，`max-width` 可以覆盖 `width`，但是 `min-width` 可以覆盖 `max-width`。

### position: absolute

`absolute` 是非常独立的 CSS 属性，其样式和行为表现不依赖其他任何 CSS 属性就可以完成。

- 父元素塌陷
- 宽度自适应
- 块状格式化上下文

### overflow

CSS 简写属性，设置一个元素内容如果超过其块状格式化上下文内容的显示方式。

`overflow-x`、`overflow-y` 的简写。
