import Mock from "mockjs";

//后端有服务器数据 就可以注释掉
import "./banner";
import "./blog";
import "./setting";
import "./about";
import "./project";
import "./message"

// 设置网络延迟
Mock.setup({
    timeout: "500-1000",
});
