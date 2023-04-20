import { Backend } from "./be";
import Name from "./models/name";

class DriveStore {
  list: Name[];

  load() {
    Backend.getDriveTypes().then((list: unknown[]) => {
      this.list = list.map((item: { iddrive_type: number; name: string }) => ({
        id: item.iddrive_type,
        name: item.name,
      }));
    });
  }
}

export default DriveStore;
