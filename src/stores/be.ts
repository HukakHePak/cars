import { makeObservable } from "mobx";
import { pipi } from "utils/api";
import { Car, CarFilter, CarPublic, CarPublicFilter } from "./models/car";
import Engine from "./models/engine";
import Option from "./models/option";
import Type from "./models/name";

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

  static async createOption(option: Option): Promise<unknown> {
    return pipi.execute("create_option", [option.name]);
  }

  static createOptionArrive(id: number, amount: number): Promise<unknown> {
    return pipi.execute("create_option_arrive", [id, amount]);
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

  static deleteOption(id: number): Promise<unknown> {
    return pipi.execute("delete_option", [id]);
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

  static getBrands(): Promise<unknown> {
    return pipi.execute("get_brands", []);
  }

  // static getCarComplectOptions(idCar: number): CarComplectOptions[] {}

  static getCarInfo(id: number): Promise<Car> {
    return pipi.execute("get_car_info", [id]) as Promise<Car>;
  }

  static getCarsByFilter(
    params: CarFilter = {}
  ): Promise<CarPublic & { vin: string }[]> {
    const {
      id = null,
      sold = null,
      brand = null,
      model = null,
      fuel = null,
      kpp = null,
      drive = null,
      complectation = null,
    } = params;
    return pipi.execute("get_cars_by_filter", [
      id,
      sold,
      brand,
      model,
      fuel,
      kpp,
      drive,
      complectation,
    ]) as Promise<CarPublic & { vin: string }[]>;
  }

  // static getComplectationsByModel(idModel: number): Complectation[] {}

  static getCompressTypes(): Promise<Type[]> {
    return <Promise<Type[]>>(
      pipi.execute("get_compress_types", []).then((list: unknown[]) =>
        list.map((item: { idcompress_type: number; name: string }) => ({
          id: item.idcompress_type,
          name: item.name,
        }))
      )
    );
  }

  // static getCustomersByFilter(params: Partial<Customer>): Customer[] {}

  static getDriveTypes(): Promise<unknown> {
    return pipi.execute("get_drive_types", []);
  }

  static getEnginesByFilter(): Promise<Engine[]> {
    return <Promise<Engine[]>>(
      pipi.execute("get_engines_by_filter", [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ])
    );
  }

  static getFuelTypes(): Promise<Type[]> {
    return <Promise<Type[]>>(
      pipi.execute("get_fuel_types", []).then((list: unknown[]) =>
        list.map((item: { idfuel_type: number; name: string }) => ({
          id: item.idfuel_type,
          name: item.name,
        }))
      )
    );
  }

  static getKppTypes(): Promise<Type[]> {
    return <Promise<Type[]>>(
      pipi.execute("get_kpp_types", []).then((list: unknown[]) =>
        list.map((item: { idkpp_type: number; name: string }) => ({
          id: item.idkpp_type,
          name: item.name,
        }))
      )
    );
  }

  static getModelsByBrand(idBrand: number): Promise<Model[]> {
    return <Promise<Model[]>>pipi.execute("get_models_by_brand", [idBrand]);
  }

  // static getOptionTypes(): OptionType[] {}

  static getOptionsByFilter(): Promise<Option[]> {
    return <Promise<Option[]>>(
      pipi.execute("get_options_by_filter", [false, null, null])
    );
  }

  // static getOrderComplectation(id: number): Complectation {}

  // static getOrderOptions(id: number): Option[] {}

  // static getOrderPayments(id: number): Payment[] {}

  static getPublicCars(params: CarPublicFilter = {}): Promise<CarPublic[]> {
    const {
      id = null,
      brand = null,
      model = null,
      complectation = null,
      priceMin = null,
      priceMax = null,
      color = null,
      kpp = null,
      drive = null,
      performanceMin = null,
      performanceMax = null,
      volumeMin = null,
      volumeMax = null,
      fuel = null,
    } = params;
    return pipi.execute("get_public_cars", [
      id,
      brand,
      model,
      complectation,
      color,
      fuel,
      priceMin,
      priceMax,
      kpp,
      drive,
      performanceMin,
      performanceMax,
      volumeMin,
      volumeMax,
    ]) as Promise<CarPublic[]>;
  }

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
