export default class Tarefa {
    constructor(text: string){
        this.id = Math.floor(Math.random() * 1000000);
        this.text = text;
        this.completed = false;
    }

    private id: number;
    private text: string;
    private completed: boolean;

    public getId(){
        return this.id;
    }

    public getText(){
        return this.text;
    }

    public getCompleted() {
        return this.completed;
    }

    public setText(text: string){
        this.text = text;
    }

    public setCompleted(completed: boolean){
        this.completed = completed;
    }

}