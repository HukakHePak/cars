import { User, roles as role } from "stores/models/user";

export const isAccessed = (roles: string[], user: User) =>
  roles.includes(user.type) || roles.length === 0 || roles[0] === role.unauth;

export function more() {}
