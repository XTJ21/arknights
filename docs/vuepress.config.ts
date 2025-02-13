const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
  lang: 'zh-CN',
  title: '明日方舟速通',
  description: '最快的明日方舟全托管脚本',
  theme: defaultTheme({
    repo: 'tkkcc/ArkLights',
    sidebarDepth: 5,
    docsBranch: 'lr',
    docsDir: 'docs',
    // editLinkPattern: ':repo/edit/:branch/:path'
    navbar: [{ text: '必读', link: '/guide.html' }],
  }),
  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
  },
  plugins: [
    searchPlugin({ }),
    // docsearchPlugin({
    //   appId: 'N54QELCZVC',
    //   apiKey: '19f00e580e32ceb6310bf2ec37590c79',
    //   indexName: 'arklights',
    //   placeholder: '搜索文档',
    //   translations: {
    //     button: {
    //       buttonText: '搜索文档',
    //       buttonAriaLabel: '搜索文档',
    //     },
    //     modal: {
    //       searchBox: {
    //         resetButtonTitle: '清除查询条件',
    //         resetButtonAriaLabel: '清除查询条件',
    //         cancelButtonText: '取消',
    //         cancelButtonAriaLabel: '取消',
    //       },
    //       startScreen: {
    //         recentSearchesTitle: '搜索历史',
    //         noRecentSearchesText: '没有搜索历史',
    //         saveRecentSearchButtonTitle: '保存至搜索历史',
    //         removeRecentSearchButtonTitle: '从搜索历史中移除',
    //         favoriteSearchesTitle: '收藏',
    //         removeFavoriteSearchButtonTitle: '从收藏中移除',
    //       },
    //       errorScreen: {
    //         titleText: '无法获取结果',
    //         helpText: '你可能需要检查你的网络连接',
    //       },
    //       footer: {
    //         selectText: '选择',
    //         navigateText: '切换',
    //         closeText: '关闭',
    //         searchByText: '搜索提供者',
    //       },
    //       noResultsScreen: {
    //         noResultsText: '无法找到相关结果',
    //         suggestedQueryText: '你可以尝试查询',
    //         reportMissingResultsText: '你认为该查询应该有结果？',
    //         reportMissingResultsLinkText: '点击反馈',
    //       },
    //     },
    //   },
    // }),
  ],
}
