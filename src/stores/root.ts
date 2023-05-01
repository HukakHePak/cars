import AuthStore from "./auth";
import BrandStore from "./brands";
import CarStore from "./cars";
import ComplectationStore from "./complectations";
import CompressStore from "./compress";
import DriveStore from "./drives";
import EngineStore from "./engines";
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

  complectations = new ComplectationStore();

  drives = new DriveStore();

  engines = new EngineStore();

  fuels = new FuelStore();

  kpps = new KppStore();

  models = new ModelStore();

  options = new OptionsStore();
}
