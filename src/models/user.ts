// import { makeObservable } from "mobx";

// class UserStore {
//   iduser: number;

//   name = "";

//   surname = "";

//   email = "";

//   code = "";

//   constructor(user: UserStore) {
//     makeObservable(this, {
//       setUser: true,
//       iduser: true,
//       name: true,
//       surname: true,
//       email: true,
//       code: true,
//     });
//     this.setUser(user);
//   }

//   // @action.bound
//   // set(field: string, value: string | number) {

//   // }

//   //   @action.bound
//   setUser(user: UserStore) {
//     const { iduser, name, surname, email, code } = user;

//     this.iduser = iduser;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.code = code;
//   }
// }

// export default UserStore;

type User = {
  iduser: number;
  name: string;
  surname: string;
  email: string;
  code: string;
};

export default User;