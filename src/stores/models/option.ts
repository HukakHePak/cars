import { makeAutoObservable } from "mobx";
import { Backend } from "stores/be";
import Name from "./name";

export class Option {
    id: number;
    type: Name;
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

export class OptionView extends Option {
    idtype: number;
    type_name: string;

    cast(): Option {
        return <Option> {
            ...this,
            type: <Name> { id: this.idtype, name: this.type_name }
        }
    }
}