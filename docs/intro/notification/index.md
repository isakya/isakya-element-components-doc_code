# 通知菜单
显示通知菜单列表，支持多种自定义。

## 按需引入
``` js
// main.ts
import notification from 'isakya-element-components/notification'
import 'isakya-element-components/notification/style.css'

app.use(notification)
```


## 基本用法
<client-only>
  <notification :value="50">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
  <br />
  <br />
  <notification :value="50" :max="30">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
  <br />
  <br />
  <notification icon="ChatDotRound" :value="50" :isDot="true">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
</client-only>


<script setup lang="ts">

let actions = [
  {
    text: '清空代办',
    icon: 'delete'
  },
  {
    text: '查看更多',
    icon: 'edit'
  },
]

let list = [
  {
    title: '通知',
    content: [
      {
        title: 'IZUMI回复了你的邮件',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4'
      },
      {
        title: '尤雨溪邀请你参加会议',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/499550?v=4'
      },
      {
        title: 'Eduardo已批准了你的休假申请',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/664177?v=4'
      },
      {
        title: 'IZUMI回复了你的邮件',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4'
      },
      {
        title: '尤雨溪邀请你参加会议',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/499550?v=4'
      },
      {
        title: 'Eduardo已批准了你的休假申请',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/664177?v=4'
      },
      {
        title: 'IZUMI回复了你的邮件',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4'
      },
      {
        title: '尤雨溪邀请你参加会议',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/499550?v=4'
      },
      {
        title: 'Eduardo已批准了你的休假申请',
        time: '2019-05-08 14:33:18',
        avatar: 'https://avatars.githubusercontent.com/u/664177?v=4'
      }

    ],
  },
  {
    title: '关注',
    content: [
      {
        avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4',
        title: 'IZUMI 评论了你',
        desc: '描述信息描述信息描述信息',
        time: '3小时前'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4',
        title: 'IZUMI 评论了你',
        desc: '描述信息描述信息描述信息',
        time: '3小时前'
      },
      {
        avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4',
        title: 'IZUMI 评论了你',
        desc: '描述信息描述信息描述信息',
        time: '3小时前'
      }
    ]
  },
  {
    title: '代办',
    content: [
      {
        title: '任务名称',
        desc: '任务需要在 2017-01-12 20:00 前启动',
        tag: '未开始',
        tagType: ''
      },
      {
        title: '第三方紧急代码变更',
        desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
        tag: '马上到期',
        tagType: 'danger'
      },
      {
        title: '信息安全考试',
        desc: '指派竹尔于 2017-01-09 前完成更新并发布',
        tag: '已耗时8天',
        tagType: 'warning'
      }
    ]
  },
]

let clickItem = (val: any) => {
  console.log(val);
}
let clickAction = (val: any) => {
  console.log(val);
}
</script>


### 代码示例
``` html
<template>
  <notification :value="50">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
  <br />
  <br />
  <notification :value="50" :max="30">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
  <br />
  <br />
  <notification icon="ChatDotRound" :value="50" :isDot="true">
    <template #default>
      <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
    </template>
  </notification>
</template>


<script setup lang="ts">
  let clickItem = (val: any) => {
    console.log(val);
  }
  let clickAction = (val: any) => {
    console.log(val);
  }

  let actions = [
    {
      text: '清空代办',
      icon: 'delete'
    },
    {
      text: '查看更多',
      icon: 'edit'
    },
  ]

  let list = [
    {
      title: '通知',
      content: [
        {
          title: 'IZUMI回复了你的邮件',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4'
        },
        {
          title: '尤雨溪邀请你参加会议',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/499550?v=4'
        },
        {
          title: 'Eduardo已批准了你的休假申请',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/664177?v=4'
        },
        {
          title: 'IZUMI回复了你的邮件',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4'
        },
        {
          title: '尤雨溪邀请你参加会议',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/499550?v=4'
        },
        {
          title: 'Eduardo已批准了你的休假申请',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/664177?v=4'
        },
        {
          title: 'IZUMI回复了你的邮件',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4'
        },
        {
          title: '尤雨溪邀请你参加会议',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/499550?v=4'
        },
        {
          title: 'Eduardo已批准了你的休假申请',
          time: '2019-05-08 14:33:18',
          avatar: 'https://avatars.githubusercontent.com/u/664177?v=4'
        }

      ],
    },
    {
      title: '关注',
      content: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4',
          title: 'IZUMI 评论了你',
          desc: '描述信息描述信息描述信息',
          time: '3小时前'
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4',
          title: 'IZUMI 评论了你',
          desc: '描述信息描述信息描述信息',
          time: '3小时前'
        },
        {
          avatar: 'https://avatars.githubusercontent.com/u/55723002?v=4',
          title: 'IZUMI 评论了你',
          desc: '描述信息描述信息描述信息',
          time: '3小时前'
        }
      ]
    },
    {
      title: '代办',
      content: [
        {
          title: '任务名称',
          desc: '任务需要在 2017-01-12 20:00 前启动',
          tag: '未开始',
          tagType: ''
        },
        {
          title: '第三方紧急代码变更',
          desc: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
          tag: '马上到期',
          tagType: 'danger'
        },
        {
          title: '信息安全考试',
          desc: '指派竹尔于 2017-01-09 前完成更新并发布',
          tag: '已耗时8天',
          tagType: 'warning'
        }
      ]
    },
  ]
</script>
```

## Api
### Props

| key | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| icon | 图标 | string | - | Bell |
| value | 通知数量 | string / number | - | - |
| max | 通知数量最大值 | number | - | - |
| isDot | 是否显示小圆点 | boolean | - | false |



### slots 插槽
| 名称 | 说明 |
| :---- | ---- |
| default | 点击图标之后显示的内容 |

