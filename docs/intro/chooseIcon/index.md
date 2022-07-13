# 图标选择器
用户点击按钮，弹出框显示所有图标，点击图标可复制图标代码

## 按需引入
``` js
// main.ts
import chooseIcon from 'isakya-element-components/chooseIcon'
import 'isakya-element-components/chooseIcon/style.css'

app.use(chooseIcon)
```


## 基本用法
<client-only>
  <choose-icon title="选择图标" v-model:visible="visible">
    选择图标
  </choose-icon>
</client-only>

<script setup lang="ts">
import { ref } from "vue"
let visible = ref<boolean>(false)
</script>



### 代码示例
``` html
<template>
  <choose-icon title="选择图标" v-model:visible="visible">选择图标</choose-icon>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  let visible = ref<boolean>(false)
</script>
```