export class TodoItem{
    id:number = Date.now()*Math.round(Math.random()*1000);
    // quand on initialise les variables à leur déclaration, le typage n'est pas requis...
    title:string = "";
    dueDate:Date = new Date();
    completed:boolean = false;
    favourite:boolean = false;

    constructor(title:string){
        this.title = title
    }
    
}