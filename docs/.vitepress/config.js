// 配置
export default {
  // 网站标题
  title: '基于element-plus二次封装组件',
  // 部署的基础路径
  base: '/',
  // 配置网站html的head标签 网站图标
  head: [],
  // 主题配置
  themeConfig: {
    logo: '/logo.jpg',

    // 头部导航
    nav: [
      {
        // 导航名称
        text: '首页',
        // 跳转项目链接
        link: '/'
      },
      {
        text: 'github站点',
        link: 'https://isakya.github.io/isakya-element-components-web/#/',
        target: '_blank'
      },
    ],
    // 外链
    socialLinks: [
      { icon: 'github', link: 'https://github.com/isakya' },
    ],
    // 侧边导航
    sidebar: {
      '/intro/': [
        {
          text: '快速开始',
          collapsible: true,
          items: [
            { text: '介绍', link: '/intro/index.md', activeMatch: '/intro/' },
            { text: '快速上手', link: '/intro/quickStart/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '图标选择器',
          items: [
            { text: '介绍', link: '/intro/chooseIcon/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '省市区选择',
          items: [
            { text: '介绍', link: '/intro/chooseArea/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '趋势标记',
          items: [
            { text: '介绍', link: '/intro/trend/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '时间选择',
          items: [
            { text: '介绍', link: '/intro/chooseTime/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '日期选择',
          items: [
            { text: '介绍', link: '/intro/chooseDate/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '通知列表',
          items: [
            { text: '介绍', link: '/intro/list/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '通知菜单',
          items: [
            { text: '介绍', link: '/intro/notification/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '导航菜单',
          items: [
            { text: '介绍', link: '/intro/menu/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '城市选择',
          items: [
            { text: '介绍', link: '/intro/chooseCity/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '进度条',
          items: [
            { text: '介绍', link: '/intro/progress/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '日历',
          items: [
            { text: '介绍', link: '/intro/calendar/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '表单',
          items: [
            { text: '介绍', link: '/intro/form/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '弹出框表单',
          items: [
            { text: '介绍', link: '/intro/modalForm/index.md', activeMatch: '/intro/' },
          ]
        },
        {
          text: '表格',
          items: [
            { text: '介绍', link: '/intro/table/index.md', activeMatch: '/intro/' },
          ]
        },
      ],
    }
  }
}