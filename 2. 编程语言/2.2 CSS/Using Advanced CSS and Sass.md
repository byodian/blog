- How to architect and build a simple grid system;
- How the attribute selector works
- How the `:not`pseudo-class works;
- How `calc()`works, and what's the difference between `calc()` and simple Sass operations.

- Thinking about components

- How and why to use utility classes

- How to use the `background-clip` property

- How to `transform` multiple properties simultaneously

- How to use `outline-offset` property together with `outline`

  ```css
  div {
      outline: 10px solid #f00;
      outline-offset: 20px; // 外边框与元素空隙
  }
  ```

- How to style elements that are NOT hovered while others are.

  ```css
  .composition {
      &__photo {
  		&:hover {
            z-index: 20;
            transform: scale(1.05) translateY(-.5rem);
            box-shadow: 0  2.5rem 4rem rgba($color-black, .5);
            outline: 1rem solid $color-primary;
          }
        }
  
    &:hover &__photo:not(:hover) {
      transform: scale(.95);
    }
  }
  ```

  



- How  to include and use an icon font

- Another way of creating the "skewed section" design

  ```html
  <style>
  .section-features {
    padding: 20rem 0;
    margin-top: -10rem;
    background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.8),
      rgba($color-primary-dark, 0.8)),
      url(../../img/nat-4.jpg);
    background-size: cover;
    transform: skewY(-7deg);  
  
    & > * {
      transform: skewY(7deg);  
    }
  }
  </style>
  
  <section class="section-features">
  	<div class="row">
          <div class="col-1-of-4">
              <div class="feature-box">
                  <i class="feature-box__icon icon-basic-world"></i>
                  <h3></h3>
                  <p></p>
              </div>
          </div>
      </div>
  </section>
  ```

  

- How and when to use the direct child selector

  `selector > * {}`

  ```html
  <section class="section-features">
  	<div class="row">
          <div class="col-1-of-4">
              <div class="feature-box">
                  <i class="feature-box__icon icon-basic-world"></i>
              </div>
          </div>
      </div>
  </section>
  
  <style>
      .section-features > * {
          transform: skewY(-7deg);
      }
  </style>
  ```

- How to build an amazing, rotating card;

- How to use `perspective` in CSS;

  决定用户和 z=0 平面的距离。

- How to use the `backface-visibility` property;

  当给元素设置 `transform` 3D 变换的时候，决定元素的背面是否可见

  ```css
  backface-visibility: hidden;
  
  backface-visibility: visible;
  ```

- Using background blend modes;

  `background-blend-mode` 设置背景图片和背景颜色的混合方式。

  photoshop 中的图层混合模式

