# 日历
基于`fullcalendar`封装的日历组件

## 按需引入
``` js
// main.ts
import fullcalendar from 'isakya-element-components/fullcalendar'
import 'isakya-element-components/fullcalendar/style.css'

app.use(fullcalendar)
```

## 基本用法

具体演示请参照[演示网站](https://isakya.github.io/isakya-element-components-web/#/calendar)

## 代码示例
``` html
<template>
  <my-calendar @eventClick="eventClick" @dateClick="dateClick" :events="events"></my-calendar>
</template>

<script setup lang="ts">
import { EventClickArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";
import { ref } from "vue"

export interface EventItem {
  // 事件标题
  title: string,
  // 开始时间
  start: string,
  // 结束时间
  end: string,
  // 是否可拖动编辑
  editable?: boolean
}

let events = ref<EventItem[]>([
  {
    title: '吃饭',
    start: '2022-07-22 08:00',
    end: '2022-07-22 12:00',
    // 可拖动
    editable: true
  },
  {
    title: '敲代码',
    start: '2022-08-22 12:00',
    end: '2022-08-22 22:00',
    editable: true
  },
  {
    title: '睡觉',
    start: '2022-09-23 22:00',
    end: '2022-09-23 6:00',
    editable: true
  }
])

let dateClick = (info: DateClickArg) => {
  console.log(info.dateStr + ' 12:00');

  events.value.push({
    title: '打豆豆',
    start: info.dateStr + ' 12:00',
    end: info.dateStr + ' 18:00',
    editable: true
  })
  console.log(info);
}
let eventClick = (info: EventClickArg) => {
  console.log(info);
}
```

##  Api
### Props

| key | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| local | 日历显示的语言 | string | - | zh-cn |
| initialView | 视图模式 | string | - | dayGridMonth |
| buttonText | 按钮文字 | Object | - |  |
| headerToolbar | 头部工具栏 | Object | - |  |
| footerToolbar | 底部工具栏 | Object | - |  |
| events | 事件源 | EventItem[] | - | [] |

更多配置请参考[fullcalendar](https://fullcalendar.io/)

#### EventItem 数据格式
| key | 说明 | 类型 |
| :---- | ---- | ---- |
| title | 事件标题 | string |
| start | 开始时间 | string |
| end | 结束时间 | string |
| editable | 是否可拖动编辑 | boolean |



### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| dateClick | 点击日历上的某一天 | val: DateClickArg, 具体参照[fullcalendar](https://fullcalendar.io/) |
| eventClick | 点击日历上的某个事件 | val: EventClickArg, 具体参照[fullcalendar](https://fullcalendar.io/) |



