// import { expect, request } from "@playwright/test";
// import { BaseClient } from "./BaseClient";
// const baseurl = BaseClient.URL;

// export class AuthClient extends BaseClient {
//   constructor() {
//     super();
//   }

//   async createToken(username: string, password: string) {
//     if (!username) {
//       username = "admin";
//     }
//     if (!password) {
//       password = "password";
//     }
//     const contextRequest = await request.newContext();
//     const response = contextRequest.post(baseurl + "auth/login", {
//       data: {
//         username: username,
//         password: password,
//       },
//     });
//     expect(response).toBe(2000);
//     const body = (await response).json();
//     const token = body.token;
//     return token;
//   }
// }
