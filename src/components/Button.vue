<template>
  <button class="button" @click="$emit('click' ,$event)"><slot/></button>
</template>

<script>

import Vue from "vue"
import { Component } from "vue-property-decorator";
@Component
 export default class Button extends Vue{

 }
</script>

<style lang="scss" scoped>
.button{
    background: #767676;
    color: white;
    border-radius: 4px;
    border:0;
    height: 40px;
    padding: 0 16px;
    &-waper{
       text-align: center; 
       padding: 16px;
       margin-top: 44-16px;
    }
}
</style>