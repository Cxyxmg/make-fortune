const localStorageKeyName ='List'
const model={
    data:[] as RecordItem[],
    clone(data:RecordItem[] |RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    create(record:RecordItem){
        const record2 :RecordItem =this.clone(record)
        record2.creatAt =new Date()
        this.data.push(record2)
        this.save()
    },
    fetch(){
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName)||"[]") as RecordItem[]
        return    this.data
    },
    save(){
        localStorage.setItem(localStorageKeyName, JSON.stringify(  this.data));
    }
}
export default model
