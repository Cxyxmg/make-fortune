import createId from "../lib/idcreat"
type Tag = {
    id: string
    name: string
}
type taglistmode = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => "success" | "duplicated" //success 表示成功  duplicated 表示名字重复
    updata: (id: string, name: string) => "success" | "duplicated" | "not found"
    save: () => void
    remove:(id:string)=>true
}

const taglistmode = {
    data: [{
        id: "",
        name: ""
    }],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem("RecordItemList") || "[]")
        return this.data
    },
    create(name: string) {
       
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) { return "duplicated" }
        const id=createId().toString()
        this.data.push({ id: id, name: name })
        this.save()
        return "success"
    },
    updata(id: string, name: string) {
        const idlist = this.data.map(item => item.id)
        if (idlist.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                return "duplicated"
            } else {
                const tag = this.data.filter(item => item.id === id)[0]
                tag.name = name
                this.save()
                return "success"

            }
        }else{
            return "not found"
        }
    },
    remove(id:string){
        let index = -1
        for(let i =0 ;i<this.data.length;i++){
            if(this.data[i].id ===id){
                index =i
                break
            }
        }
        this.data.splice(index,1)
        this.save()
        return true
    },
    save() {
        localStorage.setItem("RecordItemList", JSON.stringify(this.data));
    }
}
export default taglistmode;
