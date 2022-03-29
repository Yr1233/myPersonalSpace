import request from "./request"

/**
 * 获取所有博客分类
 */
export async function getBlogCategories() {
    return await request.get('/api/blogtype')
}

/**
 * 分页获取博客
 * @param {Number} page 当前页码
 * @param {Number} limit 页容量
 * @param {Number} categoryid 所属分类，-1表示全部
 * @param {String} keyword 模糊查询的关键字
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1, keyword = '') {
    return await request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        }
    })
}

/**
 * 获取当单个博客
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
}

/**
 * 获取提交评论
 */

/* 请求响应
 body: {
    nickname: "昵称",
    content: "评论内容，纯文本",
    blogId: <id>	#评论的博客id
} */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo)
}

/**
 * 分页获取评论
 */
export async function getComment(blogId = -1, page = 1, limit = 10, keyword = '') {
    return await request.get(`/api/comment`, {
        params: {
            blogId, /* 所属文章，-1表示不限 */
            page,   /* 当前页码 */
            limit,  /* 页容量 */
        }
    })
}

