# 省市区选择
通过下拉选择实现省市区三级联动

## 按需引入
``` js
// main.ts
import chooseArea from 'isakya-element-components/chooseArea'

app.use(chooseArea)
```

## 基本用法
<client-only>
  <choose-area @change="changeArea"></choose-area>
</client-only>

<script setup lang="ts">
let changeArea = (val: any) => {
  console.log(val);
}
</script>

## 代码示例
``` html
<template>
<choose-area @change="changeArea"></choose-area>
</template>
```

##  Api
### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| change | 选择了省市区三级之后触发 | val: AreaInfo, 省市区数据 |

#### AreaInfo 数据格式
| key | 说明 | 类型 |
| :---- | ---- | ---- |
| province | 省份的数据 | val: Object |
| city | 城市的数据 | val: Object |
| area | 区域的数据 | val: Object |

#### Object 数据格式
| key | 说明 | 类型 |
| :---- | ---- | ---- |
| name | 名字 | string |
| code | 编码 | number |


