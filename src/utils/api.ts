import ky from "ky"

const url = process.env.api || ""

export const apiUrl = `${url}/api/cars`

export const publicUrl = `${url}/public`

export const api = ky.create({
  prefixUrl: apiUrl,
  credentials: "include"
})

export const pipi = {
  get(path: string): Promise<unknown> {
    return api.get(path).json()
  },
  post(path: string, body: unknown): Promise<unknown> {
    return api.post(path, { json: body }).json()
  },
  execute(name: string, args: unknown[]): Promise<unknown> {
    return api.post(`execute/${name}`, { json: args }).json()
  },
  public(name: string, args: unknown[]): Promise<unknown> {
    return api.post(`public/${name}`, { json: args }).json()
  }
}
