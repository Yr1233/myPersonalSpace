import axios from "axios";
import showMessage from "../utils/messageShow";

//拦截器 可以拦截错误消息 并且显示出来

//创建一个axios实例
const ins = axios.create(); //会先运行拦截器里面的函数 然后将结果返回

//实施拦截 拦截响应 如果 code === 0 则提示错误
ins.interceptors.response.use(function(resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500,
    });
    return null;
  }
  return resp.data.data;
});

export default ins;
