import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import clone from "@/lib/clone"
import createId from "@/lib/idcreat"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    recordList:[] as RecordItem[],
    tagList:[] as Tag[]
  },
  mutations: {
    fetchrecords(state){
      state.recordList=JSON.parse(window.localStorage.getItem("List")||"[]") as RecordItem[]
  },
    createRecord(state,record){
      const record2 :RecordItem =clone(record)
      record2.creatAt =new Date()
      state.recordList.push(record2)
      localStorage.setItem("List", JSON.stringify(state.recordList));
    },
    saverecords(state){
      localStorage.setItem("List", JSON.stringify(state.recordList));
  },
  fetchTags(state){
    return state.tagList =JSON.parse(window.localStorage.getItem("tagList") || "[]")
},
createTag(state, name:string){
  const names = state.tagList.map(item => item.name)
  if (names.indexOf(name) >= 0) {
      window.alert("标签名重复了")
       return "duplicated"
       }
        const id=createId().toString()
        state.tagList.push({ id, name: name })
        localStorage.setItem("tagList", JSON.stringify(state.tagList));
        window.alert("添加成功")
        return "success"
},
saveTags(state) {
  localStorage.setItem("tagList", JSON.stringify(state.tagList));
}
  },
  actions: {
  },
  modules: {
  }
})
