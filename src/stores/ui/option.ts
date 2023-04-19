import { makeAutoObservable } from "mobx";
import { Car } from "stores/models/car";

class CarDState {
    car: Car;

    constructor() {
        makeAutoObservable(this);
    }

    setCar(car: Car) {
        this.car = car;
    }

    clear() {
        this.car = null;
    }
}

export default CarDState;
