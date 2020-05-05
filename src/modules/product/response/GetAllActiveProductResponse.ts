
export interface ShopProductItem {
  /**
   * Shop id.
   */
  id: Number,
  /**
   * Name of the shop.
   */
  name: string,
  /**
   * Identifier if the shop is gold merchant.
   */
  is_gold: boolean,
  /**
   * The shop’s url.
   */
  url: string,
  /**
   * Shop location.
   */
  location: string,
  /**
   * City where the shop is located.
   */
  city: string,
  /**
   * Image url of the shop reputation badge.
   */
  reputation: string,
  /**
   * Shop clover url.
   */
  clover:string,
  is_official: boolean,
  is_power_badge: boolean,
}

export interface WholeSaleItem {
  quantity_min: number,
  quantity_max: number,
  price: number
}

export interface LabelItem {
  title: string,
  color: string,
}

export interface BadgeItem {
  title: string,
  image_url: string,
  show: boolean
}

export interface GetAllActiveProductResponseItem {
  /**
   * A unique identifier for the product.
   */
  id: number,
  /**
   * The product’s name.
   */
  name: string,
  /**
   * The list of product’s childs (product_id)
   */
  childs: number[]|null,
  /**
   * The product’s url
   */
  url: string,
  /**
   * The product’s image url
   */
  image_url: string,
  /**
   * The product’s image url with minimum height of 700px.
   */
  image_url_700: string, 
  /**
   * The product’s displayed price.
   */
  price: string,
  /**
   * discounted price display text
   */
  discounted_price: string,
  /**
   * Shop where the product belongs to.
   */
  shop: ShopProductItem,
  /**
   * List of the product’s wholesale price
   */
  wholesale_price: WholeSaleItem[],
  /**
   * The product’s total couriers available.
   */
  courier_count: number,
  /**
   * The product’s condition.
   * 1 => new 
   * 0 => second hand
   */
  condition: number,
  /**
   * The product’s category id.
   */
  category_id: number,
  /**
   * The product’s category name.
   */
  category_name: string,
  /**
   * The product’s category breadcrumb, such as main-category/child-category/child-category.
   */
  category_breadcrumb: string,
  /**
   * The product’s department id.
   */
  department_id: string,
  /**
   * The product’s labels.
   */
  labels: LabelItem[],
  /**
   * List of product’s badges. The object consists of string title which is the badge title and string image_url which is the badge image url.
   */
  badges: BadgeItem[],
  /**
   * Identifier if product is featured.
   */
  is_featured: boolean,
  /**
   * The product’s rating.
   */
  rating: number,
  /**
   * The product’s total review.
   */
  count_review: number,
  /**
   * The product’s original price.
   */
  original_price: string,
  /**
   * The product’s discount expired date.
   */
  discount_expired: string,
  /**
   * The product’s discount percentage.
   */
  discount_percentage: number,
  /**
   * The product’s SKU number.
   */
  sku: string,
  /**
   * The product’s total stock.
   */
  stock: number,
}

export default interface GetAllActiveProductResponse {
  total_data: number,
  shop: {
    id: number,
    name: string,
    uri: string,
    location: string
  },
  products: GetAllActiveProductResponseItem[],
}