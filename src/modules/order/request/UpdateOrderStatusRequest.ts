import { OrderStatusCode } from "./GetOrderRequest";

export default interface UpdateOrderStatusRequest {
  order_id: number,
  order_status: OrderStatusCode,
  shipping_ref_num: string,
}