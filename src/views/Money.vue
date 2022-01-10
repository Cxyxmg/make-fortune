<template>
  <Layout class-prefix="layout">
    <Numberpad />
    <Types />
    <Notes />
    <Tags :datatags="tags" />
  </Layout>
</template>
<script lang="js">
import Numberpad from '@/components/Money/Numberpad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
export default {
    data() {
    return {
      tags:["衣","食","住","行"]
    }
  },
  components: { Numberpad, Types, Notes, Tags},
  };
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
</style>