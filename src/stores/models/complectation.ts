import { Backend } from "stores/be";
import Model from "./model";
import Name from "./name";
import {Option} from "./option";

class Complectation {
    id: number;
    name: Name;
    options: Option[];
    model: Model;
    price: number;

    load() {
        Backend.getCarComplectOptions(this.id);   // TODO: взять опции комплектации
    }

    delete(option: Option) {
        this.options.filter((opt: Option) => option.id !== opt.id);
    }


}

export default Complectation;