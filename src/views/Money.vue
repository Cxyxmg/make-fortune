<template>
  <Layout class-prefix="layout">
    <Numberpad :value.sync="record.amount" @sumbit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="Noteswaper">
      <Notes
        @update:value="onUpdateNotes"
        fieldName="备注"
        placeholder="在这里输入备注"
      />
    </div>

    <Tags />
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Numberpad from "../components/Money/Numberpad.vue";
import Types from "..//components/Money/Types.vue";
import Notes from "..//components/Money/Notes.vue";
import Tags from "../components/Money/Tags.vue";

type RecordItem = {
  tags: string[];
  notes: string;
  amount: number;
  type: string;
  creatAt?: Date;
};

@Component({
  components: { Numberpad, Types, Notes, Tags },
  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
  },
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: "",
    amount: 0,
    type: "-",
  };
  created() {
    this.$store.commit("fetchrecords");
  }
  //收集Notes数据
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.Noteswaper {
  padding: 12px 0;
}
</style>
