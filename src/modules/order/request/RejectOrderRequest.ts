
export enum OrderRejectReason {
  RejectShippingCase = 0,
  ProductOutOfStock = 1,
  ProductVariantUnavailable = 2,
  WrongPriceorWeight= 3,
  ShoplCosed= 4,
  Others= 5,
  CourierProblem = 7,
  BuyerRequest = 8,
}

export default interface RejectOrderRequest {
  /**
   * Order id.
   */
  order_id: number,
  /**
   * Reason code of the order rejection. Check Order Reject Reason for available reason code.
   */
  reason_code: OrderRejectReason,
  /**
   * Reason of the order rejection
   */
  reason?: string,
  /**
   * Mandatory if reason_code is 4 i.e. shop closed. The date string layout is DD/MM/YYYY e.g. 17/05/2017.
   */
  shop_close_end_date?: string,
  /**
   * Mandatory if reason_code is 4 i.e. shop closed.
   */
  shop_close_note?: string,
}