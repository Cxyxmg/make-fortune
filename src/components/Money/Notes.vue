<template>
  <label class="notes">
    <span class="name">{{this.fieldName}}</span>
    <template v-if="type ==='date'"> 
        <input :type="type || 'text'" 
      :placeholder="this.placeholder" 
      :value="x(value)" 
      @input="onValueChanged($event.target.value)"/>  
    </template>
    <template v-else>
      <input :type="type || 'text'" 
      :placeholder="this.placeholder" 
      :value="value" 
      @input="onValueChanged($event.target.value)"/>  
     </template>
  
  </label>
</template>
<script lang="ts">
import dayjs from "dayjs";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
 @Prop({default:""}) value!: string
  @Prop({required:true}) fieldName!:string
  @Prop() placeholder?:string
   @Prop() type?:string
  onValueChanged(val: string) {
    this.$emit("update:value",val)
  }
  x(isoString:string){
    return  dayjs(isoString).format('YYYY-MM-DD')
  }
}
</script>

<style lang="scss" scoped>
.notes {
  // background: #f5f5f5;
  font-size: 14px;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
    
  }
  input {
    border: 0;
   height: 40px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
  }
}
</style>