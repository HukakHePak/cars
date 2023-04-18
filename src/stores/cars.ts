import Car from "stores/models/car";
// import { Backend } from "./be";

class CarsStore {
  list: Car[] = [<Car>{ id: 3, brand: "porche" }, <Car>{ id: 4 }];

  //   load() {
  //     // Backend.
  //   }
}

export default CarsStore;
