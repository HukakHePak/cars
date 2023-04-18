import { makeObservable } from "mobx";
import { pipi } from "utils/api";

export class Backend {
  constructor() {
    makeObservable(this);
  }

  static cancelPayment(id: number): void {
    pipi.execute("cancel_payment", [id]);
  }

  static changePassword(staffLogin: string, newPassword: string): void {
    pipi.execute("change_password", [staffLogin, newPassword]);
  }

  static createBrand(name: string): void {
    pipi.execute("create_brand", [name]);
  }

  //   static createCar(staffLogin: string, newPassword: string): void {
  //     pipi.execute("cancel_payment", [staffLogin, newPassword]);
  //   }

  static createComplectation(
    idName: number,
    idModel: number,
    price: number
  ): void {
    pipi.execute("cancel_payment", [idName, price, idModel]);
  }

  // static createCustomer(customer: Customer): void {}

  // static createEngine(engine: Engine): void {}

  // static createOption(option: Option): void {}

  static createOptionArrive(id: number, amount: number): void {
    pipi.execute("create_option_arrive", [id, amount]);
  }

  static createOrderOption(idOrder: number, idOption: number): void {
    pipi.execute("create_order_option", [idOrder, idOption]);
  }

  static createPayment(idOrder: number, idCustomer: number, amount: number) {
    pipi.execute("create_payment", [idOrder, idCustomer, amount]);
  }

  static deleteBrand(id: number) {
    pipi.execute("delete_brand", [id]);
  }

  static deleteComplectation(id: number) {
    pipi.execute("delete_complectation", [id]);
  }

  static deleteEngine(id: number) {
    pipi.execute("delete_engine", [id]);
  }

  static deleteModel(id: number) {
    pipi.execute("delete_model", [id]);
  }

  static deleteOption(id: number) {
    pipi.execute("delete_option", [id]);
  }

  static deleteOrder(id: number) {
    pipi.execute("delete_order", [id]);
  }

  static deleteOrderOption(id: number) {
    pipi.execute("delete_order_option", [id]);
  }

  // static editCar(car: Car): void {}

  // static editCustomer(customer: Customer): void {}

  // static editOrder(order: Order): void {}

  // static editUser(user: User): void {}

  // static getBrands(): Brand[] {}

  // static getCarComplectOptions(idCar: number): CarComplectOptions[] {}

  // static getCarInfo(id: number): Car {}

  // static getCarsByFilter(params: Partial<Car>): Car[] {}

  // static getComplectationsByModel(idModel: number): Complectation[] {}

  // static getCompressTypes(): CompressTypes { }

  // static getCustomersByFilter(params: Partial<Customer>): Customer[] {}

  // static getDriveTypes(): DriveTypes {}

  // static getEnginesByFilter(params: Partial<Engine>): Engine[] {}

  // static getFuelTypes(): FuelType[] {}

  // static getKppTypes(): KppType[] {}

  // static getModelsByBrand(idBrand: number): Model[] {}

  // static getOptionTypes(): OptionType[] {}

  // static getOptionsByFilter(params: Partial<Option>): Option[] {}

  // static getOrderComplectation(id: number): Complectation {}

  // static getOrderOptions(id: number): Option[] {}

  // static getOrderPayments(id: number): Payment[] {}

  // static getPublicCars(params: Partial<Car>): Car<public>[] {}

  // static getUsers(id: number): User
  // static getUsers(): User[] {}
  // static getUsers(id?: number): User | User[] {
  //   if (id) {
  //
  //   } else {
  //
  //   }
  // }

  static makeOrderReserved(id: number): void {
    pipi.execute("make_order_reserved", [id]);
  }

  static makeOrderSold(id: number): void {
    pipi.execute("make_order_sold", [id]);
  }

  static unreserveOrder(id: number) {
    pipi.execute("unreserve_order", [id]);
  }

  // static whoReserveCar(id: number): Customer {}
}