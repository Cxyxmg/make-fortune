import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import clone from "@/lib/clone"
import createId from "@/lib/idcreat"
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    fetchrecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem("List") || "[]") as RecordItem[]
    },
    setCurrentTag(state, id) {
      state.currentTag = state.tagList.filter(item => item.id === id)[0]
    },
    updateTag(state, payload: { id: string, name: string }) {
      const { id, name } = payload
      const idlist = state.tagList.map(item => item.id)
      if (idlist.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
          window.alert("标签名重复")
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0]
          tag.name = name
          localStorage.setItem("tagList", JSON.stringify(state.tagList));
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i
          break
        }
      }
      state.tagList.splice(index, 1)
      localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record)
      record2.creatAt = new Date()
      state.recordList.push(record2)
      localStorage.setItem("List", JSON.stringify(state.recordList));
    },
    saverecords(state) {
      localStorage.setItem("List", JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      return state.tagList = JSON.parse(window.localStorage.getItem("tagList") || "[]")
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        window.alert("标签名重复了")
        return "duplicated"
      }
      const id = createId().toString()
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
