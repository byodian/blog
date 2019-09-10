## 单位

**两条简单的规则**:

1. 如果属性缩放根据它的的 `font-size` 变化，则使用 `em`（Size in `em` if the property scales according to its `font-size` ）
2. 其他的尺寸使用 `rem` （Size everything else in `rem`）

## em

- `em` 单位以文档的字号为参照
- 在媒体查询中使用的 `em` 单位始终相对于浏览器偏好中设置的字号，而不是通过 CSS 调整的 HTML 元素的字号。

**设置浏览器默认字体操作步骤：**

1. Chrome 浏览器：设置 -> 外观 -> 字号
2. Firefox 浏览器：选项 -> 常规 -> 语言和外观 ->  字体和颜色

## 参考

[REM vs EM – The Great Debate](https://zellwk.com/blog/rem-vs-em/)

[PX, EM or REM Media Queries?](https://zellwk.com/blog/media-query-units/)

