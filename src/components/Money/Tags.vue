<template>
  <div class="tags">
    <div class="new">
      <button @click="newtag">新增标签
        
      </button>
    </div>
    <ul class="current">
      <li
        @click="changselectedTags(item)"
        v-for="item in dataTags"
        :key="item.id"
        :class="selectedTags.indexOf(item) >= 0 && 'selected'"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataTags: string[] | undefined;
  selectedTags: string[] = [];
  changselectedTags(item: string) {
    const index = this.selectedTags.indexOf(item);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(item);
    }
      this.$emit("updata:value",this.selectedTags)
  }
  newtag() {
    const name = window.prompt("请输入标签名");
    if (name === "") {
      window.alert("标签名不能为空");
    } else if (this.dataTags && this.dataTags.indexOf(name!) >= 0) {
      window.alert("标签名重复");
    } else if (this.dataTags) {
      alert("添加成功")
      
      // this.$emit("update:dataTags", [...this.dataTags, name]);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
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
      background: #c3c3c3;
      margin-top: 4px;
      &.selected {
        background: #fad027;
        color: rgb(0, 0, 0);
      }
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