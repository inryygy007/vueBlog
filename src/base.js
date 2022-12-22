import { message, notification } from "ant-design-vue";
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  ClockCircleOutlined,
  FolderOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import ArticleItem from "./components/ArticleItem.vue";
import Banner from "./components/Banner.vue";
// 单独样式引入
import "ant-design-vue/es/message/style/css";
import "ant-design-vue/es/notification/style/css";
// 所有样式引入
// import 'ant-design-vue/dist/antd.css';
export default {
  install(app) {
    // 挂载全局对象
    app.config.globalProperties.$message = message;
    app.config.globalProperties.$notification = notification;
    // 图标组件
    app.component("LeftCircleOutlined", LeftCircleOutlined);
    app.component("RightCircleOutlined", RightCircleOutlined);
    app.component("UserOutlined", UserOutlined);
    app.component("FolderOutlined", FolderOutlined);
    app.component("ClockCircleOutlined", ClockCircleOutlined);
    // 挂载全局组件
    app.component("ArticleItem", ArticleItem);
    app.component("Banner", Banner);
  },
};
