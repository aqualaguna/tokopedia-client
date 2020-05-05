
export interface UpdatePriceItemDetail {
  /**
   * Prioritized over product_id. SKU of products that will be updated. Maximum characters allowed is 50.
   */
  sku?: string,
  /**
   * Product ID to update.
   */
  product_id?: number,
  /**
   * New price to be set.
   */
  new_price: number,
}

export default interface UpdatePriceRequest {
  shop_id: number,
  update_details: UpdatePriceItemDetail[],
}