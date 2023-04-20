import { Car } from "stores/models/car";
import Complectation from "stores/models/complectation";
import Engine from "stores/models/engine";
import Model from "stores/models/model";
import Name from "stores/models/name";


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
  
    cast(): Car {
      return <Car>{
        id: this.id,
        engine: <Engine>{
          id: this.idengine,
          fuel: <Name>{ id: this.idfuel, name: this.fuel },
          compress: <Name>{ id: this.idcompress, name: this.compress },
          perfomance: this.perfomance,
          volume: this.volume,
        },
        kpp: <Name>{ id: this.idkpp, name: this.kpp_name },
        drive: <Name>{ id: this.iddrive, name: this.drive_name },
        complectation: <Complectation>{
          id: this.idcomplectation,
          name: <Name>{ id: this.idname, name: this.complectation_name },
          model: <Model>{
            id: this.idmodel,
            name: this.model,
            photo: this.photo,
            description: this.description,
            brand: <Name>{ id: this.idbrand, name: this.brand },
          },
        },
        vin: this.vin,
        prodDate: this.prod_date,
        arrivalDate: this.arrival_date,
        distance: this.distance,
      };
    }
  }
  
  export default CarView;
  