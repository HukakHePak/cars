// import { makeObservable, observable } from "mobx";


// class Car {
//     id: number;

// constructor(car: Car) {
//     makeObservable(this);
// }


// }

type Car = {
    id: number;
    brand: string;
    name: string;
    complectation: string;
    color_code: string;
    description: string;
    photo: string;
    price: number;
    kpp: string;
    drive: string;
    compress: string;
    fuel: string;
    perfomance: string;
    vaolume: string;
    code: string;
    vin: string;
    prod_date: string;
    arrival_date: string;
    distance: string;
}

export default Car;