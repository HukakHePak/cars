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

  save(option: Option) {
    Backend.createOption(option).then(() => this.list.push(option));
  }

  delete(option: Option) {
    Backend.deleteOption(option.id).then(() =>
      this.list.filter((opt: Option) => opt.id !== option.id)
    );
  }
}

export default OptionsStore;
