import Mock from "mockjs";
import qs from "querystring";
import formatDate from "@/utils/formatDate"

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: formatDate(Date.now()),
    "avatar|1": [
      "https://pic1.zhimg.com/v2-18691e2b6020a9d5bb96263e75117484_b.jpeg",
      "https://pic1.zhimg.com/v2-a2e75370ae3bc910c7a03d2ba9ab7674_b.jpeg",
      "https://pic3.zhimg.com/v2-df92aa5557ea0fe2ad6d449c0db44a4a_b.png",
      "https://pic2.zhimg.com/v2-478f0a44028211e77eed727090b5643d_b.jpeg",
      "https://pic4.zhimg.com/v2-d6b6fb8fb70dbefb6c0552703a5ddad7_b.jpeg",
      "https://pic4.zhimg.com/v2-53b5c155b159c924f78f7b0c0e56dbd3_b.jpeg",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|20-30": 0,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: formatDate(Date.now(), true),
          "avatar|1": [
            "https://pic1.zhimg.com/v2-18691e2b6020a9d5bb96263e75117484_b.jpeg",
            "https://pic1.zhimg.com/v2-a2e75370ae3bc910c7a03d2ba9ab7674_b.jpeg",
            "https://pic3.zhimg.com/v2-df92aa5557ea0fe2ad6d449c0db44a4a_b.png",
            "https://pic2.zhimg.com/v2-478f0a44028211e77eed727090b5643d_b.jpeg",
            "https://pic4.zhimg.com/v2-d6b6fb8fb70dbefb6c0552703a5ddad7_b.jpeg",
            "https://pic4.zhimg.com/v2-53b5c155b159c924f78f7b0c0e56dbd3_b.jpeg",
          ],
        },
      ],
    },
  });
})