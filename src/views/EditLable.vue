<template>
  <layout>
      编辑123123
  </layout>
</template>

<script lang="ts">

import Vue from "vue"
import { Component } from "vue-property-decorator";
import taglistmode from "../models/tagslistmode"
@Component
 export default class EditLable extends Vue{
     created(){
         const id=this.$route.params.id
         taglistmode.fetch()
         const tags =taglistmode.data
         const tag =tags.filter(item =>item.id ===id)[0]
         if(tag){
             console.log(tag);
             
         }else{
             this.$router.replace("/404")
         }
     }
 }
</script>

<style>

</style>