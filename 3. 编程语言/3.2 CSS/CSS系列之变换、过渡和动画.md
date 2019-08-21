## 变换、过渡和动画

CSS 变换用于在空间中移动物体，而 CSS 过渡和 CSS 关键帧动画用于控制元素随时间推移的变化（动画效果）。

[动画](https://zh.javascript.info/css-animations)

### 变换

支持在页面中平移、旋转、变形和缩放元素。CSS 变换响应的计算只会影响相关元素的坐标系统。

旋转：rotate()、transform-origin 

 移动：translate()、translateX()、translateY() 百分比大小相对于元素自身大小。

缩放：scale()、scaleX()、scaleY()

变形：skew()、 skewX()、 skewY() 水平或垂直方向水平的边发生相对位移，或偏移一定的角度。

### 背景变形

背景图片的变形效果 [link](https://codepen.io/byodian/full/eYOdmvJ)

```css
<div class="wrapper">
  <section class="section-skew">
    <p class="section-text">文字</p>
  </section>
</div>

html {
    font-size: 10px;
}

.wrapper {
  position: relative;
  height: 95vh;
  background-image: linear-gradient(
        to right,
        #8E2DE2,
        #4A00E0
        ),
        url(https://images.unsplash.com/photo-1565967917239-805316b3f0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80
        );
  background-size: cover;
  background-blend-mode: screen;
  transform: skewY(-5deg);
}

.section-skew {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewY(5deg);
}

.section-text {
  font-size: 10rem;
  color: #fff;
}

```

