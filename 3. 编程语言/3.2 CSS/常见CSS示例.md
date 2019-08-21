[TOC]

## 居中问题

### text-align: center

`text-align` 设置块级元素或者表单元格元素的水平对齐方式，只对图片或者文字等行内元素起作用。

```html
<div class="wrapper">
    <p>文字</p>
</div>

.wrapper {
	text-align: center;
}
```



### margin: auto

其应用于正常流的块级元素，可以让子元素水平居中。通过设置父元素 `margin-left: auto;` 和 `margin-right: auto` ，并且指定具体的 `width` 来实现子元素的水平居中。

不指定宽度，`margin-left: auto; margin-right: 0;` 会不起作用，因为块级元素宽度默认为父元素的 100% 。

```html
<div class="wrapper">
    <p>居中对齐</p>
</div>

.wrapper {
    width: 75%;
    margin: 0 auto;
}
```

### 设置 line-height 的值为父容器的高度

适合只有文字的情况下，可以将文字垂直居中。

### 绝对定位的居中

- 子元素的宽度不确定时，使用 `position: absolute;` 和 `transform: translate(-50%, -50%);` 实现：

```html
<header class="header">
    <div class="header__text-box">
        <h1 class="heading-primary">position: absolute;</h1>
    </div>
</header>

.header {
	position: relative;
}

.header__text-box {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

- 子元素的宽度确定时，设置子元素 `position: absolute;` 和 `margin-left: -50%`、`margin-right: -50%;`  实现水平对齐：

```html
<header class="header">
    <div class="header__text-box">
        <h1 class="heading-primary">position: absolute;</h1>
    </div>
</header>

.header {
	position: relative;
}

.header__text-box {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -50%;
	margin-right: -50%;
}
```

### Flex 布局

## 背景



## 响应式图片





