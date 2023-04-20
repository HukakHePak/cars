import { Car } from "stores/models/car";

class CarView extends Car {
  idbrand: number;

  brand: string;

  idmodel: number;

  model: string;

  description: string;

  photo: string;

  idcomplectation: number;

  complectation_name: string;

  idname: number;

  idkpp: number;

  kpp_name: string;

  idengine: number;

  idcompress: number;

  compress: string;

  idfuel: number;

  fuel: string;

  perfomance: number;

  volume: number;

  iddrive: number;

  drive_name: string;

  prod_date: Date;

  arrival_date: Date;
}

export default CarView;
