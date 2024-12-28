import {defineConfig} from "vitepress"
export const en = defineConfig({
  lang:"en",
  title:"happy big sweet potato",
  lastUpdated:true,

  themeConfig:{
    nav: [
      { text: 'index', link: '/en' }
    ],
    sidebar:[
      {
        "text": "eye protect",
        "link": "en/tools/eye-protecter"
      },
      {
        "text": "read",
        "link": "en/tools/readbook"
      },
      {
        "text": "PDF tool",
        "link": "en/tools/pdf"
      }
    ]
  }
})