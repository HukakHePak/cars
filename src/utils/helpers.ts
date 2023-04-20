import { roles as role, User } from "stores/models/user";

export const isAccessed = (roles: string[], user: User): boolean =>
  roles.includes(user.type) || roles.length === 0 || roles[0] === role.unauth;

class Castion {
  /* eslint-disable class-methods-use-this */
  cast() {}
}

export function castMap<T extends Castion, D>(list: T[]): D[] {
  return list.map((item: T) => item.cast() as D);
}
