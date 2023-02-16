import type { SiteMetaData } from "@/interfaces"

const siteMetaData: SiteMetaData = {
  AppName: "二维码生成工具",
  ErrorPage: {
    NotFound: {
      title: "404 页面不存在",
      description: "生活总归带点荒谬",
      btnText: "不如找点乐子吧"
    },
    FallBack: {
      title: "页面加载错误",
      description: "生活总归带点荒谬",
      btnText: "不如找点乐子吧"
    }
  }
}

export { siteMetaData }
