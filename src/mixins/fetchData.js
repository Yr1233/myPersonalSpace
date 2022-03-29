/**
 * 公共的远程获取数据的代码
 * 由于不同的组件获取数据方式不同，具体的组件中，需要提供一个远程获取数据的方法 fetchData
 * 将远程数据保存到data，又因为data的值不确定，所以使用函数导出，并给一个默认值为null
 */

// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法  fetchData
export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue, //数据
      };
    },
    /* 异步获取数据数组 */
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
