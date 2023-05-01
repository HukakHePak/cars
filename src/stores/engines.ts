import { makeAutoObservable } from "mobx";
import { Backend } from "./be";
import Engine from "./models/engine";

class EngineStore {
  list: Engine[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  load() {
    Backend.getEnginesByFilter().then((list: Engine[]) => {
      this.list = list;
    });
  }

  get asOptions() {
    return this.list.map((item: Engine) => ({
      id: item.id,
      name: `${item.volume / 1000} л, ${item.perfomance} л.с., ${item.fuel}, ${
        item.compress
      }`,
    }));
  }

  // create(engine: Engine) {}

  // delete(engine: Engine) {}
}

export default EngineStore;
