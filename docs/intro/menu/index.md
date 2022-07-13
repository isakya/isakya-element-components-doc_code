# 导航菜单
侧边栏菜单，支持无限层级菜单。

## 按需引入
``` js
// main.ts
import menu from 'isakya-element-components/menu'

app.use(menu)
```

## 基本用法
<client-only>
  <div class="container">
    <div style="width:200px; height:70vh;">
      <el-divider>二级菜单</el-divider>
      <br />
        <my-menu name="a" index="b" icon="c" children="d" :data="data1" defaultActive="2" :router="true"
          active-text-color="red"></my-menu>
    </div>
    <div style="width:300px; height:70vh">
      <el-divider>多级菜单</el-divider>
      <br />
        <infinite-menu name="a" index="b" icon="c" children="d" :data="data3" defaultActive="2" active-text-color="red">
        </infinite-menu>
    </div>
  </div>
</client-only>


<script setup lang="ts">
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'document'
      }
    ]
  }
]

// 自定义键名
let data3 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document'
              },
            ]
          },
        ]
      },
    ]
  },
]
</script>

<style scoped>
.container {
  background-color: #eee;
  height: 800px;
  display: flex;
  justify-content: space-around;
}
</style>

## 代码示例
``` html
<div class="container">
  <div style="width:200px; height:70vh;">
    <el-divider>二级菜单</el-divider>
    <br />
    <my-menu name="a" index="b" icon="c" children="d" :data="data1" defaultActive="2" :router="true"
      active-text-color="red"></my-menu>
  </div>
  <div style="width:300px; height:70vh">
    <el-divider>多级菜单</el-divider>
    <br />
    <infinite-menu name="a" index="b" icon="c" children="d" :data="data3" defaultActive="2" active-text-color="red">
    </infinite-menu>
  </div>
</div>

<script setup lang="ts">
let data1 = [
  {
    a: '导航1',
    b: '1',
    c: 'document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'document'
      }
    ]
  }
]

// 自定义键名
let data3 = [
  {
    a: '导航1',
    b: '1',
    c: 'Document'
  },
  {
    a: '导航2',
    b: '2',
    c: 'Document'
  },
  {
    a: '导航3',
    b: '3',
    c: 'Document',
    d: [
      {
        a: '导航3-1',
        b: '3-1',
        c: 'Document',
        d: [
          {
            a: '导航3-1-1',
            b: '3-1-1',
            c: 'Document',
            d: [
              {
                a: '导航3-1-1-1',
                b: '3-1-1-1',
                c: 'Document'
              },
            ]
          },
        ]
      },
    ]
  },
]
</script>

<style scoped>
.container {
  background-color: #eee;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
```

##  Api

### Props

| key | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| data | 导航菜单的数据 | any[] | 必填 | - |
| defaultActive | 默认选中菜单 | string | - | - |
| router | 是否是路由模式 | boolean | - | false |
| index | 菜单标识的键名 | string | - | index |
| name | 菜单标题的键名 | string | - | name |
| children | 子菜单的键名 | string | - | children |

继承`element-plus` `menu` 组件的所有属性。
