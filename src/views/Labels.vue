<template>
    <div>
       <layout>
          <ol class="tags">
              <li v-for="item in tags" :key="item.id"> 
                  {{item.name}}
                    <Icon name="rigth" />
              </li>
            
          </ol>
          <div class="createtag-waper">
              <button class="createtag" @click="createtag">新建标签</button>
          </div>
        </layout>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator";
import taglistmode from "../models/tagslistmode"

taglistmode.fetch()

@Component
 export default class Labels extends Vue{
     tags=taglistmode.data
     createtag(){
         const name =window.prompt("请输入标签名")
         if(name){
           const message =taglistmode.create(name)
           if(message==="duplicated"){
               window.alert("标签名重复了")
           }else if(message==="success"){
                window.alert("添加成功")
           }
         }
     }
 }
</script>

<style lang="scss" scoped>
.tags{
    background: white;
    font-size: 16px;
    padding-left: 16px;
    li{
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid  #e6e6e6;
        svg{
            width: 18px;
            height: 18px;
            color: #666;
            margin-right: 16px;
        }
    }
}
.createtag{
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