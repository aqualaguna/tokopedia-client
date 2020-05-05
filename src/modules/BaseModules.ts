import { AxiosInstance } from "axios";
import ClientNotSetError from "../error/ClientNotSetError";
import { AuthenticateResponse } from "..";

export default class BaseModule {
  constructor(protected client: AxiosInstance, protected fs_id: String, protected token: AuthenticateResponse) {
    if (!client) {
      throw new ClientNotSetError("axios instance not defined.");
    }
  }

}