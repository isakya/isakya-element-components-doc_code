## 进度条
可动态加载的进度条，支持更多自定义。

## 按需引入
``` js
// main.ts
import progress from 'isakya-element-components/progress'

app.use(progress)
```


## 基本用法
<client-only>
  <my-progress isAnimation :percentage="60" />
    <br />
  <my-progress :text-inside="true" isAnimation :stroke-width="22" :percentage="80" status="warning" />
    <br />
  <my-progress isAnimation type="circle" :percentage="60" />
</client-only>




### 代码示例
``` html
<template>
  <my-progress isAnimation :percentage="60" />
    <br />
  <my-progress :text-inside="true" isAnimation :stroke-width="22" :percentage="80" status="warning" />
    <br />
  <my-progress isAnimation type="circle" :percentage="60" />
</template>
```

## Api
### Props

| key | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| percentage | 进度条进度 | number | - | 0 |
| isAnimation | 进度条是否有动画效果 | boolean | - | false |
| time | 动画时长(毫秒) | number | - | 3000ms |

 继承 `element-plus` `progress` 组件的所有属性。



