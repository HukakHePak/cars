import { makeAutoObservable } from "mobx";
import { Backend } from "./be";
import Option from "./models/option";

class OptionsStore {
    list: Option[];

    constructor() {
        makeAutoObservable(this);
    }

    async load() {
        this.list = await Backend.getOptionsByFilter();
    }
}

export default OptionsStore;
