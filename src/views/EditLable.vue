<template>
  <layout>
      <div class="navBar">
          <Icon name="left" class="lefticon"/>
          <span class="title">编辑标签</span>
          <span class="rigthicon"></span>
    </div>
    <div class="waper">
    <Notes :fieldName="'标签名'" :placeholder="'请输入标签名'"/>
    </div>
    <div class="btnwaper">
    <Button> 删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">

import Vue from "vue"
import Notes from "../components/Money/Notes.vue"
import Button from "../components/Button.vue"
import { Component } from "vue-property-decorator";
import taglistmode from "../models/tagslistmode"
@Component({
    components:{
        Notes,
        Button
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

<style lang="scss" scoped>
    .navBar{
        text-align:center;
        font-size:16px;
        padding: 12px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{

        }
        .lefticon{
          width: 24px;
          height: 24px;
         
        }
        .rigthicon{
        width: 24px;
          height: 24px;
        }
    }
    .waper{
        background: rgb(255, 255, 255);
        margin-top: 8px;
    }
    .btnwaper{
        text-align: center;
        padding: 16px 0;
        margin-top: 44-16px;
    }
</style>>
