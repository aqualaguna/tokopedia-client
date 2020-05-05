import ListMessageRequest from "./ListMessageRequest";

export default interface ListReplyRequest extends ListMessageRequest {
  /**
   * message id
   */
  msg_id: number,
}