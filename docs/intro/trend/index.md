# 趋势标记
表示上升或者下降趋势，支持多种定义。

## 按需引入
``` js
// main.ts
import trend from 'isakya-element-components/trend'
import 'isakya-element-components/trend/style.css'

app.use(trend)
```

## 基本用法
<client-only>
  <el-divider>
    默认趋势
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额"></trend>
    </div>
    <div>
      <trend text="销售额" type="down"></trend>
    </div>
  </div>
  <el-divider>
    自定义颜色
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" upIconColor="blue"></trend>
    </div>
    <div>
      <trend text="销售额" type="down" downIconColor="#000"></trend>
    </div>
  </div>
  <el-divider>
    插槽传入自定义内容
  </el-divider>
  <trend>
    <span>销售额<el-icon-starfilled style="display: inline;"></el-icon-starfilled></span>
  </trend>
  <el-divider>
    颜色翻转(只有默认颜色生效)
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" reverseColor></trend>
    </div>
    <div>
      <trend type="down" reverseColor text="销售额"></trend>
    </div>
  </div>
  <el-divider>
    自定义图标
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" icon="carettop"></trend>
    </div>
    <div>
      <trend type="down" text="销售额" icon="CaretBottom"></trend>
    </div>
  </div>
</client-only>

<style scoped>
.flex {
  display: flex;
}
div {
  margin-right: 10px;
}
</style>

### 代码示例
``` html
<template>
  <el-divider>
    默认趋势
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额"></trend>
    </div>
    <div>
      <trend text="销售额" type="down"></trend>
    </div>
  </div>
  <el-divider>
    自定义颜色
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" upIconColor="blue"></trend>
    </div>
    <div>
      <trend text="销售额" type="down" downIconColor="#000"></trend>
    </div>
  </div>
  <el-divider>
    插槽传入自定义内容
  </el-divider>
  <trend>
    <span>销售额<el-icon-starfilled"></el-icon-starfilled></span>
  </trend>
  <el-divider>
    颜色翻转(只有默认颜色生效)
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" reverseColor></trend>
    </div>
    <div>
      <trend type="down" reverseColor text="销售额"></trend>
    </div>
  </div>
  <el-divider>
    自定义图标
  </el-divider>
  <div class="flex">
    <div>
      <trend text="营业额" icon="carettop"></trend>
    </div>
    <div>
      <trend type="down" text="销售额" icon="CaretBottom"></trend>
    </div>
  </div>
</div>

<style scoped>
.flex {
  display: flex;
}
div {
  margin-right: 10px;
}
</style>
```

##  Api
### Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| type | 上升趋势或下降趋势 | up / down | up / down | up |
| text | 趋势显示的文字 | string | - | title |
| icon | 自定义图标 | string | - | ArrowUp / ArrowDown |
| upIconColor | 上升趋势图标颜色 | string | - | #f5222d |
| downIconColor | 下降趋势的图标颜色 | string | - | #52c41a |
| reverseColor | 上升或下降趋势的图标颜色反转，只在默认颜色下生效，自定义颜色不生效 | boolean | - | false |

### slots 插槽
| 名称 | 说明 |
| :---- | ---- |
| default | 趋势显示的文字 |
