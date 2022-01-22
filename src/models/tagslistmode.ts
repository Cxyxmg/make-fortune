const localStorageKeyName ='taglist'
type taglistmode ={
    data:string[]
    fetch:()=> string[]
    create:(name:string) =>"success" | "duplicated" //success 表示成功  duplicated 表示名字重复
    save:()=> void
}
const   data1 :string[] =[]
const taglistmode={
  data:[""],
    fetch(){
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName)||"[]") 
        return   this.data
    },
    create(name:string){
        if(this.data.indexOf(name)>=0){return "duplicated"}
        this.data.push(name)
        this.save()
        return "success"
    },
    save(){
        localStorage.setItem("RecordItemList", JSON.stringify( this.data));
    }
}
export default taglistmode;
