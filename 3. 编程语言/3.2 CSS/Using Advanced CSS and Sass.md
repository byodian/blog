- The best way to perform a basic reset using the universal selector

- How to set project-wide from definitions

- How to clip parts of elements using `clip-path`

- The easiest way to center anything with the `transform`, `top` and `left` properties.

  绝对定位实现的居中对齐 

```html
<!-- 元素尺寸不确定的情况下， 使用 transform 属性-->

<stye>
	.text-box {
    	position: relative;
    }    
    
    .heading {
    	position: absolute;
    	left: 50%;
    	top: 50%;
    	transform: translate(-50%,-50%);
    }
</stye>



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

​	

### How CSS Render a Website: The Visual Formatting Model

- Dimensions of boxes: the box model

  ![](https://raw.githubusercontent.com/byodian/logpic/master/Box%20model.png)

- Box Type: inline, block and inline-block

- Positioning scheme: floats and positioning;

- ![](https://raw.githubusercontent.com/byodian/logpic/master/Layout%20Type.png)

- Stacking contents;

- Other elements in the render tree;

- viewport size, dimensions of images, etc.
