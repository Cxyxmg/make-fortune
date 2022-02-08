<template>
  <Layout class-prefix="layout">
    <Numberpad :value.sync="record.amount" @sumbit="saveRecord" />
    <tab :dataSoure="array2" :value.sync="record.type"/>
    <div class="Noteswaper">
      <Notes
        fieldName="备注"
        :value.sync="record.notes"
        placeholder="在这里输入备注"
      />
    </div>
    <div class="Noteswaper">
      <Notes
        fieldName="日期"
        :value.sync="record.creatAt"
        type="date"
        placeholder="在这里输入日期"
      />
    </div>
    <Tags @updata:value="record.tags =$event"/>

  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Numberpad from "../components/Money/Numberpad.vue";
import tab from "../components/Tab.vue"
import Notes from "..//components/Money/Notes.vue";
import Tags from "../components/Money/Tags.vue";

type RecordItem = {
  tags: string[];
  notes: string;
  amount: number;
  type: string;
  creatAt?: string;
};

@Component({
  components: { Numberpad, tab, Notes, Tags },
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: "",
    amount: 0,
    type: "-",
    creatAt:new Date().toISOString(),
  };
     array2=[
        {text:"支出",value:"-"},
        {text:"收入",value:"+"},
     ]
  get   recordList() {
      return this.$store.state.recordList;
    }
  created() {
    this.$store.commit("fetchrecords");
  }
  //收集Notes数据
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    if(this.record.tags.length ===0 || !this.record.tags){
      window.alert("请选择添加一个标签")
      return
    }
    this.$store.commit("createRecord", this.record);
    this.record.notes =""
  }
}
</script>
<style lang="scss" scoped>
 ::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.Noteswaper {
  padding: 12px 0;
}
</style>
