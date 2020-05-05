
export interface ProductCellItem {
  "product.product_name": string,
  "cancel_sum": number,
  "product.product_link": string,
  "trans_sum": number,
  "conv_sum": number,
  "product.product_id": number,
  "sold_sum": number,
  "reject_sum": number,
  "product.cat_id": number,
  "view_sum": number
}

export default interface GetProductStatisticResponse {
  product_best_seller_info: {
    summary: {
      cancel_sum: number,
      trans_sum: number,
      conv_sum: number,
      sold_sum: number,
      reject_sum: number,
      view_sum: number
    },
    cells: ProductCellItem[],
  }
}