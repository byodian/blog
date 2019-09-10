

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

## 美化表单

- `outline`
- `border`
- `::placeholder`
- `:placeholder-shown`
- `:focus`
- `:invalid`
- `:checked`

HTML 代码：

```html

<section class="section-wrapper">
  <form action="#" class="form-wrapper">
  <div class="box">
    <input class="box-input box-input__name"  id="box-input__name" type="text" placeholder="Full name" required>
    <label class="box-input__label" for="box-input__name">Full Name</label>
  </div>
  <div class="box">
    <input class="box-input box-input__email"  id="box-input__email" type="email" placeholder="Email Adress" required>
    <label class="box-input__label" for="box-input__email">Email Adress</label>
  </div>
    <button>submit</button>
  </form>
</section>
```

CSS 代码

```css
html {
  font-size: 100%;
}

body {
  background-color: #eee;
}

input {
  box-sizing: border-box;
}

.form-wrapper {
  width: 100%;
  padding: 10em 2em;
}

.box {
  width: 50%;
}

.box:not(:last-child) {
  margin-bottom: 1em;
}

.box-input {
  width: 100%;
  display: block;
  padding: .5em 1em;
  border: none; 
  border-radius: 2px;
  outline: none;
  font-size: inherit;
  background-color: #fff;
}

// 设置输入框占位符样式
// ::placeholder 伪元素
.box-input::placeholder {
  color: #ccc;
  font-size: 12px;
}

.box-input__label {
  display: block;
  margin-top: .5em;
  margin-left: 1em;
  font-size: 12px; 
  color: #999;
  transform: translateY(0);
  visibility: visble;
  opacity: 1;
  transition: all .2s;
}

.box-input:placeholder-shown + label {
    transform: translateY(-2.5em);
    visibility: hidden;
    opacity: 0;
}

.box-input:focus {
  border-bottom: 2px solid green;
  box-shadow: 0 .2em 4em rgba(0,0,0,.1);
}

.box-input:focus:invalid {
  border-bottom: 2px solid orange;
}
```



