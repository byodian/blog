## 知识点

### 获取元素

- document.querySelector(selector) 
- document.querySelectorAll(selector)

**selector CSS 选择器**

- 元素选择器
- ID/Class 选择器
- 属性选择器（本例子使用）

### HTML 对象

> Audio

**属性**

currentTime 设置或返回音频中的当前播放位置（以秒计）。

**方法**

play() 开始播放音频。
pause()	暂停当前播放的音频。

### DOM 事件对象 

> transitionend 

CSS 动画完成后出发 transitionend 事件。这被广泛用于在动画结束后执行某种操作。我们也可以用它来串联动画。

### DOM Event 接口 [参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Event#DOM_event_handler_List)

事件处理函数可以附加在各种对象上，包括 DOM 元素，window 对象等。当事件发生时，event 对象就会被创建并依次传递给事件监听器。

在处理函数中，将 event 对象作为第一个参数，可以访问 DOM Event 接口。

> 子类

TransitionEvent





