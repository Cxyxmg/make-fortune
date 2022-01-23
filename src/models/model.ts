const localStorageKeyName ='List'
const model={
    clone(data:RecordItem[] |RecordItem){
        return JSON.parse(JSON.stringify(data))
    },
    fetch(){
        // const x:RecordItem[] =JSON.parse(window.localStorage.getItem(localStorageKeyName)||"[]")
        return  JSON.parse(window.localStorage.getItem(localStorageKeyName)||"[]") as RecordItem[]
    },
    save(data:RecordItem[]){
        localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
}
export default model
