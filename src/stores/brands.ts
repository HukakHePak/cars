import { Backend } from "./be";
import Type from "./models/type";

class BrandStore {
  list: Type[];

  load() {
    Backend.getBrands().then((list: Type[]) => (this.list = list));
  }
}

export default BrandStore;
