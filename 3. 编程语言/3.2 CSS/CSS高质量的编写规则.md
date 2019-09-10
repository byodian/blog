[TOC]

##  语法和格式化

## 注释

通常来说，你应该给代码中任何不明显的内容写注释。举一个简单的例子，你不应该为  `color:red` 写注释，因为它的意思很明显，但是你应该为 `overflow: hidden` 写注释，因为它可能要表示清除浮动或者裁剪溢出的内容。

### 高级注释

为整个 sections 和 components 写大的注释

```css
/**
* 标题
*
* 1) 
*
* 2) 
*
* 总结
*
*/
```

### 面向对象扩展

```css
/**
 * Extend `.btn {}` in _components.buttons.scss.
 */

.btn { }
```



And in your theme file:

```css
/**

- These rules extend `.btn {}` in _objects.buttons.scss.
  */

.btn--positive { }

.btn--negative { }
```

### 复杂

```css
/**
* 标题
*
* 1. 
*
* 2.
*
* 3.
*
*/


.box {
    overflow: hidden; /* [1] */
}

.wrapper > * {
	position: relative; /* [2] */
    padding-left: 56.25%; /* [3] */
}

```

这种方法可以将注释部分集中起来，便于管理。

### 预处理器注释

在预处理文件中注释代码，可使 CSS 文件更加干净，简洁。

## 命名约定

一个好的类名可以传递这样的信息：

- 要做的事情
- 在哪里使用
- 相关的功能组件

### 使用连字符分隔类名

```css
.section-header {

}

.heading-primary {

}
```

### 类似 BEM 的命名





## CSS 选择器

## 特殊性

## 提升代码质量原则（限制层叠）

- 以 class 属性作为应用样式的主要手段，ID 属性主要用于页内链接，或作为 JavaScript 的接入点
- 类名要顾名思义
- 拆分单一用途，避免重复
- 不要把元素类型和样式规则绑定在一起

```html
<div class="message message-warning">
  <p>这是一条警告的信息</p>
</div>

<div class="message message-success">
  <p>这是一条成功的信息</p>
</div>

.message {
  // code
}

.message-warning {
  // code
}

.message-sucess {
  // code
}
```

## 结构化命名

OOCSS、SMACSS 或 BEM



## 参考

- [CSS guidelin](https://cssguidelin.es/)

- [Code Guide](https://codeguide.co/)
- [CSS for People Who Hate CSS](https://paulcpederson.com/articles/css-for-people-who-hate-css/)
- [CSS 架构](https://blog.zfanw.com/css-architecture/)
- [Contextual Styling: UI Components, Nesting, and Implementation Detail](https://csswizardry.com/2015/06/contextual-styling-ui-components-nesting-and-implementation-detail/)
- [Nesting Your BEM?](https://csswizardry.com/2016/11/nesting-your-bem/https://csswizardry.com/2016/11/nesting-your-bem/https://csswizardry.com/2016/11/nesting-your-bem/)

- [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

