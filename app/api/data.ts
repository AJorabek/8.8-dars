const todos= new Map()
export const getTodos=()=>{
    let arr:string[]=[]
    todos.forEach((todo)=>{
        arr.push(todo)
        console.log(todo);
        

        return arr;
    })
}
export const createTodo=(nomi:string)=>{
    todos.set(nomi,nomi)
}