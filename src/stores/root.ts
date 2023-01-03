import { makeObservable, action, observable } from "mobx";

interface IUser {
  name: string;
}

export default class RootStoreModel {
  @observable
  user = { name: "" } as IUser;

  @observable
  surname = "";

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setName(name: string) {
    // console.log(name);
    this.user.name = name;
    // this.surname = name;
  }
}
