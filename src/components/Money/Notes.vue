<template>
  <label class="notes">
    <span class="name">{{this.fieldName}}</span>
    <input type="text" :placeholder="this.placeholder" v-model="value" />
  </label>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  value = "";
  @Prop({required:true}) fieldName!:string
  @Prop() placeholder?:string
  @Watch("value")
  onValueChanged(val: string) {
    this.$emit("update:value",val)
  }
}
</script>

<style lang="scss" scoped>
.notes {
  // background: #f5f5f5;
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
   height: 40px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
  }
}
</style>