## 日期选择
提供开始日期和结束日期选择联动

## 按需引入
``` js
// main.ts
import chooseDate from 'isakya-element-components/chooseDate'

app.use(chooseDate)
```


## 基本用法
<client-only>
  <chooseDate @startChange="startChange" @endChange="endChange" />
</client-only>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
interface dateEndValue {
  startDate: Date,
  endDate: Date
}

let startChange = (val: Date) => {
  console.log(val);
}
let endChange = (val: dateEndValue) => {
  console.log(val);
}
</script>



### 代码示例
``` html
<template>
  <chooseDate @startChange="startChange" @endChange="endChange" />
</template>


<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"
interface dateEndValue {
  startDate: Date,
  endDate: Date
}

let startChange = (val: Date) => {
  console.log(val);
}
let endChange = (val: dateEndValue) => {
  console.log(val);
}
</script>
```

## Api
### Props

| key | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| startPlaceholder | 开始日期占位符 | string | - | 请选择开始日期 |
| endPlaceholder | 结束日期占位符 | string | - | 请选择结束日期 |
| disableToday | 是否禁用选择今天之前的日期 | boolean | - | true |



### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| startChange | 开始日期变化时触发 | val: Date, 开始日期 |
| endChange | 结束日期变化时触发 | val: Objecet |

#### Objecet 数据格式
| key | 说明 | 类型 |
| :---- | ---- | ---- |
| startTime | 开始日期 | Date |
| endTime | 结束日期 | Date |

