import { makeAutoObservable } from "mobx";
import { Backend } from "stores/be";
import CarView from "stores/view/car";
import Complectation from "./complectation";
import Engine from "./engine";
import Model from "./model";
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

  constructor(car: Car | null) {
    makeAutoObservable(this);

    if (!car) return;

    this.id = car.id;
    this.engine = car.engine;
    this.vin = car.vin;
    this.complectation = car.complectation;
    this.kpp = car.kpp;
    this.drive = car.drive;
    this.color = car.color;
    this.price = car.price;
  }

  load() {
    // view.engine.load()
    // view.complectation.load();
    Backend.getCarInfo(this.id);
  }

  static fromView(view: CarView) {
    return new Car(<Car>{
      id: view.id,
      engine: <Engine>{
        id: view.idengine,
        fuel: view.fuel,
        idfuel: view.idfuel,
        compress: view.compress,
        idcompress: view.idcompress,
        perfomance: view.perfomance,
        volume: view.volume,
      },
      kpp: <Name>{ id: view.idkpp, name: view.kpp_name },
      drive: <Name>{ id: view.iddrive, name: view.drive_name },
      complectation: new Complectation(<Complectation>{
        id: view.idcomplectation,
        name: <Name>{ id: view.idname, name: view.complectation_name },
        model: <Model>{
          id: view.idmodel,
          name: view.model,
          photo: view.photo,
          description: view.description,
          brand: <Name>{ id: view.idbrand, name: view.brand },
        },
      }),
      vin: view.vin,
      prodDate: view.prod_date,
      arrivalDate: view.arrival_date,
      distance: view.distance,
    });
  }
}
