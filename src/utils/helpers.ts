import { User, UserType } from "stores/models/user";

export const isAccessed = (roles: string[], user: User) =>
  roles.includes(user.type) ||
  roles.length === 0 ||
  roles[0] === UserType.unauth;

export function more() {}
