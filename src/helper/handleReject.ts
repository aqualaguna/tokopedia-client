import { AxiosError } from "axios";
import BaseError from "../error/response/BaseError";
import UnknownError from "../error/response/UnknownError";
import UnauthorizedError from "../error/response/UnauthorizedError";

export default function handleReject(err : AxiosError) {
  
  if (err.response) {
    let resp = err.response.data;
    console.log(resp)
    let header = resp.header;
    if(err.response.status == 401) {
      throw new UnauthorizedError("Credentials not valid.");
    }
    else if (header && header.error_code) {
      throw new BaseError(header.error_code, header.messages, header.reason);
    } else {
      throw new UnknownError(resp);
    }
    
  }
  return err;
}