import { AxiosError } from "axios";
import BaseError from "../error/response/BaseError";

export default function handleReject(err : AxiosError) {
  
  if (err.response) {
    let resp = err.response.data;
    console.log(resp)
    let header = resp.header;
    throw new BaseError(header.error_code, header.messages, header.reason);
  }
  return err;
}