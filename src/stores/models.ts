import { Backend } from "./be";
import Type from "./models/type";

class ModelStore {
  list: Model[];

  load(brand: Type) {
    Backend.getModelsByBrand(brand.id).then((list: Model[]) => (this.list = list));
  }
}

export default ModelStore;
