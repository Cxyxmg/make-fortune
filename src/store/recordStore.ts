
import clone from "@/lib/clone"
const localStorageKeyName ='List'

const recordStore = {
    recordList:[] as RecordItem[],
    fetchrecords(){
        this.recordList=JSON.parse(window.localStorage.getItem(localStorageKeyName)||"[]") as RecordItem[]
        return     this.recordList
    },
    saverecords(){
        localStorage.setItem(localStorageKeyName, JSON.stringify(     this.recordList));
    },
    createRecord(record:RecordItem){
        const record2 :RecordItem =clone(record)
        record2.creatAt =new Date()
       this.recordList?.push(record2)
        recordStore.saverecords()
    }
}
recordStore. fetchrecords()
export default recordStore