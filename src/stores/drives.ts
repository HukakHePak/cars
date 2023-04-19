import { Backend } from "./be";
import Type from "./models/type";

class DriveStore {
  list: Type[];

  load() {
    Backend.getDriveTypes().then((list: Type[]) => (this.list = list));
  }
}

export default DriveStore;
