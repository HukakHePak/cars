import { makeAutoObservable } from "mobx";

export default class RootStoreModel {
  user = {};

  constructor() {
    makeAutoObservable(this);
  }
 


  @action.bound
  setName(name) {
    this.user.name = name;
  }
};
