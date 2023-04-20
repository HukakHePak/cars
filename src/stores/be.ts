import { makeObservable } from "mobx";
import { pipi } from "utils/api";
import { castMap } from "utils/helpers";
import { Car, CarFilter, CarView } from "./models/car";
import Engine from "./models/engine";
import { Option, OptionView } from "./models/option";
import Model from "./models/model";
import Name from "./models/name";

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

  static createCar(car: Car): Promise<unknown> {
    const { complectation, engine, kpp, drive, vin, price, color, prodDate } =
      car;

    return pipi.execute("create_car", [
      complectation.id,
      engine.id,
      kpp.id,
      drive.id,
      vin,
      price,
      color,
      prodDate,
    ]);
  }

  static createComplectation(
    idName: number,
    idModel: number,
    price: number
  ): void {
    pipi.execute("create_complectation", [idName, price, idModel]);
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

  static getBrands(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_brands", []);
  }

  static async getCarComplectOptions(idComplect: number): Promise<Option[]> {
    return pipi
      .execute("get_car_complect_options", [idComplect])
      .then(castMap<OptionView, Option>);
  }

  static getCarInfo(id: number): Promise<CarView[]> {
    return <Promise<CarView[]>>pipi.execute("get_car_info", [id]);
  }

  static async getCarsByFilter(params: CarFilter = {}): Promise<Car[]> {
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
    return pipi
      .execute("get_cars_by_filter", [
        id,
        sold,
        brand,
        model,
        fuel,
        kpp,
        drive,
        complectation,
      ])
      .then(castMap<CarView, Car>);
  }

  // static getComplectationsByModel(idModel: number): Complectation[] {}

  static getCompressTypes(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_compress_types", []);
  }

  // static getCustomersByFilter(params: Partial<Customer>): Customer[] {}

  static getDriveTypes(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_drive_types", []);
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

  static getFuelTypes(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_fuel_types", []);
  }

  static getKppTypes(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_kpp_types", []);
  }

  static getModelsByBrand(idBrand: number): Promise<Model[]> {
    return <Promise<Model[]>>pipi.execute("get_models_by_brand", [idBrand]);
  }

  // static getOptionTypes(): OptionType[] {}

  static getOptionsByFilter(): Promise<Option[]> {
    return <Promise<OptionView[]>>(
      pipi
        .execute("get_options_by_filter", [false, null, null])
        .then(castMap<OptionView, Option>)
    );
  }

  // static getOrderComplectation(id: number): Complectation {}

  // static getOrderOptions(id: number): Option[] {}

  // static getOrderPayments(id: number): Payment[] {}

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
