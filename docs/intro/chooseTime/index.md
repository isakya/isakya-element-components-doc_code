# 时间选择
提供开始时间和结束时间选择联动

## 按需引入
``` js
// main.ts
import chooseTime from 'isakya-element-components/chooseTime'

app.use(chooseTime)
```


## 基本用法
<client-only>
  <choose-time @startChange="startChange" @endChange="endChange" />
</client-only>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"

interface endValue {
  startTime: string,
  endTime: string
}
let startChange = (val: string) => {
  console.log('startTime', val)
}
let endChange = (val: endValue) => {
  console.log('endTime', val)
}
</script>



### 代码示例
``` html
<template>
  <choose-time @startChange="startChange" @endChange="endChange" />
<template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue"

interface endValue {
  startTime: string,
  endTime: string
}
let startChange = (val: string) => {
  console.log('startTime', val)
}
let endChange = (val: endValue) => {
  console.log('endTime', val)
}
</script>
```

## Api
### Props

| key | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| startPlaceholder | 开始时间占位符 | string | - | 请选择开始时间 |
| endPlaceholder | 结束时间占位符 | string | - | 请选择结束时间 |
| startTimeStart | 开始时间开始的选择 | string | - | 08:00 |
| startTimeEnd | 开始时间结束的选择 | string | - | 24:00 |
| startStep | 开始时间的步进 | string | - | 0:30 |
| endPlaceholder | 结束时间占位符 | string | - | 请选择结束时间 |
| endTimeStart | 结束时间开始的选择 | string | - | 08:00 |
| endTimeEnd | 结束时间结束的选择 | string | - | 24:00 |
| endStep | 结束时间的步进 | string | - | 0:30 |

### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| startChange | 开始时间变化时触发 | val: string, 开始时间 |
| endChange | 结束时间变化时触发 | val: Objecet |

#### Objecet 数据格式
| key | 说明 | 类型 |
| :---- | ---- | ---- |
| startTime | 开始时间 | string |
| endTime | 结束时间 | string |
