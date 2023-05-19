import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { Backend } from "stores/be";
import OptionsStore from "stores/options";
import { RootStore } from "contexts/RootStoreContext";
import Name from "./name";

export type OptionInfo = {
  id: number;
  name: string;
  type: number;
  code: string;
  photo: string | null;
  description: string;
  price: number;
  amount: number | null;
};

class Option {
  constructor(option: OptionInfo | Option | null) {
    if (!option) return;

    const { id, type, name, description, photo, price, amount } = option;

    this.id = id;
    this.type = this.options.typeList.find((typeObj) => typeObj.id === type);
    this.name = name;
    this.description = description;
    this.photo = photo;
    this.price = price;
    this.amount = amount;

    makeAutoObservable(this, {
      amount: observable,
      arrive: action,
    });
  }

  id: number;

  name: string;

  type: Name;

  code: string;

  photo: string;

  description: string;

  price: number;

  amount: number;

  arrive(amount: number) {
    Backend.createOptionArrive(this.id, amount).then(() =>
      runInAction(() => {
        this.amount += amount;
      })
    );
  }

  get options(): OptionsStore {
    return RootStore.options;
  }
}

export default Option
