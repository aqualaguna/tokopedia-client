import { Product } from "./CreateProductRequest";

export interface UpdateProductItem extends Product {
  /**
   * Product ID
   */
  id: Number,

}

export default interface UpdateProductRequest{
  /**
   * Shop unique identifier
   */
  shop_id: number,
  /**
   * Product object array to create.
   */
  products: UpdateProductItem[]
}