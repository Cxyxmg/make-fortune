import taglistmode from '../models/tagslistmode'
import recordListMode from "@/models/model"
const store={
    recordList :recordListMode.fetch(),
    createRecord:(record:RecordItem)=>recordListMode.create(record),
    tagList :taglistmode.fetch(),
    findTag(id:string){
       return this.tagList.filter(item =>item.id ===id)[0]
     },
    createTag:(name:string)=>{
       if(name){
         const message =taglistmode.create(name)
         if(message==="duplicated"){
             window.alert("标签名重复了")
         }else if(message==="success"){
              window.alert("添加成功")
         }
       }
     },
     
   removeTag:(id : string)=>{
         return taglistmode.remove(id)
     },
    updateTag:(id:string ,name:string)=>{
       return taglistmode.updata(id,name)
     }
   
   }
   export default store