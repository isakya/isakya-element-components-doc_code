# 表单
可配置型表单，支持多种自定义。


## 按需引入
``` js
// main.ts
import form from 'isakya-element-components/form'

app.use(form)
```

## 基本用法
<client-only>
  <my-form ref="form" @on-change="handleChange" @before-upload="handleBeforeUpload" @on-preview="handlePreview"
    @on-remove="handleRemove" @before-remove="beforeRemove" @on-exceed="handleExceed" @on-success="handleSuccess"
    label-width="100px" :options="options">
    <template #uploadArea>
      <el-button size="small" type="primary">上传</el-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc; font-size:12px; margin-left:10px;">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
    <!-- 作用域插槽，用于获取子组件的数据或方法 -->
    <template #action="scope">
      <el-button type="primary" @click="submitForm(scope)">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </template>
  </my-form>
</client-only>

<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus";
import { ref } from "vue"
import { FormOptions } from "../../components/form/src/types/types";

let options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '用户名不可为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间'
      }
    ]
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '密码不可为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '未知',
        value: 'not'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://www.fastmock.site/mock/d3a3f89bb4f7a78cde5517e167d4e750/api/upload',
      multiple: true,
      limit: 3,
      method: 'post',
    },
    rules: [
      {
        required: true,
        message: '图片不能为空',
        trigger: 'blur'
      }
    ],
  },
  {
    type: 'editor',
    value: '我是内容啦啦啦',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]

let form = ref()

interface Scope {
  form: FormInstance,
  model: any
}

let submitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误，请检查')
    }
  })
}
// 重置表单,注意：这个方法是在子组件中用defineExpose分发出来的方法，不是作用域插槽分发出来的方法
let resetForm = () => {
  form.value.resetFields()
}


const handleRemove = (val: any) => {
  console.log('handleRemove')
  console.log(val.file, val.fileList)
}
const handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}
const beforeRemove = (val: any) => {
  console.log('beforeRemove')
  ElMessage.warning(
    `The limit is 3, you selected ${val.file.length} files this time, add up to ${val.file.length + val.fileList.length
    } totally`
  )
}
const handleExceed = (val: any) => {
  console.log('handleExceed')
  ElMessage.warning(
    `The limit is 3, you selected ${val.file.length} files this time, add up to ${val.file.length + val.fileList.length
    } totally`
  )
}

let handleSuccess = (val: any) => {
  console.log('handleSuccess')
  console.log(val);
}

let handleChange = (val: any) => {
  console.log('handleChange')
  console.log(val);
}
let handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val);
}
</script>

## 代码示例
``` html
<template>
  <my-form ref="form" @on-change="handleChange" @before-upload="handleBeforeUpload" @on-preview="handlePreview"
    @on-remove="handleRemove" @before-remove="beforeRemove" @on-exceed="handleExceed" @on-success="handleSuccess"
    label-width="100px" :options="options">
    <template #uploadArea>
      <el-button size="small" type="primary">上传</el-button>
    </template>
    <template #uploadTip>
      <div style="color: #ccc; font-size:12px; margin-left:10px;">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
    <!-- 作用域插槽，用于获取子组件的数据或方法 -->
    <template #action="scope">
      <el-button type="primary" @click="submitForm(scope)">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </template>
  </my-form>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus";
import { ref } from "vue"
import { FormOptions } from "../../components/form/src/types/types";

let options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '用户名不可为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间'
      }
    ]
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '密码不可为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '100%'
      },
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1'
      },
      {
        type: 'option',
        label: '主管',
        value: '2'
      },
      {
        type: 'option',
        label: '员工',
        value: '3'
      }
    ]
  },
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'blur'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '未知',
        value: 'not'
      }
    ]
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://www.fastmock.site/mock/d3a3f89bb4f7a78cde5517e167d4e750/api/upload',
      multiple: true,
      limit: 3,
      method: 'post',
    },
    rules: [
      {
        required: true,
        message: '图片不能为空',
        trigger: 'blur'
      }
    ],
  },
  {
    type: 'editor',
    value: '我是内容啦啦啦',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]

let form = ref()

interface Scope {
  form: FormInstance,
  model: any
}

let submitForm = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误，请检查')
    }
  })
}
// 重置表单,注意：这个方法是在子组件中用defineExpose分发出来的方法，不是作用域插槽分发出来的方法
let resetForm = () => {
  form.value.resetFields()
}


const handleRemove = (val: any) => {
  console.log('handleRemove')
  console.log(val.file, val.fileList)
}
const handlePreview = (file: any) => {
  console.log('handlePreview')
  console.log(file)
}
const beforeRemove = (val: any) => {
  console.log('beforeRemove')
  ElMessage.warning(
    `The limit is 3, you selected ${val.file.length} files this time, add up to ${val.file.length + val.fileList.length
    } totally`
  )
}
const handleExceed = (val: any) => {
  console.log('handleExceed')
  ElMessage.warning(
    `The limit is 3, you selected ${val.file.length} files this time, add up to ${val.file.length + val.fileList.length
    } totally`
  )
}

let handleSuccess = (val: any) => {
  console.log('handleSuccess')
  console.log(val);
}

let handleChange = (val: any) => {
  console.log('handleChange')
  console.log(val);
}
let handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload')
  console.log(val);
}
</script>
```

##  Api
### Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| options | 表单配置项 | FormOptions[] | 必填 | - |
| httpRequest | 用户自定义上传方法 | Function | - | - |

#### FormOptions 数据格式
| key | 说明 | 类型 |
| :---- | ---- | ---- |
| type | 表单项的类型 | string |
| value | 当前表单项的值 | any |
| label | 表单项的label | string |
| prop | 表单项的标识 | string |
| rules | 表单项的验证规则 | 同`element-plus`表单验证规则一致 |
| placeholder | 表单项的占位符 | string |
| attrs | 表单元素特有的属性 | 同`element-plus`表单组件属性一致 |
| children | 表单项的子元素 | FormOptions[] |
| uploadAttrs | 表单项的子元素 | 同`element-plus`upload组件属性一致 |



### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| on-preview | 点击文件列表中已上传的文件时的钩子 | file: File |
| on-remove | 文件列表移除文件时的钩子 | file: File, fileList: FileList |
| on-success | 文件上传成功时的钩子 | response: any, file: File, fileList: FileList |
| on-error | 文件上传失败时的钩子 | error: any, file: File, fileList: FileList |
| on-progress | 文件上传时的钩子 | file: File, fileList: FileList |
| on-change | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 | file: File, fileList: FileList |
| before-upload | 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。 | file: File, fileList: FileList |
| before-remove| 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 | file: File, fileList: FileList  |
| on-exceed | 当超出限制时，执行的钩子函数 | file: File, fileList: FileList |

### slots 插槽
| 名称 | 说明 |
| :---- | ---- |
| uploadArea | 上传组件的占位符 |
| uploadTip | 上传组件的提示信息 |
| action | 表单按钮的作用域插槽, form: 表单实例, model: 表单值 |




