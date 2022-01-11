const localStorageKeyName ='RecordItemList'
const model={
    fetch(){
        const x:RecordItem[] =JSON.parse(window.localStorage.getItem(localStorageKeyName)||"[]")
        return  x
    },
    save(data:RecordItem[]){
        localStorage.setItem("RecordItemList", JSON.stringify(data));
    }
}
export default model
