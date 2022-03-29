import Mock from "mockjs";
import weixinQrCode from "@/assets/WeChat.jpg"
import qqQrCode from "@/assets/qq.png"
import PersonalSpaceIcon from "@/assets/Personal-space-icon.png"


Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://pic1.zhimg.com/v2-8f2f6f06a5a935e561f040b601601040_b.jpeg",
        siteTitle: "林深时见鹿",
        github: "https://github.com/",
        qq: "2780663804",
        qqSkip: "tencent://message/?Menu=yes&uin=2780663804&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
        mailSkip: 'mailto:Y2780663804@outlook.com',
        qqQrCode: `${qqQrCode}`,
        weixin: "yangrui-Anogio",
        weixinQrCode: `${weixinQrCode}`,
        mail: "2780663804@qq.com",
        icp: "黑ICP备20220302号",
        githubName: "Yr1233",
        favicon: PersonalSpaceIcon,
        title: '我的个人空间'
    },
});