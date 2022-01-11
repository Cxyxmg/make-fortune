<template>
  <Layout class-prefix="layout">
    {{ record }}
    <Numberpad :value.sync="record.amount" @sumbit="sumbit" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-tags.sync="tags" @updata:value="onUpdateTags" />
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Numberpad from "@/components/Money/Numberpad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
type Record = {
  tags: string[];
  notes: string;
  amount: number;
  type: string;
};  
@Component({
  components: { Numberpad, Types, Notes, Tags },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = [];
  record: Record = {
    tags: [],
    notes: "",
    amount: 0,
    type: "-",
  };

  sumbit() {
    let record2 =JSON.parse(JSON.stringify( this.record))
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange(){
  localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }
  //收集tags数据
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  //收集Notes数据
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
</style>