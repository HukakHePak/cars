import { makeAutoObservable } from "mobx";
import { Backend } from "./be";
import Name from "./models/name";

class BrandStore {
  list: Name[] = [];

  constructor() {
    makeAutoObservable(this);
    this.load();
  }

  load() {
    Backend.getBrands().then((list: Name[]) => {
      this.list = list;
    });
  }
}

export default BrandStore;
