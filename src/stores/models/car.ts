import { Backend } from "stores/be";
import Complectation from "./complectation";
import Engine from "./engine";
import Name from "./name";

export type CarPublicFilter = Partial<{
  id: number;
  brand: string;
  model: string;
  complectation: string;
  color: string;
  fuel: string;
  priceMin: number;
  priceMax: number;
  kpp: string;
  drive: string;
  performanceMin: number;
  performanceMax: number;
  volumeMin: number;
  volumeMax: number;
}>;

export type CarFilter = Partial<{
  id: number;
  sold: boolean;
  brand: string;
  model: string;
  fuel: string;
  kpp: string;
  drive: string;
  complectation: string;
}>;

export class Car {
  id: number;

  engine: Engine;

  vin: string;

  complectation: Complectation;

  kpp: Name;

  drive: Name;

  color: string;

  price: number;

  prodDate: Date;

  arrivalDate: Date;

  distance: number;

  load() {
    // this.engine.load()
    // this.complectation.load();
    Backend.getCarInfo(this.id);
  }

  //   save() {}
}
