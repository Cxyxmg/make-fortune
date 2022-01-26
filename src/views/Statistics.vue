<template>
  <layout>
    <tab class-prefix="types" :dataSoure="array2" :value.sync="types" />
    <tab class-prefix="interval" :dataSoure="arrya" :value.sync="interval" />
    <ol>
      <li v-for="(item, index) in result" :key="index">
        <h3 class="title">{{ item.title }}</h3>
        <ol>
          <li v-for="item2 in item.item" :key="item2.id" class="record">
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
@Component({
  components: {
    tab,
  },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  get recordList() {
    return this.$store.state.recordList;
  }
  get result() {
    const { recordList } = this;

    type Item = RecordItem[];
    type HashTableitem = { title: string; item: Item };
    const hashTable: { [ket: string]: HashTableitem } = {};
    for (let i = 0; i < recordList.length; i++) {
      const date = recordList[i].creatAt.split("T")[0];
      hashTable[date] = hashTable[date] || { title: date, item: [] };
      hashTable[date].item.push(recordList[i]);
    }
    console.log(hashTable);
    return hashTable;
  }
  mounted() {
    this.$store.commit("fetchrecords");
  }
  types = "-";
  interval = "day";
  arrya = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  array2 = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .types-item {
  background: white;
  &.selected {
    background: #c4c4c4;
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