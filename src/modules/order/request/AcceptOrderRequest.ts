
export interface AcceptOrderItem{
  product_id: number,
  quantity_deliver: number,
  quantity_reject: number,
}

export default interface AcceptOrderRequest {
  order_id: number,
  products?: AcceptOrderItem[],
  reason?: string,
}