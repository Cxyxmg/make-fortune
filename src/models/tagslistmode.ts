
type Tag = {
    id: string
    name: string
}
type taglistmode = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => "success" | "duplicated" //success 表示成功  duplicated 表示名字重复
    save: () => void
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
        this.data.push({ id: name, name: name })
        this.save()
        return "success"
    },
    save() {
        localStorage.setItem("RecordItemList", JSON.stringify(this.data));
    }
}
export default taglistmode;
