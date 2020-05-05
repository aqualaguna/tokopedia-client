

export interface UpdateStockItemDetail {
   /**
   * Prioritized over product_id. SKU of products that will be updated. Maximum characters allowed is 50.
   */
  sku?: string,
  /**
   * Product ID to update.
   */
  product_id?: number,
  /**
   * New stock to be set.
   */
  new_stock: number,
}


export default interface UpdateStockRequest {
  shop_id: number,
  update_details: UpdateStockItemDetail[],
}