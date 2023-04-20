import AuthStore from "./auth";
import BrandStore from "./brands";
import CarStore from "./cars";
import CompressStore from "./compress";
import DriveStore from "./drives";
import FuelStore from "./fuels";
import KppStore from "./kpps";
import ModelStore from "./models";
import OptionsStore from "./options";
import UIStore from "./ui/UIStore";

export default class RootStoreModel {
  ui = new UIStore();

  auth = new AuthStore();

  brands = new BrandStore();

  cars = new CarStore();

  compresses = new CompressStore();

  drives = new DriveStore();

  fuels = new FuelStore();

  kpps = new KppStore();

  models = new ModelStore();

  options = new OptionsStore();
}
