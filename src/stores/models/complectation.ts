import { Backend } from "stores/be";
import Option from "./option";

class Complectation {
    id: number;
    name: string;
    options: Option[];

    load() {
        Backend.getOptionsByFilter();   // TODO: взять опции комплектации
    }

    delete(option: Option) {
        this.options.filter((opt: Option) => option.id !== opt.id);
    }


}

export default Complectation;