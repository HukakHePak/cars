import { makeAutoObservable } from "mobx";
import { Backend } from "./be";
import Option, { OptionInfo } from "./models/option";
import Name from "./models/name";

export type OptionsFilter = {
  available: boolean;
  id: number | null;
  code: string | null;
  name: string | null;
};

class OptionsStore {
  list: Option[] = []

  typeList: Name[] = [];

  constructor() {
    makeAutoObservable(this);

    this.loadTypes().then(() => this.load());
  }

  async loadTypes() {
    this.typeList = await Backend.getOptionTypes();
  }

  async load() {
    this.list = await Backend.getOptionsByFilter();
    console.log(this.list);
  }

  save(option: OptionInfo) {
    Backend.createOption(option).then(() => this.list.push(new Option(option)));
  }

  delete(option: Option) {
    Backend.deleteOption(option.id).then(() => this.list.filter((opt: Option) => opt.id !== option.id))
  }
}

export default OptionsStore
