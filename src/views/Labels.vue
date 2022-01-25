<template>
    <div>
       <layout>
          <div class="tags">
              <router-link :to="`/labels/edit/${item.id}`" v-for="item in tags" :key="item.id" class="tag"> 
                  {{item.name}}
                    <Icon name="rigth" />
              </router-link>
          </div>
          <div class="createtag-waper">
              <Button  class="createtag" @click="createtag">新建标签</Button>
          </div>
        </layout>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator";

import Button from "@/components/Button.vue"



@Component({
    components:{
        Button
    },
    computed:{

    }
})
 export default class Labels extends Vue{
     tags=[]  
     createtag(){
         const name =window.prompt("请输入标签名")
         if(name){
            //  store.createTag(name)
         }
     }
 }
</script>

<style lang="scss" scoped>
.tags{
    background: white;
    font-size: 16px;
    padding-left: 16px;
    .tag{
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