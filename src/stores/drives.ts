import { Backend } from "./be";
import Name from "./models/name";

class DriveStore {
  list: Name[];

  load() {
    Backend.getDriveTypes().then((list: Name[]) => {
      this.list = list;
    });
  }
}

export default DriveStore;
