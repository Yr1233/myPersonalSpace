import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [
        {
            id: "1",
            midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
            title: "林深时见鹿",
            description: "与熊掌不可兼得一样,山鸟与鱼终不同路",
        },
        {
            id: "2",
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
            title: "鲸让我照顾海",
            description: "但你已经不在.有你才是完美谢幕啊",
        },
        {
            id: "3",
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
            title: "挥剑斩不断相思",
            description: "那拔刀还有什么意义,还能留住落樱吗?",
        },
    ]
});

