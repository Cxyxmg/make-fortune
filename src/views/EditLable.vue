<template>
  <layout>
      <div>
          <Icon name="left"/>
          <span>编辑标签</span>
    </div>
    <Notes :fieldName="'标签名'" :placeholder="'请输入标签名'"/>
  </layout>
</template>

<script lang="ts">

import Vue from "vue"
import Notes from "../components/Money/Notes.vue"
import { Component } from "vue-property-decorator";
import taglistmode from "../models/tagslistmode"
@Component({
    components:{
        Notes
    }
})
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