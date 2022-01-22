<template>
  <Layout class-prefix="layout">
    <Numberpad :value.sync="RecordItem.amount" @sumbit="sumbit" />
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
import model from "../models/model" ;
import taglistmode from "../models/tagslistmode"

type RecordItem ={
    tags: string[];
    notes: string;
    amount: number;
    type: string;
    creatAt?: Date;
}
// const recordlist :RecordItem[] =model.fetch()
const tagslist =taglistmode.fetch()
@Component({
  components: { Numberpad, Types, Notes, Tags },
})
export default class Money extends Vue {
  tags =tagslist
  RecordItemList =model.fetch()

  RecordItem:RecordItem = {
    tags: [],
    notes: "",
    amount: 0,
    type: "-",
  };
  sumbit() {
    let RecordItem2 =  JSON.parse(JSON.stringify(this.RecordItem));
    RecordItem2.creatAt = new Date();
    this.RecordItemList.push(RecordItem2);
  }
  @Watch("RecordItemList")
  onRecordItemListChange() {
    model.save(this.RecordItemList)
  }
  //收集tags数据
  onUpdateTags(value: string[]) {
    this.RecordItem.tags = value;
  }
  //收集Notes数据
  onUpdateNotes(value: string) {
    this.RecordItem.notes = value;
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
