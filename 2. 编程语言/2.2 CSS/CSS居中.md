## 水平方向居中对齐

### 内联水平元素
在一个块级水平的父元素中，你可以使用 `text-align` 水平对齐**内联水平的元素**。

```css
.center-children {
  text-align: center;
}
```

### 块级水平元素

如果是**一个块级水平元素**，你可以使用设置 `margin-left` 和 `margin-right` 的属性值为 **auto，**来实现水平居中对齐，但这种方法必须需要设置一个具体的 `width`

```css
.center {
  margin: 0 auto;
}
```

如果有**两个**或**更多块级水平元素**需要水平居中在一行显示，你可以使用 `display: inline-block` 和 `display: flex` 两种方法。

## 垂直方向居中对齐

### 内联水平元素
如果是单个 inline 或者 inline-* 元素

- 使用 `padding-top` 和 `padding-bottom`
- 使用 `line-height` 设置元素高度

如果是多个 inline 或者 inline-* 元素
- 使用 table 布局结合 `vertical-align: middle`
- 使用 flex 布局

### 块级水平元素

**如果是单个块级水平元素**

#### 元素的高度确定时，使用绝对定位 `absolute`

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin: -50px;  /* 元素高度的一半 */
}
```

#### 元素的高度不确定时，使用绝对定位 absolute
```css
.parent {
  position: relative;
}
  
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

#### 使用绝对定位 `absolute` 和 `margin: auto`，必须有一个明确的高度

```css
.parent {
  position: relative;
  height: 500px;
}

.child {
  position: absolute;
  top: 0;
  bottom: 0;

  /* 须指定明确高度 */
  height: 100px;
  /* auto 为剩余空间，在这里是 200px */
  margin: auto 0;
}
```

**如果是多个块级元素**

#### 使用 flexbox
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### grid 布局
```css
body, html {
  height: 100%;
  display: grid;
}
span { 
  /* thing to center */
  margin: auto;
}
```

## 参考
[Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
