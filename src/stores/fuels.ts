import { Backend } from "./be";
import Type from "./models/name";

class FuelStore {
  list: Type[];

  load() {
    Backend.getFuelTypes().then((list: Type[]) => {
      this.list = list;
    });
  }
}

export default FuelStore;
