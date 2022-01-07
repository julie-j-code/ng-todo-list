import { TodoItem } from "./todo-item.model";

export class TodoList{
    id:number=Date.now()*Math.round(Math.random()*1000);
    name:string;
    todos:TodoItem[] = [];

    constructor(name:string){
        this.name=name
    }
}