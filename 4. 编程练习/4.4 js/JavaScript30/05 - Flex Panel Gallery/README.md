## 知识点

### 使用辅助设计

文本使用 border 调试代码，可以让文本可视化更明显。

border: 1px solid #f00;

### transitionend Event

当 CSS transition 完成的时候，会触发 transitionend 事件。

### .classname > * 选择器的使用

.panel > * {}
.panel > *:first-child {}
.panel.open-actived > *:first-child {}