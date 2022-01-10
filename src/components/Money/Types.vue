<template>
  <ul class="types">
    <li :class="type == '-' && 'selected'" @click="selecType('-')">支出</li>
    <li :class="type == '+' && 'selected'" @click="selecType('+')">收入</li>
  </ul>
</template>

<script lang="ts">

import Vue from "vue";
import { Component} from "vue-property-decorator";
@Component
export default class Types extends Vue {
  type = "-";
  selecType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
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
        background: #333;
        bottom: 0;
      }
    }
  }
}
</style>