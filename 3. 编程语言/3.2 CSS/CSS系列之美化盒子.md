## 美化盒子

- 边框
- 背景
  - 背景颜色
  - 背景图片
- box-shadow
- border-radius
- CSS 颜色渐变
- 控制图片及其他嵌入对象的样式和大小



### CSS 渐变

`linear-gradient()`：线性渐变

`radial-gradient(..)` :  放射渐变

`repeating-linear-gradient`： 重复渐变

#### 文字渐变效果

给文字设置渐变背景，通过设置 `background-clip` 为 `text` (实验性)。

```css
<h1>Heading</h1>

h1 {
  background-image: linear-gradient(
      to right,
      #8E2DE2,
      #4A00E0
   );
  display: inline-block;
  -webkit-background-clip: text;
  background-clip: text;
  
  /**
  * 文字颜色为前景色会覆盖背景色
  * 故文字颜色设置为透明
  */
  color: transparent;
}
```

[效果展示](https://codepen.io/byodian/pen/mdbrdpm?editors=0110)

## 高级特效

- CSS 形状 (shape-outsidess)
- 剪切路径和蒙版 (clip-path)
- CSS 混合模式 (background-blend-mode)
- 滤镜 (filter)

- backface-visibility



### CSS 形状





### 剪切路径 （clip-path）

```css
background-img: url(../img/...png);
clip-path: polgon(..);
```

