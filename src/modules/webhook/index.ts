import BaseModule from "../BaseModules";
import RegisterWebhookRequest from "./request/RegisterWebhookRequest";
import RegisterWebhookResponse from "./response/RegisterWebhookResponse";
import handleReject from "../../helper/handleReject";
import ListRegisteredResponse from "./response/ListRegisteredResponse";

export default class WebhookModule extends BaseModule {
  /**
   * For receiving notifications for new order, order cancellations and order status changes from Tokopedia, you will need to first register as a fulfillment service by following endpoint:
   * @param request 
   */
  registerWebhook(request: RegisterWebhookRequest): Promise<RegisterWebhookResponse> {
    let url = `/v1/fs/${this.fs_id}/register`;
    return this.client.post(url, {
      ...request,
      fs_id: Number(this.fs_id)
    }, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data;
    }).catch(handleReject);
  }

   /**
   * To check what are the urls that receiving the notifications, use the following endpoint:
   * @param request 
   */
  listWebhook(): Promise<ListRegisteredResponse> {
    let url = `/v1/fs/${this.fs_id}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }
}