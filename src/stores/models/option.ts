import { makeAutoObservable } from "mobx";
import { Backend } from "stores/be";

class Option {
    id: number;
    idtype: number;
    type: string;
    name: string;
    description: string;
    photo: string;
    price: number;
    count: number;

    constructor() {
        makeAutoObservable(this);
    }
    
    arrive(amount: number) {
        Backend.createOptionArrive(this.id, amount).then(() => this.count += amount);
    }
}

export default Option;