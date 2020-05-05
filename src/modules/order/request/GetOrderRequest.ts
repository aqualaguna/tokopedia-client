import { PaginationRequest } from "../../product/request/getAllProductRequest";

export enum OrderStatusCode {
  seller_accept = 400,
  seller_reject = 10,
  order_shipment = 500,
  seller_cancel_order = 0,
  order_rejected_replaced = 2,
  order_reject_due_empty_stock = 3,
  order_reject_approval = 4,
  order_cancelby_fraud = 5,
  order_rejectedby_seller = 10,
  order_pending_replacement = 11,
  pending_order = 100,
  wait_for_payment_confirmation = 103,
  payment_confirmation = 200,
  payment_verified_ready_to_process = 220,
  waiting_for_partner_approval = 221,
  seller_accept_order = 400,
  waiting_for_pickup = 450,
  status_changed_to_waiting_resi_have_no_input = 501,
  invalid_shipment_ref_no = 520,
  requested_by_user_to_correct_invalid_res = 530,
  delivered_to_pickup_point = 540,
  return_to_seller = 550,
  order_delivered = 600,
  buyer_open_case_to_finish_order = 601,
  fraud_review = 690,
  suspected_fraud = 691,
  post_fraud_review = 695,
  finish_fraud_review = 698,
  order_invalid = 699,
  order_finished = 700,
  order_assumed_finished = 701,
}

export default interface GetOrderRequest extends PaginationRequest {
  /**
   * UNIX timestamp of date (hour, min, sec) from which the order details are requested.
   */
  from_date: number,
  /**
   * UNIX timestamp of date (hour, min, sec) from which the order details are requested.
   */
  to_date: number,
  /**
   * Limit the order shown to the given shop_id. Please use either shop_id or warehouse_id.
   */
  shop_id?: number,
  /**
   * Limit the order shown to the given warehouse_id. Please use either shop_id or warehouse_id.
   */
  warehouse_id?: number,
  /**
   * Limit the order shown to the given status. Check Order Status Code to check available status code.
   */
  status?: OrderStatusCode,

  
}