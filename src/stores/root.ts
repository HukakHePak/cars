import AuthStore from "./auth";
import { Backend } from "./be";
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
  be = Backend;

  ui = new UIStore();

  auth = new AuthStore()

  
  options = new OptionsStore();
  
  cars = new CarStore();
  
  compresses = new CompressStore()
  
  drives = new DriveStore()
  
  engines = new EngineStore()
  
  fuels = new FuelStore()
  
  kpps = new KppStore()
  
  brands = new BrandStore()
  
  models = new ModelStore()

  complectations = new ComplectationStore()
}
