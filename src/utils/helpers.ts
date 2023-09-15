import { User, UserType } from "stores/models/user"

export const isAccessed = (roles: string[], user: User): boolean =>
  user.type === UserType.developer || roles.includes(user.type) || roles.length === 0 || roles[0] === UserType.unauth

class Castion {
  /* eslint-disable class-methods-use-this */
  cast() {}
}

export function castMap<T extends Castion, D>(list: T[]): D[] {
  return list.map((item: T) => item.cast() as D)
}

export function parsePrice(price: number | string): string[] {
  const numbers: string[] = []

  String(price)
    .split("")
    .reverse()
    .forEach((item, index) => {
      if (index % 3 === 0) {
        numbers.push(" ")
      }
      numbers.push(item)
    })

  return numbers.reverse()
}
