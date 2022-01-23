let id:number = parseInt(window.localStorage.getItem("_idmax") ||"0")||0
function createId(){
    id++
    window.localStorage.setItem("_idmax",id.toString())
    return id
}

export default createId