// import { makeObservable, observable } from "mobx";


// class Car {
//     id: number;

// constructor(car: Car) {
//     makeObservable(this);
// }


// }

export type CarPublic = {
  id: number,
  brand: string,
  model: string,
  complectation: string,
  price: number,
  photo: string | null,
  description: string,
  color: string,
  kpp: string,
  drive: string,
  perfomance: number,
  volume: number,
  fuel: string,
}

export type CarPublicFilter = Partial<{
  id: number,
  brand: string,
  model: string,
  complectation: string,
  color: string,
  fuel: string,
  priceMin: number,
  priceMax: number,
  kpp: string,
  drive: string,
  performanceMin: number,
  performanceMax: number,
  volumeMin: number,
  volumeMax: number,
}>

export type CarFilter = Partial<{
  id: number,
  sold: boolean,
  brand: string,
  model: string,
  fuel: string,
  kpp: string,
  drive: string,
  complectation: string,
}>

export type Car = {
  color_code: string,
  compress: string,
  code: string,
  vin: string,
  prod_date: string | Date,
  arrival_date: null | string | Date,
  distance: null | number,
} & CarPublic