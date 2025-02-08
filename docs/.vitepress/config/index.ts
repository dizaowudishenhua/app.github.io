import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

import {zh} from "./zh"
import {en} from "./en"
// https://vitepress.dev/reference/site-config
const message =
  `
来自于太阳系的网站
<br />
<a target="_blank"  href="https://beian.miit.gov.cn/">桂ICP备2023002771号-1</a>
<a style=""width:300px;margin:0 auto; display:block;" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35021202000593">
<img src="beian.png" style="display:inline;"/>闽公网安备 35021202000593号
</a>
`
export default defineConfig({
  // base:"/",
  title: "快乐的大番薯",
  description: "快乐的大番薯",
  lastUpdated:true,
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    footer: {
      "message": message,
      "copyright": 'Copyright 太阳系 '
    },
    
    search:{
      provider:"local"
    },
    
  },
  locales: {
    root:{
      label:"简体中文",
      ...zh
    },
    en:{
      label:"english",
      ...en
    }
  }
  // vite:{
  //   plugins: [pagefindPlugin()],
  // }
},
)
