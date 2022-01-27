<template>
  <div class="numberpad">
    <div class="output">{{ output }}</div>
    <div class="btns">
      <button @click="inputcontent">1</button>
      <button @click="inputcontent">2</button>
      <button @click="inputcontent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputcontent">4</button>
      <button @click="inputcontent">5</button>
      <button @click="inputcontent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputcontent">7</button>
      <button @click="inputcontent">8</button>
      <button @click="inputcontent">9</button>
      <button  @click="ok" class="ok">OK</button>
      <button class="zero" @click="inputcontent">0</button>
      <button @click="inputcontent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Numberpad extends Vue {
  @Prop(Number) readonly value!:number;
  output=""
  mounted() {
    this.output=this.value.toString()
  }
  inputcontent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input.indexOf(".") >= 0) {
      return;
    }
    this.output += input;
  }
  remove(){
    this.output =this.output.slice(0,-1)
    if(this.output.length ===0){
      this.output="0"
    }
  }
  clear(){
    this.output="0"
  }
  ok(){ 
   this.$emit("update:value",parseFloat(this.output) )
   this.$emit("sumbit",parseFloat(this.output))
    this.output="0"
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/css/rest.scss";
@import "~@/assets/css/helper.scss";
.numberpad {
  .output {
    height: 72px;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade-out($color: #000000, $amount: 0.8),
      inset 0 5px 5px -5px fade-out($color: #000000, $amount: 0.8);
  }
  .btns {
    @extend %clearfix;
    button {
      background: transparent;
      border: none;
      width: 25%;
      height: 64px;
      float: left;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken(#f2f2f2, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken(#f2f2f2, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken(#f2f2f2, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken(#f2f2f2, 4 * 4%);
      }
      &:nth-child(14) {
        background: darken(#f2f2f2, 4 * 5%);
      }
      &:nth-child(12) {
        background: darken(#f2f2f2, 4 * 6%);
      }
    }
  }
}
</style>