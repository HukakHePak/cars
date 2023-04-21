import { Backend } from "./be";
import Type from "./models/name";

class KppStore {
  list: Type[] = [];

  load() {
    Backend.getKppTypes().then((list: Type[]) => {
      this.list = list;
    });
  }
}

export default KppStore;
