import BaseModule from "../BaseModules";
import handleReject from "../../helper/handleReject";
import ListMessageRequest from "./request/ListMessageRequest";
import ListMessageResponse from "./response/ListMessageResponse";
import ListReplyRequest from "./request/ListReplyRequest";
import SendReplyRequest from "./request/SendReplyRequest";
import SendReplyResponse from "./response/SendReplyResponse";
import InitChatResponse from "./response/InitChatResponse";


export default class ChatModule extends BaseModule {
  /**
   * This endpoint retrieves a list of all messages (chatrooms) owned by a shop_id.
   * @param request
   */
  listMessage(request : ListMessageRequest) : Promise<ListMessageResponse[]> {
    let url = `/v1/chat/fs/${this.fs_id}/messages`;
    return this.client.get(url, {
      params: request,
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint retrieves a list of all replies (chat bubble) for a msg_id which is owned by a shop_id.
   * @param request
   */
  listReply(request : ListReplyRequest) : Promise<ListReplyRequest[]> {
    let url = `/v1/chat/fs/${this.fs_id}/replies`;
    return this.client.get(url, {
      params: request,
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint sends a reply to a message (chat room) identified by msg_id from shop_id.
   * @param request
   */
  sendReply(request : SendReplyRequest) : Promise<SendReplyResponse> {
    let url = `/v1/chat/fs/${this.fs_id}/messages/${request.msg_id}/reply`;
    return this.client.get(url, {
      params: request,
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }

  /**
   * This endpoint check if chat message exists, if it doesn’t, creates a new message
   * @param order_id order unique identifier
   */
  initChat(order_id : number) : Promise<InitChatResponse> {
    let url = `/v1/chat/fs/${this.fs_id}/initiate?order_id=${order_id}`;
    return this.client.get(url, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    }).then(d => {
      return d.data.data;
    }).catch(handleReject);
  }
}