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
@Component({
    components:{
        Notes,
        Button
    },
})
 export default class EditLable extends Vue{
     get tag(){
         return this.$store.state.currentTag
     }
     created(){     
         const id=this.$route.params.id
         this.$store.commit("fetchTags")
         this.$store.commit("setCurrentTag" ,id)
         if(!this.tag){ 
             this.$router.replace("/404")
         }
     }
     updateTag(name:string){
         const payload={id:this.tag.id,name}
         if(this.tag){
           this.$store.commit("updateTag",payload)
         }
     }
     remove(){
         if(this.tag){
           this.$store.commit("removeTag" ,this.tag.id  )
         }
           this.$router.back()
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
