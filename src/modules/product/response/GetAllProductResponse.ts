
export interface GetAllProductResponseItem {
  /**
   * A unique identifier for the product.
   */
  product_id: number,
  /**
   * A unique identifier for the product.
   */
  name: string,
  /**
   * The product’s SKU (only returned when using v2)
   */
  sku: string,
  /**
   * Shop id who own the product.
   */
  shop_id: number,
  /**
   * Shop name who own the product.
   */
  shop_name: string,
  /**
   * The product’s category id.
   */
  category_id: number,
  /**
   * The product’s description.
   */
  desc: string,
  /**
   * The product’s stock.
   */
  stock: number,
  /**
   * The product’s price.
   */
  price: number,
  /**
   * The product’s status.
   */
  status: string
}

export default interface GetAllProductResponse {
  data: GetAllProductResponseItem[],
  status: string,
  error_message: string[],
}