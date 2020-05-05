
export enum ProductQtyStatus {
  UNLIMITED = 'UNLIMITED',
  LIMITED = 'LIMITED',
  EMPTY = 'EMPTY'
}

export enum WeightUnit {
  GR = 'GR',
  KG = 'KG'
}

export enum ProductCondition {
  NEW = 'NEW',
  USED = 'USED'
}

export interface WholeSale {
  min_qty: number,
  price: number,
}

export interface PictureItem {
  file_path: string,
}
export interface VideoItem {
  source: string,
  url: string
}

export interface PVItem {
  /**
   * selects a product and marks it as the primary product
   */
  is_primary: boolean,
  status: ProductQtyStatus,
  /**
   * variant price
   */
  price: number,
  /**
   * variant stock
   */
  stock: number,
  /**
   * variant sku
   */
  sku: string,
  /**
   *  product variant image with maximum number of image is 5
   */
  pictures: PictureItem[],
  /**
   *  selects the index of field options in selection object
   */
  combination: number[],

}

export interface SelectionItemOption  {
  /**
   * hex_code and unit_value_id is also retrieved from get variant by category endpoint. unit_value_id fill with value_id‘s response from get variant by category
   */
  hex_code: string,
  /**
   * hex_code and unit_value_id is also retrieved from get variant by category endpoint. unit_value_id fill with value_id‘s response from get variant by category
   */
  unit_value_id: number,
  /**
   * To create a custom variant simply fill value with desired value.
   */
  value: string,
}

export interface SelectionItem {
  /**
   * variant_id which is retrieved from get variant by category endpoint.
   */
  id: number,
  /**
   * retrieved from get variant by category endpoint.
   */
  unit_id: number,
  options: SelectionItemOption[],

}

export interface VariantItem {
  /**
   * contains the information such as stock and price of each variant
   */
  products: PVItem[],
  /**
   * defines variant selection
   */
  selection: SelectionItem[],
  /**
   * sizecharts contains single file_path field which contains image url to be uploaded
   */
  sizecharts: PictureItem[],

}

export enum PriceCurrency {
  USD = 'USD',
  IDR = 'IDR'
}

export interface Product {
  /**
   * Name of the product with length less than or equals 70 characters.
   */
  name: string,
  /**
   * Unique identifier for the product’s category. To get available categories, please check Get All Categories. Please input the deepest category child ID.
   */
  category_id: number,
  /**
   * The possible value between 100 to 100.000.000. If the product variant is added, the price parameter is automatically set to the lowest price among the variant products.
   */
  price: number,
  /**
   * Status for the product with the following available values UNLIMITED, LIMITED, and EMPTY.
   */
  status: ProductQtyStatus,
  /**
   * Minimum order required to purchase the product. Can only be a positive integer
   */
  min_order: number,
  /**
   * Weight of the product.
   */
  weight: number,
  /**
   * The unit of the weight with the following available values GR (gram) and KG (kilogram)
   */
  weight_unit: WeightUnit,
  /**
   * The condition of the product with the following available values NEW and USED.
   */
  condition: ProductCondition,
  /**
   * Etalase of the product. The object contains id and name. To get available etalase, please check Get All Etalase. Required field to input just id with etalase_id responses from Get All Etalase
   */
  etalase: {
    id: number,
    name?: string,
  },
  /**
   * Description of the product. Maximum characters allowed is 2000.
   */
  description?: string,
  /**
   * Determine if the product must be insured (true) or not (false).
   */
  is_must_insurance?: boolean,
  /**
   * Determine if the product can be returned (true) by buyers or not (false).
   */
  is_free_return?: boolean,
  /**
   * The stock keeping unit for the product. Maximum characters allowed is 50.
   */
  sku: string,
  /**
   * The stock of the product. 0 indicates always available. Other than that, the possible values are from 1 to 1000. Stock should be 1 if want to add variant product.
   */
  stock: number,
  /**
   * Wholesale price and quantity of the product. The object keys includes: min_qty and price.
   */
  wholesale: WholeSale[],
  /**
   * Preorder information. The object keys includes: is_active, duration, and time_unit.
   * sample: {
      "is_active":true,
      "duration":5,
      "time_unit":"DAY"
    }

    */
  price_currency: PriceCurrency,
  preorder?: {
    is_active: boolean,
    duration?: number,
    time_unit?: string,
  },
  /**
   * Images information of the product. The object keys includes: file_path.
   */
  pictures: PictureItem[],
  /**
   * Video link of the product. The object keys includes: url and source. url should only contain the YouTube video id e.g. dQw4w9WgXcQ. Where the type type should be youtube.
   */
  videos: VideoItem[],
  /**
   * Variant of the product. The object keys includes: variantand product_variant.
   */
  variant?: VariantItem
  
}

export default interface CreateProductRequest {
  /**
   * Shop unique identifier
   */
  shop_id: number,
  /**
   * Product object array to create.
   */
  products: Product[]
}