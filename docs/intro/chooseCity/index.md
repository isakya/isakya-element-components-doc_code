# 城市选择
提供按城市和省份选择中国所有的城市，支持搜索和跳转。


## 按需引入
``` js
// main.ts
import chooseCity from 'isakya-element-components/chooseCity'
import 'isakya-element-components/chooseCity/style.css'

app.use(chooseCity)
```

## 基本用法
<client-only>
  <chooseCity @changeCity="getCity" @changeProvince="getProvince"></chooseCity>
</client-only>

<script setup lang="ts">
interface City {
  id: number,
  // 拼音
  spell: string,
  name: string
}
let getCity = (val: City) => {
  console.log(val)
}
let getProvince = (val: string) => {
  console.log(val)
}
</script>

## 代码示例
``` html
<template>
  <chooseCity @changeCity="getCity" @changeProvince="getProvince"></chooseCity>
</template>

<script setup lang="ts">
interface City {
  id: number,
  // 拼音
  spell: string,
  name: string
}
let getCity = (val: City) => {
  console.log(val)
}
let getProvince = (val: string) => {
  console.log(val)
}
</script>
```

##  Api
### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| changeCity | 按城市选择时触发 | val: City, 城市信息 |
| changeProvince | 按省份选择时触发 | val: string, 城市名称 |

#### City 数据格式
| key | 说明 | 类型 |
| :---- | ---- | ---- |
| id | 城市编码 | number|
| spell | 城市拼音 | string |
| name | 城市名称 | string |



