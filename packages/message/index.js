// 对外提供对组件的引用，注意组件必须声明 name
import EchojoyMessage from "./src/message.js";
// 为组件提供 install 安装方法，供按需引入
EchojoyMessage.install = Vue => {
  Vue.component(EchojoyMessage.name, EchojoyMessage);
  Vue.prototype.$message = EchojoyMessage;
};
export default EchojoyMessage;
