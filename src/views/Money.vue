<template>
  <Layout class-prefix="layout">
    <Numberpad :value.sync="RecordItem.amount" @sumbit="saveRecord" />
    <Types :value.sync="RecordItem.type" />
    <div class="Noteswaper">
    <Notes @update:value="onUpdateNotes" fieldName="备注" placeholder="在这里输入备注"/>
    </div>
    
    <Tags :data-tags.sync="tags" @updata:value="onUpdateTags" />
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Numberpad from "../components/Money/Numberpad.vue";
import Types from "..//components/Money/Types.vue";
import Notes from "..//components/Money/Notes.vue";
import Tags from "../components/Money/Tags.vue";
import store from "@/store/index2";

type RecordItem ={
    tags: string[];
    notes: string;
    amount: number;
    type: string;
    creatAt?: Date;
}

@Component({
  components: { Numberpad, Types, Notes, Tags },
})
export default class Money extends Vue {
  tags =store.tagList
  RecordItemList =store.recordList

  RecordItem:RecordItem = {
    tags: [],
    notes: "",
    amount: 0,
    type: "-",
  };
  //收集tags数据
  onUpdateTags(value: string[]) {
    this.RecordItem.tags = value;
  }
  //收集Notes数据
  onUpdateNotes(value: string) {
    this.RecordItem.notes = value;
  }
  saveRecord(){
    store.createRecord(this.RecordItem)
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.Noteswaper{
  padding: 12px 0;
}
</style>
