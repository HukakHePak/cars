import { makeObservable, action } from "mobx";

export default class RootStoreModel {
  user = {};

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setName(name) {
    this.user.name = name;
  }
}
