## 关于 CSS3 规范

CSS3 采用了完全不同的模式。实际上不存在所谓的 CSS3 规范，因为 CSS3 指的是一系列级别独立的模块。如果规范模块是对之前 CSS 慨念的改进，那就从 3 级开始命名。如果不是改进，而是一种全新的技术，则从 1 级开始命名。如 CSS Backgrounds and Border Level 3 、Selector Level 4 和 CSS Grid Layout Level 1

## 选择器

选择器是 CSS 规则的一部分，作为规则的开头，描述了 CSS 规则 将与 HTML 文档中哪一个元素匹配，并将样式应用于该元素。

### 元素选择器和后代选择器

这两个选择器是最基本的选择器，适合全面应用基础样式。

```css
/* 元素选择器 - 段落元素 */
p {
  color: black;
}

/* 后代选择器 - 使用空格分隔两个选择器 */
div p {
  padding: 10px;
}
```

### ID 选择器和类选择器

**ID** 选择器和**类**选择器精确选择目标元素。

### 通配选择器

通配选择器可以匹配任何选择器。

### 子选择器和兄弟选择器

子选择器使用 `>` 分隔两个选择器，表示只选择一个元素的直接后代元素。兄弟选择器又分为相邻兄弟选择器( `+` 分隔) 和一般兄弟选择器( `~` 分隔)。

```css
li {
  color: blue;
}

/* 子元素选择器 */
/* 只会选择第一层 li 元素 */
.nav-list > li {
  color: red;
}

<nav class="nav">
  <ul class="nav-list">
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three
      <ul>
        <li>Item Three1</li>
        <li>Item Three2</li>
      </ul>
    </li>
  </ul>
</nav>
```

### 属性选择符

基于元素是否具有某个属性或者属性是否具有某个值来选择元素。

```css
input[type='text'] {...}

/* 匹配以某些字符开头的属性值 */
a[href^='https'] {...}

/* 匹配以某些字符结尾的属性值 */
img[src$='.png'] {...}

/* 匹配包含某些字符的属性值 */
a[href*='/home/'] {...}

/* 匹配包含某些字符的属性值 */
a[href*='/home/'] {...}
```

### 伪类和伪元素

伪类 ([pseudo-class](https://css-tricks.com/pseudo-class-selectors/)) 可以选择**文档中已存在元素的某个特定的状态**来为元素添加样式，比如超链接的悬浮状态、表单元素的聚焦状态或者某类型元素在文档中的位置和数量状态。

常见伪类可分为超链接伪类、表单伪类、位置/数量伪类和关系型的伪类

CSS3 新增的结构化伪类，`nth-child()` `nth-last-child()`

```css
/* 超链接伪类 */
a:link {...}
a:visited {...}
a:hover, a:focus {...}
a:active {...}

/* 表单伪类 */ 
:focus
:target
:enabled
:disabled
:checked
:required
:optional
:read-only/:read-write

/* 位置和数量相关的伪类 */

:root 选择 <html> 元素

/* 基于父元素位置 */
:first-child 选择父元素中的第一个元素
:last-child 选择父元素中的最后一个元素
:nth-child() 选择一个或多个元素
:nth-last-child()

/* 基于元素类型定位  */
:nth-of-type() 
:nth-last-of-type()
:first-of-type 同一类型的第一个元素，不一定是父元素中的第一个子元素
:last-of-type 同一类型的最后一个元素，不一定是父元素中的最后一个元素
:only-of-type 同一类型中只有一个元素

/* 关系型的伪类 */
:not()
:empty
```

伪元素 (pseudo-elements) 创建不在文档节点树中的元素，使用 `content` 属性为文档树中的元素添加修饰内容。

```css
::after
::before
::first-letter
::first-line
::selection

/* This is an experimental technology */
::backdrop
::marker
::placeholder
```
