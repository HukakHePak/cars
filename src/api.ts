import ky, { KyResponse } from "ky";
import { KyInstance } from "ky/distribution/types/ky";

const url = process.env.api || "";

interface Api extends KyInstance {
  // call: (
  //   name: string,
  //   args: [string | number | boolean]
  // ) => Promise<KyResponse>;
  execute: (
    name: string,
    args: [string | number | boolean]
  ) => Promise<KyResponse>;
}

export const api = ky.create({ prefixUrl: `${url}/api/cars` }) as Api;

// api.call = (name, args) => api.post(`call/${name}`, { json: args });
// api.exec = (name, args) => api.post(`exec/${name}`, { json: args });
api.execute = (name, args) => api.post(`execute/${name}`, { json: args });

export const exec = ky.create({
  prefixUrl: `${url}/api/cars/exec`,
});
