<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" placeholder="在这里输入备注" v-model="value" />
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  value = "";
  @Watch("value")
  onValueChanged(val: string) {
    this.$emit("update:value",val)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  font-size: 14px;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    border: 0;
    padding: 16px 0;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
  }
}
</style>