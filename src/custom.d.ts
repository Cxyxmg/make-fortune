
type RecordItem = {
    tags: string[];
    notes: string;
    amount: number;
    type: string;
    creatAt?: Date;
}
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
    remove: (id: string) => boolean
}
interface Window {
    store:{
        tagList: Tag[],
        createTag: (name: string) => void,
        removeTag: (id: string) => boolean
        updateTag: (id: string, name: string) => "success" | "duplicated" | "not found"
        findTag: (id: string) => Tag
        recordList: RecordItem[]
        createRecord:(recrod:RecordItem)=>void
    }
}