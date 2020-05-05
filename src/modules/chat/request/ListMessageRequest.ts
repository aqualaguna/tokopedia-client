import { PaginationRequest } from "../../product/request/getAllProductRequest";

export default interface ListMessageRequest extends PaginationRequest {
  /**
   * shop unique
   */
  shop_id: number,
  /**
   * Order messages by time received. Value between “asc” or “desc”.
   */
  order?: string,
  /**
   * Filter by message read status. Value between “all”, “read”, or “unread”.
   */
  filter?: string

}