<template>
      <ul class="tabs">
          <li v-for="item in dataSoure" :key="item.value"
          :class="{[classPrefix+'-item'] :classPrefix , selected :item.value === value}"
          @click="select(item)"
          >{{item.text}}</li>
      </ul>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator";
type dataSoureitem={text:string,value:string}
@Component
 export default class Tab extends Vue{
  @Prop({required:true,type:Array}) dataSoure!:dataSoureitem[]
  @Prop(String) readonly value!: string ;
  @Prop(String) classPrefix?:string
    select(item:dataSoureitem){
        this.$emit("update:value" ,item.value)
    }
 }
</script>

<style lang="scss" scoped>
.tabs {
  background: rgb(207, 207, 207);
  // background: #000;
  display: flex;
  text-align: center;
  font-size: 24px;
  li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background: #8a8a8a;
        bottom: 0;
      }
    }
  }
}
</style>