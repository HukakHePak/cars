import { Backend } from "./be";
import Complectation from "./models/complectation";

class ComplectationStore {
    list: Complectation[];

    load() {
        Backend.getCarInfo(2); //TODO: get complectations
    }
}