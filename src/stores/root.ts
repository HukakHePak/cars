import AuthStore from "./auth";
import CarsStore from "./cars";
import UIStore from "./ui/UIStore";

export default class RootStoreModel {
  ui: UIStore;

  auth: AuthStore;

  cars: CarsStore;

  constructor() {
    this.ui = new UIStore();
    this.auth = new AuthStore();
    this.cars = new CarsStore();
  }
}
