import { Backend } from "./be";
import Type from "./models/type";

class FuelStore {
  list: Type[];

  load() {
    Backend.getFuelTypes().then((list: Type[]) => (this.list = list));
  }
}

export default FuelStore;
