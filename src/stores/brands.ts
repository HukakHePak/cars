import { Backend } from "./be";
import Name from "./models/name";

class BrandStore {
  list: Name[];

  load() {
    Backend.getBrands().then((list: unknown[]) => {
      this.list = list.map((item: { idcar_brand: number; name: string }) => ({
        id: item.idcar_brand,
        name: item.name,
      }));
    });
  }
}

export default BrandStore;
