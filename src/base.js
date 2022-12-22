import { message, notification } from "ant-design-vue";
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
  },
};
