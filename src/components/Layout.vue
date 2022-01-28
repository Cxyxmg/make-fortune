<template>
  <div class="layout-waper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
        <slot></slot>
    </div>
    <div>
      <Nav />
    </div>
  </div>
</template>
<script>
export default {
    props:["classPrefix"]
}
</script>
<style lang="scss" scoped>
    .layout-waper{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    overflow: auto;
    flex-grow: 1;
}
</style>