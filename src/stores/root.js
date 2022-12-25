import { makeAutoObservable } from 'mobx';

export default class RootStoreModel {
  user = {};

  constructor() {
    makeAutoObservable(this);
  }
}
