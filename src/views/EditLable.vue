<template>
  <layout>
      <div class="navBar">
          <Icon name="left" class="lefticon" @click.native="goback"/>
          <span class="title">编辑标签</span>
          <span class="rigthicon"></span>
    </div>
    <div class="waper">
    <Notes :fieldName="'标签名'" :placeholder="'请输入标签名'" :value="tag.name" @update:value="updateTag"/>
    </div>
    <div class="btnwaper">
    <Button @click.native="remove"> 删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">

import Vue from "vue"
import Notes from "../components/Money/Notes.vue"
import Button from "../components/Button.vue"
import { Component } from "vue-property-decorator";
import store from "@/store/index2";
@Component({
    components:{
        Notes,
        Button
    }
})
 export default class EditLable extends Vue{
     tag ? :{id:string ,name :string}=undefined
     created(){     
         this.tag =store.findTag(this.$route.params.id)
         if(!this.tag){ 

             this.$router.replace("/404")
         }
     }
     updateTag(name:string){
         if(this.tag){
             store.updateTag(this.tag.id ,name)
         }
     }
     remove(){
         if(this.tag){
             if(store.removeTag(this.tag.id)){
                 this.$router.back()
             }else{
                 alert("删除失败")
             }
         }
     }
     goback(){
          this.$router.back()
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
