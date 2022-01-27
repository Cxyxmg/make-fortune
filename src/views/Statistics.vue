<template>
  <layout>
    <tab class-prefix="types" :dataSoure="array2" :value.sync="types" />
    <ol>
      <li v-for="(group, index) in result" :key="index">
        <h3 class="title">{{ beautify( group.title )}} <span>￥{{group.total}}</span></h3>
        <ol>
          <li v-for="item2 in group.items" :key="item2.id" class="record">
            <span>{{ tagString(item2.tags) }}</span>
            <span class="notes">{{ item2.notes }}</span>
            <span>￥{{ item2.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tab from "@/components/Tab.vue";
import dayjs from "dayjs"
import clone from "@/lib/clone"
@Component({
  components: {
    tab,
  },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  beautify(string:string){
    const now =dayjs()
    if(dayjs(string).isSame(now,'day')){
      return "今天"
    }else if(dayjs(string).isSame(now.subtract(1,'day'),'day')){
      return '昨天'
    }else if(dayjs(string).isSame(now.subtract(2,'day'),'day')){
      return "前天"
    }else if(dayjs(string).isSame(now,'year')){
      return dayjs(string).format("M月D日")
    }
    else{
      return dayjs(string).format("YYYY年M月D日")
    }
   


  }
  get recordList() {
    return this.$store.state.recordList;
  }
  get result() {
    const { recordList } = this;
    if(recordList.length ===0){return []}
    const newlist = clone(recordList).filter(r =>r.type===this.types).sort((a:any,b:any)=>dayjs(b.creatAt).valueOf()-dayjs(a.creatAt).valueOf())
   type grou={title:string ,total?:number ,items:RecordItem[]}[]
   const groupedList:grou=[{title:dayjs(newlist[0].creatAt).format('YYYY-M-D'),items:[newlist[0]]}]
    for(let i =1 ;i<newlist.length ;i++){
      const current =newlist[i]
      const last =groupedList[groupedList.length-1]
       if(dayjs(last.title).isSame(dayjs(current.creatAt),'day')){
         last.items.push(current)
       }else{
         groupedList.push({title:dayjs(newlist[i].creatAt).format('YYYY-M-D'),items:[current]})
       }
    }
    groupedList.map(group =>{
      group.total=group.items.reduce((sum,item)=>{
      
        return sum +item.amount},0)
      })

   return groupedList
  }
  mounted() {
    this.$store.commit("fetchrecords");
  }
  types = "-";
  array2 = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .types-item {
  background: #c4c4c4;
  &.selected {
    background: white;
    &::after {
      display: none;
    }
  }
}
::v-deep li.interval-item {
  height: 48px;
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>