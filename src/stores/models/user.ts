import { action, makeObservable, observable } from "mobx";
import { Backend } from "stores/be";

const director = "D";
const admin = "A";
const manager = "M";
const stuff = "S";
const unauth = "U";

export const roles = {
  director,
  admin,
  manager,
  stuff,
  unauth,
};

export type UserInfo<PropName extends "id" | "iduser" = "id"> = {
  name: string;
  surname: string;
  patronymic: string | null;
  phone: string;
  email: string;
  login: string;
  password: string;
  photo: string | null;
  type: string;
} & { [P in PropName]: number };

export class User {
  id = 0;

  name = "Unknown";

  surname = "Unknown";

  patronymic = "Unknown";

  phone = "Unknown";

  email = "Unknown";

  login = "Unknown";

  password = "Unknown";

  photo: string | null = null;

  type = "Unknown";

  constructor(user?: UserInfo<"iduser">) {
    makeObservable(this, {
      save: true,
      info: true,
      patronymic: observable,
      phone: observable,
      photo: observable,
      id: observable,
      name: observable,
      surname: observable,
      email: observable,
      login: observable,
      password: observable,
      type: observable,
      setUser: action,
      update: action,
    });

    if (user) {
      this.setUser(user);
    }
  }

  setUser(user: UserInfo<"iduser"> | UserInfo): void;
  setUser(
    user: UserInfo<"iduser"> | UserInfo,
    shouldUpdate: true
  ): Promise<void>;
  setUser(
    user: UserInfo<"iduser"> | UserInfo,
    shouldUpdate = false
  ): void | Promise<void> {
    // @ts-ignore
    this.id = user.id ?? user.iduser; // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    this.name = user.name;
    this.surname = user.surname;
    this.patronymic = user.patronymic || "";
    this.phone = user.phone;
    this.email = user.email;
    this.photo = user.photo;
    this.login = user.login;
    this.password = user.password;
    this.type = user.type;

    if (shouldUpdate) {
      this.save();
    }
  }

  save = async (): Promise<void> => {
    await Backend.editUser(this.info);
  };

  update = async (): Promise<void> => {
    const user = (await Backend.getUsers(this.id)) as UserInfo<"iduser">;
    this.setUser(user);
  };

  get info(): UserInfo {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      patronymic: this.patronymic,
      phone: this.phone,
      email: this.email,
      photo: this.photo,
      login: this.login,
      password: this.password,
      type: this.type,
    };
  }
}
