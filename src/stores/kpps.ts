import { Backend } from "./be";
import Type from "./models/type";

class KppStore {
  list: Type[];

  load() {
    Backend.getKppTypes().then((list: Type[]) => (this.list = list));
  }
}

export default KppStore;
