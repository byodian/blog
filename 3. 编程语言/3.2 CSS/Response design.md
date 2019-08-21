### 媒体查询点 (breakpoints)

one breakpoint for phones

one  for portrait tables

one for landscape tables

one for the desktop

### 媒体查询类型

- `screen`
- `print`
- `speech`
- `all`

### 媒体属性

- 每个媒体属性必须写在括号里面

- 在 ` Media Queries Level 4` 中规定了一个媒体属性的写法，即媒体属性可以使用范围值。

  ```css
  @media (height > 600px) {
      body { line-height: 1.4; }
  }
  
  @media (400px <= width <= 600px) {
      body { line-height: 1.4; }
  }
  ```

### 逻辑操作符

- `and`
- `not`
- `only` 用来阻止旧的浏览器应用样式
- `,` (comma) 相当于逻辑或 `or`



- How to use a powerful Sass mixing to write all our media queries
- How to use the `@content` and `@if` Sass directives;
- Taking advantage of Chrome DevTools for responsive design 

