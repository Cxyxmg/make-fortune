<template>
  <ul class="types">
    <li :class="value == '-' && 'selected'" @click="selecType('-')">支出</li>
    <li :class="value == '+' && 'selected'" @click="selecType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Types extends Vue {
  @Prop() readonly value!: string ;
  selecType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$emit("update:value",type)
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: rgb(197,195,197);
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
        background: #000000;
        bottom: 0;
      }
    }
  }
}
</style>