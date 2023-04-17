import ky from "ky";

const url = process.env.api || "";

export const api = ky.create({
  prefixUrl: `${url}/api/cars`,
  credentials: "include",
});

export const pipi = {
  get(path: string) {
    return api.get(path).json();
  },
  post(path: string, body: unknown) {
    return api.post(path, { json: body }).json();
  },
  execute(name: string, args: unknown[]): unknown {
    return api.post(`execute/${name}`, { json: args }).json();
  },
};
