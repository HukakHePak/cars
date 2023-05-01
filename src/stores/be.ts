import { makeObservable } from "mobx";
import { pipi } from "utils/api";
import { Car, CarFilter } from "./models/car";
import Engine from "./models/engine";
import Option from "./models/option";
import Model from "./models/model";
import Name from "./models/name";
import OptionView from "./view/option";
import CarView from "./view/car";
import { UserInfo } from "./models/user";
import Complectation from "./models/complectation";
import ComplectationView from "./view/complectation";

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

  static createCar(car: CarView): Promise<unknown> {
    const {
      idcomplectation,
      idengine,
      idkpp,
      iddrive,
      vin,
      price,
      color,
      prod_date: prodDate,
    } = car;

    return pipi.execute("create_car", [
      idcomplectation,
      idengine,
      idkpp,
      iddrive,
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

  static editUser(user: UserInfo): Promise<void> {
    return pipi.execute("edit_user", [
      user.id,
      user.name,
      user.surname,
      user.patronymic,
      user.phone,
      user.email,
      user.login,
      user.photo,
      user.type,
    ]) as Promise<void>;
  }

  static getBrands(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_brands", []);
  }

  static async getCarComplectOptions(idComplect: number): Promise<Option[]> {
    return pipi
      .execute("get_car_complect_options", [idComplect])
      .then((list: OptionView[]) =>
        list.map((item: OptionView) => Option.fromView(item))
      );
  }

  static async getCarInfo(id: number): Promise<Car> {
    return pipi
      .execute("get_car_info", [id])
      .then((list: CarView[]) => Car.fromView(list[0]));
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
      .then((list: CarView[]) =>
        list.map((item: CarView) => Car.fromView(item))
      );
  }

  static async getPublicCars(): Promise<Car[]> {
    return pipi
      .public("get_public_cars", [
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
      ])
      .then((list: CarView[]) =>
        list.map((item: CarView) => Car.fromView(item))
      );
  }

  static async getComplectationsByModel(
    idModel: number
  ): Promise<Complectation[]> {
    return pipi
      .execute("get_complectations_by_model", [idModel])
      .then((list: ComplectationView[]) =>
        list.map((item: ComplectationView) => Complectation.fromView(item))
      );
  }

  static async getComplectationNames(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_complectation_names", []);
  }

  static async getCompressTypes(): Promise<Name[]> {
    return <Promise<Name[]>>pipi.execute("get_compress_types", []);
  }

  // static getCustomersByFilter(params: Partial<Customer>): Customer[] {}

  static async getDriveTypes(): Promise<Name[]> {
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

  static async getOptionsByFilter(): Promise<Option[]> {
    return pipi
      .execute("get_options_by_filter", [false, null, null])
      .then((list: OptionView[]) =>
        list.map((item: OptionView) => Option.fromView(item))
      );
  }

  // static getOrderComplectation(id: number): Complectation {}

  // static getOrderOptions(id: number): Option[] {}

  // static getOrderPayments(id: number): Payment[] {}

  // getUsers(id: number): Promise<User>
  // getUsers(): Promise<User[]>
  static getUsers(
    id?: number
  ): Promise<UserInfo<"iduser">> | Promise<UserInfo<"iduser">[]> {
    if (id !== undefined) {
      return pipi.execute("get_users", [id]) as Promise<UserInfo<"iduser">>;
    }

    return pipi.execute("get_users", []) as Promise<UserInfo<"iduser">[]>;
  }

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
