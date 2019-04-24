# 背景与边框

## 1. 半透明边框

### 现象

默认情况下，背景会延伸到边框所在的区域下面，即 border-box 下。

### 解决方法

使用 `background-clip` 属性，初始值为 `border-box`，意为背景会被边框的外边沿（border-box）裁切掉。其他属性值：`padding-box`、`content-box`，意思分别为被 `padding-box`（内边距的外边沿）和 `content-box`（内容的外边沿）裁切掉。

[试一试](https://codepen.io/byodian/pen/wZYWMM)

## 颜色值

- 关键字
- 十六进制
- rgb()、hsl()、rgba()、hsla() [HSL](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#HSL)
- 继承

