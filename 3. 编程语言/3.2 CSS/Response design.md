



- How to use the `srcset` attribute on the &lt;img&gt; and &lt;source&gt; elements, together with density descriptions;
- How to why to use the &lt;picture&gt; element for art direction;
- How to write media queries in HTML.
- How to allow the browser to decide the best image to download, using the `srcset` attribute, width descriptors, and the `sizes` attributes of the &lt;img&gt; element.

### device pixels ratio

物理像素/CSS像素

### Responsive images in CSS

- How to implement responsive images in CSS
- How to usse resolution media queries to target high-resolution screens with 2x
- How to combine multiple conditions in media queries.

```css
  @media (min-resolution: 192dpi) and (min-width: 37.5em),
         (-webkit-min-device-pixel-ratio: 2),
         (min-width: 125em) {
    background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.8),
      rgba($color-primary-dark, 0.8)),
      url(../img/hero.jpg);
  }
```

### Testing for Browser Suport with @supports

- How to use `@supports` feaatures queries;
- implement graceful degradation on selected properties
- How to use `backdrop-filter`.

```css
@supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    // other code
}
```



![](https://raw.githubusercontent.com/byodian/logpic/master/Responsive%20Design.png)

### CSS Architecture, Components and BEM

a good strategy, a good mindset

![](https://raw.githubusercontent.com/byodian/logpic/master/Maintainable%20Strategy.png)

- think
- build
- architect

#### think

![](https://raw.githubusercontent.com/byodian/logpic/master/Component-driven%20design.png)

### build

- BEM named classes

  ![](https://raw.githubusercontent.com/byodian/logpic/master/BEM.png)

#### architect

**7 different folders** for partial Sass files, and 1 main Sass file to import all other files into a compiled CSS stylesheet.

The 7 Floders

- base/  —— basic product definitions (reset and styles for the HTML and body elements selectors)
  - This files should be a partial
  - the partial files they always start with an underscore
- components/ —— each component
- layout/ —— the overall layout of the project
- pages/ ——  styles for specific pages of the project
- themes/ —— different visual themes
- abstracts/ —— not output any CSS, such as variables or mix-ins
- vendors/ —— third party CSS

![](https://raw.githubusercontent.com/byodian/logpic/master/7-1%20Pattern-%20Architecture.png)
