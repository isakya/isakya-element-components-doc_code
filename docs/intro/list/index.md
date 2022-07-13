# 通知列表
提供tab切换的通知列表

## 按需引入
``` js
// main.ts
import list from 'isakya-element-components/list'
import 'isakya-element-components/list/styles.css'

app.use(list)
```

## 基本用法
<client-only>
  <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
</client-only>

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

## 代码示例
``` html
<template>
  <my-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction" />
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

##  Api

### Props

| key | 说明 | 类型 | 可选值 | 默认值 |
| :---- | ---- | ---- | ---- | ---- |
| list | 列表的内容 | ListOptions[] | 必填 | - |
| actions | 操作内容 | ActionOptions[] | - | - |

### ListOptions 数据格式

| key | 说明 | 类型 |
| :---- | ---- | ---- |
| title | tab的标题 | string |
| content | 列表的内容 | ListItem[] |

### ListItem 数据格式

| key | 说明 | 类型 |
| :---- | ---- | ---- |
| avatar | 头像 | string |
| title | 标题 | string |
| desc | 描述 | string |
| time | 时间 | string |
| tag | 标签名称 | string |
| tagType | 标签样式类型 |  '' / success / info / warning / danger |


### ActionOptions 数据格式

| key | 说明 | 类型 |
| :---- | ---- | ---- |
| text | 操作标题 | string |
| icon | 操作图标 | string |

### 事件

| 事件名 | 说明 | 参数 |
| :---- | ---- | ---- |
| clickItem | 点击了列表项触发 | val: Object |
| clickAction | 点击了操作项触发 | val: Object |

### Object 数据格式

| key | 说明 | 类型 |
| :---- | ---- | ---- |
| item | 列表项 | ListItem |
| index | 列表项的所对应的下标 | number |



