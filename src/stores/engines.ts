import { Backend } from "./be";
import Engine from "./models/engine";

class EngineStore {
    list: Engine[];

    load() {
        Backend.getEnginesByFilter().then((list: Engine[]) => this.list = list);        
    }

    create(engine: Engine) {

    }

    delete(engine: Engine) {

    }
}

export default EngineStore;