import { expect, request } from "@playwright/test";
import { BaseClient } from "./BaseClient";
const baseurl = BaseClient.URL;
let cookies;

type ResponseBody = {
  token: string;
};
export class AuthClient extends BaseClient {
  constructor() {
    super();
  }

  async createCookies(username: string, password: string) {
    if (!username) {
      username = "admin";
    }
    if (!password) {
      password = "password";
    }
    const contextRequest = await request.newContext();
    const response = await contextRequest.post(baseurl + "auth/login", {
      data: {
        username: username,
        password: password,
      },
    });
    expect(response).toBe(200);
    const headers = response.headers();
    cookies = headers["set-cookie"];
    return cookies;
  }

  async createToken(username?: string, password?: string) {
    if (!username) {
      username = "admin";
    }
    if (!password) {
      password = "password";
    }
    const contextRequest = await request.newContext();
    const response = await contextRequest.post(baseurl + "api/auth/login", {
      data: {
        username: username,
        password: password,
      },
    });
    expect(response.status()).toBe(200);
    const body = (await response.json()) as ResponseBody;

    // const body = await response.json();
    // console.warn(body);
    return body.token;
  }
}
