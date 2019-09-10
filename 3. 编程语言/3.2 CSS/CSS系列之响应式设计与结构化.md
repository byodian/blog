## 响应式 Web 设计与结构化 CSS 

- CSS 响应式设计的三驾马车：流动网格、弹性嵌入对象（图片或视频）和媒体查询适配
- 浏览器视口的理解
- 媒体类型和媒体查询

### 响应式设计和结构化 CSS

- **移动优先**。通过在设计和开中首先聚焦于小屏幕设备，一开始就要**考虑很多限制因素**，而在面向其他大屏幕设备开发更大网站或应用时，可以再**引入扩展**的能力。
- 使用媒体查询（以 **min-width 查询**作为主要查询工具，**max-width**适用于小屏幕样式）添加断点，使用 **em** 单位强化设计。

**CSS 文件的第一批规则，针对所有屏幕设备**

- 基本的版式：SIzes,colors,line height,heading,paragraphs,lists,links,
- 基本盒子：边框样式，内边距，弹性图片，背景颜色和背景图片
- 基本的跳转和浏览组件：导航，表单和按钮

**媒体查询应置于何处**

- 影响整个页面布局的媒体查询通常设计很多类名，一般建议放在与布局相关的规则旁边
- 调整网站组件中某些细节的媒体查询，可以放在定义该组件样式的规则旁边
- 布局修改，组件修改，应统一放在样式表最后的位置。可以体现**先通用后具体**的设计模式。、
- 媒体放在哪里，没有固定的位置。

### 响应式设计模式

- 移动优先原则 
- 响应式文本列，多栏文本。
- 没有媒体查询的响应式 Flexbox ，容器相关的响应式组件。
- 响应式网格与网格模板区。

### 响应式布局之外的细节

- 响应式图片
- 响应式嵌入媒体
- 响应式排版

#### 响应式图片 

[link](https://classroom.udacity.com/courses/ud882)

img 图片自适应，但最大宽度不会大于图片本身的宽度 `width: auto;` `height: auto;` 会覆盖 HTML 源代码中给图片添加 `width` 和 `height` 属性，可以解决历史遗留问题。

```html
<div><img src="../img/img.png">span</div>
div {
  background-color: pink;
}
img {
  width: auto;
  max-width: 100%;
  height: auto;
}
```

#### 响应式嵌入媒体

- 基础 ：通过设置 **max-width** 属性为 100% 让元素变得可伸缩，同时又不会超出其固有大小。
  [响应式图片](https://www.yuque.com/fe9/basic/hqbhn3#885e2504)

    img {
        width: auto;
        max-width: 100%;
        height: auto;
    }

- 响应式图片与 srcset 属性

- picture 元素

#### 响应式排版

- 设备不同，大小不同。（P239）
  - 随着每行字符的减少，行高也可以减少。
  - 屏幕的大小不同，排版的基准尺寸也要调整。[如何为网站设置内容设置合适的文字大小](
    https://trentwalton.com/2012/06/19/fluid-type/) 
- 使用弹性字体大小。em、rem 及视口单位（vh、vw、vmin和vmax）
- 设置基准字体大小，需要使用媒体查询修改文本大小。（P240）[可伸缩的排版系统](
  http://typecast.com/blog/a-more-modern-scale-for-web-typography)
- 视口相关的单位。

## 网站性能优化

[link](https://classroom.udacity.com/courses/ud884)

## 浏览器渲染优化

[link](https://classroom.udacity.com/courses/ud860)

## sass 文件夹结构

```javascript
├── abstracts
|  ├── _functions.scss
|  ├── _mixins.scss
|  └── _variables.scss
├── base
|  ├── _animations.scss
|  ├── _base.scss
|  ├── _typography.scss
|  └── _utilities.scss
├── components
|  └── _button.scss
├── layout
|  └── _header.scss
├── main.scss
└── pages
   └── _home.scss
```