- How and when to use `box-decoration-break`.

  指定一个元素的内容，当出现多行、多列或者多页时其样式该如何表示。

  > Values	
  >
  > - slice
  > - clone

  该属性影响以下属性的值：

  - [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
  - [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
  - [`border-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)
  - [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
  - [`clip-path`](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
  - [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
  - [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

- How to make text flow around shapes with `shape-outside` and `float`

  `shape-outside` CSS 形状

- How to apply a `filter` to images;

  `filter: blur(3px) brightness(80%)`

- How to create a background video covering  an entire section;

- How to use the &lt;video&gt; HTML element;

- How and when to use the `object-fit` property



- How to implement "solid-color gradients";
- How to general and adjacent sibling selectors work and why we need them;
- How to use the `::input-placeholder` pseudo-element;
- How and when to use `:focus`, `:invalid`, `:placeholder-shown` and `:checked` pseudo-classes;
- Techniques to build custom radio buttons.



- How to design a simple website footer.



- What the "checkbox hack" is and how it works;

- How to create custom animation timing functions using cubic bezier curves

- How to animate "solid-color gradients"

  `background-size: 200%;` `background-position: 100%;`

- How and why to use `transform-origin`

- In general: create an amazing creative effect



- How to build a nice popup with only CSS
- How to use the `:target` pseudo-class
- How to create boxes with equal height using `display: table-cell`
- How to create CSS text columns;
- How to automatically hyphenate words using `hyphens`



## Flexbox

### Defining Project  Setting and Custom Properties

**Why and how to use custom properties?**

Why would we use CSS custom properties or CSS variables instead of Sass variables?

- Don't need pre-processor with CSS variable
- They can be manipulated in JavaScript and we can also edit them in dev tools;
- It's easier to use custom CSS variable in the code function;
- CSS variables cascade and they are inherit.

### Building the Overall Layout（构造整体布局）

- How to think about the overall layout of an app;
- Use flexbox in a real-world project for the first time.

## Building the header 

- Why to use SVG icons VS. font icons;
- How to find, generate and use SVG sprites in HTML;
- How to change the color of an SVG icons in CSS;
- How to use more advanced flex alignment techniques, including `justify-content`, `align-items`, `align-self`, `flex`.

### 步骤

1. HTML 标签结构
2. CSS 声明准备
3. 编写样式代码

## Building the Navigation

- How to use `scaleY` and multiple transtion properties with different settings, to create a creative hover effect;

    ```css
    transition: scaleY .2s,
    			width .4s cubic-bezier(1,0,0,1) .2s,
    			background-color .1s;
    ```

- How and why to use the `currentColor` CSS variable;
- How to use some more advanced flexbox alignment techniques, including `flex-direction`, `justify-content` and `align-items`.



## Build the Hotel Overiew

- How to create an infinite aimation

- How to use `margin: auto` with flexbox, abd why it's so powerful;

  设置 Flexbox 子项的一侧 `margin` 为 `auto` ，该外边距会自动占据所有的可用空间。

- Continue to use use flexbox properties for easy positioning and alignment.

### Build the Section

- Continue to use flexbox, including `flex-wrap` to build a multi-column list;
- How and why to use CSS masks with `mask-image` and `mask-size`.



### Build the CTA section  (call to action)

Yet another creative and modern hover effect.

- The best way to perform a basic reset using the universal selector
- How to set project-wide from definitions
- How to clip parts of elements using `clip-path`
- The easiest way to center anything with the `transform`, `top` and `left` properties.
  绝对定位实现的居中对齐 

```html
<!-- 元素尺寸不确定的情况下， 使用 transform 属性-->

<style>
	.text-box {
    	position: relative;
    }    
    
    .heading {
    	position: absolute;
    	left: 50%;
    	top: 50%;
    	transform: translate(-50%,-50%);
    }
</style>

<div class="text-box">
    <h1 class="heading">
        <span>h1</span>
    </h1>
</div>
```



- How to create CSS animations using `@keyframes` and the `animation` property

```css
@keyframes name {
    from {
        
    }
    
    60% {

    }
    
    to {

    }
}

.div {
    animation-name: name;
    animation-duration: 1s;
    animation-time-function: ease-out;
    
    /*
    animation-delay: 3s;
    animation-iteraton-count: 3;
    */
}
```

- What pseudo-elements and pseudo-classes are;
- How and why to use the `::after`pseudo-element;
- How  to create a creative hover animation effect using the `transition` property.



## How CSS Works: A Look Behind the Scenes

### Three Pillars Writing good HTML and CSS (Never Forget them!)

1. Responsive design

   - Fluid layouts

   - Media queries

   - Responsive images

   - Correct units (font...)

   - Desktop-first vs mobile-first 

2. Maintainable and scalable code

   - clean
   - Easy-to-understand
   - Growth
   - Reusable
   - How to organize files
   - How to name classes
   - How to structure HTML

3. Web performance

   - less HTTP requests
   - Less code
   - Compress code
   - Use a CSS preprocessor
   - Less images (!important)
   - Compress images

### How CSS Works Behind the Scenes

   ![](https://raw.githubusercontent.com/byodian/logpic/master/CSS%20works%20behind%20scenes.png)

**This Document Object Model is where the entire decoded html code is stored**

### How CSS is Parsed: The Cascade and Specificity(特异性)

CSS rules 的组成：

- Selector
- Declaration block
  - Declaration
    - Property
    - Declared value

![](https://raw.githubusercontent.com/byodian/logpic/master/CSSRules.png)



#### Cascade ans specificity

- importance

- specificity (same importance)

  ![](https://raw.githubusercontent.com/byodian/logpic/master/Cascading.png)

- source order (same importance and same specificity)

  ![](https://raw.githubusercontent.com/byodian/logpic/master/Cascade%20%26%20Specificity.png)

#### Conclude

![](https://raw.githubusercontent.com/byodian/logpic/master/Maintainable%20and%20Scalable%20Code.png)

 ### How CSS is parsed: value processing



### How CSS is parsed: inheritance



#### value Inheritance

![](https://raw.githubusercontent.com/byodian/logpic/master/Inheritance.png)

#### CSS value: What you need to know

![](https://raw.githubusercontent.com/byodian/logpic/master/CSS%20Value.png)

- How and why to use `rem` units in our project;

  It's because **we want an easy way to change all the measurements on our page with one simple setting**,

  for example, when we hit a break point to display our page on a mobile device. 

  When that happens we want a way to decrease all the measurements in our site at the same time, and instead of writing hundreds of lines of code and in media queries, **we can just change one global setting, and that is the global font size.**

- A agent workflow for converting px to rem

![](https://raw.githubusercontent.com/byodian/logpic/master/How%20units%20are%20converted%20from%20relative%20to%20absolute(px).png)

### How CSS Render a Website: The Visual Formatting Model

- Dimensions of boxes: the box model

  ![](https://raw.githubusercontent.com/byodian/logpic/master/Box%20model.png)

- Box Type: inline, block and inline-block

- Positioning scheme: floats and positioning;

- ![](https://raw.githubusercontent.com/byodian/logpic/master/Layout%20Type.png)

- Stacking contents;

- Other elements in the render tree;

- viewport size, dimensions of images, etc.