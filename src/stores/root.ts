import { makeObservable, action } from "mobx";

interface IUser {
  name: string;
}

export default class RootStoreModel {
  user = {} as IUser;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setName(name: string) {
    this.user.name = name;
  }
}
