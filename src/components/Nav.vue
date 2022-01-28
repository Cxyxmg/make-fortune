<template>
  <nav class="nav">
    <router-link to="/money" class="item" active-class="cur">
      <Icon name="money" />
      记一笔 </router-link
    >
    <router-link to="/labels"  class="item" active-class="cur">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/statistics"  class="item" active-class="cur">
      <Icon name="statistics" />
      流水
    </router-link>
  </nav>
</template>

<script lang="ts">
// import x from '@/assets/icons/label.svg'
// console.log(x);
// 多个svg 使用集体引用
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons/", true, /\.svg$/));
} catch (error) {
  console.log(error);
}
export default {};
</script>

<style lang="scss" scoped>
  nav{
      display: flex;
      font-size: 12px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
      flex-direction: row;
    >.item{
        padding: 2px 0;
        width: 33.33333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >.icon{
            width: 32px;
            height: 32px;
        }
    }
    > .item.cur{
        color: rgb(255, 0, 0);
    }
}

</style>