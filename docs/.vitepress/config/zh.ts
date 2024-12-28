import {defineConfig} from "vitepress"
export const zh = defineConfig({
  lang:"zh-CN",
  title:"快乐的大番薯",
  "lastUpdated": {
    text: '最新更新',
    formatOptions: {
      dateStyle: 'short',
      timeStyle: 'medium'
    }
  },
  themeConfig:{
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar:[
      {
        "text": "护眼卫士",
        "link": "tools/eye-protecter"
      },
      {
        "text": "趣阅读",
        "link": "tools/readbook"
      },
      {
        "text": "PDF工具",
        "link": "tools/pdf"
      }
    ]
  }
})