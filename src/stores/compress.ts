import { Backend } from "./be"
import Type from "./models/name"

class CompressStore {
  list: Type[]

  load() {
    Backend.getCompressTypes().then((list: Type[]) => {
      this.list = list
    })
  }
}

export default CompressStore
