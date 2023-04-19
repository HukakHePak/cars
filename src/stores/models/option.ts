import { makeAutoObservable } from "mobx";
import { Backend } from "stores/be";
import Type from "./type";

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

    save() {
        Backend.createOption(this);
    }

    delete() {
        Backend.deleteOption(this.id);
    }
    
    arrive(amount: number) {
        Backend.createOptionArrive(this.id, amount);
    }
}

export default Option;