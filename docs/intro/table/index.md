# 表格
可配置型表格，支持更多自定义

## 按需引入
``` js
// main.ts
import table from 'isakya-element-components/table'

app.use(table)
```

## 基本用法
请参考[具体演示](https://isakya.github.io/isakya-element-components-web/#/table)


## 代码示例
``` html
<template>
  <my-table elementLoadingText="加载中..." elementLoadingLackground="rgba(122, 122, 122, 0.8)" :elementLoadingSvg="svg"
    element-loading-svg-view-box="-10, -10, 50, 50" :data="tableData" :options="options" @confirm="check"
    @cancel="close" isEditRow v-model:editRowIndex="editRowIndex" pagination :total="total" :pageSize="pageSize"
    paginationAlign="right" :currentPage="current" @sizeChange="sizeChange" @currentChange="currentChange">
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-popover effect="light" trigger="hover" placement="top" width="auto">
        <template #default>
          <div>name: {{ scope.row.name }}</div>
          <div>address: {{ scope.row.address }}</div>
        </template>
        <template #reference>
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-popover>
    </template>
    <template #action="{ scope }">
      <el-button size="small" type="primary" @click="edit(scope)">编辑</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
    <template #editRow="{ scope }">
      <el-button size="small" type="primary">确认</el-button>
      <el-button size="small" type="danger">删除</el-button>
    </template>
    <template #editCell="scope">
      <div style="display:flex; margin-left: 8px;">
        <el-button size="small" type="success">确定</el-button>
        <el-button size="small">取消</el-button>
      </div>
    </template>
  </my-table>
</template> 

<script setup lang="ts">
import { reactive, toRefs, ref, onMounted } from "vue"
import { TableOptions } from "../../components/table/src/types";
import axios from 'axios'


interface TableData {
  date: string,
  name: string,
  address: string
}

let tableData = ref<TableData[]>([])

let editRowIndex = ref<string>('')

// 分页相关数据
let current = ref<number>(1)
let pageSize = ref<number>(10)
let total = ref<number>(0)

// 获取table数据
let getData = () => {
  axios.post('/api/list', {
    current: current.value,
    pageSize: pageSize.value
  }).then((res: any) => {
    tableData.value = res.data.data.rows
    total.value = res.data.data.total
  })
}

onMounted(() => {
  getData()
})

// 加载图标
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `



// 表格配置
let options: TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
    editable: true
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    // 自定义列
    slot: 'name',
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center',
    editable: true
  },
  {
    label: '操作',
    prop: '',
    align: 'center',
    action: true
  }
]

// 进入编辑状态
let edit = (scope: any) => {
  // console.log(scope);
  editRowIndex.value = 'edit'

}
// 点击 勾 √
let check = (scope: any) => {
  console.log(scope);
}
// 点击 叉 ×
let close = (scope: any) => {
  console.log(scope)

}

let sizeChange = (val: number) => {
  pageSize.value = val
  getData()
  console.log('sizeChange', val);
}
let currentChange = (val: number) => {
  current.value = val
  getData()
  console.log('currentChange', val);
}
</script>
```

##  Api
### Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| options | 表格的配置 | TableOptions[] | 必填 | - |
| data | 表格数据 | any[] | 必填 | - |
| elementLoadingText | 表格数据 | any[] | - | - |
| elementLoadingSpinner | 自定义加载图标 | string | - | - |
| elementLoadingSvg | 自定义加载图标 Svg 格式 | string | - | - |
| elementLoadingSvgViewBox | 加载图标是svg的配置 | string | - | - |
| elementLoadingLackground | 背景遮罩的颜色| string | - | - |
| editIcon | 自定义编辑单元格的图标 | string | - | edit |
| isEditRow | 是否可以编辑行 | boolean | - | false |
| editRowIndex | 编辑行按钮的标识 | string | - | - |
| currentPage | 当前是第几页的数据 | number | - | 1 |
| pageSize | 当前一页展示多少条数据 | number | - | 10 |
| pageSizes | 每页显示数据数量选项 | number[] | - | [10, 20, 30, 40] |
| total | 数据的总数 | number | - | - |
| pagination | 是否显示分页 | boolean | - | - |
| paginationAlign | 分页的排列方式 | left / center / right | - | left |


#### AreaInfo 数据格式

| key | 说明 | 类型 |
| :---- | ---- | ---- |
| label | 表头名称 | string |
| prop | 表格数据字段名 | string |
| width | 表格单元格宽度 | string / number |
| align | 表格单元格对齐方式 | left / center / right |
| slot | 自定义列表模板名称 | string |
| action | 是否是操作项 | boolean |
| editable | 是否是可编辑的单元格 | boolean |


### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| confirm | 可编辑单元格确认事件 | scope: 当前行数据 |
| cancel | 可编辑单元格取消事件 | scope: 当前行数据 |
| sizeChange | 分页的条数改变 | val: 当前页条数 |
| currentChange | 分页的页数改变 | val: 当前页 |

### slots 插槽

| 名称 | 说明 |
| :---- | ---- |
| cellEdit | 自定义可编辑单元内容 |
| editRow | 自定义可编辑行内容 |
| action | 自定义编辑区域内容 |



