import { defineConfig } from 'vitepress'

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
  title: "快乐的大番薯",
  description: "快乐的大番薯",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],
    footer: {
      "message": message,
      "copyright": 'Copyright 太阳系 '
    },
    sidebar: [
      {
        "text": "护眼卫士",
        "link": "/tools/eye-protecter"
      },
      {
        "text": "趣阅读",
        "link": "/tools/readbook"
      }
    ],
  }

})
