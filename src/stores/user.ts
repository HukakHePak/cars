import { makeObservable } from "mobx";

class UserStore {
  id = "";

  name = "";

  surname = "";

  email = "";

  code = "";

  constructor(user: UserStore) {
    makeObservable(this, {
      setUser: true,
      id: true,
      name: true,
      surname: true,
      email: true,
      code: true,
    });
    this.setUser(user);
  }

  // @action.bound
  // set(field: string, value: string | number) {

  // }

  //   @action.bound
  setUser(user: UserStore) {
    const { id, name, surname, email, code } = user;

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.code = code;
  }
}

export default UserStore;
