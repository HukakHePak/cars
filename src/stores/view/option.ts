import Name from "stores/models/name";
import Option from "stores/models/option";

class OptionView extends Option {
    idtype: number;
    type_name: string;

    cast(): Option {
        return <Option> {
            ...this,
            type: <Name> { id: this.idtype, name: this.type_name }
        }
    }
}

export default OptionView;