<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li @click="changselectedTags" v-for="(item, index) in datatags" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop() datatags: string[] | undefined;
  selectedTags: string[] = [];
  changselectedTags(event:object){
    console.log(event); 
  }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  padding: 16px;
  font-size: 14px;
  display: flex; 
  flex-direction: column-reverse;
  .current {
    flex-wrap: wrap;
    display: flex;

    li {
      line-height: 24px;
      height: 24px;
      padding: 0 16px;
      margin-right: 12px;
      border-radius: 12px;
      background: #d9d9d9;
      margin-top: 4px;
    }
  }
  .new {
    padding-top: 16px;
    button {
      border: 0;
      background: transparent;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>